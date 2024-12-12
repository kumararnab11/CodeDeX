import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Default Data
const defaultData = {
	leetcode: {
		name: "Leetcode",
		username: "N/A",
		questions: 0,
		rating: 0,
		points: "0",
	},
	gfg: {
		name: "gfg",
		username: "N/A",
		questions: "0",
		score: "0",
		instituterank: "0",
	},
	codeforces: {
		avatar: "https://via.placeholder.com/80",
		name: "CodeForces",
		username: "N/A",
		rating: "0",
		maxrating: "0",
		badge: "N/A",
		maxBadge: "N/A",
	},
	codechef: {
		name: "CodeChef",
		username: "N/A",
		rating: "0",
		maxrating: "0",
		badge: "N/A",
		countryRank: "0",
	},
};

const savedData = (() => {
	try {
		const data = JSON.parse(localStorage.getItem("platform"));
		return data || defaultData;
	} catch {
		return defaultData;
	}
})();

// Async thunk to fetch data for all platforms
export const fetchPlatformData = createAsyncThunk(
	"platform/fetchPlatformData",
	async () => {
		const localStorageData = (() => {
			try {
				const data = JSON.parse(localStorage.getItem("platform"));
				return data || defaultData;
			} catch {
				return defaultData;
			}
		})();

		const updatedData = { ...localStorageData };
		console.log("local", JSON.parse(localStorage.getItem("platform")));
		console.log("savedData", localStorageData);
		console.log("updatedData", updatedData);

		const fetches = [];

		if (localStorageData.leetcode.username !== "N/A") {
			fetches.push(
				axios
					.get(
						`https://leetscan.vercel.app/${localStorageData.leetcode.username}`
					)
					.then((res) => ({
						key: "leetcode",
						data: res.data.contestRanking,
					}))
			);
		}

		if (localStorageData.leetcode.username !== "N/A") {
			fetches.push(
				axios
					.get(
						`https://leetcode-stats-api.herokuapp.com/${localStorageData.leetcode.username}`
					)
					.then((res) => ({ key: "leetcode2", data: res.data }))
			);
		}
		if (localStorageData.gfg.username !== "N/A") {
			fetches.push(
				axios
					.get(`/gfg/${localStorageData.gfg.username}`)
					.then((res) => ({ key: "gfg", data: res.data }))
			);
		}
		if (localStorageData.codeforces.username !== "N/A") {
			fetches.push(
				axios
					.get(
						`https://codeforces.com/api/user.info?handles=${localStorageData.codeforces.username}`
					)
					.then((res) => ({ key: "codeforces", data: res.data }))
			);
		}
		if (localStorageData.codechef.username !== "N/A") {
			fetches.push(
				axios
					.get(
						`https://codechef-api.vercel.app/handle/${localStorageData.codechef.username}`
					)
					.then((res) => ({
						key: "codechef",
						data: res.data,
					}))
			);
		}

		console.log("fetches: ", fetches);

		const responses = await Promise.allSettled(fetches);

		console.log("printing response", responses);

		responses.forEach((response) => {
			if (response.status === "fulfilled") {
				console.log(response.value);

				const { key, data } = response.value;

				if (key === "leetcode") {
					updatedData.leetcode = {
						...updatedData.leetcode,
						rating: data.rating || updatedData.leetcode.rating,
					};
				} else if (key === "leetcode2") {
					updatedData.leetcode = {
						...updatedData.leetcode,
						questions:
							data.totalSolved || updatedData.leetcode.questions,
						points:
							data.contributionPoints ||
							updatedData.leetcode.points,
					};
				} else if (key === "gfg") {
					const info = data?.info || {};
					updatedData.gfg = {
						...updatedData.gfg,
						questions:
							info.totalProblemsSolved ||
							updatedData.gfg.questions,
						score: info.codingScore || updatedData.gfg.score,
						instituterank:
							info.instituteRank || updatedData.gfg.instituterank,
					};
				} else if (key === "codeforces") {
					updatedData.codeforces = {
						...updatedData.codeforces,
						avatar:
							data.result[0].avatar ||
							updatedData.codeforces.avatar,
						rating:
							data.result[0].rating ||
							updatedData.codeforces.rating,
						maxrating:
							data.result[0].maxRating ||
							updatedData.codeforces.maxrating,
						badge:
							data.result[0].rank || updatedData.codeforces.badge,
						maxBadge:
							data.result[0].maxRank ||
							updatedData.codeforces.maxBadge,
					};
				} else if (key === "codechef") {
					updatedData.codechef = {
						...updatedData.codechef,
						rating:
							data.currentRating || updatedData.codechef.rating,
						maxrating:
							data.highestRating ||
							updatedData.codechef.maxrating,
						badge: data.stars || updatedData.codechef.badge,
						countryRank:
							data.countryRank ||
							updatedData.codechef.countryRank,
					};
				}
			} else {
				console.warn(
					`API fetch failed for ${
						response.reason?.config?.url || "unknown"
					}`
				);
			}
		});

		localStorage.setItem("platform", JSON.stringify(updatedData));
		return updatedData;
	}
);

// Slice for platform data
const platformSlice = createSlice({
	name: "platform",
	initialState: savedData,
	reducers: {
		updatePlatform: (state, action) => {
			const updatedData = { ...state, ...action.payload };
			localStorage.setItem("platform", JSON.stringify(updatedData));
			Object.assign(state, updatedData);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPlatformData.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchPlatformData.fulfilled, (state, action) => {
				state.loading = false;
				console.log("fetch successful");
				Object.assign(state, action.payload);
			})
			.addCase(fetchPlatformData.rejected, (state, action) => {
				state.loading = false;
				console.error("Fetch failed:", action.error.message);
			});
	},
});

// Export actions and reducer
export const { updatePlatform } = platformSlice.actions;
export default platformSlice.reducer;
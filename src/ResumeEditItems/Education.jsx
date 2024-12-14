import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateResume } from "@/redux/resumeDataSlice";

function Education() {
  const dispatch = useDispatch();

  // Fetch initial state from Redux
  const resumeData = useSelector((state) => state.resume);

  // Form state
  const [formData, setFormData] = useState({
    hs: { scl: resumeData.hs.scl||"", marks: resumeData.hs.marks||"", board: resumeData.hs.board||"",from:resumeData.hs.from||"",till:resumeData.hs.till||"",major:resumeData.hs.major||"" },
    sec: { scl: resumeData.sec.scl||"", marks: resumeData.sec.marks||"", board: resumeData.sec.board||"" ,from:resumeData.sec.from||"",till:resumeData.sec.till||"",major:resumeData.sec.major||""},
    clg: { scl: resumeData.clg.scl||"", marks: resumeData.clg.marks||"", board: resumeData.clg.board||"",from:resumeData.clg.from||"",till:resumeData.clg.till||"",major:resumeData.clg.major||"" },
  });

  // Handle input change
  const handleChange = (e, section) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateResume(formData));
    alert("Education data updated successfully!");
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-orange-600">Update Education</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 shadow rounded-lg">
        {/* High School */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">High School</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              required="true"
              type="text"
              name="scl"
              placeholder="School Name"
              value={formData.hs.scl}
              onChange={(e) => handleChange(e, "hs")}
              className="border p-2 rounded-md w-full"
            />
            <input
              required="true"
              type="text"
              name="major"
              placeholder="Major"
              value={formData.hs.major}
              onChange={(e) => handleChange(e, "hs")}
              className="border p-2 rounded-md w-full"
            />
            <input
              required="true"
              type="text"
              name="marks"
              placeholder="Marks"
              value={formData.hs.marks}
              onChange={(e) => handleChange(e, "hs")}
              className="border p-2 rounded-md w-full"
            />
            <input
              required="true"
              type="text"
              name="board"
              placeholder="Board"
              value={formData.hs.board}
              onChange={(e) => handleChange(e, "hs")}
              className="border p-2 rounded-md w-full"
            />
            <input
              required="true"
              type="text"
              name="from"
              placeholder="From Date"
              value={formData.hs.from}
              onChange={(e) => handleChange(e, "hs")}
              className="border p-2 rounded-md w-full"
            />
            <input
              required="true"
              type="text"
              name="till"
              placeholder="Till Date"
              value={formData.hs.till}
              onChange={(e) => handleChange(e, "hs")}
              className="border p-2 rounded-md w-full"
            />
          </div>
        </div>

        {/* Secondary School */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Secondary School</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              required="true"
              type="text"
              name="scl"
              placeholder="School Name"
              value={formData.sec.scl}
              onChange={(e) => handleChange(e, "sec")}
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              name="major"
              placeholder="Major"
              value={formData.sec.major}
              onChange={(e) => handleChange(e, "sec")}
              className="border p-2 rounded-md w-full"
            />
            <input
              required="true"
              type="text"
              name="marks"
              placeholder="Marks"
              value={formData.sec.marks}
              onChange={(e) => handleChange(e, "sec")}
              className="border p-2 rounded-md w-full"
            />
            <input
              required="true"
              type="text"
              name="board"
              placeholder="Board"
              value={formData.sec.board}
              onChange={(e) => handleChange(e, "sec")}
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              name="from"
              placeholder="From Date"
              value={formData.sec.from}
              onChange={(e) => handleChange(e, "sec")}
              className="border p-2 rounded-md w-full"
            />
            <input
              required="true"
              type="text"
              name="till"
              placeholder="Till Date"
              value={formData.sec.till}
              onChange={(e) => handleChange(e, "sec")}
              className="border p-2 rounded-md w-full"
            />
          </div>
        </div>

        {/* College */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">College</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              required="true"
              type="text"
              name="scl"
              placeholder="College Name"
              value={formData.clg.scl}
              onChange={(e) => handleChange(e, "clg")}
              className="border p-2 rounded-md w-full"
            />
            <input
              required="true"
              type="text"
              name="major"
              placeholder="Major"
              value={formData.clg.major}
              onChange={(e) => handleChange(e, "clg")}
              className="border p-2 rounded-md w-full"
            />
            <input
              required="true"
              type="text"
              name="marks"
              placeholder="Marks"
              value={formData.clg.marks}
              onChange={(e) => handleChange(e, "clg")}
              className="border p-2 rounded-md w-full"
            />
            <input
              required="true"
              type="text"
              name="board"
              placeholder="Board"
              value={formData.clg.board}
              onChange={(e) => handleChange(e, "clg")}
              className="border p-2 rounded-md w-full"
            />
            <input
              required="true"
              type="text"
              name="from"
              placeholder="From Date"
              value={formData.clg.from}
              onChange={(e) => handleChange(e, "clg")}
              className="border p-2 rounded-md w-full"
            />
            <input
              required="true"
              type="text"
              name="till"
              placeholder="Till Date"
              value={formData.clg.till}
              onChange={(e) => handleChange(e, "clg")}
              className="border p-2 rounded-md w-full"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Education;

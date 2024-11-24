import Sidebar, { SidebarItem } from "./Sidebar";
import { SiLeetcode,SiCodeforces,SiCodechef,SiGeeksforgeeks,SiGithub } from "react-icons/si";
import { SlNotebook } from "react-icons/sl";
import { GiOnTarget } from "react-icons/gi";

function SidebarContents() {
  return (
    <Sidebar>
      <SidebarItem
        icon={<SiLeetcode className="text-orange-500" />}
        text="Leetcode"
        link="https://leetcode.com/u/login/"
      />
      <SidebarItem
        icon={<SiCodeforces className="text-blue-600" />}
        text="Codeforces"
        link="https://codeforces.com"
      />
      <SidebarItem
        icon={<SiCodechef className="text-amber-900 size-5" />}
        text="Codechef"
        link="https://www.codechef.com"
      />
      <SidebarItem
        icon={<SiGeeksforgeeks className="text-green-600" />}
        text="Gfg"
        link="https://www.geeksforgeeks.org"
      />
      <SidebarItem
        icon={<SiGithub className="text-black" />}
        text="Github"
        link="https://github.com"
      />
      <SidebarItem
        icon={<SlNotebook className="text-blue-800 size-5" />}
        text="Notes"
        link="https://ink-keep.vercel.app/"
      />
      <SidebarItem
        icon={<GiOnTarget className="text-red-600 size-6" />}
        text="Todo List"
        link="https://todo.example.com"
      />
    </Sidebar>
  );
}

export default SidebarContents;


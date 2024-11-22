import { FaCode } from "react-icons/fa";
import Sidebar, { SidebarItem } from "./Sidebar";
import { SiLeetcode,SiCodeforces,SiCodechef,SiGeeksforgeeks,SiGithub } from "react-icons/si";

function SidebarContents() {
  return (
    <Sidebar>
      <SidebarItem icon={<SiLeetcode className="text-orange-500"/>} text="Leetcode" />
      <SidebarItem icon={<SiCodeforces className="text-blue-600" />} text="Codeforces" />
      <SidebarItem icon={<SiCodechef className="text-amber-900 size-5" />} text="Codechef" />
      <SidebarItem icon={<SiGeeksforgeeks className="text-green-600" />} text="Gfg" />
      <SidebarItem icon={<SiGithub className="text-black"/>} text="Github" />
    </Sidebar>
  );
}

export default SidebarContents;

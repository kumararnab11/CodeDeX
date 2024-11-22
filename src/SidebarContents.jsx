import { FaCode } from "react-icons/fa";
import Sidebar, { SidebarItem } from "./Sidebar";

function SidebarContents() {
  return (
    <Sidebar>
      <SidebarItem icon={<FaCode />} text="Leetcode" active={true} />
      <SidebarItem icon={<FaCode />} text="Gfg" />
      <SidebarItem icon={<FaCode />} text="Github" />
      <SidebarItem icon={<FaCode />} text="Codeforces" />
      <SidebarItem icon={<FaCode />} text="Codechef" />
    </Sidebar>
  );
}

export default SidebarContents;

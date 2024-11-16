import LeftMenu from "@/app/demo/LeftMenu";
import MainContent from "@/app/demo/MainContent";
import RightMenu from "@/app/demo/RightMenu";

export default function Layout() {
  return (
    <div className="left-menu-layout flex">
      {/* Left Menu */}
      <LeftMenu />

      {/* Main Content */}
      <MainContent />

      {/* Right Menu */}
      <RightMenu />
    </div>
  );
}
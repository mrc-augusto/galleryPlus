import { Outlet } from "react-router";
import { MainHeader } from "../components/main-header";

export function LayoutMain() {
  return (
    <div>
      <MainHeader className="mt-9" />
      <Outlet />
    </div>
  );
}

import { Outlet } from "react-router-dom";
import SidebarClass from "~/components/SidebarClass";

function DetailClass() {
  return (
    <div>
      <div>
        {/*<SidebarClass />*/}
        <SidebarClass />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default DetailClass;

import { Outlet } from "react-router-dom";
import SidebarClass from "~/components/SidebarClass";

function DetailClass() {
  return (
    <div>
      <div>
        {/*<SidebarClass />*/}
        <SidebarClass />
      </div>
      <div className={"tw-ml-[240px]"}>
        <Outlet />
      </div>
    </div>
  );
}

export default DetailClass;

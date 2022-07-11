import { Outlet } from "react-router-dom";

function DetailClass() {
  return (
    <div>
      <div></div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default DetailClass;

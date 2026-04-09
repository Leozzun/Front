import React from "react";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <h3>관리자 공통 영역입니다.</h3>
      <Outlet />
    </div>
  );
}

export default AdminLayout;

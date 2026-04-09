import React from "react";
import { useSearchParams } from "react-router-dom";

function Admin() {
  const [params, setParams] = useSearchParams();
  console.log(params);
  return (
    <div>
      <h1>Admin {params.get("name")}</h1>
    </div>
  );
}

export default Admin;

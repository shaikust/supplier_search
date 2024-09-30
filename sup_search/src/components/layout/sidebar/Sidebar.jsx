import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;
 
const Sidebar = () => {
  return (
    <div>
      <Sider class=" text-lg font-semibold sider w-[189px] h-full pl-[22px] text-[18px]">
        <br />
        <Link
          className="text-[#2C5778]  border-[grey] h-[45px] w-[150px]   text-center flex items-center justify-center rounded-md mb-3"
          to="/dashboard"
        >
          Dashboard
        </Link>
        
        <Link
          className="text-white h-[45px] w-[150px]  bg-[#2C5778] border-[#014D4E] text-center flex items-center justify-center rounded-md"
          to="/suppliersearch"
        >
          Supplier Search
        </Link>
      </Sider>
    </div>
  );
};
 
export default Sidebar

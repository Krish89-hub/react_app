import { Navigate, Outlet, useNavigate } from "react-router-dom";
import CmsHeader from "./Header";
import { useEffect } from "react";

function MainLayout(){
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("blogcms_token");
    useEffect(()=>{
        if(!localStorage.getItem("blogcms_token")) navigate("/account");
    },[]);
    return(
        <div className="container">
            <CmsHeader/>
            {isLoggedIn?<Outlet/>:<Navigate to={"/account"}/>}
        </div>
    )
}
export default MainLayout;
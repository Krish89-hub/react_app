import { Outlet } from "react-router-dom";
import CmsHeader from "./Header";

function MainLayout(){
    return(
        <div className="container">
            <CmsHeader/>
            <Outlet/>
        </div>
    )
}
export default MainLayout;
import { Link, useNavigate } from "react-router-dom";

function CmsHeader(){
    const navigate =  useNavigate();
    const handleOnLogoutClick =()=>{
        localStorage.clear();
        navigate("/account");
    }
    return(<>
    <header className="border-bottom lh-1 py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1"><Link to="/" className="text-body-emphasis text-decoration-none h4">Blog Cms</Link></div>
            <div className="col-4 pt-1 text-center"></div>
            <div className="col-4 pt-1 d-flex justify-content-end align-items-center ">
                <span className="me-3">{localStorage.getItem("blogcms_name")}</span>
                <button onClick={handleOnLogoutClick} className="btn btn-outline-secondary">Logout</button>
            </div>            
        </div>
    </header>
    </>);
}
export default CmsHeader;
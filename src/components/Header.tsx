import { Link, useNavigate } from "react-router-dom";

function CmsHeader() {
    const navigate = useNavigate();
    const handleOnLogoutClick = () => {
        localStorage.clear();
        navigate("/account");
    }
    return (<>
        <header className="border-bottom lh-1 py-3 px-3 navbar-expand-lg navbar-light bg-light">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1"><Link to="/" className="text-body-emphasis text-decoration-none h4">Blog Cms</Link></div>
                <div className="col-4 pt-1">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to={"/"}>All Posts</Link>
                        <Link className="nav-link ms-3" to={"/create"}>Create Post</Link>
                    </div>
                </div>
                <div className="col-4 pt-1 d-flex justify-content-end align-items-center ">
                    <span className="me-3">{localStorage.getItem("blogcms_name")}</span>
                    <button onClick={handleOnLogoutClick} className="btn btn-outline-secondary">Logout</button>
                </div>
            </div>
        </header>
    </>);
}
export default CmsHeader;
import { Link } from "react-router-dom";

function CmsHeader(){
    return(<>
    <header className="border-bottom lh-1 py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1"></div>
            <div className="col-4 pt-1 text-center"><Link to="/" className="text-body-emphasis text-decoration-none">Blog Cms</Link></div>
            <div className="col-4 pt-1"></div>            
        </div>
    </header>
    </>);
}
export default CmsHeader;
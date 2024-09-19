import { Link, useParams } from "react-router-dom";

function PostDetails() {
    const  {id} = useParams();
    return (
        <>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative mt-3">
                <div className="p-3">
                    <h4>
                        Blog one
                    </h4>
                    <p>
                        Blog description
                    </p>
                    <Link to="/">Back</Link>
                </div>
            </div>
        </>
    )
}
export default PostDetails;
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllPosts() {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        
    },[]);
    return (<>
        <div className="row mt-3">
            <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="p-3">
                        <h4>
                            Blog one
                        </h4>
                        <p>
                            Blog description
                        </p>
                        <a href="">Read more</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="p-3">
                        <h4>
                            Blog one
                        </h4>
                        <p>
                            Blog description
                        </p>
                        <Link to={"/post/1/details"}>Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default AllPosts;
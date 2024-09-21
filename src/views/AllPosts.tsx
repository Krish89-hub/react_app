import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostModel from "../models/post.model";
import ApiResponse from "../models/api-response.model";
import Utils from "../models/util.model";

function AllPosts() {
    const [posts, setPosts] = useState<PostModel[]>([]);
    const [token,setToken] = useState(localStorage.getItem("blogcms_token"));
    const [isLoading,setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        setIsLoading(true)
        axios.get<ApiResponse<PostModel[]>>(Utils.apiUrl+'posts',{headers:{"Authorization":"Bearer "+token}}).then(resp => {
            setIsLoading(false)
            if (resp.data && resp.data.success) {
                setPosts(resp.data.data);
            }
        }).catch(err => {
            setIsLoading(false)
            alert("Something went wrong.");
         })
    }, []);
    return (<>
        <div className="row mt-3">
            <div className="col-md-12">
                <h4>Blogs</h4>
            </div>
        {isLoading&&<div className="col-md-12"><div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative p-3"><h4>Loading...</h4></div></div>}
            {posts.map((post: PostModel) => {
                return <div className="col-md-6" key={post._id}>
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="p-3">
                            <h4>
                                {post.title}
                            </h4>
                            <p>
                                {post.content}
                            </p>
                            <Link to={"/post/"+post._id+"/details"}>View Details</Link>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </>)
}
export default AllPosts;
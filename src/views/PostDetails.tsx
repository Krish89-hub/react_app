import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostModel from "../models/post.model";
import ApiResponse from "../models/api-response.model";
import axios from "axios";

function PostDetails() {
    const  {id} = useParams();
    const [post,setPost] = useState<PostModel>();
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const [token,setToken] = useState(localStorage.getItem("blogcms_token"));
    useEffect(()=>{
        setIsLoading(true);
        axios.get<ApiResponse<PostModel>>('http://localhost:8000/api/posts/'+id,{headers:{"Authorization":"Bearer "+token}}).then(resp => {
            setIsLoading(false);
            if (resp.data && resp.data.success) {
                setPost(resp.data.data);
            }
        }).catch(err => {
            setIsLoading(false);
            alert("Something went wrong.");
         })
    },[])
    return (
        <>
             <div className="col-md-12 mt-3">
                <h4>Blog details</h4>
            </div>
        {isLoading == true? <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative mt-3">
            <div className="p-3">
                <h4>Loading...</h4>
                </div></div>:
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative mt-3">
                <div className="p-3">
                    <h4>
                        {post?.title}
                    </h4>
                    <p>
                        {post?.content}
                    </p>
                    <Link to="/">Back</Link>
                </div>
            </div>
}
        </>
    )
}
export default PostDetails;
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ApiResponse from "../models/api-response.model";
import axios from "axios";
import moment from "moment";
import PostDetailModel from "../models/post-detail.model";
import Utils from "../models/util.model";

function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState<PostDetailModel>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [token, setToken] = useState(localStorage.getItem("blogcms_token"));
    useEffect(() => {
        setIsLoading(true);
        axios.get<ApiResponse<PostDetailModel>>(Utils.apiUrl+'posts/' + id, { headers: { "Authorization": "Bearer " + token } }).then(resp => {
            setIsLoading(false);
            if (resp.data && resp.data.success) {
                setPost(resp.data.data);
            }
        }).catch(err => {
            setIsLoading(false);
            alert("Something went wrong.");
        })
    }, [])
    return (
        <>
            <div className="col-md-12 mt-3">
                <h4>Blog details</h4>
            </div>
            {isLoading == true ? <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative mt-3">
                <div className="p-3">
                    <h4>Loading...</h4>
                </div></div> :
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative mt-3">
                    <div className="p-3">
                        <div className="d-flex justify-content-between">
                            <b>
                                {post?.user?.name}
                            </b>
                            <span>
                                {moment(post?.created_at).fromNow()}
                            </span>
                        </div>
                        <hr />
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
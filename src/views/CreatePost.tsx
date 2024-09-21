import axios from "axios";
import { useState } from "react";
import ApiResponse from "../models/api-response.model";
import Utils from "../models/util.model";

function CreatePost() {
    const [isCreating,setIsCreating] = useState<boolean>(false);
    const [title,setTitle] = useState<string>("");
    const [content,setContent] = useState<string>("");
    const [token,setToken] = useState(localStorage.getItem("blogcms_token"));
    const handleOnSubmit = (e:any)=>{
        e.preventDefault();
        setIsCreating(true)
        axios.post<ApiResponse<any>>(Utils.apiUrl+'posts/create',{title,content},{headers:{"Authorization":"Bearer "+token}}).then(resp => {
            setIsCreating(false)
            if (resp.data && resp.data.success) {
                alert(resp.data.message);
            }
        }).catch(err => {
            setIsCreating(false)
            alert("Something went wrong.");
         })
    }
    return (<>
        <div className="col-md-12 mt-3">
            <h4>Create Blog</h4>
        </div>
        <div className="card">
            <div className="card-body">
                <form onSubmit={handleOnSubmit}>
                    <div className="form-group mb-3">
                        <label>Title</label>
                        <input type="text" className="form-control" 
                        onChange={e=>setTitle(e.target.value)}
                        value={title}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Content</label>
                        <textarea className="form-control"
                        onChange={e=>setContent(e.target.value)}
                        value={content}
                        ></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <button className="btn btn-primary">{isCreating?'Creating...':'Create'}</button>
                    </div>
                </form>
            </div>
        </div>
    </>)
}
export default CreatePost;
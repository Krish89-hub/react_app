import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiResponse from "../models/api-response.model";
import axios from "axios";
import LoginResponseModel from "../models/login-reponse.mode";
import Utils from "../models/util.model";

function Register() {

    const [name,setName] = useState("");
    const [role,setRole] = useState("admin");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const handleOnFormSubmit = (e:any)=>{
        e.preventDefault();
        setIsLoading(true);
        axios.post<ApiResponse<LoginResponseModel>>(Utils.apiUrl+'register',{name,email,password,role},{headers:{"Accept":"application/json"}}).then(resp=>{
            setIsLoading(false);
            if(resp.data&& resp.data.success == true){
                localStorage.setItem("blogcms_token",resp.data.data.token)
                localStorage.setItem("blogcms_name",resp.data.data.name)
                navigate("/");
            }
        }).catch(err=>{
            setIsLoading(false);
        })
    }
    return (<>
        <div className="d-flex align-items-center py-4 bg-body-tertiary" style={{height:"100vh"}}>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleOnFormSubmit}>
                    <div className="form-floating mb-2">
                        <input type="text" name="fullName" 
                        onChange={e=>setName(e.target.value)}
                        value={name}
                        id="fullName" className="form-control" placeholder="" />
                        <label htmlFor="fullName">Full name</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" placeholder="" 
                        onChange={e=>setEmail(e.target.value)}
                        value={email}
                        />
                        <label>Email</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="password" className="form-control mb-0" placeholder="" 
                        onChange={e=>setPassword(e.target.value)}
                        value={password}
                        />
                        <label>Password</label>
                    </div>
                    <div className="form-floating mb-2">
                        <select className="form-control"
                        onChange={e=>setRole(e.target.value)}
                        value={role}
                        >
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                        <label>User Type</label>
                    </div>                    
                    <button className="btn btn-primary w-100 py-2">Create</button>
                    <Link to={"/account"}>Login</Link>
                </form>
            </main>
        </div>
    </>)
}
export default Register;
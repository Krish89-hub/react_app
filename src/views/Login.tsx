import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginResponseModel from "../models/login-reponse.mode";
import ApiResponse from "../models/api-response.model";

function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const handleOnFormSubmit = (e:any)=>{
        e.preventDefault();
        setIsLoading(true);
        axios.post<ApiResponse<LoginResponseModel>>('http://localhost:8000/api/login',{email,password},{headers:{"Accept":"application/json"}}).then(resp=>{
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
    return(<>
    <div className="d-flex align-items-center py-4 bg-body-tertiary" style={{height:"100vh"}}>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleOnFormSubmit}>
                    <div className="form-floating">
                        <input type="email" className="form-control" placeholder=""
                        onChange={e=>setEmail(e.target.value)}
                        value={email}
                        required
                        />
                        <label>Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" placeholder="" 
                        onChange={e=>setPassword(e.target.value)}
                        value={password}
                        required
                        />
                        <label>Password</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" disabled={isLoading}>{isLoading?'Loging in...':'Login'}</button>
                    <Link to={"/account/register"}>Register</Link>
                </form>
            </main>
        </div>
    </>)
}
export default Login;
import { Link } from "react-router-dom";

function Login(){
    return(<>
    <div className="d-flex align-items-center py-4 bg-body-tertiary" style={{height:"100vh"}}>
            <main className="form-signin w-100 m-auto">
                <form>
                    <div className="form-floating">
                        <input type="email" className="form-control" placeholder="" />
                        <label>Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" placeholder="" />
                        <label>Password</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2">Login</button>
                    <Link to={"/account/register"}>Register</Link>
                </form>
            </main>
        </div>
    </>)
}
export default Login;
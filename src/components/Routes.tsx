import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import MainLayout from "./Layout";
import AllPosts from "../views/AllPosts";
import CreatePost from "../views/CreatePost";
import Login from "../views/Login";
import Register from "../views/Register";
import PostDetails from "../views/PostDetails";

function CmsRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="" element={<AllPosts />} />
                    <Route path="create" element={<CreatePost />} />
                    <Route path="post/:id/details" element={<PostDetails />} />
                    <Route path='*' element={<>
                        Not found
                        </>} />
                </Route>
                <Route path="/account" element={<AuthLayout />}>
                    <Route path="" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default CmsRoutes;
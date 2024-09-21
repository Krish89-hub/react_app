import UserModel from "./user.model";

export default class PostDetailModel{
    _id!:string;
    title!:string;
    content!:string;
    created_at!:Date;
    user!:UserModel
}
import User from "../models/User.js"

export const userByid = (req,res,next,id) =>{
    User.findById(id).exec((err, user) => {
        if (err || !user ) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        req.profile = user;
        next();
    });
}
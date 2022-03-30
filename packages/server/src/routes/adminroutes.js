import { userByid } from "../middlewares/admin.js"
import { Router as expressRouter } from 'express';


import { isAdmin } from "../controllers/adminController.js";
import { auth } from "../middlewares/auth.js";

const Router = expressRouter();

Router.get("/admin/:userId", isAdmin , (req, res ) => {
    res.json({
        user:req.profile
    })

})

Router.param("userId", userByid)

export default Router
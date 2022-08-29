import { User } from "../../models";
import user from "../../models/user";
import CustomErrorHandler from "../../services/CustomErrorHandler";









const userController = {
    async me(req, res, next) {
        try {
            // console.log("DSd")
            console.log(req.user._id )
            const user = await User.findOne({ _id:req.user._id }).select('-password -updatedAt -__v');
            // - minus  to hide the password and updared at fields 


        // if user if not their
            if (!user) {
                return next(CustomErrorHandler.notFound());
            }
            res.json(user);
        } catch(err) {
           return next(err);
        }
    }
};

export default userController;
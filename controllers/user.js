const User = require('../models/user');

exports.createUser = (req,res) => {
    const user = new User(req.body);
    user.save((error,user) => {
        if(error || !user)
        {
            return res.status(400).json({
                error: "Error creating a user"
            });
        }
        return res.json(user);
    });
}

exports.getUserbyId = (req,res,next,id) => {
    User.findById(id).exec((error,user) => {
        if(error || !user)
        {
            return res.status(400).json({
                error: "User not found"
            });
        }
        req.profile=user;
        next();
    })
}

exports.getUser = (req,res) => {
    if(req.profile)
    {
        return res.json(req.profile);
    }
    return res.status(400).json({
        error: "Not able to get user"
    });
}
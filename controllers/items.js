const Item = require('../models/items');

exports.createItem = (req,res) => {
    const item = new Item(req.body);
    item.save((error,item) => {
        if(error || !item)
        {
            return res.status(400).json({
                error: "Not able to create Item"
            });
        }
        return res.json(item);
    });
}

exports.getItembyUserId = (req,res) => {
    const role=req.profile.role;
    var result=[];
    Item.find({},(error,items) => {
        if(error || !items)
        return res.status(400).json({
            error: "Items not found"
        });
        items.map((item) => {
            if(item.roles.includes(role))
                result.push(item);
        })
        return res.json(result)
    });
}
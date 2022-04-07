
import Category from "../models/Category.js";
import SubCategory from "../models/SubCategory.js";
import SubGroup from "../models/SubGroup.js";
import Group from "../models/Group.js"
import Product from "../models/Product.js"
import brand from "../models/Brand.js";
import Brand from "../models/Brand.js";


//post request in routes for creating a new category Same for all the create Models

export const createCategory = (req, res) => {
    const category = new Category(req.body);
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json({ data });
    });
};

export const getCategory = (req,res) => {
    Category.find((err , data) => {
        if(err || !data ){
            return res.status(500).json({error: (err)})
        }
        res.json({
            "data": data
        })
    })
}

export const createSubcategory = (req, res) => {
    const subcategory = new SubCategory(req.body);
    subcategory.save((err , data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ "data":data });
    })
}

export const getSubcategory = (req, res) => {
    SubCategory.find((err , data) => {
        if(err || !data){
            return res.status(500).json({error:errorHandler(err)} )
        }
        res.send({
            "data": data
        })
    })
}

export const createGroup = (req, res) => {
    const group = new Group(req.body);
    group.save((err , data) => {
        if(err){
            return res.status(400).json({
                "error": err
            });
        }
        res.json({ data });
    })
}

export const getGroup = (req, res) => {
    Group.find((err , data) => {
        if(err || !data){
            return res.status(500).json({error:errorHandler(err)} )
        }
        res.send({"data": data})
    })
}


export const createSubGroup = (req, res) => {
    const subgroup = new SubGroup(req.body);
    subgroup.save((err , data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    })
}

export const getSubGroup = (req, res) => {
    SubGroup.find((err , data) => {
        if(err || !data){
            return res.status(500).json({error:errorHandler(err)} )
        }
    })
}

export const createproduct = (req, res) => {
    const product = new Product(req.body);

    product.save((err , data) => {
        if(err){
            return res.status(400).json({error:errorHandler(err)})
        }

        res.json({data})
    })
}

export const getProduct = (req, res) => {
    Product.find((err , data) => {
        if(err || !data){
            return res.status(500).json({error:errorHandler(err)} )
        }
    })
}

export const createBrand = (req,res) => {
    const brand = new Brand(req.body)

    brand.save((err , data) => {
        if(err || !data ){
            res.status(500).json({
                error: "brand not created"
            })
        }
        res.json({data})
    })
}

export const getBrand = (req, res) => {
    Brand.find((err , data) => {
        if(err || !data){
            return res.status(500).json({error:errorHandler(err)} )
        }
    })
}


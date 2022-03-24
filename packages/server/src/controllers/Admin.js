
import Category from "../models/Category.js";
import SubCategory from "../models/SubCategory.js";
import SubGroup from "../models/SubGroup.js";
import Group from "../models/Group"
import Product from "../models/Product"

export const createCategory = (req, res) => {
    const category = new Category(req.body);
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};

export const createSubcategory = (req, res) => {
    const subcategory = new SubCategory(req.body);
    subcategory.save((err , data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    })
}

export const createGroup = (req, res) => {
    const group = new Group(req.body);
    group.save((err , data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
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


export const createproduct = (req, res) => {
    const product = new Product(req.body);

    product.save((err , data) => {
        if(err){
            return res.status(400).json({error:errorHandler(err)})
        }

        res.json({data})
    })
}


import { Router as expressRouter } from 'express';
import { createCategory, createGroup, createproduct, createSubcategory, createSubGroup, getCategory, getGroup, getProduct, getSubcategory, getSubGroup } from '../controllers/Admin.js';

const Router = expressRouter();

/* all category operations */

Router.get("/getCategories" , getCategory)
Router.post("/createCategories" , createCategory)

/* all Subcategory operations */

Router.get("/getSubCategories" , getSubcategory)
Router.post("/createSubCategories" , createSubcategory)

/* all Group operations */

Router.get("/getGroup" , getGroup)
Router.post("/createGroup" , createGroup)

/* all SubGroup operations */

Router.get("/getSubGroup" , getSubGroup)
Router.post("/createSubGroup" , createSubGroup)

/* all Product operations */

Router.get("/getProduct" , getProduct)
Router.post("/createProduct" , createproduct)

export default Router
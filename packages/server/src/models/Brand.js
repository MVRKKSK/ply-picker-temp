import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema

const BrandSchema = new mongoose.Schema({
    Brand_name: {
        type: String,
        max: 50,
        required: true
    },
    Brand_Image: {
        type: String,
        required: true
    },
    Group: {
        type: ObjectId,
        ref: "Group"
    },
    Sub_Category: {
        type: ObjectId,
        ref: "SubCategory"
    },
    Category: {
        type: ObjectId,
        ref: "Category"
    },
    Sub_Group: {
        type: ObjectId,
        ref: "SubGroup"
    }
}, { timestamps: true })

const Brand = mongoose.model("Brand" , BrandSchema)

export default Brand
import {model, Schema, models} from "mongoose";

const ProductSchema = new Schema({
    title: {type:String, required:true},
    description: {type:String},
    price: {type: Number, required: true},
    // category: {type:mongoose.Types.ObjectId, ref:'Category'},
    images: [{type: String}],
    category: {type: String, required: true},
    
});

export const Product = models.Product || model('Product', ProductSchema);
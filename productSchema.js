// connecton for mongodb

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/database', {
    useNewUrlParser: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// # product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    SKU:{
        type:String,
        unique:true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCategory',
        required: true
    },
    inventory_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'productInventory',
        required:true
    },
    price: {
        type: Number,
        required: true
    },
    discount_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'discountSchema',
        required:true,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date,
        default: Date.now
    }
});

// # product category schema
const productCategory = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date,
        default: Date.now
    }
});

// # product_inventory 

const product_inventory = new mongoose.Schema({
    quatity:{
        type:Number,
        required:true,
        default:0
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date,
        default: Date.now
    }
});

// # discount Schema

const discount_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    discount_percent:{
        type:Number,
        default:0
    },
    active:{
        type:Boolean,
        default:false,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date,
        default: Date.now
    }
});



const Product = mongoose.model('Product', productSchema);
const ProductCategory = mongoose.model('ProductCategory', productCategory);
const productInventory = mongoose.model('productInventory',product_inventory);
const discountSchema = mongoose.model('discountSchema',discount_schema);

module.exports = {Product,ProductCategory,productInventory,discountSchema};
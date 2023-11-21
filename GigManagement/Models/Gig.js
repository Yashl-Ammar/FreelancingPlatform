const mongoose=require("mongoose")

const gigSchema= new mongoose.Schema({
    freelancer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Freelancer", // Reference to the freelancer providing the service
        required: true,
    },
    title:{
        type:String,
        required:true,
        minlength:8,
        maxlength:1024
    },
    skills:{
        type:[String],
        required:true,
    },
    description:{
        type:String,
        minlength:10,
        maxlength:500
    },
    basic:{
        price:{
            type:Number,
            required:true
        },
        time:{
            type:String,
            required:true
        },
        detail:{
            type:String,
            minlength:5,
            maxlength:300
        },
        offerDetails:{
            type:[String],
        },
        revisions:{
            type:Number,
            required:true
        }
    },
    standard:{
        price:{
            type:mongoose.Decimal128,
            required:true
        },
        time:{
            type:String,
            required:true
        },
        detail:{
            type:String,
            minlength:5,
            maxlength:300
        },
        offerDetails:{
            type:[String],
        },
        revisions:{
            type:Number,
            required:true
        }
    },
    premium:{
        price:{
            type:mongoose.Decimal128,
            required:true
        },
        time:{
            type:String,
            required:true
        },
        detail:{
            type:String,
            minlength:5,
            maxlength:300
        },
        offerDetails:{
            type:[String],
        },
        revisions:{
            type:Number,
            required:true
        }
    },
    file:{
        type:[String],
        required:true
    },
    
},
{ timestamps: true }
)

const Gig= mongoose.model("Gig",gigSchema)

module.exports=Gig
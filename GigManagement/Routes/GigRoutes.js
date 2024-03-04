const express=require("express")
const gigRouter=express.Router()
const auth=require("../Middleware/authentication")
const isClient=require('../Middleware/isClient')
const isfreelancer=require("../Middleware/isFreelancer")
const arrayupload = require("../Middleware/multer");
const { createGig,getAllGigs,updateGigById,deleteGigById,viewGigsByFreelancer,viewSpecificGigByClient,viewSpecificGigByFreelancer,searchGig,freelancerName,clientName}=require("../Controller/GigController")
gigRouter.post('/create',auth,isfreelancer,arrayupload,createGig)
gigRouter.post('/update/:id',auth,isfreelancer,arrayupload,updateGigById)
gigRouter.delete('/delete/:id',auth,isfreelancer,deleteGigById)
gigRouter.get('/viewGigsByFreelancer',auth,isfreelancer,viewGigsByFreelancer)
gigRouter.get('/viewSpecificGigByFreelancer/:gigId',auth,isfreelancer,viewSpecificGigByClient)
gigRouter.get('/all',getAllGigs)
gigRouter.get('/viewSpecificGigByClient/:gigId',auth,isClient,viewSpecificGigByClient)
gigRouter.get('/viewSpecificGigByFreelancer/:gigId',auth,isfreelancer,viewSpecificGigByFreelancer)
gigRouter.post('/search',auth,searchGig)
gigRouter.post("/freelancerName",auth,freelancerName)
gigRouter.post("/clientName",auth,clientName)
module.exports=gigRouter
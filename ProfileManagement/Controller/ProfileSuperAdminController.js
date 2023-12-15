const SuperAdmin=require('../Models/SuperAdmin')

const SuperAdminEditProfile=async(req,res)=>{
    const id=req.user._id
    const{country,fname,lname}=req.body
    let superAdmin= await SuperAdmin.findById(id)
    if(!superAdmin) return res.status(404).send("Freelancer Not found")
    superAdmin.fname=fname
    superAdmin.lname=lname
    superAdmin.country=country


    superAdmin.save()
    res.send(superAdmin)
}

module.exports=SuperAdminEditProfile
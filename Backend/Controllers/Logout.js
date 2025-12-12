//ROUTE FOR LOGOUT

const LogOut= (req,res)=>{
   try {
     req.cookies("token","");
     req.cookies("organiserToken","");
     res.status(200).json({msg:"Logout Successfull"});
   } catch (error) {
    console.log(error);
   }
}

module.exports=LogOut;


exports.createCampaign = function(req,res, next){
   // console.log('i am request',req.body);
    let body = req.body;
  
    let errorData={error:"Your information is wrong"}
    
    if (body) {
        res.send(body);
        console.log('i am response',body);
    }else{
        res.send(errorData);
        console.log(errorData);
    }
    
};
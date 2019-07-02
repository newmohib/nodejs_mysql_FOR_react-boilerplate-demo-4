var database = require('../helpers/database');



exports.signup = function (req, res, next) {
    console.log('request to signup',req.body);
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phone = req.body.phone;
    let gender = req.body.gender;
    let birthDate = req.body.birthDate;
    let username = req.body.username;
    let password = req.body.password;
    
    let objData = { ...req.body };
    let errorData = { error: "Your Input Data  is wrong" }


     

    database.databaseConnect.connect(function (err) {
        if (err) console.log(err);
        console.log("Connected!");
    });

    const insertIntoUser=(insertId)=>{
        console.log('insertIntoUser',insertId);
        var sql = "INSERT INTO user ( username, password , userDetailsId) VALUES ?";
        var values = [
            [ username, password ,insertId ]
        ];
        database.databaseConnect.query(sql,[values], function (err, result) {
            if (err){ 
                res.send({ ...errorData, ...err});
            }else{
                let userIinsertId=result.insertId;
               return userIinsertId ;
            }
        });
    
    }


    var sql = "INSERT INTO userDetails ( firstName , lastName, email , phone , gender  , username , password) VALUES ?";
    var values = [
        [ firstName , lastName , email , phone, gender  , username , password ]
    ];
    database.databaseConnect.query(sql,[values], function (err, result) {
        if (err){ 
            console.log(err);
            res.send({ ...errorData, ...err});
        }else{
            let insertId=result.insertId;
            if (insertId) {
              let userId = insertIntoUser(insertId);
              res.send({...result ,userId:userId ,userDetailsId:insertId});
            }
        }
    });

};
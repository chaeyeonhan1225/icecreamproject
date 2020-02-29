const db = require('../mysqlset');
const storelist = require('../storelist');

exports.isSaved = (req,res,next)=>{
    const isExist = new Promise((resolve,reject)=>{
        db.query(`SELECT EXISTS (SELECT * FROM store) as success`,(error,result)=>{
        if(error){
            reject(error);
        }
        else{
            const { success } = result[0];
            resolve(success);    
        } 
    })
    ;});
    isExist.then((result)=>{
        if(result===0){ 
            // 저장 안되있으면
            storelist.then((result)=>{
                result.map((value) => {
                db.query(`INSERT INTO store (name) VALUES (?)`,[value],()=>{
                    console.log(value);
                });
                next();
                });
            }).catch((error)=>{
                console.error(error);
            });
        }
        else{
            // 저장 되어있으면
            next();
        }
    }).catch((error)=>{
        console.error(error);
    });
};
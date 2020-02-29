// storlist를 불러옴
const request = require('request-promise');

const url = 'https://www.mcdonalds.co.kr/kor/store/event.do';;

console.log('스트로베리콘 판매 매장');
module.exports = new Promise((resolve,reject)=>{
    request({url:url}).then((body)=>{
        let start = body.indexOf('<ul class="storeList">');
        body = body.substring(start);
        start = body.indexOf('<li');
        const end = body.indexOf('</ul>');
        body = body.substring(start,end);
        //console.log(body);
        const list = body.split('</li>').reduce((acc,crnt)=>{
         const crntstart = crnt.indexOf('>')+1;
         crnt = crnt.substring(crntstart);
         acc.push(crnt);
         return acc;
        },[]);
        resolve(list);
        //console.log(storeList);
     }).catch((err)=>{
         console.error(err);
     });
    
});


/*
request({url:url}).then((body)=>{
   let start = body.indexOf('<ul class="storeList">');
   body = body.substring(start);
   start = body.indexOf('<li');
   const end = body.indexOf('</ul>');
   body = body.substring(start,end);
   //console.log(body);
   storeList = body.split('</li>').reduce((acc,crnt)=>{
    const crntstart = crnt.indexOf('>')+1;
    crnt = crnt.substring(crntstart);
    acc.push(crnt);
    return acc;
   },[]);
   //console.log(storeList);
}).catch((err)=>{
    console.error(err);
});


module.exports = storeList;
*/
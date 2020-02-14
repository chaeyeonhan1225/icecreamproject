document.querySelector('#search').addEventListener('click',()=>{
    const key = document.querySelector('#store').value;
});

function search(store){
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status === 200 || xhr.status === 201){
            console.log(xhr.responseText);
        }
        else{
            console.error(xhr.responseText);
        }
    };
    xhr.open('POST','/search');
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(JSON.stringify({store:store}));
}

document.querySelector('#search').addEventListener('click',()=>{
    const key = document.querySelector('#store').value;
    search(key);
});

function search(store){
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status === 201){
            const result = JSON.parse(xhr.responseText);
            let list = document.querySelector('#storelist');
            const name = document.querySelectorAll('.storename');
            if(name){
                for(let i=0;i<name.length;++i){
                    list.removeChild(name[i]);
                }
            }
            result.map((value)=>{
                let list = document.querySelector('#storelist');
                let storename = document.createElement('div');
                storename.setAttribute('class','storename');
                storename.textContent = value.name;
                list.appendChild(storename);
            }); 
        }
        else{
            console.error(xhr.responseText);
        }
    };
    xhr.open('POST','/search');
    
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(JSON.stringify({store:store}));
}


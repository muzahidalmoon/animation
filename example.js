let id;
function start(){
    let i = 0;

    id = setInterval(fram,10)

    function fram(){
        if(i === 1600){
            //    clearInterval(id); 
            i = 0;
        }else{
            i++;
            document.getElementById('rocket').style.left = `${i}px`

        }
    }
    
}

function stop() {
    clearInterval(id);
}

function stop(){
   let count=1;
    function start(){
    const res = setInterval(()=>{
    const id = 1;
    if(count > 10){
        return id;
    }
   setTimeout(() => {
    console.log(`Hello`);
   },1000);
   count++;

},1000)
    }

 return start;

}


// To clear Intervak call 
const test = stop();
clearInterval(test())

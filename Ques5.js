function counter(){
    let count =10;
    function start(){
        return {
            onTick : ()=>{
                setInterval(()=>{
                    return count--;
                },1000)
            },
           onClick : ()=>{
            
           }
        }
    }
    return start;
}

const count = counter();
 count().onTick
console.log( )
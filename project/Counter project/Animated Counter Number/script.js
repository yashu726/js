const myNumber = document.querySelectorAll('.count');
let speed = 200;
// console.log(myNumber.innerHTML);

myNumber.forEach( (mycount) =>{

    let target_count = mycount.dataset.count;
    let init = +mycount.innerText;
     let incriment_num = Math.floor(target_count/speed);

    const updateFunction = () => {
        init += incriment_num ;
        mycount.innerText=init;
        if(init < target_count)
        {
        setTimeout( () => {updateFunction(),50})
        }
    }
    updateFunction();
})
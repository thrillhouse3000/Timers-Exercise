function countDown(num){
    let timerId = setInterval(() => {
        if(num > 0){
            console.log(num);
            num--;
        }else{
            console.log('DONE!')
            clearInterval(timerId)
        }}, 1000)
}

function randomGame() {
    let counter = 0;
    let timerId = setInterval(() => {
        let rNum = Math.round(Math.random()*100)/100
        if(rNum <= 0.75) {
            counter++;
            console.log(`try#: ${counter}, number: ${rNum}`)
        }else{
            counter++;
            clearInterval(timerId);
            console.log(`number: ${rNum}! It took ${counter} tries!`)
        }
    }, 1000)
}
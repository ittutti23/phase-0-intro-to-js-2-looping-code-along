function writeCards(names, eventName) {
  const greetings= []
    for (let i = 0; i < names.length; i++) {
 greetings.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
     } return greetings;
    }
    
    function countDown(i) {
    while (i > 0) {
        console.log(i)
        i-=1
  }
console.log(i)
    }
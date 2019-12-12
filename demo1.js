// setTimeout(function(){
//     console.log('3 sec hass passed')
//   }, 3000); 
// var time=0
// var timer=setInterval(() => {
//     time+= 2;
//     console.log(time + 'seconds has passed');
//     if(time>6){
//         clearInterval(timer);
//     }
// }, 2000);

var stuff= require('./stuff');
console.log(stuff.counter(["shivam","dubey","5.6"]));
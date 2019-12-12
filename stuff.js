var  counter=function(arr){
    return 'there are'+arr.length+'element in this array';

};
 
var adder=function(a,b)
{
    return $(a+b);
}

var pi=2.31;

module.exports={
  counter: counter,
  adder:adder,
  pi:pi
};
// thisar e different module pattern to export the things
var dog=require('./doc');
var cat=require('./cat');
var mig= new dog('tom');
mig.say();
var  tom=new cat();
mig.eat(tom);
console.log(mig);
console.log(tom);
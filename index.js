var dog=require('./doc');
var cat=require('./cat');
var mig= new dog('tom');
var mouse=require('./mouse');
mig.say();
var  tom=new cat();
//mig.eat(tom);
//console.log(mig);
//console.log(tom);
var Mouse=new mouse('jerry');
try{
tom.eat(mig);
}
catch(error){
	console.log('error while cat eating mig');

}
console.log(tom);

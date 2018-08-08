
var mouse=require('./mouse');
function cat(){

this.stouch=[];
}
cat.prototype.eat=function(animal)
{
	if(animal instanceof mouse){


	this.stouch.push(animal)
}
else
{
	throw new Error ('cat can only eat mouse');
}
}
module.exports=cat;
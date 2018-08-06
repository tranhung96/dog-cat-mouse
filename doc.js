
var chalk=require('chalk');
function dog(name){
	this.name=name;
this.stomach=[];
}
dog.prototype.eat=function(cat){
this.stomach.push(cat);
};
dog.prototype.say=function(){
console.log('anh nho em'+ chalk.blue(this.name));
};
module.exports=dog;
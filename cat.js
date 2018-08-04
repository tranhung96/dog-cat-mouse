function cat(){

this.stouch=[];
}
cat.prototype=function(mouse)
{
	this.stouch.push(mouse)
}
module.exports=cat;
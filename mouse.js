function mouse(name){
	this.name=name;
	this.die=false;
}
mouse.prototype.die=function(){
	this.dead=true;
}
module.exports=mouse;
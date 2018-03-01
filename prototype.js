function createChild(parent){
	var Fun = function(){};
	Fun.prototype = parent;
	return new Fun();
}
//var obj1 = {a:1,b:2};
//obj2=createChild(obj1);
//obj2.a;
//obj2.b;
//obj2.c;
//obj3.__proto__
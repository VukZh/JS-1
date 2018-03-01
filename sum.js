function sum() {
	var agg = 0;
	return function() {
		agg = (arguments.length === 0)?(agg):(agg+arguments[0]);
	return agg;};
}
//fn=sum();
//fn(10);
//fn(1);
//fn();

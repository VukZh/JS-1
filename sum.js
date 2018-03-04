function sum() {
  var agg = 0;
  function innerAgg () {
	agg = (arguments.length === 0)?(agg):(agg+arguments[0]);
	return innerAgg; };
  innerAgg.valueOf = function() { return agg; };
  return innerAgg;
}

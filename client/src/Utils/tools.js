export const reverseMapping = (obj) => {
  const reversed = {};
  Object.keys(obj).forEach((key) => {
      reversed[obj[key]] = key
  });
  return reversed;
};

export const getUrlParams = function () {
  var url = window.location.href;
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};

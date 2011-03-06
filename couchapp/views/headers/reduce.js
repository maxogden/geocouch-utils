/**
 * Reduces to a list of unique object key attributes
 */
function(keys, values, rereduce) { 

  function include(arr, obj) {
    return (arr.indexOf(obj) != -1);
  }
  
  var headers = [];
  for (var doc in values) {
    for (var header in values[doc]) {
      if(!include(headers, values[doc][header])) {
        headers.push(values[doc][header]);
      }
    }
  }
  
  return headers;
}
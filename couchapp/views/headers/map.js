/**
 * Gets all of the keys
 */
function(doc) {
  var keys = [];
  for (var key in doc) {
    keys.push(key);
  }
  emit(doc, keys);
}

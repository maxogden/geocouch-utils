/**
 * A list function that transforms a view result set into a CSV feed.
 * Requires https://github.com/opencivicdata/csvlib
 * @author Max Ogden
 */
function(head, req) {
  var row, sep = '\n', headerSent = false;
  var csv = require("vendor/csvlib/csv");
  
  start({"headers":{"Content-Type" : "text/x-csv"}});
  
  while (row = getRow()) {    
    if (headerSent) {
      send(csv.buildRow(row.value));
    } else {
      send(csv.buildHeaders(row.value));
      headerSent = true;
      send(csv.buildRow(row.value));
    }
  }
};

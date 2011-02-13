/*

This is a generic version of a design document that returns title and 
subtitle within the value key so they can be used to populate map 
callouts without sending another request to Couch.

It is meant to work with data that has title and subtitle in a 
properties object, as described here:

http://opencivicdata.org

For example:

{
  "category" : "aCategory",
  "properties" : {"title" : "theTitle", "subtitle" : "theSubtitle", "other": "other properties"},
  "start" : "",
  "end" : "",
  "geometry": {
         "coordinates": [
             -122.59439,
             45.5316951
         ],
         "type": "Point"
     }
}



A database or document-type-specific version could inject text into the values, such as this title:

function(doc) { 
	emit(doc.geometry || {type: 'Point',coordinates: [0,0]}, 
		{'title': (typeof(doc.station) == 'undefined') ? 'Unnamed' : 'Fire Station ' + doc.station, 
		'subtitle': (typeof(doc.address) == 'undefined') ? 'Unknown' : doc.address})
	}

The above statement assumes that each document has geometry, station and address keys.

The general form below will only return documents that have geometry and properties keys.

*/

function(doc) { 
    if (doc.geometry && doc.properties) {
        emit(doc.geometry || {type: 'Point',coordinates: [0,0]}, 
    		{'title': (typeof(doc.properties.title) == 'undefined') ? 'Untitled' : doc.properties.title, 
    		'subtitle': (typeof(doc.properties.subtitle) == 'undefined') ? 'None' : doc.properties.subtitle})
    	}
}

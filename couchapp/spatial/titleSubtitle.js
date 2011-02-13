/*

This is a generic version of a design document that returns title and 
subtitle within the value key so they can be used to populate map 
callouts without sending another request to Couch.

A database or document-type-specific version could inject text, such as:

function(doc) { 
	emit(doc.geometry || {type: 'Point',coordinates: [0,0]}, 
		{'title': (typeof(doc.station) == 'undefined') ? 'Unnamed' : 'Fire Station ' + doc.station, 
		'subtitle': (typeof(doc.address) == 'undefined') ? 'Unknown' : doc.address})
	}

*/

function(doc) { 
	emit(doc.geometry || {type: 'Point',coordinates: [0,0]}, 
		{'title': (typeof(doc.properties.title) == 'undefined') ? 'Untitled' : doc.properties.title, 
		'subtitle': (typeof(doc.properties.subtitle) == 'undefined') ? 'None' : doc.properties.subtitle})
		}

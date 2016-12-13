// timeline config for JSTOR topic timeline

var timelineVis = timelineVis || {};

timelineVis.config = (function() {
	var width = 960,
		height = 350;

	// these properties ("authors", "eigenfactor", etc.) need to be set properly according to the data
	var parseData = function(data) {
		data.forEach(function(d) {
			d.authors = d["authors"];  // list of author names
			d.eigenfactor = d["eigenfactor_score"];
			d.venue = d["journal"];
			d.year = d["year"];
			d.url = "http://labs.jstor.org" + d["stable_url"];
		});
		return data;
	};

	return {
		width: width,
		height: height,
		parseData: parseData
	}

}());

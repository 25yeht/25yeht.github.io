(function() {
	fetch("https://flashjs.a25yeht.repl.co/script.js").then(function(res) {
		res.text().then(function(txt) {
			document.getElementById("bookmarklet").href = txt;
		});
	}, function(err) {
		alert(err.stack);
	}
})();

require.config({
	baseUrl: "scripts",
	paths: {
		'skrollr' : "skrollr.min"
	},
	waitSeconds: 15
});

require(['skrollr'], function(skrollr){
	if (window.matchMedia( '(min-width: 480px)' ).matches) {
		var s = skrollr.init({
			edgeStrategy: 'set',
			easing: {
				WTF: Math.random,
				inverted: function(p) {
					return 1-p;
				}
			}
		});
	}
});

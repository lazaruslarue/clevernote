clevernote
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('login', {
		url: '/login',
		templateUrl: 'client/views/login.html',
		controller: 'loginCtrl',
	})
	.state('main', {
		url: '/main',
		templateUrl: 'client/views/createEntry.html',
		controller: 'createEntryCntrl',
	})
	.state('search', {
		url: '/search',
		templateUrl: 'client/views/search.html'
	})
	.state('list', {
		url: '/listEntries',
		templateUrl: 'client/views/listEntries.html'
	})
	.state('tags', {
		url: '/tags',
		templateUrl: 'client/views/tags.html'
	})
	.state('displayEntry', {
		url: '/displayEntry',
		templateUrl: 'client/views/displayEntry.html'
	})

});
	
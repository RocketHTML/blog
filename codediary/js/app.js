var app = angular.module('IHateTheSnow', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider
  .when('/', { 
  	controller:'GalleryController', 
  	templateUrl: 'views/gallery.html' 
    }).otherwise({
    	controller:'GalleryController', 
  		templateUrl: 'views/gallery.html' 
    });
});


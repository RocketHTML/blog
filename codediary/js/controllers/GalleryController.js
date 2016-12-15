app.controller('GalleryController', function($scope, photos){

	photos.getPhotos(function(data){
		$scope.images = data;
		$scope.pic=$scope.images[0][0];
	});
	$scope.json = 0;
	$scope.category = 0;
	$scope.picIndex = 0;	

	$scope.categories = [
		{name: "Intro", json: 0, category: 0},
		{name: "Ader App", json: 3, category: 1},
		{name: "Chat App", json: 1, category: 2},
		{name: "Tutoring", json: 2, category: 3},
		{name: "Graduation", json: 5, category: 4},
		{name: "Life", json: 4, category: 5},
		
	];

	$scope.changeLocation = function(category) { 
		$scope.json = $scope.categories[category].json;
		$scope.category = category; 
		$scope.changePic(0); 
	}

	$scope.changePic = function(num) {
		$scope.picIndex = num; 
		$scope.pic = $scope.images[$scope.json][$scope.picIndex];
	}

	$scope.range = function(min, max) {
	    step = 1;
	    var input = [];
	    for (var i = min; i < max; i += step) {
	        input.push(i);
	    }
	    return input;
	}

})
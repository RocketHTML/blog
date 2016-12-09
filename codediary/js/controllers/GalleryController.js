app.controller('GalleryController', function($scope, photos){

	photos.getPhotos(function(data){
		$scope.images = data;
		$scope.pic=$scope.images[0][0];
	});
	$scope.location = 0;
	$scope.picIndex = 0;

	$scope.categories = [
		{name: "Intro", index: 0},
		{name: "Channels", index: 1},
		{name: "Tutoring", index: 2},
		{name: "Ader", index: 3},
		{name: "Life", index: 4},
		{name: "Graduation", index: 5},
		{name: "Chef", index: 6},
	];

	$scope.changeLocation = function(num) { 
		$scope.location = num; 
		$scope.changePic(0); 
	}

	$scope.changePic = function(num) {
		$scope.picIndex = num; 
		$scope.pic = $scope.images[$scope.location][$scope.picIndex];
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
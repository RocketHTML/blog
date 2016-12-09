
app.factory('photos', function($http){
	return {
		getPhotos : function (callback){
			$http.get('media/photos.json').then(function(response){
				callback(response.data);
			});
		}
	}

});
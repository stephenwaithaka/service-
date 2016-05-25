function OrderFormController($scope){

	// Define the model properties. The view will loop
	// through the services array and genreate a li
	// element for every one of its items.

	$scope.services = [
		{
			name: 'Data Mining',
			price: 300,
			active:true
		},{
			name: 'FrontEnd Design',
			price: 400,
			active:false
		},{
			name: 'Data Integration',
			price: 250,
			active:false
		},{
			name: 'Corporate Training',
			price: 220,
			active:false
		},{
			name: 'Machine Learning',
			price: 250,
			active:false
		},{
			name: 'Business Insights',
			price: 250,
			active:false
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Helper method for calculating the total price

	$scope.total = function(){

		var total = 0;

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}
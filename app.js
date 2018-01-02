var app=angular.module('myApp',[]);
    app.controller("myCtrl",function($scope,$http){
            $scope.nameRegExp=/^[a-zA-Z]*$/;
            $scope.numberRegExp=/^\d{3}-\d{3}-\d{4}$/;
            $scope.emailRegExp=/[a-zA-Z0-9._%+-]+@cordis.us$/;
            $scope.newField = {};
            $scope.editMode = false;
            $http.get("contacts.json")
                .then(function(response) {
                    $scope.myData = response.data.contactList;
                });
            $scope.showForm=function(){
                $scope.add=!$scope.add;

            };
			$scope.addContact=function(user){
			    var isAdded=false;
			    for(var i=0;i<$scope.myData.length;i++){
			        if($scope.myData[i].contactNumber==user.contactNumber || $scope.myData[i].contactEmail==user.contactEmail){
			            alert("Contact already added");
                        $scope.user={};
			            isAdded=true;
                    }
                }
                if(isAdded==false){
                    $scope.myData.push(user);
                    alert("Contact Added Successfully");
                    $scope.user={};
                    $scope.add=false;
                }
			};
            $scope.editContact = function(field) {
                $scope.editMode = false;
                $scope.newField = angular.copy(field);
                console.log($scope.editMode);
            };

            $scope.saveContact = function(index) {
                $scope.editMode=true;
                if ($scope.editMode !== false) {
                    $scope.myData[$scope.editMode] = $scope.newField;
                    $scope.editMode = false;
                }
            };
	});
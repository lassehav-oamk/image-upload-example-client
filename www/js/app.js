// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
  });
})

.controller('mainCtrl', function($scope, $ionicPlatform, $cordovaFileTransfer, $cordovaCamera, $http){    
    $scope.takePhoto = function()
    {
        var options =  {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,            
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE             
        };

        $ionicPlatform.ready(function() {
            $cordovaCamera.getPicture(options).then(function(imageData) {
                $scope.picture = imageData;
            }, function(err) {
                  // error
            });
        });
    }

    $scope.uploadPhoto = function()
    {
        var options = new FileUploadOptions()
        options.fileKey = "image";

        $cordovaFileTransfer.upload('http://image-upload-example-server.herokuapp.com/upload', $scope.picture, options).then(function(result) {
            console.log("File upload complete");
            console.log(result);
            $scope.uploadResults = "Upload completed successfully"            
        }, function(err) {
            console.log("File upload error");
            console.log(err);
            $scope.uploadResults = "Upload failed"                           
        }, function (progress) {
            // constant progress updates
            console.log(progress);
        });
    }

    $scope.testConnection = function()
    {
        $http.get('http://image-upload-example-server.herokuapp.com/').then(function(result){
            $scope.serverConnection = "Connection OK";
        },
        function(err){
            $scope.serverConnection = "Connection fail";
        });

    }
});
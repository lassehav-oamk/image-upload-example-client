# Image upload example with Ionic and ngCordova
This project demonstrates how to upload an image with Ionic, ngCordova and the cordova file transfer plugin.

This the client counterpart to the server project, which you can find here: https://github.com/lassehav-oamk/image-upload-example-server

The project has been tested with Android device (Nexus 5).

## Installation
- Follow ionic installation instructions here: http://ionicframework.com/getting-started/
- Clone the project
- Fetch the cordova dependencies by executing command `cordova prepare` in your project root folder
- Fetch the bower dependencies by executing command `bower install` in your project root folder
- Change the server URLs in the www/js/app.js to match your own server addresses
- Build and deploy the app (follow ionic guide on this or do it with Visual Studio)

## Usage
Once you deploy the app you will see two buttons on the screen. The "Test server connection" will test the connection to your server. The results will be displayed below the button.

"Take photo" will activate the cordova camera plugin to take a photo with you device camera. Once the photo operation is completed the address to the photo will be displayed below the button. The "Upload photo" button then shows up, which starts the file transfer proces to your server based on the cordova file transfer plugin. Both the file transfer and the camera plugin are being used through the ngCordova (http://ngcordova.com/) wrapper.


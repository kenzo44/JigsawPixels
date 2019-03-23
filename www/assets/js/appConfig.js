var app = new Framework7({
    root: "#app" //this is the app element
})

var mainView = app.views.create('.view-main');

//For Plugins
document.addEventListener("deviceready", init, false);

function init() {
    //camera code goes here

    $("#takePic").on("click", function () {
        console.log("yaye");
        navigator.camera.getPicture(success, error, cameraOptions);
    });

    var cameraOptions = {
        //Default 50 range 0-100
        quality: 80
    };

    function success(imageURI) {
        var puz1 = new PuzzleImg('dv1', imageURI, 4, 5, window.innerWidth, window.innerHeight);
    }

    function error(message) {
        alert("failiure due to: " + message);
    }
}

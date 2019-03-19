var app = new Framework7({
    root: "#app", //this is the app element
    routes: [
        {
            path: '/page2/',
            url: 'pages/page2.html'
        }
    ]
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
        return imageURI;
//        $("#dv1").after("<img src='" + imageURI + "'>");   
    }

    function error(message) {
        alert("failiure due to: " + message);
    }
}

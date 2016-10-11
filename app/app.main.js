///<reference path="../typings/globals/jquery/index.d.ts"/>
// import {Australia} from  './Australia';
// import {Bulgaria} from './Bulgaria';
// import  {NewZealand} from './NewZealand';
var Application = (function () {
    function Application() {
        $(document).ready(function () {
            $.getJSON("route.json", function (params) {
                for (var i = 0; i < params.length; i++) {
                    $("#nav").append("<a  id='nav" + (i) + "'>" + params[i].name + "</a>&nbsp;");
                    $("#nav" + (i)).attr("href", "#" + params[i].url);
                    $("#nav" + (i)).attr("data-view", params[i].view_url);
                    $("#nav" + (i)).click(function () {
                        $('#container').load('./views/' + ($(this).attr("data-view")));
                    });
                }
            });
        });
    }
    Application.prototype.loadBookmarks = function () {
        setInterval(function () {
            var myPath = window.location.hash;
            if (myPath !== "#newzealand" && myPath !== "#bulgaria") {
                $("#container").load("./views/australia.html");
            }
            else if (myPath === "#newzealand") {
                $("#container").load("./views/newzealand.html");
            }
            else if (myPath === "#bulgaria") {
                $("#container").load("./views/bulgaria.html");
            }
            else if (myPath === "#australa") {
                $("#container").load("./views/australia.html");
            }
        }, 50);
    };
    return Application;
}());
var app = new Application();
app.loadBookmarks();

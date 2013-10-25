// ember

var App = Ember.Application.create();

App.Router.map(function() {

    this.resource("index-index", {
        "path" : "/"
    });

});

App.Message = DS.Model.extend({
    "user" : DS.attr("string"),
    "text" : DS.attr("string")
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Message.FIXTURES = [
    {
        "id"   : 1,
        "user" : "Chris",
        "text" : "Hello World."
    },
    {
        "id"   : 2,
        "user" : "Wayne",
        "text" : "Don't dig it, man."
    },
    {
        "id"   : 3,
        "user" : "Chris",
        "text" : "Meh."
    }
];

App.IndexIndexRoute = Ember.Route.extend({

    "model" : function () {
        return this.store.find("message");
    }

});

// chat

try {

    if (!WebSocket) {

        console.log("no websocket support");

    } else {

        var socket = new WebSocket("ws://127.0.0.1:1337/");

        socket.addEventListener("open", function (e) {
            console.log("open: ", e);
        });

        socket.addEventListener("error", function (e) {
            console.log("error: ", e);
        });

        socket.addEventListener("message", function (e) {
            console.log("message: ", JSON.parse(e.data));
        });

        console.log("socket:", socket);

        window.socket = socket; // debug

    }

} catch (e) {

    console.log("exception: " + e);

}
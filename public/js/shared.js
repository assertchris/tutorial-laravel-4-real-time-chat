var App = Ember.Application.create();

App.Router.map(function() {

    this.resource("index", {
        "path" : "/"
    });

});

App.Message = DS.Model.extend({
    "user_id"       : DS.attr("integer"),
    "user_name"     : DS.attr("string"),
    "user_id_class" : DS.attr("string"),
    "message"       : DS.attr("string")
});

App.Store = DS.Store.extend({
    "adapter" : DS.FixtureAdapter.extend()
});

App.Message.FIXTURES = [
    // {
    //     "id"   : 1,
    //     "user" : "Chris",
    //     "text" : "Hello World."
    // },
    // {
    //     "id"   : 2,
    //     "user" : "Wayne",
    //     "text" : "Don't dig it, man."
    // },
    // {
    //     "id"   : 3,
    //     "user" : "Chris",
    //     "text" : "Meh."
    // }
];

var store;

App.IndexRoute = Ember.Route.extend({
    "init" : function() {
        store = this.store;
    },
    "model" : function () {
        return store.find("message");
    }
});

App.IndexController = Ember.ArrayController.extend({

    "command" : null,

    "actions" : {

        "send" : function(key) {

            if (key && key != 13) {
                return;
            }

            var command = this.get("command") || "";

            if (command.indexOf("/name") === 0) {

                socket.send(JSON.stringify({
                    "type" : "name",
                    "data" : command.split("/name")[1]
                }));

            } else {

                socket.send(JSON.stringify({
                    "type" : "message",
                    "data" : command
                }));

            }

            this.set("command", null);
        }

    }

});

App.IndexView = Ember.View.extend({

    "keyDown" : function(e) {
        this.get("controller").send("send", e.keyCode);
    }

});

try {

    var id = 1;

    if (!WebSocket) {

        console.log("no websocket support");

    } else {

        var socket = new WebSocket("ws://127.0.0.1:7778/");
        var id     = 1;

        socket.addEventListener("open", function (e) {
            // console.log("open: ", e);
        });

        socket.addEventListener("error", function (e) {
            console.log("error: ", e);
        });

        socket.addEventListener("message", function (e) {

            var data = JSON.parse(e.data);

            switch (data.message.type) {

                case "name":

                    $(".name-" + data.user.id).html(data.user.name);

                    break;

                case "message":

                    store.push("message", {
                        "id"            : id++,
                        "user_id"       : data.user.id,
                        "user_name"     : data.user.name || "User",
                        "user_id_class" : "name-" + data.user.id,
                        "message"       : data.message.data
                    });

                    break;

            }

        });

        // console.log("socket:", socket);

        window.socket = socket; // debug

    }

} catch (e) {

    console.log("exception: " + e);

}
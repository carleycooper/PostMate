// model

var app = function(app) {
    zog("app")
    app.Model = function() {
        var m = this;
        zog("model")
        var colors = m.colors = [frame.yellow, frame.pink, frame.blue, frame.green, frame.orange, frame.purple];

        var colorNum = 0;
        m.nextColor = function() {
            colorNum++;
            return colors[colorNum % colors.length]
        }


    }

    return app;
}(app || {});

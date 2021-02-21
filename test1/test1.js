var rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};

var wb = {
    white: "#FFFFFF",
    black: "#000000"
};

var colors = Object.create(rgb);
    colors.red = "#FF0000";
    colors.green = "#00FF00";
    colors.blue = "#0000FF";


var colors = Object.assign(colors, wb);

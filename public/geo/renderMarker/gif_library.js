// I guess I need to code for the actual web address for some reason?
// I didn't have a problem with this before, with the flame, idk why I do now.
// But if I can find a reason, that means I know what's going on.

var base = "https://cafe-infinite.web.app/geo/gifs/menu/";
var ext = ".gif";

var gifs = {

    flame: {
        url: base + "flame" + ext,
        stroke: '#f9371c',
        fill: '#fed130'
    },

    coffee: {
        url: base + "coffee" + ext,
        stroke: '#f9371c',
        fill: '#fed130'
    },

    beer: {
        url: base + "beer" + ext,
        stroke: '#229260',
        fill: '#5bd6a0'
    },

    taco: {
        url: base + "taco" + ext,
        stroke: '#77ff65',
        fill: '#fed130'
    },

    cat: {
        url: base + "cat" + ext,
        stroke: '#5a4a3f',
        fill: '#dcd7d1'
    },

    dog: {
        url: base + "dog" + ext,
        stroke: '#fff949',
        fill: '#fffede'
    },

    cone: {
        url: base + "cone" + ext,
        stroke: '#ff3000',
        fill: '#ffffff'
    },

    gold: {
        url: base + "gold" + ext,
        stroke: '#ffea00',
        fill: '#ffea00'
    },

    music: {
        url: base + "music" + ext,
        stroke: '#368bff',
        fill: '#add0ff'
    }
}

module.exports = gifs;




/* module.exports = {
    gifs,
    markerConfig
} */



/*     flame: "./geographicFunctionality/gifs/flames/flame.gif",
    cat: "./geographicFunctionality/gifs/menu/cat.gif",
    dog: "./geographicFunctionality/gifs/menu/dog.gif",
    gold: "./geographicFunctionality/gifs/menu/gold.gif",
    beer: "./geographicFunctionality/gifs/menu/beer.gif",
    coffee: "./geographicFunctionality/gifs/menu/coffee.gif",
    music: "./geographicFunctionality/gifs/menu/music.gif",
    cone: "./geographicFunctionality/gifs/menu/cone.gif" */
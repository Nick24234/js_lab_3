(function() {
    var speakWord = "Hello";
    window.SpeakHello = function(name) {
        console.log(speakWord + " " + name);
    };
})();
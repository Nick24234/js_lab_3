console.log("Лабораторна робота №2: Об’єктно-орієнтоване програмування у JavaScript");

// Завдання 1.2.2
(function() {
    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
    names.forEach(function(name) {
        var firstChar = name.charAt(0).toLowerCase();
        if (firstChar === 'j') {
            SpeakGoodBye(name);
        } else {
            SpeakHello(name);
        }
    });
})();
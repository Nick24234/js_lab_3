
console.log("Лабораторна робота №3: Застосування JavaScript для обробки даних");


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


(function() {
    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
    
    console.log("\n Селекціонування імен за кількістю літер. Імена з 4 або менше літерами отримують 'Hello', інші – 'Goodbye'.");
    names.forEach(function(name) {
        if (name.length <= 4) {
            SpeakHello(name);
        } else {
            SpeakGoodBye(name);
        }
    });
})();

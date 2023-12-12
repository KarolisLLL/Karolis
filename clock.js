function updateTime() {
    var date = new Date(); // Gauname dabartinį laiką
    var hours = date.getHours(); // Gauname valandas
    var minutes = date.getMinutes(); // Gauname minutes
    var seconds = date.getSeconds(); // Gauname sekundes

    // Pridedame nulį priešais vienženklį skaičių
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var time = hours + ":" + minutes + ":" + seconds; // Sudedame laiką į skaitymo formatą

    document.getElementById("clock").innerText = time; // Atvaizduojame laiką HTML dokumente
}

setInterval(updateTime, 1000); // Nustatome intervalą, kad funkcija būtų iškviesta kas sekundę

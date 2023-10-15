var subjectObject = ["Celsius", "Fahrenheit", "Kelvin"];
window.onload = function() {
    var subjectSel = document.getElementById("subject");
    var subjectSel1 = document.getElementById("subject1");
    for (var i = 0; i < subjectObject.length; i++) {
        var subject = subjectObject[i];
        subjectSel.options[subjectSel.options.length] = new Option(subject, subject);
        subjectSel1.options[subjectSel1.options.length] = new Option(subject, subject);
    }
}

document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault();

    var temp1 = document.getElementById("subject").value; 
    var temp2 = document.getElementById("subject1").value;
    var deg = parseFloat(document.getElementById("temp").value);

    var res = 0;

    if (temp1 == "Celsius") {
        if (temp2 == "Fahrenheit")
            res = (9 / 5) * deg + 32;
        else if (temp2 == "Kelvin")
            res = deg + 273.15;
        else
            res=deg;
    } else if (temp1 == "Fahrenheit") {
        if (temp2 == "Celsius")
            res = (5 / 9) * (deg - 32);
        else if (temp2 == "Kelvin")
            res = (5 / 9) * (deg - 32) + 273.15;
        else
            res=deg;
    } else if (temp1 == "Kelvin") {
        if (temp2 == "Fahrenheit")
            res = (9 / 5) * (deg - 273.15) + 32;
        else if (temp2 == "Celsius")
            res = deg - 273.15;
        else
            res=deg;
    }

    document.getElementById("temp1").value = res.toFixed(2); 
});

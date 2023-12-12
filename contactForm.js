var visitor = {};

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  var re = /^\d{9}$/;
  return re.test(String(phone));
}

function validateAddress(address) {
  return address.length > 0;
}

function saveData() {
  visitor.name = document.getElementById('name').value;
  visitor.surname = document.getElementById('surname').value;
  visitor.email = document.getElementById('email').value;
  visitor.phone = document.getElementById('phone').value;
  visitor.address = document.getElementById('address').value;
  visitor.marks = [
    document.getElementById('mark1').value,
    document.getElementById('mark2').value,
    document.getElementById('mark3').value,
    document.getElementById('mark4').value,
    document.getElementById('mark5').value
  ];

  if (!validateEmail(visitor.email)) {
    alert("Neteisingas el. pašto adresas");
    return;
  }

  if (!validatePhone(visitor.phone)) {
    alert("Neteisingas telefono numeris");
    return;
  }

  if (!validateAddress(visitor.address)) {
    alert("Neteisingas adresas");
    return;
  }

  var sum = 0;
  for(var i = 0; i < visitor.marks.length; i++) {
    sum += parseInt(visitor.marks[i], 10);
  }
  var avg = sum/visitor.marks.length;

  var color = "green";
  if (avg < 4) {
    color = "red";
  } else if (avg <= 7) {
    color = "orange";
  }
    else if (avg > 7){
      color = "green";
    }

  console.log(visitor);

  document.getElementById('result').innerHTML = 
    "Vardas: " + visitor.name + "<br>" +
    "Pavardė: " + visitor.surname + "<br>" +
    "El. pašto adresas: " + visitor.email + "<br>" +
    "Telefono numeris: " + visitor.phone + "<br>" +
    "Adresas: " + visitor.address + "<br>" +
    "Pažymių vidurkis: <span style='color:" + color + "'>" + avg + "</span><br>" +
    visitor.name + " " + visitor.surname + " (" + visitor.email + "): " + avg;
}

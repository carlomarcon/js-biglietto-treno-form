const button = document.querySelector(".col-answers button:first-child");

button.addEventListener("click", function () {
  // RACCOLTA DATI

  const Name = document.querySelector(".name").value;

  const Km = parseInt(document.querySelector(".km").value);
  let price = Km * 0.21;
  const Age = document.querySelector(".Age option:checked").value;
  console.log(Age, Name, Km, price);

  if (isNaN(Km && Name)) {
    alert("Errore nei dati, riprovare");
    location.reload();
  } else if (Age === "Maggiorenne") {
    document.getElementById("priceToSet").innerHTML = price.toFixed(2) + " €";
  } else if (Age === "Minorenne") {
    let PriceChild = price - price * 0.2;
    document.getElementById("priceToSet").innerHTML =
      PriceChild.toFixed(2) + " €";
  } else {
    let PriceOld = price - price * 0.4;
    document.getElementById("priceToSet").innerHTML =
      PriceOld.toFixed(2) + " €";
  }
});

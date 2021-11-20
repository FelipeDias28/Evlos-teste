let account_balance = document.getElementById("account_balance");
let button = document.getElementById("btn");
let current_value = document.getElementById("current_value");

let amountOfNotes = [
  // Colocar para cada nota atributo de quantidade e de valor
  { amount: 1, value_note: 100 },
  { amount: 3, value_note: 50 },
  { amount: 4, value_note: 20 },
  { amount: 1, value_note: 10 },
  { amount: 3, value_note: 5 },
  { amount: 12, value_note: 2 },
  { amount: 10, value_note: 1 },
];

const outOfNotes = (value) => {
  result = {};
  response = [];

  for (i = 0; i < amountOfNotes.length; i++) {
    let amount = amountOfNotes[i].amount;
    let value_note = amountOfNotes[i].value_note;

    let result = Math.floor(value / value_note);

    if (result && amount > 0) {
      available = amount - result;

      current_value = result * value_note;

      amountOfNotes[i].amount -= result;

      response.push(`${result} nota de R${value_note},00 `);

      value -= current_value;
    }
  }

  return response;
};

button.addEventListener("click", () => {
  let input_value = document.getElementById("value").value;
  let current_number = document
    .getElementById("account_balance")
    .innerText.replace(",", ".");

  let result =
    Number.parseFloat(current_number) - Number.parseFloat(input_value);

  if (result >= 0) {
    account_balance.innerText = result.toFixed(2);
    let message = outOfNotes(input_value);

    if (message.length > 1) {
      message.push("e");
      last_position = message.splice(message.length - 2, 1);
      message.push(last_position[0]);

      console.log("message: ", message.join(" "));

      current_value.innerHTML = "FOi";
    } else {
      current_value.innerText = "Aqui";
    }
  } else {
    current_value.innerText = "Você não possui saldo para fazer esse saque";
  }
});

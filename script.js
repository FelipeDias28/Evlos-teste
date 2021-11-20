let account_balance = document.getElementById("account_balance");
let button = document.getElementById("btn");

let amountOfNotes = [
  { amount: 1, value_note: 100 },
  { amount: 3, value_note: 50 },
  { amount: 4, value_note: 20 },
  { amount: 1, value_note: 10 },
  { amount: 3, value_note: 5 },
  { amount: 12, value_note: 2 },
  { amount: 1, value_note: 1 },
];

const outOfNotes = (value) => {
  let current_value = document.getElementById("current_value");
  let response = [];
  let fail_message = "";

  for (i = 0; i < amountOfNotes.length; i++) {
    let amount = amountOfNotes[i].amount;
    let value_note = amountOfNotes[i].value_note;

    let result = Math.floor(value / value_note);

    let enought_notes = amount - result;

    if (result && enought_notes >= 0) {
      available = amount - result;

      current_value = result * value_note;

      amountOfNotes[i].amount = amount - result;

      response.push(`${result} nota de R$ ${value_note},00 `);

      value -= current_value;
    }
  }

  if (value > 0 || response === []) {
    return (fail_message = `Não é possível realizar o saque falta de notas, por favor tente outro valor`);
  }
  return response;
};

button.addEventListener("click", () => {
  let current = document.getElementById("current_value");
  let input_value = document.getElementById("value").value;
  let current_number = document
    .getElementById("account_balance")
    .innerText.replace(",", ".");

  let result =
    Number.parseFloat(current_number) - Number.parseFloat(input_value);

  if (result < 0) {
    return (current.innerText = "Você não possui saldo para fazer esse saque");
  }

  let message = outOfNotes(input_value);

  if (typeof message === "string") {
    return (current.innerText = message);
  }

  account_balance.innerText = result.toFixed(2);

  if (message.length > 1) {
    message.push("e");
    last_position = message.splice(message.length - 2, 1);
    message.push(last_position[0]);

    current.innerHTML = message.join(" ");
  } else {
    current.innerText = message;
  }

  // else {
  //   current.innerText = "Você não possui saldo para fazer esse saque";
  // }
});

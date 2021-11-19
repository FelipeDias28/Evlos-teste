let account_balance = document.getElementById("account_balance");
let button = document.getElementById("btn");
let current_value = document.getElementById("current_value");

const amountOfNotes = {
  oneHundred: 1,
  fifty: 3,
  twenty: 4,
  ten: 1,
  five: 3,
  two: 12,
  one: 10,
};

const output = (result, number, attr) => {
  let response = `${result} nota de R${number},00 `;

  if (result < amountOfNotes[attr]) {
    new_value = amountOfNotes[attr] - result;
    amountOfNotes[attr] = new_value;
  } else {
    amountOfNotes[attr] = 0;
  }

  return response;
};

const outOfNotes = (value) => {
  result = {};
  response = [];

  result.onehundred = Math.floor(valor / 100);

  if (result.oneHundred && amountOfNotes.oneHundred >= result.oneHundred) {
    value -= 100 * result.oneHundred;
    response.push(output(result.oneHundred, 100, "cem"));
  } else if (
    result.oneHundred &&
    amountOfNotes.oneHundred < result.oneHundred &&
    amountOfNotes.oneHundred > 0
  ) {
    value -= 100 * amountOfNotes.oneHundred;
    response.push(output(amountOfNotes.oneHundred, 100, "cem"));
  }

  result.fifty = Math.floor(valor / 50);

  if (result.fifty && amountOfNotes.fifty >= result.fifty) {
    value -= 50 * result.fifty;
    response.push(output(result.fifty, 50, "cinquenta"));
  } else if (
    result.fifty &&
    amountOfNotes.fifty < result.fifty &&
    amountOfNotes.fifty > 0
  ) {
    value -= 50 * amountOfNotes.fifty;
    response.push(output(amountOfNotes.fifty, 50, "cinquenta"));
  }

  result.twenty = Math.floor(valor / 20);

  if (result.twenty && amountOfNotes.twenty >= result.twenty) {
    value -= 20 * result.twenty;
    response.push(output(result.twenty, 20, "vinte"));
  } else if (
    result.twenty &&
    amountOfNotes.twenty < result.twenty &&
    amountOfNotes.twenty > 0
  ) {
    value -= 20 * amountOfNotes.twenty;
    response.push(output(amountOfNotes.twenty, 20, "vinte"));
  }

  result.ten = Math.floor(valor / 10);

  if (result.ten && amountOfNotes.ten >= result.ten) {
    value -= 10 * result.ten;
    response.push(output(result.ten, 10, "dez"));
  } else if (
    result.ten &&
    amountOfNotes.ten < result.ten &&
    amountOfNotes.ten > 0
  ) {
    value -= 10 * amountOfNotes.ten;
    response.push(output(amountOfNotes.ten, 10, "dez"));
  }

  result.five = Math.floor(valor / 5);

  if (result.five && amountOfNotes.five >= result.five) {
    value -= 5 * result.five;
    response.push(output(result.five, 5, "cinco"));
  } else if (
    result.five &&
    amountOfNotes.five < result.five &&
    amountOfNotes.five > 0
  ) {
    value -= 5 * amountOfNotes.five;
    response.push(output(amountOfNotes.five, 5, "cinco"));
  }

  result.two = Math.floor(valor / 2);

  if (result.two && amountOfNotes.two >= result.two) {
    value -= 2 * result.two;
    response.push(output(result.two, 2, "dois"));
  } else if (
    result.two &&
    amountOfNotes.two < result.two &&
    amountOfNotes.two > 0
  ) {
    value -= 2 * amountOfNotes.two;
    response.push(output(amountOfNotes.two, 2, "dois"));
  }

  result.one = Math.floor(valor / 1);

  if (result.one && amountOfNotes.one >= result.one) {
    value -= 1 * result.one;
    response.push(output(result.one, 1, "um"));
  } else if (
    result.one &&
    amountOfNotes.one < result.one &&
    amountOfNotes.one > 0
  ) {
    value -= 1 * amountOfNotes.one;
    response.push(output(amountOfNotes.one, 1, "um"));
  }
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
    message = outOfNotes(input_value);

    if (message.length > 1) {
      last_position = message.splice(message.length - 2, 1);
      message.push(last_position[0]);

      current_value.innerText = message.join(" ");
    } else {
      current_value.innerText = message;
    }
  } else {
    current_value.innerText = "Você não possui saldo para fazer esse saque";
  }
});

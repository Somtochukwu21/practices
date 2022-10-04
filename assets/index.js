/*
  const myFunction = () => {
    let message, x;
    message = document.getElementById('message');
    x = document.getElementById('demo').value;
    try {
        x = Number(x);
        if (isNaN(x)) {
            throw "Not a number"
        }
        if (x == "") {
            throw "Empty"
        }

        if (x < 5) {
            throw "Too low"
        }

        if (x > 10) {
            throw "Too high"
        }
        else {
            message.innerHTML = "Verified";
        }
    } catch (error) {
        message.innerHTML = "Input is " + error;
    }
    finally {
        document.getElementById("demo").value = "";
    }
}
*/

var x = 15 * 5;
// debugger;
document.getElementById("demo").innerHTML = x;

let expenseStore = [];
let inventories = [];

// this validates the schema
function ValidateSchema() {
  this.errorMessage = null;
  this.successMessage = null;

  const rules = {
    alphabet: /^[A-Za-z]+$/,
    number: /^[0-9]+$/,
    alphanumeric: /^[A-Za-z0-9\s]+$/,
    char: /^[@.A-Za-z0-9]+$/,
  };

  this.validate = function (
    data,
    rule,
    message = "Sorry your data failed the validation"
  ) {
    const validatorRule = rules[rule];

    // check if the rule is found
    if (!validatorRule) {
      this.errorMessage = "Please check the rule you passed";
      return false;
    }

    // tests data to know if it matches with the rules
    if (!validatorRule.test(data)) {
      this.errorMessage = message;
      return false;
    }

    this.successMessage = "Data is valid";
    this.errorMessage = null;
    return true;
  };
}

const validation = new ValidateSchema(); //Instanciation

function Expense(expense) {
  this.expenses = [];

  // constructor
  const _constructor = (_expenses) => {
    // private Instanciation
    const validation = new ValidateSchema();

    //  checks if price is a number
    if (!validation.validate(_expenses.amount, "number")) {
      console.log(validation.errorMessage);
    } else {
      this.expenses.push(_expenses);
      expenseStore.push(_expenses);
    }
  };
  _constructor(expense);
}

// total expense calculation
Expense.totalExpenses = () => {
  return expenseStore.reduce(
    (initValue, expense) => initValue + Number(expense.amount),
    0
  );
};

function Inventory() {
  // private Instanciation
  const validation = new ValidateSchema();

  const validateData = (data) => {
    // validates that data is present
    const keys = ["id", "amount", "name"];
    for (const props of keys) {
      const currentProp = data[props];
      // checks if there's no match
      if (!currentProp) {
        console.log(`${props.toUpperCase()} is not found`);
        return false;
      }
    }

    // validates the data id type
    if (!validation.validate(data.id, "number")) {
      console.log("ID must be a number");
      return false;
    }

    // validates the data price type
    if (!validation.validate(data.amount, "number")) {
      console.log("Amount must be a number");
      return false;
    }

    // validates the data id type
    if (!validation.validate(data.name, "alphanumeric")) {
      console.log("Name must be a alphanumeric");
      return false;
    }
    return true;
  };

  const isInventoryExist = (id) => {
    const exist = inventories.some((inventory) => {
      return inventory.id == id;
    });

    return exist;
  };

  this.add = (data = {}) => {
    // check if all data is valid
    if (!validateData(data)) {
      return false;
    }

    // makes sure inventory with same id does not exist
    const InventoryExist = isInventoryExist(data.id);
    if (InventoryExist) {
      console.log(`Inventory with ID = ${data.id} already exists`);
      return false;
    }

    // Extract expense data
    const expenseData = {
      amount: data.amount,
      purpose: `I Bought ${data.name}`,
      inventory_id: data.id,
    };

    inventories.push(data);
    const expense = new Expense(expenseData);
    // console.log(expenseData);
  };

  this.remove = (id) => {
    // validates the data id type
    if (!validation.validate(id, "number")) {
      console.log("Invalid ID submitted, please enter a valid ID");
      return false;
    }

    // make sure inventory with submitted id exists
    const InventoryExist = isInventoryExist(id);
    if (!InventoryExist) {
      console.log(`Inventory with ID = ${id} does not exists`);
      return false;
      // console.log(InventoryExist);
    }

    // remove both the inventory and its expense
    inventories = inventories.filter((inventory) => inventory.id !== id);
    expenseStore = expenseStore.filter(
      (expense) => expense.inventory_id !== id
    );
  };
}

const doveShop = new Inventory();

doveShop.add({ id: 2, amount: 3, name: "Indomie" });
doveShop.add({ id: 3, amount: 5200, name: "Indomie" });
doveShop.add({ id: 4, amount: 5010, name: "Indomie" });

doveShop.remove(3);

console.table(inventories);
// console.table(expenseStore);
console.log(Expense.totalExpenses());
// console.log();

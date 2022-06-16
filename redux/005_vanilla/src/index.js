import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");
const quantity = document.getElementById("quantity");
const totalPrice = document.getElementById("total");

const PRICE = 17500;

// Action
const addNumber = () => {
  store.dispatch({ type: "ADD" });
};

//Action
const substractNumber = () => {
  store.dispatch({ type: "SUBSTRACT" });
};

// Reducer
const countReducer = (state = 1, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBSTRACT":
      return state - 1;
    default:
      return state;
  }
};

// create Store
const store = createStore(countReducer);


const handleWrite = () => {
  number.innerText = store.getState();
  quantity.innerText = store.getState();
  totalPrice.innerText = store.getState() * PRICE;
  console.log(store.getState());
};

// Update UI
store.subscribe(handleWrite);

// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);
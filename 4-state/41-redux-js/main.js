const initialState = [];

const reducer = (state = initialState, action) => {
  console.log("reducer", state, action);

  if (action.type === "ADD_USER") {
    return [...state, action.payload];
  }
  return state;
};

const store = Redux.createStore(reducer);
console.log("store", store);

const list = document.querySelector(".list");
const addBtn = document.querySelector(".addUser");
const userInput = document.querySelector(".userInput");

store.subscribe(() => {
  list.innerHTML = "";
  userInput.value = "";
  store.getState().forEach(user => {
    const li = document.createElement("li");
    li.textContent = user;
    list.appendChild(li);
  });
});

addBtn.addEventListener("click", () => {
  store.dispatch({ type: "ADD_USER", payload: "mario" });
});

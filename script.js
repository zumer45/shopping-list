function addItem() {
  const itemForm = document.querySelector("#item-form");
  const seen = {};

  itemForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const itemList = document.querySelector("#item-list");
    const formData = new FormData(itemForm);
    let item = formData.get("item");

    if (item === "") {
      alert("Please Enter A Value");
      return;
    }

    if (seen[item]) {
      alert("Can't add the same item twice");
      return;
    } else {
      seen[item] = true;
    }

    const wasAdded = updateLocalStorage(item);

    const li = document.createElement("li");
    const btn = createBtn("remove-item btn-link text-red");
    li.appendChild(document.createTextNode(item));
    li.appendChild(btn);

    itemList.appendChild(li);
    itemForm.reset();
  });
}

function createBtn(className) {
  const btn = document.createElement("button");
  btn.className = className;

  const icon = createIcon("fa-solid fa-xmark");
  btn.appendChild(icon);
  return btn;
}

function createIcon(className) {
  const icon = document.createElement("i");
  icon.className = className;
  return icon;
}

function updateLocalStorage(item) {
  let items = JSON.parse(localStorage.getItem("items")) || [];
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
}

function getItemsFromLocalStorage() {
  let items = JSON.parse(localStorage.getItem("items"));
  return items;
}

function removeItem() {
  const itemList = document.querySelector("#item-list");

  itemList.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("remove-item")) {
      if (confirm("Are you sure")) {
        e.target.parentElement.parentElement.remove();
      }
    }
  });
}

addItem();
removeItem();

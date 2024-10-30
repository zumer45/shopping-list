const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");

function addItem(e) {
  e.preventDefault();
  const formData = new FormData(itemForm);
  const data = formData.get("item");

  if (itemInput.value === "") {
    alert("Please Enter A Value");
    return;
  }

  const li = document.createElement("li");

  li.appendChild(document.createTextNode(data));

  const button = createBtn("remove-item btn-link text-red");
  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = "";
}

function createBtn(classes) {
  const btn = document.createElement("button");
  btn.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  btn.appendChild(icon);
  return btn;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

itemForm.addEventListener("submit", addItem);

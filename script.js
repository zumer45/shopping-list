const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const clearBtn = document.querySelector(".btn-clear");
const filterInput = document.querySelector(".filter");

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

  console.log(checkUI());

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

function removeItems(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure")) {
      e.target.parentElement.parentElement.remove();
      checkUI();
    }
  }
}

function removeAllItems(e) {
  const children = itemList.children;
  Array.from(children).forEach((child) => {
    child.remove();
  });
  checkUI();
}

function checkUI() {
  const items = itemList.querySelectorAll("li");

  if (items.length === 0) {
    filterInput.style.display = "none";
    clearBtn.style.display = "none";
  } else {
    filterInput.style.display = "block";
    clearBtn.style.display = "block";
  }
}

function filterItems(e) {
  const value = e.target.value;

  const items = itemList.querySelectorAll("li");

  items.forEach((item) => {
    if (item.textContent.toLowerCase().indexOf(value) !== -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItems);
clearBtn.addEventListener("click", removeAllItems);
filterInput.addEventListener("input", filterItems);

checkUI();

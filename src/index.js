import { makeList } from "./list/makeList.js";
import { totalCount } from "./backend/API.js";
import * as listeners from "./listeners/index.js";

const form = document.getElementById("create-form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  listeners.onCreate(event);
});

const editForm = document.getElementById("edit-form");
editForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  listeners.onEdit(event);
});

const total = async () => {
  const count = await totalCount();
  document.getElementById("total").innerText = count;
};

makeList();
total();

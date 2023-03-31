import * as API from "../backend/API.js";
import { makeList } from "../list/makeList.js";

export const onEdit = async (event) => {
  const data = new FormData(event.target);
  const id = event.target["edit-id"].value;

  const payload = Object.fromEntries(data.entries());

  const closeBtn = document.querySelector("#modal-edit-close");
  try {
    await API.edit(id, payload);
    event.target.reset();
    closeBtn.click();
    await makeList();
  } catch (e) {
    console.warn(await e);
    alert("Failed to update item");
  }
};

export const fillEditForm = async (id) => {
  const form = document.getElementById("edit-form");
  const data = await API.getSingleItem(id);

  form["edit-id"].value = id;
  form["edit-id"].setAttribute("disabled", true);
  form["edit-name"].value = data.name;
  form["edit-category"].value = data.category;
  form["edit-description"].value = data.description;
  form["edit-status"].value = data.status;
};

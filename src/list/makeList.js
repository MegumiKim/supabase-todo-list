import * as API from "../backend/API.js";
import * as listeners from "../listeners/index.js";

export const makeList = async () => {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  try {
    const data = await API.get();

    data.forEach((item) => {
      const row = document.createElement("tr");
      const name = document.createElement("td");
      name.innerText = item.name;
      const category = document.createElement("td");
      category.innerText = item.category;
      const description = document.createElement("td");
      description.innerText = item.description;
      const status = document.createElement("td");
      status.innerText = item.status;
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.classList = ["btn"];
      deleteBtn.addEventListener("click", async () => {
        listeners.onDelete(item.id);
      });
      const deleteTd = document.createElement("td");

      deleteTd.append(deleteBtn);
      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.classList = ["btn"];
      editBtn.setAttribute("data-toggle", "modal");
      editBtn.setAttribute("data-target", "#editModal");
      editBtn.addEventListener("click", async () => {
        listeners.fillEditForm(item.id);
      });
      const editTd = document.createElement("td");

      editTd.append(editBtn);
      row.append(id, name, category, description, status, deleteTd, editTd);
      tbody.prepend(row);

      total();
    });
  } catch (e) {
    console.warn(e);
    tbody.innerHTML = "Fail to fetch data";
  }
};

const total = async () => {
  const count = await API.totalCount();
  document.getElementById("total").innerText = count;
};

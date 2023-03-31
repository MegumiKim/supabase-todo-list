import * as API from "../backend/API.js";
import { makeList } from "../list/makeList.js";

export const onCreate = async (event) => {
  const data = new FormData(event.target);
  const payload = Object.fromEntries(data.entries());
  const closeBtn = document.querySelector("#modal-close");
  try {
    await API.create(payload);
    event.target.reset();
    closeBtn.click();
    await makeList();
  } catch (e) {
    console.warn(e);
    alert("Failed to create item");
  }
};

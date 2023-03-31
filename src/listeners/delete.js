import { makeList } from "../list/makeList.js";
import * as API from "../backend/API.js";

export const onDelete = async (id) => {
  try {
    API.deleteItem(id);
    makeList();
  } catch {
    alert("Failed to delete");
  }
};

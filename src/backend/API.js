// require("dotenv/config");

// const key = process.env.API_KEY;
// const url = process.env.API_URL;

const key = __API_KEY__;
const url = __API_URL__;

const database = supabase.createClient(url, key);

export const create = async (payload) => {
  const res = await database.from("items").insert(payload);
  if (res.status !== 201) {
    throw new Error(res);
  } else {
    console.log("success!");
    return;
  }
};
export const edit = async (id, payload) => {
  const { name, category, description, status } = payload;
  console.log(name);

  const res = await database
    .from("items")
    .update({ name, category, description, status })
    .eq("id", id);

  if (res.status !== 204) {
    throw new Error(res);
  }
};

export const get = async () => {
  const res = await database.from("items").select("*");

  if (res.data) {
    return res.data;
  }
  throw new Error(res);
};
export const getSingleItem = async (id) => {
  const res = await database.from("items").select("*").eq("id", id);

  if (res.data) {
    return res.data[0];
  }
  throw new Error(res);
};

export const deleteItem = async (id) => {
  const res = await database.from("items").delete().eq("id", id);
};

export const totalCount = async () => {
  const res = await database.from("items").select("*", { count: "exact" });
  return res.count;
};

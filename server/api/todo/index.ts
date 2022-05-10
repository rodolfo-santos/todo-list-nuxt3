import { db } from "../db";

export default defineEventHandler((e) => {
  const method = e.req.method;
  console.log(method);

  if (method === "GET") return db.todos;
});

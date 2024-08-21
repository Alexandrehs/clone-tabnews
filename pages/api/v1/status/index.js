import database from "../../../../infra/database.js";

async function status(request, response) {
  const res = await database.query("select 1 + 1 as soma;");
  console.log(res.rows);
  response.json({
    chave: "valor",
  });
}

export default status;

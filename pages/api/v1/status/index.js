import database from "/infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const maxConnections = await database.query("show max_connections;");
  const dbVersion = await database.query("show server_version;");
  const connectionUsage = await database.query({
    text: "select count(*)::int from pg_stat_activity where datname = $1;",
    values: [process.env.POSTGRES_DB],
  });

  response.status(200).json({
    update_at: updatedAt,
    dependencies: {
      database: {
        max_connections: parseInt(maxConnections.rows[0].max_connections),
        version: dbVersion.rows[0].server_version,
        connection_usage: connectionUsage.rows[0].count,
      },
    },
  });
}

export default status;

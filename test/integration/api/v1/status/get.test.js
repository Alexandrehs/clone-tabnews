test("should return 200 in page status", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.update_at).toBeDefined();
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.database.connection_usage).toEqual(1);

  const convertUpdateAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(convertUpdateAt);
});

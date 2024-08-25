const nextJest = require("next/jest");
const dotEnv = require("dotenv");

dotEnv.config({
  path: ".env.development",
});

const createNestJest = nextJest();
const jestConfig = createNestJest({
  moduleDirectories: ["node_modules", "<rootDir>"],
});

module.exports = jestConfig;

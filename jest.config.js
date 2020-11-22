module.exports = {
  roots: ["<rootDir>/server"],
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "@app/(.*)": ["<rootDir>/server/$1"],
    "@public/(.*)": ["<rootDir>/public/$1"],
    "@public": ["<rootDir>/public"],
    "@package": ["<rootDir>/package.json"],
  },
};

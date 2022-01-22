/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
    injectGlobals: false,
    moduleDirectories: ["src/", "node_modules/"],
    preset: "ts-jest",
    rootDir: "tests/",
    testEnvironment: "node",
    verbose: true,
};

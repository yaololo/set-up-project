const isProduction = process.env.NODE_ENV === "production";
const isLocal = process.env.NODE_ENV === "local";
const isTest = process.env.NODE_ENV === "test";

export const envConfig = {
  isProduction,
  isLocal,
  isTest
};

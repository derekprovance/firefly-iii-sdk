import { generate } from "openapi-typescript-codegen";
import * as path from "path";

async function generateSDK() {
  const inputFile = path.resolve(__dirname, "..", "firefly-iii-6.1.24-v1.yaml");
  const outputDir = path.resolve(__dirname, "..", "src", "sdk");

  try {
    await generate({
      input: inputFile,
      output: outputDir,
      useUnionTypes: true,
      exportSchemas: true,
      exportServices: false,
    });
    console.log("SDK generation completed successfully");
  } catch (error) {
    console.error("Error generating SDK:", error);
  }
}

generateSDK();

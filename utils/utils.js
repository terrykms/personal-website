import fs from "fs";
import path from "path";

const jsonDirectory = path.join(process.cwd(), "data");

export const getJSONData = (filename) => {
  const filePath = path.join(jsonDirectory, filename);
  const fileContent = fs.readFileSync(filePath);

  return JSON.parse(fileContent);
};

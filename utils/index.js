import {mkdirSync, writeFileSync} from "fs"

export const createDir = (dirName, parentDir = "dist") => {
  mkdirSync(`./${parentDir}/${dirName}`, { recursive: true });
};

export const createFile = (fileName, parentDir = "dist") => {
  writeFileSync(`./${parentDir}/${fileName}`, "", { flag: "a" });
};

import configs from "./data/configs.js"
import { createFile, createDir } from "./utils/index.js";

const {dirStructure, files} = configs.handlebarsConfig;

dirStructure.forEach(elem => createDir(elem));
files.forEach(elem => createFile(elem))
// Utility to show all the available files in the html as links

import fs from "fs";
const files =
  fs.readdirSync("./public").filter((f) => f.endsWith(".json")) || [];

const links = files
  .map((name) => `<a href="/${name}">${name}</a>`)
  .join("</br>\n");

const indexFile = fs.readFileSync("public/index.html", "utf8");

const divRegex = /<div[^>]*>([\s\S]*?)<\/div>/i; // at least one <div></div> should exist in the html

const data = indexFile.replace(divRegex, `<div>${links}</div>`);

fs.writeFileSync("public/index.html", data);

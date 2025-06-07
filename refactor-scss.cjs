const fs = require("fs");
const path = require("path");

const SRC = path.resolve(__dirname, "src");
const STYLES_DIR = path.join(SRC, "styles");

function walk(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      walk(full, callback);
    } else {
      callback(full);
    }
  });
}

function moveScssAndUpdateImports() {
  const moved = [];

  walk(STYLES_DIR, (scssPath) => {
    if (!scssPath.endsWith(".scss")) return;

    const fileName = path.basename(scssPath);
    const baseName = fileName.replace(".scss", "");

    const possibleLocations = [
      "components",
      "pages",
      "layout"
    ];

    let targetDir = null;

    for (const location of possibleLocations) {
      const searchPath = path.join(SRC, location);
      const match = findJsxFile(searchPath, baseName);
      if (match) {
        const jsxDir = path.dirname(match);
        const scssFolder = path.join(jsxDir, "scss");

        if (!fs.existsSync(scssFolder)) {
          fs.mkdirSync(scssFolder, { recursive: true });
        }

        const newPath = path.join(scssFolder, fileName);
        fs.renameSync(scssPath, newPath);
        moved.push({ jsxPath: match, oldImport: fileName, newImport: `./scss/${fileName}` });

        console.log(`✅ Moved ${fileName} to ${scssFolder}`);
        break;
      }
    }
  });

  // Now update imports in JSX files
  moved.forEach(({ jsxPath, oldImport, newImport }) => {
    const contents = fs.readFileSync(jsxPath, "utf8");
    const updated = contents.replace(
      new RegExp(`(['"\`].*?${oldImport}['"\`])`, "g"),
      `'${newImport}'`
    );
    fs.writeFileSync(jsxPath, updated, "utf8");
    console.log(`✏️  Updated imports in ${jsxPath}`);
  });
}

function findJsxFile(dir, baseName) {
  let result = null;
  walk(dir, (filePath) => {
    if (filePath.endsWith(`${baseName}.jsx`)) {
      result = filePath;
    }
  });
  return result;
}

moveScssAndUpdateImports();

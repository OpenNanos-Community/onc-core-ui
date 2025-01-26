import path from "path";
import fse from "fs-extra";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, "../dist");
const destinationDir =
  "E:\\SteamLibrary\\steamapps\\common\\nanos-world\\Server\\Packages\\simple-load";

const blacklist = ["Package.toml"];

async function cleanDestinationDir() {
  try {
    const files = await fse.readdir(destinationDir);
    for (const file of files) {
      if (!blacklist.includes(file)) {
        await fse.remove(path.join(destinationDir, file));
      }
    }
  } catch (err) {
    console.error("Error cleaning destination directory:", err);
  }
}

async function moveDistFolder() {
  try {
    await fse.ensureDir(destinationDir);
    await cleanDestinationDir();
    await fse.copy(sourceDir, destinationDir);
    console.log(
      "\n\x1b[32m✓\x1b[0m Build files have been moved to the package folder."
    );
  } catch (err) {
    console.error("Error moving files:", err);
  }
}

moveDistFolder();

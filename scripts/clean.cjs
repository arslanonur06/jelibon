const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
for (const name of [".next", "node_modules/.cache"]) {
  const target = path.join(root, name);
  try {
    fs.rmSync(target, { recursive: true, force: true });
    console.log("removed", name);
  } catch {
    // ok if missing
  }
}

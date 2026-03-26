import fs from "fs-extra";
import path from "path";

export default function evaluate() {
  const configPath = ".bitasmbl.json";

  if (!fs.existsSync(configPath)) {
    console.log("❌ Not initialized");
    return;
  }

  const config = fs.readJsonSync(configPath);

  console.log("📦 Collecting files...");

  const files = fs.readdirSync(process.cwd());

  console.log("🚀 Sending to Bitasmbl API...");

  // mock response
  console.log(`
Score: 8.2/10
Issues:
- Improve structure
- Add validation
`);
}

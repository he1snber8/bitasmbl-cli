import fs from "fs-extra";

export default function link(options: any) {
  if (!options.project) {
    console.log("❌ Provide project ID with --project");
    return;
  }

  const configPath = ".bitasmbl.json";

  if (!fs.existsSync(configPath)) {
    console.log("❌ Run 'bitasmbl init' first");
    return;
  }

  const config = fs.readJsonSync(configPath);
  config.projectId = options.project;

  fs.writeJsonSync(configPath, config, { spaces: 2 });

  console.log(`🔗 Linked to project ${options.project}`);
}

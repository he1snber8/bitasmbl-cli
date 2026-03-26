import fs from "fs-extra";

export default function init() {
  const config = {
    projectId: "",
    tasks: [],
  };

  fs.writeJsonSync(".bitasmbl.json", config, { spaces: 2 });
  console.log("✅ Bitasmbl initialized");
}

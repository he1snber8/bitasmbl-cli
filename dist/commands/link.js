"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = link;
const fs_extra_1 = __importDefault(require("fs-extra"));
function link(options) {
    if (!options.project) {
        console.log("❌ Provide project ID with --project");
        return;
    }
    const configPath = ".bitasmbl.json";
    if (!fs_extra_1.default.existsSync(configPath)) {
        console.log("❌ Run 'bitasmbl init' first");
        return;
    }
    const config = fs_extra_1.default.readJsonSync(configPath);
    config.projectId = options.project;
    fs_extra_1.default.writeJsonSync(configPath, config, { spaces: 2 });
    console.log(`🔗 Linked to project ${options.project}`);
}
//# sourceMappingURL=link.js.map
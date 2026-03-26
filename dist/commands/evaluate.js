"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = evaluate;
const fs_extra_1 = __importDefault(require("fs-extra"));
function evaluate() {
    const configPath = ".bitasmbl.json";
    if (!fs_extra_1.default.existsSync(configPath)) {
        console.log("❌ Not initialized");
        return;
    }
    const config = fs_extra_1.default.readJsonSync(configPath);
    console.log("📦 Collecting files...");
    const files = fs_extra_1.default.readdirSync(process.cwd());
    console.log("🚀 Sending to Bitasmbl API...");
    // mock response
    console.log(`
Score: 8.2/10
Issues:
- Improve structure
- Add validation
`);
}
//# sourceMappingURL=evaluate.js.map
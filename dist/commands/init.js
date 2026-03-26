"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = init;
const fs_extra_1 = __importDefault(require("fs-extra"));
function init() {
    const config = {
        projectId: "",
        tasks: [],
    };
    fs_extra_1.default.writeJsonSync(".bitasmbl.json", config, { spaces: 2 });
    console.log("✅ Bitasmbl initialized");
}
//# sourceMappingURL=init.js.map
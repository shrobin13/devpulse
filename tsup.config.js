import { defineConfig } from "tsup";
export default defineConfig({
    entry: ["./src/server.ts"],
    format: ["esm"], // Generate both CommonJS and ES Modules
    dts: false, // Generate .d.ts declaration files
    splitting: false, // Disable code splitting (useful for small libs)
    sourcemap: true, // Generate source maps
    clean: true, // Clean the output directory before each build
    outDir: "./dist/",
    bundle: true,
});
//# sourceMappingURL=tsup.config.js.map
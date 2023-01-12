import esbuild from "esbuild";
import config from "./config.js";

esbuild.build({
    ...config,
    // target: ["es2020", "chrome58", "edge16", "firefox57", "node12", "safari11"],
    minify: true,
});

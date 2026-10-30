// Brand guard: fails if gradients or emoji characters appear in source files.
// Run with `npm run check:brand` (also runs before every build).
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname, relative } from "node:path";

const root = process.cwd();
const targets = ["src", "public/site.webmanifest", "mdx-components.tsx"];
const extensions = new Set([".ts", ".tsx", ".js", ".mjs", ".css", ".md", ".mdx", ".json", ".webmanifest"]);

const rules = [
  { name: "gradient keyword", pattern: /gradient/i },
  { name: "Tailwind gradient utility", pattern: /\bbg-(linear|radial|conic)\b|\bbg-(linear|radial|conic)-/ },
  {
    name: "gradient stop utility",
    pattern: /(?<![\w-])(from|via|to)-(brand|ink|mist|white|black|transparent)(-\d{2,3})?(?![\w-])/,
  },
  { name: "emoji character", pattern: /\p{Extended_Pictographic}/u },
];

function walk(path, files = []) {
  let stats;
  try {
    stats = statSync(path);
  } catch {
    return files;
  }
  if (stats.isDirectory()) {
    for (const entry of readdirSync(path)) walk(join(path, entry), files);
  } else if (extensions.has(extname(path))) {
    files.push(path);
  }
  return files;
}

const files = targets.flatMap((target) => walk(join(root, target)));
const problems = [];

for (const file of files) {
  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, index) => {
    for (const rule of rules) {
      if (rule.pattern.test(line)) {
        problems.push(`${relative(root, file)}:${index + 1}  ${rule.name}: ${line.trim().slice(0, 120)}`);
      }
    }
  });
}

if (problems.length > 0) {
  console.error(`Brand check failed (${problems.length}):\n` + problems.join("\n"));
  process.exit(1);
}

console.log(`Brand check passed: ${files.length} files, no gradients or emoji.`);

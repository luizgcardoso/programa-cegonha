const fs = require("fs");
const path = require("path");

// Nome do arquivo consolidado de saída
const OUTPUT_FILE = "backend_context_for_notebooklm.md";

// Extensões de arquivo a incluir
const ALLOWED_EXTENSIONS = [".ts", ".js", ".json", ".prisma", ".sql"];

// Diretórios ou arquivos a ignorar completamente
const IGNORED_PATHS = [
  "node_modules",
  "dist",
  "build",
  "coverage",
  ".git",
  ".vscode",
  "package-lock.json",
  "yarn.lock",
  "pnpm-lock.yaml",
  OUTPUT_FILE,
];

// Pastas prioritárias para focar (deixe vazio [] para escanear a partir da raiz, ou especifique caminhos relativos como ['src'])
const TARGET_DIRS = ["src"];

function shouldIgnore(itemPath) {
  const baseName = path.basename(itemPath);
  return IGNORED_PATHS.some((ignored) => baseName === ignored);
}

function getFilesRecursively(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (shouldIgnore(fullPath)) continue;

    if (entry.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath));
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (ALLOWED_EXTENSIONS.includes(ext)) {
        results.push(fullPath);
      }
    }
  }

  return results;
}

function consolidate() {
  const rootDir = process.cwd();
  let filesToProcess = [];

  // Se 'src' existir ou diretórios específicos forem definidos, prioriza-os
  const targetRoots = TARGET_DIRS.filter((d) =>
    fs.existsSync(path.join(rootDir, d)),
  );

  if (targetRoots.length > 0) {
    targetRoots.forEach((dir) => {
      filesToProcess = filesToProcess.concat(
        getFilesRecursively(path.join(rootDir, dir)),
      );
    });
  } else {
    filesToProcess = getFilesRecursively(rootDir);
  }

  // Inclui package.json da raiz para contexto de dependências/scripts
  const rootPkg = path.join(rootDir, "package.json");
  if (fs.existsSync(rootPkg) && !filesToProcess.includes(rootPkg)) {
    filesToProcess.unshift(rootPkg);
  }

  const outputStream = fs.createWriteStream(path.join(rootDir, OUTPUT_FILE), {
    flags: "w",
  });

  outputStream.write("# Visão Consolidada do Backend (Código Fonte)\n\n");
  outputStream.write(`Gerado em: ${new Date().toISOString()}\n\n`);
  outputStream.write("## Resumo dos Arquivos Incluídos\n");

  filesToProcess.forEach((file) => {
    const relativePath = path.relative(rootDir, file).replace(/\\/g, "/");
    outputStream.write(`- \`${relativePath}\`\n`);
  });
  outputStream.write("\n---\n\n");

  filesToProcess.forEach((file) => {
    const relativePath = path.relative(rootDir, file).replace(/\\/g, "/");
    const ext = path.extname(file).replace(".", "") || "text";
    const content = fs.readFileSync(file, "utf8");

    outputStream.write(`### Arquivo: \`${relativePath}\`\n\n`);
    outputStream.write("```" + ext + "\n");
    outputStream.write(content);
    outputStream.write("\n```\n\n---\n\n");
  });

  outputStream.end();

  console.log(
    `\nSucesso! ${filesToProcess.length} arquivos consolidados em: ${OUTPUT_FILE}`,
  );
}

consolidate();

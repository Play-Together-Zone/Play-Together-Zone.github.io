import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const outDir = path.join(repoRoot, 'out');

function runGit(args, cwd = repoRoot) {
  return execFileSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
}

function getOptionalGitConfig(key) {
  try {
    return runGit(['config', '--get', key]);
  } catch {
    return '';
  }
}

if (!fs.existsSync(path.join(outDir, 'index.html'))) {
  console.error('Error: out/index.html not found. Run "npm run build" first.');
  process.exit(1);
}

// Ensure .nojekyll exists so GitHub Pages serves _next/ static assets
const nojekyllPath = path.join(outDir, '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
}

const remoteUrl = runGit(['remote', 'get-url', 'origin']);
const sourceCommit = runGit(['rev-parse', '--short', 'HEAD']);
const userName = getOptionalGitConfig('user.name') || 'Play-Together-Zone Deploy';
const userEmail =
  getOptionalGitConfig('user.email') || 'deploy@play-together-zone.github.io';

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ptz-gh-pages-'));

try {
  console.log(`Preparing gh-pages deploy from out/ (commit ${sourceCommit})...`);
  fs.cpSync(outDir, tmpDir, { recursive: true });

  runGit(['init', '-b', 'gh-pages'], tmpDir);
  runGit(['config', 'user.name', userName], tmpDir);
  runGit(['config', 'user.email', userEmail], tmpDir);
  runGit(['add', '-A'], tmpDir);
  runGit(
    ['commit', '-m', `Deploy Play-Together-Zone (${sourceCommit}) to gh-pages`],
    tmpDir,
  );

  console.log(`Pushing out/ to ${remoteUrl} (branch: gh-pages)...`);
  execFileSync('git', ['push', '--force', remoteUrl, 'gh-pages:gh-pages'], {
    cwd: tmpDir,
    stdio: 'inherit',
  });

  console.log('Successfully pushed static site to gh-pages branch!');
  console.log('Live URL (once GitHub Pages source is set to gh-pages / root): https://play-together-zone.github.io/');
} finally {
  fs.rmSync(tmpDir, { recursive: true, force: true });
}

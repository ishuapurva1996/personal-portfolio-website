import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { join } from 'node:path';
const output = join(import.meta.dirname, 'dist');
await mkdir(output, { recursive: true });
for (const name of await readdir(import.meta.dirname)) {
  if (/\.(html|css|js|svg|png|jpg|woff2?|ttf|pdf)$/.test(name)) await copyFile(join(import.meta.dirname, name), join(output, name));
}
console.log('Built static portfolio in dist/');

import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const root = process.cwd();
const fixture = mkdtempSync(join(tmpdir(), 'nicolas-publication-'));
try {
  mkdirSync(join(fixture, 'content/insights'), { recursive: true });
  for (const [slug, frontmatter] of Object.entries({
    published: 'date: "2025-01-01"',
    draft: 'date: "2025-01-01"\ndraft: true',
    future: 'date: "2999-01-01"',
    invalid: 'date: "not-a-date"',
  })) {
    writeFileSync(join(fixture, 'content/insights', `${slug}.mdx`), `---\ntitle: Test\n${frontmatter}\n---\nTest`);
  }
  process.chdir(fixture);
  const { getAllPosts, getPostBySlug } = await import(new URL('../lib/posts.ts', import.meta.url));
  assert.deepEqual(getAllPosts().map(p => p.slug), ['published']);
  assert.ok(getPostBySlug('published'));
  for (const slug of ['draft', 'future', 'invalid', '../published', 'missing']) assert.equal(getPostBySlug(slug), null, slug);
  console.log('PASS: published articles accessible; drafts, future/invalid dates, missing and unsafe slugs excluded.');
} finally { process.chdir(root); rmSync(fixture, {recursive:true,force:true}); }

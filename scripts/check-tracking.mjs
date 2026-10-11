import assert from 'node:assert/strict';
import { pushToDataLayer } from '../lib/gtm.ts';
for (const hostname of ['localhost','127.0.0.1','preview.vercel.app']) {
  globalThis.window = {location:{hostname}};
  pushToDataLayer({event:'view_insight'});
  assert.equal(window.dataLayer,undefined,hostname);
}
for (const hostname of ['nicolas.com.ar','www.nicolas.com.ar']) {
  globalThis.window = {location:{hostname}};
  pushToDataLayer({event:'contact_click',contact_method:'email',page_path:'/consulting'});
  assert.deepEqual(window.dataLayer,[{event:'contact_click',contact_method:'email',page_path:'/consulting'}]);
}
delete globalThis.window;
console.log('PASS: preview/local excluded; canonical hosts queue exactly one event per call.');

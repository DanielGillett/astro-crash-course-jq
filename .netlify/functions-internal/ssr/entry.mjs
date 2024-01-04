import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_dsboC5v5.mjs';

const _page0  = () => import('./chunks/generic_s2pl3G6a.mjs');
const _page1  = () => import('./chunks/index_IGk-G_rK.mjs');
const _page2  = () => import('./chunks/blog_8Kfd3C3E.mjs');
const _page3  = () => import('./chunks/_slug__R6DQI6bD.mjs');
const _page4  = () => import('./chunks/test_nBYqbzgq.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/blog/blog.astro", _page2],["src/pages/blog/[slug].astro", _page3],["src/pages/api/test.ts", _page4]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };

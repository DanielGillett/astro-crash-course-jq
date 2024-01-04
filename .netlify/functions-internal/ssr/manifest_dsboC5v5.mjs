import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_h2-8E5An.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4PK_pqbL.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.xPbCmIdf.css"}],"routeData":{"route":"/blog/blog","type":"page","pattern":"^\\/blog\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/blog.astro","pathname":"/blog/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4PK_pqbL.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.xPbCmIdf.css"}],"routeData":{"route":"/blog/[slug]","type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/test","type":"endpoint","pattern":"^\\/api\\/test$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"test","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/test.ts","pathname":"/api/test","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/pages/blog/blog.astro",{"propagation":"in-tree","containsHead":true}],["/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/pages/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/blog@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/blog/blog.astro":"chunks/pages/blog_MG6by4Q9.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_KmshfMrv.mjs","/src/pages/api/test.ts":"chunks/pages/test_6Zggg7J9.mjs","/src/pages/index.astro":"chunks/prerender_qD2ESDCp.mjs","\u0000@astrojs-manifest":"manifest_dsboC5v5.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_s2pl3G6a.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_IGk-G_rK.mjs","\u0000@astro-page:src/pages/blog/blog@_@astro":"chunks/blog_8Kfd3C3E.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug__R6DQI6bD.mjs","\u0000@astro-page:src/pages/api/test@_@ts":"chunks/test_nBYqbzgq.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/behind-the-scenes-with-our-artists.mdx?astroContentCollectionEntry=true":"chunks/behind-the-scenes-with-our-artists_uLsmn3ts.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/collaboration-in-music-production.md?astroContentCollectionEntry=true":"chunks/collaboration-in-music-production_jYrssT0o.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/creating-a-successful-music-brand.md?astroContentCollectionEntry=true":"chunks/creating-a-successful-music-brand_UNeTBSyu.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/gear-is-insanely-expensive.md?astroContentCollectionEntry=true":"chunks/gear-is-insanely-expensive_tmjp0DMz.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/guitar-solos-are-still-awesome.md?astroContentCollectionEntry=true":"chunks/guitar-solos-are-still-awesome_4TjPGr-7.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/live-music-is-crucial.md?astroContentCollectionEntry=true":"chunks/live-music-is-crucial_Abl3TCjM.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/making-a-home-studio.md?astroContentCollectionEntry=true":"chunks/making-a-home-studio_Fl2lZs1M.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/the-art-of-music-production.md?astroContentCollectionEntry=true":"chunks/the-art-of-music-production_saV847KJ.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/the-importance-of-audio-quality.md?astroContentCollectionEntry=true":"chunks/the-importance-of-audio-quality_Y8KYL_pl.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/tune-your-snare-drum.md?astroContentCollectionEntry=true":"chunks/tune-your-snare-drum_sQ0RKDgJ.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/behind-the-scenes-with-our-artists.mdx?astroPropagatedAssets":"chunks/behind-the-scenes-with-our-artists_yqiBZ-un.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/collaboration-in-music-production.md?astroPropagatedAssets":"chunks/collaboration-in-music-production_RBepP-It.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/creating-a-successful-music-brand.md?astroPropagatedAssets":"chunks/creating-a-successful-music-brand_TzVH9CFn.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/gear-is-insanely-expensive.md?astroPropagatedAssets":"chunks/gear-is-insanely-expensive_i3CM51Xu.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/guitar-solos-are-still-awesome.md?astroPropagatedAssets":"chunks/guitar-solos-are-still-awesome_35dq4hEW.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/live-music-is-crucial.md?astroPropagatedAssets":"chunks/live-music-is-crucial_zWuxauKe.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/making-a-home-studio.md?astroPropagatedAssets":"chunks/making-a-home-studio_NiMqSzM0.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/the-art-of-music-production.md?astroPropagatedAssets":"chunks/the-art-of-music-production_4uwEi_xf.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/the-importance-of-audio-quality.md?astroPropagatedAssets":"chunks/the-importance-of-audio-quality_6xtvIB0s.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/tune-your-snare-drum.md?astroPropagatedAssets":"chunks/tune-your-snare-drum_1aqgBh3T.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/behind-the-scenes-with-our-artists.mdx":"chunks/behind-the-scenes-with-our-artists_8Kiefvjk.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/collaboration-in-music-production.md":"chunks/collaboration-in-music-production_U6YIeqxJ.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/creating-a-successful-music-brand.md":"chunks/creating-a-successful-music-brand_X7nU4Hmm.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/gear-is-insanely-expensive.md":"chunks/gear-is-insanely-expensive_U-BNcJpw.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/guitar-solos-are-still-awesome.md":"chunks/guitar-solos-are-still-awesome_4hwcrVPB.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/live-music-is-crucial.md":"chunks/live-music-is-crucial_pdtRl2RH.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/making-a-home-studio.md":"chunks/making-a-home-studio_DFFTVztx.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/the-art-of-music-production.md":"chunks/the-art-of-music-production_iKlOHeOF.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/the-importance-of-audio-quality.md":"chunks/the-importance-of-audio-quality_FD5AXN1p.mjs","/root/daniel/code/astro/tutorials/freeCodeCamp/fcc-astro-crash-course/src/content/posts/tune-your-snare-drum.md":"chunks/tune-your-snare-drum_rg6ISuzm.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.4PK_pqbL.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/record.kc3ys_j9.jpg","/_astro/gear.hUEiuUwP.jpg","/_astro/producer.S_TiAc71.jpg","/_astro/band.jCnNDT3s.jpg","/_astro/speaker.mGQbhz_J.jpg","/_astro/guitarist.fN4jHBc4.jpg","/_astro/drums.ihun2JdG.jpg","/_astro/concert.kidStR0z.jpg","/_astro/photoshoot.kt5KZL7X.jpg","/_astro/studio.Cw55MnzH.jpg","/_astro/_slug_.xPbCmIdf.css","/favicon.svg","/heartbeat.png","/_astro/hoisted.4PK_pqbL.js","/index.html"]});

export { manifest };

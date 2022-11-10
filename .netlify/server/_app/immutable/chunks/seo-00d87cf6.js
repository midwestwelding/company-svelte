var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  S: () => SvelteSeo,
  a: () => about,
  b: () => contact,
  c: () => careers,
  d: () => catwalks,
  e: () => conveyors,
  f: () => distributors,
  g: () => elevators,
  h: () => home,
  i: () => feedBodies,
  j: () => consulting,
  k: () => drafting,
  l: () => feedBodyRepairs,
  m: () => mixers,
  n: () => machineShop,
  o: () => manufacturing,
  p: () => products,
  s: () => services,
  v: () => vendors
});
module.exports = __toCommonJS(stdin_exports);
var import_index_98426a00 = require("./index-98426a00.js");
const SvelteSeo = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  let { title = void 0 } = $$props;
  let { noindex = false } = $$props;
  let { nofollow = false } = $$props;
  let { description = void 0 } = $$props;
  let { keywords = void 0 } = $$props;
  let { canonical = void 0 } = $$props;
  let { openGraph = void 0 } = $$props;
  let { twitter = void 0 } = $$props;
  let { jsonLd = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.noindex === void 0 && $$bindings.noindex && noindex !== void 0)
    $$bindings.noindex(noindex);
  if ($$props.nofollow === void 0 && $$bindings.nofollow && nofollow !== void 0)
    $$bindings.nofollow(nofollow);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.jsonLd === void 0 && $$bindings.jsonLd && jsonLd !== void 0)
    $$bindings.jsonLd(jsonLd);
  return `${$$result.head += `${title ? `${$$result.title = `<title>${(0, import_index_98426a00.b)(title)}</title>`, ""}` : ``}<meta name="${"robots"}"${(0, import_index_98426a00.a)("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)} data-svelte="svelte-1q8xl96"><meta name="${"googlebot"}"${(0, import_index_98426a00.a)("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)} data-svelte="svelte-1q8xl96">${description ? `<meta name="${"description"}"${(0, import_index_98426a00.a)("content", description, 0)} data-svelte="svelte-1q8xl96">` : ``}${canonical ? `<link rel="${"canonical"}"${(0, import_index_98426a00.a)("href", canonical, 0)} data-svelte="svelte-1q8xl96">` : ``}${keywords ? `<meta name="${"keywords"}"${(0, import_index_98426a00.a)("content", keywords, 0)} data-svelte="svelte-1q8xl96">` : ``}${openGraph ? `${openGraph.title ? `<meta property="${"og:title"}"${(0, import_index_98426a00.a)("content", openGraph.title, 0)} data-svelte="svelte-1q8xl96">` : ``}

    ${openGraph.description ? `<meta property="${"og:description"}"${(0, import_index_98426a00.a)("content", openGraph.description, 0)} data-svelte="svelte-1q8xl96">` : ``}

    ${openGraph.url || canonical ? `<meta property="${"og:url"}"${(0, import_index_98426a00.a)("content", openGraph.url || canonical, 0)} data-svelte="svelte-1q8xl96">` : ``}

    ${openGraph.type ? `<meta property="${"og:type"}"${(0, import_index_98426a00.a)("content", openGraph.type.toLowerCase(), 0)} data-svelte="svelte-1q8xl96">` : ``}

    ${openGraph.article ? `${openGraph.article.publishedTime ? `<meta property="${"article:published_time"}"${(0, import_index_98426a00.a)("content", openGraph.article.publishedTime, 0)} data-svelte="svelte-1q8xl96">` : ``}

      ${openGraph.article.modifiedTime ? `<meta property="${"article:modified_time"}"${(0, import_index_98426a00.a)("content", openGraph.article.modifiedTime, 0)} data-svelte="svelte-1q8xl96">` : ``}

      ${openGraph.article.expirationTime ? `<meta property="${"article:expiration_time"}"${(0, import_index_98426a00.a)("content", openGraph.article.expirationTime, 0)} data-svelte="svelte-1q8xl96">` : ``}

      ${openGraph.article.section ? `<meta property="${"article:section"}"${(0, import_index_98426a00.a)("content", openGraph.article.section, 0)} data-svelte="svelte-1q8xl96">` : ``}

      ${openGraph.article.authors && openGraph.article.authors.length ? `${(0, import_index_98426a00.e)(openGraph.article.authors, (author) => {
    return `<meta property="${"article:author"}"${(0, import_index_98426a00.a)("content", author, 0)} data-svelte="svelte-1q8xl96">`;
  })}` : ``}

      ${openGraph.article.tags && openGraph.article.tags.length ? `${(0, import_index_98426a00.e)(openGraph.article.tags, (tag) => {
    return `<meta property="${"article:tag"}"${(0, import_index_98426a00.a)("content", tag, 0)} data-svelte="svelte-1q8xl96">`;
  })}` : ``}` : ``}

    ${openGraph.images && openGraph.images.length ? `${(0, import_index_98426a00.e)(openGraph.images, (image) => {
    return `<meta property="${"og:image"}"${(0, import_index_98426a00.a)("content", image.url, 0)} data-svelte="svelte-1q8xl96">
        ${image.alt ? `<meta property="${"og:image:alt"}"${(0, import_index_98426a00.a)("content", image.alt, 0)} data-svelte="svelte-1q8xl96">` : ``}
        ${image.width ? `<meta property="${"og:image:width"}"${(0, import_index_98426a00.a)("content", image.width.toString(), 0)} data-svelte="svelte-1q8xl96">` : ``}
        ${image.height ? `<meta property="${"og:image:height"}"${(0, import_index_98426a00.a)("content", image.height.toString(), 0)} data-svelte="svelte-1q8xl96">` : ``}`;
  })}` : ``}` : ``}${twitter ? `<meta name="${"twitter:card"}"${(0, import_index_98426a00.a)("content", twitter.card || "summary_large_image", 0)} data-svelte="svelte-1q8xl96">
    ${twitter.site ? `<meta name="${"twitter:site"}"${(0, import_index_98426a00.a)("content", twitter.site, 0)} data-svelte="svelte-1q8xl96">` : ``}
    ${twitter.title ? `<meta name="${"twitter:title"}"${(0, import_index_98426a00.a)("content", twitter.title, 0)} data-svelte="svelte-1q8xl96">` : ``}
    ${twitter.description ? `<meta name="${"twitter:description"}"${(0, import_index_98426a00.a)("content", twitter.description, 0)} data-svelte="svelte-1q8xl96">` : ``}
    ${twitter.image ? `<meta name="${"twitter:image"}"${(0, import_index_98426a00.a)("content", twitter.image, 0)} data-svelte="svelte-1q8xl96">` : ``}
     ${twitter.imageAlt ? `<meta name="${"twitter:image:alt"}"${(0, import_index_98426a00.a)("content", twitter.imageAlt, 0)} data-svelte="svelte-1q8xl96">` : ``}
    ${twitter.player ? `<meta name="${"twitter:player"}"${(0, import_index_98426a00.a)("content", twitter.player, 0)} data-svelte="svelte-1q8xl96">` : ``}
     ${twitter.playerWidth ? `<meta name="${"twitter:player:width"}"${(0, import_index_98426a00.a)("content", twitter.playerWidth, 0)} data-svelte="svelte-1q8xl96">` : ``}
    ${twitter.playerHeight ? `<meta name="${"twitter:player:height"}"${(0, import_index_98426a00.a)("content", twitter.playerHeight, 0)} data-svelte="svelte-1q8xl96">` : ``}` : ``}${jsonLd ? `<!-- HTML_TAG_START -->${`<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    ...jsonLd
  }) + "<"}/script>`}<!-- HTML_TAG_END -->` : ``}${slots.default ? slots.default({}) : ``}`, ""}`;
});
const home = {
  title: "Home | MWM",
  description: "Midwest Welding & Manufacturing (MWM) is a custom agricultural equipment manufacturer with 75yrs of providing products and repair services to greater midwest."
};
const about = {
  title: "About Us | MWM",
  description: "Midwest Welding & Manufacturing (MWM), formerly Jakel Co and Midwest General Repair and Fabrication (MGRF), has 75yrs of providing products and repair services to greater midwest."
};
const careers = {
  title: "Rewarding Careers | MWM",
  description: "Midwest Welding & Manufacturing (MWM) has been employing people for 75 years. See our list of available positions and join our team!"
};
const vendors = {
  title: "Industry Vendors | MWM",
  description: "As custom agricultural equipment manufacturer Midwest Welding & Manufacturing (MWM) has relationships with industry leading vendors. Availability and cost savings we can share with you."
};
const contact = {
  title: "Contact Us | MWM",
  description: "Contact Midwest Welding & Manufacturing (MWM) today to learn what a custom agricultural equipment we can build, install or service for you."
};
const products = {
  title: "Customized Products | MWM",
  description: "Midwest Welding & Manufacturing (MWM) has a long list of custom agricultural equipment. 75 years of fabrication and service."
};
const catwalks = {
  title: "Products: Catwalks/Manwalks | MWM",
  description: "Midwest Welding & Manufacturing (MWM) has a long list of custom agricultural equipment. 75 years of fabrication and service."
};
const conveyors = {
  title: "Products: Conveyors | MWM",
  description: "Midwest Welding & Manufacturing can manufacture you a custom product conveyor that fits your size and speed. Contact us today for more information."
};
const distributors = {
  title: "Products: Distributors | MWM",
  description: "Midwest Welding & Manufacturing (MWM) has a long list of custom agricultural equipment. 75 years of fabrication and service."
};
const elevators = {
  title: "Products: Elevators | MWM",
  description: "Midwest Welding & Manufacturing (MWM) has a long list of custom agricultural equipment. 75 years of fabrication and service."
};
const feedBodies = {
  title: "Products: Feed Bodies | MWM",
  description: "Midwest Welding & Manufacturing (MWM) has a long list of custom agricultural equipment. 75 years of fabrication and service."
};
const mixers = {
  title: "Products: Mixers | MWM",
  description: "Midwest Welding & Manufacturing (MWM) has a long list of custom agricultural equipment. 75 years of fabrication and service."
};
const services = {
  title: "Professional Services | MWM",
  description: "Midwest Welding & Manufacturing (MWM) has been providing repair services to agricultural equipment in the greater Midwest for 75 years, as Jakel Co, and Midwest General Repair & Fabrication (MGRF)."
};
const consulting = {
  title: "Consulting Services | MWM",
  description: "Midwest Welding & Manufacturing (MWM) has many years of experience in the agricultural, fertilizer/agronomy and feed mill industries. We can provide you with educated and learned experience."
};
const drafting = {
  title: "Drafting Services | MWM",
  description: "Midwest Welding & Manufacturing (MWM) has trained and skills draftsmen that can take your ideas or parts and turn them into prints."
};
const feedBodyRepairs = {
  title: "Bulk Feed Body Repairs",
  description: "Midwest Welding & Manfucturing (MWM) has offered repair services on all brands of Feed Bodies for more then 50 years."
};
const machineShop = {
  title: "Machining Services | MWM",
  description: "MWM is a custom agricultural equipment manufacturer with 75yrs of providing products and repair services to greater midwest."
};
const manufacturing = {
  title: "Manufacturing and Fabrication Services | MWM",
  description: "MWM is a custom agricultural equipment manufacturer with 75yrs of providing products and repair services to greater midwest."
};

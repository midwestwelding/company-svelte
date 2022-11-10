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
  default: () => Drafting,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_98426a00 = require("../../../../_app/immutable/chunks/index-98426a00.js");
var import_featuredImage_3a938a6c = require("../../../../_app/immutable/chunks/featuredImage-3a938a6c.js");
var import_seo_00d87cf6 = require("../../../../_app/immutable/chunks/seo-00d87cf6.js");
const prerender = true;
const Drafting = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_98426a00.v)(import_featuredImage_3a938a6c.F, "FeaturedImage").$$render($$result, {
    imageUrl: "'/services/featured-drafting.webp'",
    pageName: "Drafting",
    pageTagline: "",
    imagePosition: "center"
  }, {}, {})}

<div class="${"w-screen flex justify-center"}"><div class="${"w-full max-w-ninety lg:max-w-screen-lg py-8"}"><p>We rely on state-of-the-art Solidworks\xAE application and system and our draftsmen to take your idea from conception to completion in a detailed manner. We take the time to get a solid understanding of what you need and have in-house draftsmen that make sure to keep you involved so you are able to receive your purpose-fit part or product. We are capable of producing drawings that require only one item, or hundreds of items with multiple sub-assemblies.</p></div></div>

${(0, import_index_98426a00.v)(import_seo_00d87cf6.S, "SvelteSEO").$$render($$result, {
    title: import_seo_00d87cf6.k.title,
    description: import_seo_00d87cf6.k.description
  }, {}, {})}`;
});

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
  default: () => Elevators,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_98426a00 = require("../../../../_app/immutable/chunks/index-98426a00.js");
var import_featuredImage_3a938a6c = require("../../../../_app/immutable/chunks/featuredImage-3a938a6c.js");
var import_seo_00d87cf6 = require("../../../../_app/immutable/chunks/seo-00d87cf6.js");
const prerender = true;
const Elevators = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_98426a00.v)(import_featuredImage_3a938a6c.F, "FeaturedImage").$$render($$result, {
    imageUrl: "'/products/featured-elevators.webp'",
    pageName: "Elevators",
    pageTagline: "",
    imagePosition: "center"
  }, {}, {})}

<div class="${"w-screen flex justify-center"}"><div class="${"w-full max-w-ninety lg:max-w-screen-lg py-8"}"><p>You may have unique and specific needs for moving your product. MGRF has built and installed elevator legs to move many different products of varying consistencies. We can custom build your elevator leg to fit your needs whether it is a 10\u2019 leg or it reaches over 200\u2019. We\u2019ve been there. We\u2019ve done that. We want to install something that will work for you specifically.</p></div></div>

<div class="${"w-screen flex justify-center bg-blue text-white"}"><div class="${"w-full max-w-ninety lg:max-w-screen-lg py-8"}"><h3>Options</h3>
    <h4>Materials</h4>
    <div class="${"grid grid-cols-1 lg:grid-cols-3 gap-4"}"><div><img src="${"/galvanized.webp"}" alt="${"Galvanized Steel"}">
        <b>Galvanized</b></div>
      <div><img src="${"/painted-steel.webp"}" alt="${"Painted Steel"}">
        <b>Painted Steel</b></div>
      <div><img src="${"/stainless.webp"}" alt="${"Stainless Steel"}">
        <b>Stainless</b></div></div>
    <ul class="${"list-disc pt-5 pl-8"}"><li>Slotted Boot Pulleys</li>
      <li>Cup Venting</li>
      <li>Head &amp; Boot Lining</li>
      <li>Heavier Gauge Trunking</li></ul></div></div>

${(0, import_index_98426a00.v)(import_seo_00d87cf6.S, "SvelteSEO").$$render($$result, {
    title: import_seo_00d87cf6.g.title,
    description: import_seo_00d87cf6.g.description
  }, {}, {})}`;
});

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
  default: () => Mixers,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_98426a00 = require("../../../../_app/immutable/chunks/index-98426a00.js");
var import_featuredImage_3a938a6c = require("../../../../_app/immutable/chunks/featuredImage-3a938a6c.js");
var import_seo_00d87cf6 = require("../../../../_app/immutable/chunks/seo-00d87cf6.js");
const prerender = true;
const Mixers = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_98426a00.v)(import_featuredImage_3a938a6c.F, "FeaturedImage").$$render($$result, {
    imageUrl: "'/products/featured-mixers.webp'",
    pageName: "Mixers",
    pageTagline: "",
    imagePosition: "center"
  }, {}, {})}

<div class="${"w-screen flex justify-center bg-blue text-white"}"><div class="${"w-full max-w-ninety lg:max-w-screen-lg py-8"}"><h3>Models</h3>
    <div class="${"grid grid-cols-1 lg:grid-cols-2 gap-4"}"><div><h4>Tumble Mixer</h4>
        <div><h5>Size Options</h5>
          <p>1 Ton to 15 Ton Capacity Standard Sizes to 1500 Cubic Feet Low Horsepower required.</p>
          <h5>Options</h5>
          <p>Liquid Pre-blender</p></div></div>
      <div><h4>Vertical Mixer</h4>
        <p>Our Combo Vertical Mixers come in a number of capacities, ranging from 2 Ton (136 cubic feet) to 9 Ton (532 cubic feet). They include both a top motor, capable of running at 1800 RPM and a bottom motor, capable of running at 1200 RPM. They provide a combination of cross blending and vertical blending.</p></div></div></div></div>

<div class="${"w-screen flex justify-center"}"><div class="${"w-full max-w-ninety lg:max-w-screen-lg py-8"}"><h3>Options</h3>
    <h4>Materials</h4>
    <div class="${"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"}"><div><img src="${"/abrasive-resistant.webp"}" alt="${"Abrasive Resistant"}">
        <b>Abrasive Resistant (AR)</b></div>
      <div><img src="${"/cor-ten.webp"}" alt="${"Cor-Ten"}">
        <b>Cor-Ten</b></div>
      <div><img src="${"/painted-steel.webp"}" alt="${"Painted Steel"}">
        <b>Painted Steel</b></div>
      <div><img src="${"/stainless.webp"}" alt="${"Stainless Steel"}">
        <b>Stainless Steel</b></div></div></div></div>


${(0, import_index_98426a00.v)(import_seo_00d87cf6.S, "SvelteSEO").$$render($$result, {
    title: import_seo_00d87cf6.m.title,
    description: import_seo_00d87cf6.m.description
  }, {}, {})}`;
});

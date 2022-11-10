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
  default: () => Parts,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_98426a00 = require("../../../../_app/immutable/chunks/index-98426a00.js");
var import_featuredImage_3a938a6c = require("../../../../_app/immutable/chunks/featuredImage-3a938a6c.js");
const prerender = true;
const Parts = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_98426a00.v)(import_featuredImage_3a938a6c.F, "FeaturedImage").$$render($$result, {
    imageUrl: "'/services/featured-parts.webp'",
    pageName: "Parts",
    pageTagline: "",
    imagePosition: "center"
  }, {}, {})}

<div class="${"w-screen flex justify-center"}"><div class="${"w-full max-w-ninety lg:max-w-screen-lg py-8"}"><p class="${"mb-2"}">MWM works with many vendors to be able to provide its customers with timely delivered parts. These parts can be ordered by calling our parts department or by walking in to our office in Reeseville, WI. Our readily available materials and parts may include:</p>
      <ul class="${"list-disc pl-8"}"><li>Aluminum Sheet/Plate</li>
        <li>Aluminum Flat</li>
        <li>Steel (Mild, Stainless, AR) Sheet/Plate</li>
        <li>Steel (Mild) Flat</li>
        <li>Steel Round Stock</li>
        <li>UHMW Sheets</li>
        <li>Bolts (Zinc, Stainless, Elevator)</li>
        <li>Nuts (Zinc, Stainless, Flange</li>
        <li>Bearings</li>
        <li>Select Motors</li>
        <li>Parts for MWM\u2019s products
          <ul class="${"list-disc pl-8"}"><li>Feed Bodies</li>
            <li>Elevators</li>
            <li>Conveyors</li>
            <li>Distributors</li>
            <li>2-ways</li>
            <li>Mixers</li>
            <li>Shovelveyors</li></ul></li></ul>
      <p class="${"mt-2"}">And much more. Call or stop by today.</p></div></div>

${$$result.head += `${$$result.title = `<title>Services: Purchase Parts | MWM</title>`, ""}<meta name="${"description"}" content="${"MWM is a custom agricultural equipment manufacturer with 75yrs of providing products and repair services to greater midwest."}" data-svelte="svelte-w42ww6"><meta name="${"robots"}" content="${"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}" data-svelte="svelte-w42ww6">`, ""}`;
});

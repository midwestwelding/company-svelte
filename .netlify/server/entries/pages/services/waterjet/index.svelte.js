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
  default: () => Waterjet,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_98426a00 = require("../../../../_app/immutable/chunks/index-98426a00.js");
var import_featuredImage_3a938a6c = require("../../../../_app/immutable/chunks/featuredImage-3a938a6c.js");
const prerender = true;
const Waterjet = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_98426a00.v)(import_featuredImage_3a938a6c.F, "FeaturedImage").$$render($$result, {
    imageUrl: "'/services/featured-waterjet.webp'",
    pageName: "Waterjet",
    pageTagline: "",
    imagePosition: "bottom"
  }, {}, {})}
<div class="${"w-screen flex justify-center"}"><div class="${"w-full max-w-ninety lg:max-w-screen-lg py-8"}"><p class="${"py-2"}">Operating at 60,000 PSI, moving in 2 computer-controlled directions, on a cutting surface that is 6\u2019 X 12\u2019, our waterjet is able to cut material of a very wide range of types and thicknesses with water and garnet. We have experience with very thin rubbers, plywood, plexiglass, UHMW, Aluminum, Steel, Marble and Granite. This method is superior to laser and plasma because it can cut materials that would otherwise melt or burn, like rubber, plastics and wood.</p>
    <p class="${"py-2"}">The waterjet\u2019s application is perfectly suited for prototypes, part replacements, templates, blanks, signs and bulk part orders. Contact us today to find out how we can serve you!</p></div></div>

${$$result.head += `${$$result.title = `<title>Services: Waterjet Cutting | MWM</title>`, ""}<meta name="${"description"}" content="${"MWM is a custom agricultural equipment manufacturer with 75yrs of providing products and repair services to greater midwest."}" data-svelte="svelte-mrohfj"><meta name="${"robots"}" content="${"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}" data-svelte="svelte-mrohfj">`, ""}`;
});

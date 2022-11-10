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
  default: () => Painting,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_98426a00 = require("../../../../_app/immutable/chunks/index-98426a00.js");
var import_featuredImage_3a938a6c = require("../../../../_app/immutable/chunks/featuredImage-3a938a6c.js");
const prerender = true;
const Painting = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_98426a00.v)(import_featuredImage_3a938a6c.F, "FeaturedImage").$$render($$result, {
    imageUrl: "'/services/featured-painting.webp'",
    pageName: "Painting",
    pageTagline: "",
    imagePosition: "right"
  }, {}, {})}

<div class="${"w-screen flex justify-center"}"><div class="${"w-full max-w-ninety lg:max-w-screen-lg py-8"}"><p>We have a 14\u2019 wide by 14\u2019 tall by 35\u2019 long (we can go longer in some cases) state-of-the-art spray booth for applying wet paint. The booth includes an advanced curing cycle that can cure a freshly painted item in 2 hours. We have used our space to paint everything from small sprockets to large garbage trucks.</p></div></div>

${$$result.head += `${$$result.title = `<title>Services: Painting | MWM</title>`, ""}<meta name="${"description"}" content="${"MWM is a custom agricultural equipment manufacturer with 75yrs of providing products and repair services to greater midwest."}" data-svelte="svelte-y86dyh"><meta name="${"robots"}" content="${"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}" data-svelte="svelte-y86dyh">`, ""}`;
});

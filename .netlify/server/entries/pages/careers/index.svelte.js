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
  default: () => Careers,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_98426a00 = require("../../../_app/immutable/chunks/index-98426a00.js");
var import_featuredImage_3a938a6c = require("../../../_app/immutable/chunks/featuredImage-3a938a6c.js");
var import_seo_00d87cf6 = require("../../../_app/immutable/chunks/seo-00d87cf6.js");
const prerender = true;
const Careers = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  const careers$1 = [
    {
      title: "Field Service Technician",
      description: "<p>On-site installation & repair of equipment across a wide variety of industries</p>",
      rate: ""
    },
    {
      title: "Shop Team Member",
      description: "<p>Assists in welding, equipment repair, and building of feed body trucks</p>",
      rate: ""
    }
  ];
  return `${(0, import_index_98426a00.v)(import_featuredImage_3a938a6c.F, "FeaturedImage").$$render($$result, {
    imageUrl: "'/featured-careers.webp'",
    pageName: "Careers",
    pageTagline: "Hiring Experts",
    imagePosition: "center"
  }, {}, {})}

<div class="${"w-screen flex justify-center"}"><div class="${"w-full max-w-ninety lg:max-w-screen-lg py-8"}"><h3>Currently Hiring for:</h3>
    <div class="${"pb-8"}">${(0, import_index_98426a00.e)(careers$1, (career) => {
    return `<div class="${"flex py-3"}"><div class="${"flex-grow"}"><h4>${(0, import_index_98426a00.b)(career.title)}</h4>
          <p><!-- HTML_TAG_START -->${career.description}<!-- HTML_TAG_END --></p>
          <b>${(0, import_index_98426a00.b)(career.rate)}</b></div>
        <div class="${"flex-shrink align-center"}"><a href="${"/apply"}" class="${"bg-blue text-white text-center p-3 font-semibold hover:bg-blue-transparent"}">Apply</a></div>
      </div>`;
  })}</div>
    <div class="${"pt-8"}"><a href="${"https://transparency-in-coverage.uhc.com/"}" title="${"Transparency in Coverage"}">TiC</a></div></div></div>

${(0, import_index_98426a00.v)(import_seo_00d87cf6.S, "SvelteSEO").$$render($$result, {
    title: import_seo_00d87cf6.c.title,
    description: import_seo_00d87cf6.c.description
  }, {}, {})}`;
});

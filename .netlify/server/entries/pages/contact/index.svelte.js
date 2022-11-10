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
  default: () => Contact,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_98426a00 = require("../../../_app/immutable/chunks/index-98426a00.js");
var import_featuredImage_3a938a6c = require("../../../_app/immutable/chunks/featuredImage-3a938a6c.js");
var import_seo_00d87cf6 = require("../../../_app/immutable/chunks/seo-00d87cf6.js");
const prerender = true;
const Contact = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_98426a00.v)(import_featuredImage_3a938a6c.F, "FeaturedImage").$$render($$result, {
    imageUrl: "'/featured-about.webp'",
    pageName: "Contact Us",
    pageTagline: "Looking Forward to Hearing from You",
    imagePosition: "top"
  }, {}, {})}

<div class="${"w-screen flex justify-center bg-blue py-8"}"><form method="${"post"}" name="${"contactUs"}" data-netlify="${"true"}" data-netlify-honeypot="${"bot-field"}" class="${"w-full max-w-ninety lg:max-w-screen-lg grid grid-cols-2"}"><input type="${"hidden"}" name="${"form-name"}" value="${"contactUs"}">
      <div class="${"m-3"}"><input class="${"w-full p-2"}" name="${"name"}" type="${"text"}" placeholder="${"Name"}" required></div>
      <div class="${"m-3"}"><input class="${"w-full p-2"}" name="${"email"}" type="${"text"}" placeholder="${"Email"}" required></div>
      <div class="${"col-span-2 m-3"}"><p class="${"text-white"}">Message: </p>
        <textarea class="${"w-full p-2"}" name="${"message"}" rows="${"5"}"></textarea></div>
      <div class="${"col-span-2 text-right"}"><button type="${"submit"}" class="${"border-2 border-blue-400 text-blue-400 mr-3 py-2 px-5 rounded-sm font-semibold text-xl"}">Submit</button></div></form></div>

<div class="${"w-screen flex justify-center bg-white my-8"}"><div class="${"w-full max-w-screen-lg"}"><iframe title="${"MWM Main Office and shops"}" src="${"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.5443209820833!2d-88.84660488422072!3d43.30286358303125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880683153e7957d7%3A0x8d71b0f8462b3eb4!2s202%20Harrison%20St%2C%20Reeseville%2C%20WI%2053579!5e0!3m2!1sen!2sus!4v1633112678297!5m2!1sen!2sus"}" width="${"100%"}" style="${"border:0; aspect-ratio: 16/9"}" allowfullscreen loading="${"lazy"}"></iframe></div></div>

${(0, import_index_98426a00.v)(import_seo_00d87cf6.S, "SvelteSEO").$$render($$result, {
    title: import_seo_00d87cf6.b.title,
    description: import_seo_00d87cf6.b.description
  }, {}, {})}`;
});

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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_98426a00 = require("../../_app/immutable/chunks/index-98426a00.js");
const tailwindOutput = "";
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".bar1.svelte-1lo0i5u.svelte-1lo0i5u,.bar2.svelte-1lo0i5u.svelte-1lo0i5u,.bar3.svelte-1lo0i5u.svelte-1lo0i5u{width:35px;height:5px;background-color:#fff;margin:6px 0;transition:0.4s}.navigation.svelte-1lo0i5u.svelte-1lo0i5u{height:100%;width:0;position:fixed;z-index:1;top:0;left:0;background-color:#111;overflow-x:hidden;padding-top:60px;transition:0.5s}.navigation.svelte-1lo0i5u a.svelte-1lo0i5u{padding:8px 8px 8px 32px;text-decoration:none;font-size:25px;color:#818181;display:block;transition:0.3s}.navigation.svelte-1lo0i5u .closebtn.svelte-1lo0i5u{position:absolute;top:0;right:25px;font-size:36px;margin-left:50px}.open.svelte-1lo0i5u.svelte-1lo0i5u{width:40%}",
  map: null
};
const _layout = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  const menu_items = [
    { text: "About", route: "/about" },
    { text: "Products", route: "/products" },
    { text: "Services", route: "/services" },
    { text: "Vendors", route: "/vendors" },
    { text: "Contact", route: "/contact" }
  ];
  $$result.css.add(css);
  return `<nav class="${"h-16 lg:h-20 w-screen bg-darkGray justify-center flex"}"><div class="${"container p-3 inline-block lg:hidden"}"><div class="${"bar1 svelte-1lo0i5u"}"></div>
		<div class="${"bar2 svelte-1lo0i5u"}"></div>
		<div class="${"bar3 svelte-1lo0i5u"}"></div></div>
  <ul class="${"w-full max-w-screen-lg items-center hidden lg:flex"}"><li class="${"inline-block h-full"}"><a href="${"/"}" class="${"inline-block h-5/6 pt-4"}"><img src="${"/logo-bw.webp"}" alt="${"Midwest Welding & Manufacturing Logo"}" class="${"h-full"}"></a></li>
    <li class="${"flex-grow"}"></li>
    <li class="${"inline-block h-full text-white hover:text-opacity-70"}"><a href="${"/"}" class="${"h-full flex items-center px-3 text-xl"}"><span>Home</span></a></li>
    ${(0, import_index_98426a00.e)(menu_items, (item) => {
    return `<li class="${"inline-block h-full text-white hover:text-opacity-70"}"><a${(0, import_index_98426a00.a)("href", item.route, 0)} class="${"h-full flex items-center px-3 text-xl"}"><span>${(0, import_index_98426a00.b)(item.text)}</span></a>
    </li>`;
  })}</ul></nav>

<nav class="${["navigation svelte-1lo0i5u", ""].join(" ").trim()}" id="${"off-canvas-nav"}"><a href="${"#a"}" class="${"closebtn svelte-1lo0i5u"}">\xD7</a>
  <ul><li><a href="${"/"}" class="${"svelte-1lo0i5u"}">Home</a></li>
    ${(0, import_index_98426a00.e)(menu_items, (item) => {
    return `<li><a${(0, import_index_98426a00.a)("href", item.route, 0)} class="${"svelte-1lo0i5u"}">${(0, import_index_98426a00.b)(item.text)}</a></li>`;
  })}</ul></nav>

<div class="${"main_content"}">${slots.default ? slots.default({}) : ``}</div>

<footer class="${"w-screen bg-darkGray grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8"}"><div><img src="${"/logo.webp"}" alt="${"MWM Logo"}" class="${"max-h-48 mx-auto"}"></div>
  <div class="${"text-center md:text-left text-white mb-7"}"><h3>Midwest Welding &amp; Manufacturing</h3>
    <p>202 Harrison Street</p>
    <p>P.O. Box 39</p>
    <p>Reeseville, WI 53579</p>
    <p>Phone: <a href="${"tel:(920) 927-3851"}">(920) 927-3851</a></p></div>
  <div class="${"text-white text-center mb-7"}"><h3 class="${"text-center"}">Why Choose MWM</h3>
    <h4 class="${"text-center py-1"}"><a href="${"/products"}">Custom Fabrication</a></h4>
    <h4 class="${"text-center py-1"}"><a href="${"/vendors"}">Industry Vendors</a></h4>
    <h4 class="${"text-center py-1"}"><a href="${"/careers"}">Hiring Experts</a></h4>
    <h4 class="${"text-center py-1"}"><a href="${"/services"}">75 Years of Service</a></h4></div>
  <div class="${"text-white text-center"}"><nav><ul>${(0, import_index_98426a00.e)(menu_items, (item) => {
    return `<li><a${(0, import_index_98426a00.a)("href", item.route, 0)} class="${"py-2 text-base inline-block"}">${(0, import_index_98426a00.b)(item.text)}</a></li>`;
  })}</ul></nav></div>
</footer>`;
});

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
  F: () => FeaturedImage
});
module.exports = __toCommonJS(stdin_exports);
var import_index_98426a00 = require("./index-98426a00.js");
const FeaturedImage = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  let $$slots = (0, import_index_98426a00.d)(slots);
  let { imageUrl } = $$props;
  let { pageName } = $$props;
  let { pageTagline } = $$props;
  let { imagePosition } = $$props;
  let bgImageClass = "";
  switch (imagePosition) {
    case "center":
      bgImageClass = "bg-center";
      break;
    case "bottom":
      bgImageClass = "bg-bottom";
      break;
    case "top":
      bgImageClass = "bg-top";
      break;
    case "top-right":
      bgImageClass = "bg-top-right";
      break;
    case "right":
      bgImageClass = "bg-right";
      break;
    case "left":
      bgImageClass = "bg-left";
      break;
    default:
      bgImageClass = "bg-center";
  }
  if ($$props.imageUrl === void 0 && $$bindings.imageUrl && imageUrl !== void 0)
    $$bindings.imageUrl(imageUrl);
  if ($$props.pageName === void 0 && $$bindings.pageName && pageName !== void 0)
    $$bindings.pageName(pageName);
  if ($$props.pageTagline === void 0 && $$bindings.pageTagline && pageTagline !== void 0)
    $$bindings.pageTagline(pageTagline);
  if ($$props.imagePosition === void 0 && $$bindings.imagePosition && imagePosition !== void 0)
    $$bindings.imagePosition(imagePosition);
  return `<div${(0, import_index_98426a00.a)("class", `w-screen flex flex-col justify-center items-center ${bgImageClass}`, 0)} style="${"background-image: url(" + (0, import_index_98426a00.b)(imageUrl, true) + "); aspect-ratio: 16/4.5"}"><div class="${"w-full max-w-screen-lg bg-gray-600 bg-opacity-40 text-center py-12"}">${$$slots.default ? `${slots.default ? slots.default({}) : ``}` : `<h1 class="${"text-white"}">${(0, import_index_98426a00.b)(pageName)}</h1>
      <h2 class="${"text-white"}">${(0, import_index_98426a00.b)(pageTagline)}</h2>`}</div></div>`;
});

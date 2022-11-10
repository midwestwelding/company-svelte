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
  default: () => Products,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_98426a00 = require("../../../_app/immutable/chunks/index-98426a00.js");
var import_featuredImage_3a938a6c = require("../../../_app/immutable/chunks/featuredImage-3a938a6c.js");
var import_seo_00d87cf6 = require("../../../_app/immutable/chunks/seo-00d87cf6.js");
const prerender = true;
const Products = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  const products$1 = [
    {
      title: "Feed Bodies",
      link: "/products/feed-bodies",
      image: "/products/products-feed-body.webp"
    },
    {
      title: "Conveyors",
      link: "/products/conveyors",
      image: "/products/products-conveyors.webp"
    },
    {
      title: "Distributors",
      link: "/products/distributors",
      image: "/products/products-distributors.webp"
    },
    {
      title: "Elevator Legs",
      link: "/products/elevators",
      image: "/products/products-elevators.webp"
    },
    {
      title: "Mixers",
      link: "/products/mixers",
      image: "/products/products-mixers.webp"
    },
    {
      title: "Catwalks/Manwalks",
      link: "/products/catwalks",
      image: "/products/products-catwalks.webp"
    }
  ];
  return `${(0, import_index_98426a00.v)(import_featuredImage_3a938a6c.F, "FeaturedImage").$$render($$result, {
    imageUrl: "'/products/featured-products.webp'",
    pageName: "Products",
    pageTagline: "Custom-made for every need",
    imagePosition: "center"
  }, {}, {})}

<div class="${"w-screen my-8 flex justify-center"}"><div class="${"w-full max-w-ninety"}"><div class="${"grid grid-cols-1 lg:grid-cols-2 gap-x-5"}">${(0, import_index_98426a00.e)(products$1, (product) => {
    return `<div class="${"hover:opacity-70"}"><a${(0, import_index_98426a00.a)("href", product.link, 0)} class="${"block"}"><div class="${"mt-8 py-20 bg-blue text-white bg-center bg-no-repeat bg-cover"}" style="${"background-image: url(" + (0, import_index_98426a00.b)(product.image, true) + ")"}"><h3 class="${"pl-5 text-4xl"}">${(0, import_index_98426a00.b)(product.title)}</h3>
            </div></a>
        </div>`;
  })}</div></div></div>


${(0, import_index_98426a00.v)(import_seo_00d87cf6.S, "SvelteSEO").$$render($$result, {
    title: import_seo_00d87cf6.p.title,
    description: import_seo_00d87cf6.p.description
  }, {}, {})}`;
});

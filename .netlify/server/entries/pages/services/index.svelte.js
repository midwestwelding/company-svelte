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
  default: () => Services,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_98426a00 = require("../../../_app/immutable/chunks/index-98426a00.js");
var import_featuredImage_3a938a6c = require("../../../_app/immutable/chunks/featuredImage-3a938a6c.js");
var import_seo_00d87cf6 = require("../../../_app/immutable/chunks/seo-00d87cf6.js");
const prerender = true;
const Services = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  const services$1 = [
    {
      title: "Feed Body Repairs",
      link: "/services/feed-body-repairs",
      image: "/services/services-feed-body-repairs.webp"
    },
    {
      title: "Manufacturing",
      link: "/services/manufacturing",
      image: "/services/services-manufacturing.webp"
    },
    {
      title: "Road Crew/Millwrights",
      link: "/services/road",
      image: "/services/services-millwright.webp"
    },
    {
      title: "Machine Shop",
      link: "/services/machine-shop",
      image: "/services/services-machining.webp"
    },
    {
      title: "Waterjet Cutting",
      link: "/services/waterjet",
      image: "/services/services-waterjet.webp"
    },
    {
      title: "Plasma Table",
      link: "/services/plasma-table",
      image: "/services/services-plasma_table.webp"
    },
    {
      title: "Drafting",
      link: "/services/drafting",
      image: "/services/services-drafting.webp"
    },
    {
      title: "Sandblasting",
      link: "/services/sandblasting",
      image: "/services/services-sandblasting.webp"
    },
    {
      title: "Painting",
      link: "/services/painting",
      image: "/services/services-painting.webp"
    },
    {
      title: "Buy Parts/Materials",
      link: "/services/parts",
      image: "/services/services-parts.webp"
    },
    {
      title: "Advising/Consulting",
      link: "/services/consulting",
      image: "/services/services-consulting.webp"
    }
  ];
  return `${(0, import_index_98426a00.v)(import_featuredImage_3a938a6c.F, "FeaturedImage").$$render($$result, {
    imageUrl: "'/featured-about.webp'",
    pageName: "Services",
    pageTagline: "We are ready to serve you",
    imagePosition: "top"
  }, {}, {})}

<div class="${"w-screen flex justify-center py-8"}"><div class="${"w-full max-w-ninety"}"><div class="${"grid grid-cols-1 lg:grid-cols-2 gap-x-5"}">${(0, import_index_98426a00.e)(services$1, (service) => {
    return `<div class="${"hover:opacity-70"}"><a${(0, import_index_98426a00.a)("href", service.link, 0)} class="${"block"}"><div class="${"mt-8 py-20 bg-blue text-white bg-center bg-no-repeat bg-cover"}" style="${"background-image: url(" + (0, import_index_98426a00.b)(service.image, true) + ")"}"><h3 class="${"pl-5 text-4xl"}">${(0, import_index_98426a00.b)(service.title)}</h3>
          </div></a>
      </div>`;
  })}</div></div></div>

${(0, import_index_98426a00.v)(import_seo_00d87cf6.S, "SvelteSEO").$$render($$result, {
    title: import_seo_00d87cf6.s.title,
    description: import_seo_00d87cf6.s.description
  }, {}, {})}`;
});

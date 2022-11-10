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
  default: () => Routes,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_98426a00 = require("../../_app/immutable/chunks/index-98426a00.js");
var import_seo_00d87cf6 = require("../../_app/immutable/chunks/seo-00d87cf6.js");
const homeBanner_svelte_svelte_type_style_lang = "";
const css = {
  code: ".home_banner.svelte-13mry3n{background-image:url('/home_banner.webp');background-position:center;background-repeat:no-repeat;background-size:cover}",
  map: null
};
const HomeBanner = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  const FeaturedServices = [
    {
      title: "Field Service",
      content: "Whether a difficult repair or equipment installation, our teams are ready for the job.",
      link: "/services/road"
    },
    {
      title: "Shop Services",
      content: "Tools and Fabrication ready to accomplish simple or complex jobs.",
      link: "/services/"
    },
    {
      title: "Feed Body Services",
      content: "Our custom made-to-order Bulk Feed Body Trucks or Semis are perfectly engineered.",
      link: "/products/feed-bodies"
    }
  ];
  $$result.css.add(css);
  return `<div class="${"w-screen home_banner svelte-13mry3n"}"><div class="${"w-full py-12 lg:py-24"}"><div class="${"bg-blue-transparent py-8 flex justify-center flex-col"}"><h1 class="${"text-white font-extrabold uppercase text-shadow text-center pb-2 mb-5"}">Midwest Welding &amp; Manufacturing</h1>
      <h2 class="${"text-white font-extrabold uppercase text-shadow text-center pb-2 mb-14"}">Repairing Your Past...Fabricating Your Future</h2>
      <div class="${"text-center"}"><a href="${"/contact"}" class="${"inline-block mt-3 rounded bg-white py-3 px-5 text-xl hover:text-white hover:bg-transparent border-solid border-2 border-white"}">Tell Us About Your Project</a></div></div>
    <div class="${"mt-7 w-full max-w-ninety lg:max-w-screen-lg mx-auto"}"><hr class="${"text-white"}">
      <div class="${"grid lg:grid-cols-3 gap-4 mt-5"}">${(0, import_index_98426a00.e)(FeaturedServices, (service) => {
    return `<a${(0, import_index_98426a00.a)("href", service.link, 0)}><div class="${"text-white bg-red-transparent bg-opacity-70 p-5 mt-0 lg:mt-5"}"><h3 class="${"text-"}">${(0, import_index_98426a00.b)(service.title)}</h3>
              <p class="${"leading-relaxed"}">${(0, import_index_98426a00.b)(service.content)}</p></div>
          </a>`;
  })}</div></div></div>
</div>`;
});
const HomeQuickContact = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  const contacts = [
    {
      title: "Parts Dept",
      contact: "Ryan Goodhue",
      phone: "920-927-3851",
      email: "rgoodhue@mgrf.com"
    },
    {
      title: "Shop Dept",
      contact: "Ryan Goodhue",
      phone: "920-927-3854",
      email: "rgoodhue@mgrf.com"
    },
    {
      title: "Road Dept",
      contact: "Zoom Neuman",
      phone: "920-988-9446",
      email: "zneuman@mgrf.com"
    }
  ];
  return `<div class="${"w-screen bg-black flex justify-center pt-8 lg:pt-8"}"><div class="${"w-full max-w-ninety lg:max-w-screen-lg"}"><h3 class="${"text-white text-4xl font-semibold"}">Quick Contact</h3>
    <div class="${"grid grid-cols-1 lg:grid-cols-3 gap-4"}">${(0, import_index_98426a00.e)(contacts, (contact) => {
    return `<div class="${"p-4 text-blue bg-gray-400 bg-center bg-cover"}" style="${"background-image: url(/bg_al.webp)"}"><h4 class="${"text-3xl font-semibold text-shadow"}">${(0, import_index_98426a00.b)(contact.title)}</h4>
        <p class="${"text-xl font-bold text-shadow"}">${(0, import_index_98426a00.b)(contact.contact)}</p>
        <p class="${"text-xl"}"><a class="${"inline-block font-bold py-2 text-shadow"}" rel="${"external"}" href="${"tel:" + (0, import_index_98426a00.b)(contact.phone, true)}"><img src="${"/phone-solid.svg"}" alt="${"call"}" class="${"w-5 inline-block"}">
            ${(0, import_index_98426a00.b)(contact.phone)}
          </a></p>
        <p class="${"text-xl"}"><a class="${"inline-block font-bold py-2 text-shadow"}" rel="${"external"}" href="${"mailto:" + (0, import_index_98426a00.b)(contact.email, true)}"><img src="${"/envelope-solid.svg"}" alt="${"email"}" class="${"text-xs w-5 inline-block"}">
            ${(0, import_index_98426a00.b)(contact.email)}
          </a></p>
      </div>`;
  })}</div></div>
</div>`;
});
const ServiceHighligt = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  const services = [
    {
      title: "Custom Fabrication",
      content: "We make custom stuff, and we fabricate it. Thus why we call this custom fabrication.",
      image: "/service-fabrication.webp",
      link: "/products"
    },
    {
      title: "Industry Vendors",
      content: "We work with many of the commerical retailers. Availability and Savings we can pass on to you.",
      image: "/service-vendors.webp",
      link: "/vendors"
    },
    {
      title: "Hiring Experts",
      content: "Looking for a job? We are looking fo motivated, skilled and safe-minded industry leaders",
      image: "/service-experts.webp",
      link: "/careers"
    },
    {
      title: "75 Years of Service",
      content: "Started at the Jakel Co., then MGRF. Name has changed, reliable service has not.",
      image: "/service-75years.webp",
      link: "/services"
    }
  ];
  return `<div class="${"w-screen bg-blue px-8 pb-12 lg:pb-24 relative"}"><div style="${"background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiMwYTBhMGEiPjxwYXRoIGQ9Ik0xMDkzLjQ4IDEzMS44NUwxNzMgOTRhNzYuODUgNzYuODUgMCAwIDEtMzYuNzktMTEuNDZMMCAwaDEyODBsLTEzMS44MSAxMTEuNjhjLTE2LjQ3IDEzLjk2LTM1LjQ3IDIwLjk2LTU0LjcxIDIwLjE3eiIgZmlsbC1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0xMDk0LjQ0IDExOUwxNzIuNyA2OC43MmE3NC41NCA3NC41NCAwIDAgMS0yNS4xOS01Ljk1TDAgMGgxMjgwbC0xMzMuODUgMTAyYy0xNS44NCAxMi4wOS0zMy43IDE3Ljk1LTUxLjcxIDE3eiIvPjwvZz48L3N2Zz4=); top: 0; height:100px; z-index: 1; background-size: 100% 100px; margin-top: -1px;"}"></div>
  <div class="${"w-full grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 text-white"}">${(0, import_index_98426a00.e)(services, (service) => {
    return `<a${(0, import_index_98426a00.a)("href", service.link, 0)} class="${"text-center inline-block"}"><img${(0, import_index_98426a00.a)("src", service.image, 0)} alt="${""}" class="${"mx-auto filter grayscale hover:grayscale-0 max-w-ninety"}">
      <h4 class="${"text-2xl"}">${(0, import_index_98426a00.b)(service.title)}</h4>
      <p>${(0, import_index_98426a00.b)(service.content)}</p>
    </a>`;
  })}</div>
</div>`;
});
const ServiceRegions = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  const regions = ["Wisconsin", "Minnesota", "Illinois", "Indiana", "and More"];
  return `<div class="${"w-screen bg-white py-24"}"><div class="${"w-full max-w-ninety lg:max-w-screen-lg grid grid-cols-1 md:grid-cols-2 mx-auto"}"><div><h2 class="${"text-4xl text-blue font-semibold mb-4"}">MWM Service Regions</h2>
      <ul class="${"text-2xl leading-relaxed"}">${(0, import_index_98426a00.e)(regions, (region) => {
    return `<li class="${"uppercase"}">${(0, import_index_98426a00.b)(region)}</li>`;
  })}</ul></div>
    <div class="${"mt-5 lg:mt-0"}"><img src="${"/service-regions.webp"}" alt="${"MWM Services the greater Midwest of North America"}"></div></div>
</div>`;
});
const prerender = true;
const Routes = (0, import_index_98426a00.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_98426a00.v)(HomeBanner, "HomeBanner").$$render($$result, {}, {}, {})}
${(0, import_index_98426a00.v)(HomeQuickContact, "QuickContact").$$render($$result, {}, {}, {})}
${(0, import_index_98426a00.v)(ServiceHighligt, "ServiceHighlights").$$render($$result, {}, {}, {})}
${(0, import_index_98426a00.v)(ServiceRegions, "ServiceRegions").$$render($$result, {}, {}, {})}

${(0, import_index_98426a00.v)(import_seo_00d87cf6.S, "SvelteSEO").$$render($$result, {
    title: import_seo_00d87cf6.h.title,
    description: import_seo_00d87cf6.h.description
  }, {}, {})}`;
});

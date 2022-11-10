const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["abrasive-resistant.webp","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","bg_al.webp","cor-ten.webp","envelope-solid.svg","favicon-16x16.png","favicon-32x32.png","favicon.ico","featured-about.webp","featured-careers.webp","fonts/abel-v12-latin-regular.woff","fonts/abel-v12-latin-regular.woff2","galvanized.webp","home_banner.webp","jakel_logo.webp","logo-bw.webp","logo.webp","mgrf_logo.webp","painted-steel.webp","phone-solid.svg","products/featured-conveyors.webp","products/featured-distributors.webp","products/featured-elevators.webp","products/featured-feed-body.webp","products/featured-mixers.webp","products/featured-products.webp","products/feed-bodies/009.webp","products/feed-bodies/019.webp","products/feed-bodies/028.webp","products/feed-bodies/030.webp","products/feed-bodies/100_4238.webp","products/feed-bodies/100_5540.webp","products/feed-bodies/100_5551.webp","products/feed-bodies/100_5669.webp","products/feed-bodies/100_5757.webp","products/feed-bodies/100_5764.webp","products/feed-bodies/100_6073.webp","products/feed-bodies/100_6632.webp","products/feed-bodies/100_6634.webp","products/feed-bodies/100_6718.webp","products/feed-bodies/100_6720.webp","products/feed-bodies/100_6722.webp","products/feed-bodies/100_6748.webp","products/feed-bodies/100_6751.webp","products/feed-bodies/100_6752.webp","products/feed-bodies/100_6760.webp","products/feed-bodies/100_6765.webp","products/feed-bodies/100_6767.webp","products/feed-bodies/100_6771.webp","products/feed-bodies/100_6772.webp","products/feed-bodies/100_6822.webp","products/feed-bodies/100_6827.webp","products/feed-bodies/20201112_132849.webp","products/feed-bodies/215.webp","products/feed-bodies/232.webp","products/feed-bodies/237.webp","products/feed-bodies/246.webp","products/feed-bodies/FGFB2016-3.webp","products/feed-bodies/FGFB2016-7.webp","products/feed-bodies/FGFB2016-8.webp","products/feed-bodies/FlagwithSemi.webp","products/feed-bodies/IMG_3435.webp","products/feed-bodies/IMG_3436.webp","products/feed-bodies/IMG_3437.webp","products/feed-bodies/IMG_3439.webp","products/feed-bodies/IMG_3441.webp","products/feed-bodies/IMG_5056.webp","products/feed-bodies/IMG_5266.webp","products/feed-truck-bag-doors.jpg","products/feed-truck-bag-doors.webp","products/products-catwalks.webp","products/products-conveyors.webp","products/products-distributors.png","products/products-distributors.webp","products/products-elevators.webp","products/products-feed-body.webp","products/products-mixers.webp","service-75years.webp","service-experts.webp","service-fabrication.webp","service-promise.webp","service-regions.webp","service-vendors.webp","services/featured-consulting.webp","services/featured-drafting.webp","services/featured-feed-body-repairs.webp","services/featured-machining.webp","services/featured-manufacturing.webp","services/featured-millwright.webp","services/featured-painting.webp","services/featured-parts.webp","services/featured-plasma-table.webp","services/featured-waterjet.webp","services/services-consulting.webp","services/services-drafting.webp","services/services-feed-body-repairs.webp","services/services-machining.webp","services/services-manufacturing.webp","services/services-millwright.webp","services/services-painting.webp","services/services-parts.webp","services/services-plasma_table.webp","services/services-sandblasting.webp","services/services-waterjet.webp","site.webmanifest","stainless.webp","vendors/4b_components.webp","vendors/abb_dodge.webp","vendors/brock.webp","vendors/featured_vendors.webp","vendors/greene.webp","vendors/hayes_stolz.webp","vendors/honeyville.webp","vendors/nolin_milling.webp","vendors/packer_fastener.webp","vendors/premier_components.webp","vendors/schlagel.webp","vendors/tapco.webp"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png",".svg":"image/svg+xml",".ico":"image/vnd.microsoft.icon",".woff":"font/woff",".woff2":"font/woff2",".jpg":"image/jpeg",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"_app/immutable/start-36fcd777.js","imports":["_app/immutable/start-36fcd777.js","_app/immutable/chunks/index-5ef8ac57.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/26.js'))
		],
		routes: [
			{
				type: 'page',
				id: "apply",
				pattern: /^\/apply\/?$/,
				names: [],
				types: [],
				path: "/apply",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "services/truck-repairs",
				pattern: /^\/services\/truck-repairs\/?$/,
				names: [],
				types: [],
				path: "/services/truck-repairs",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});

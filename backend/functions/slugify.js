const slugify = require("slugify");

Object.entries({
	ö: "o",
	ä: "a",
	å: "a",
}).forEach(([k, v]) => {
	slugify.extend(k.toLowerCase(), v.toLowerCase());
	slugify.extend(k.toUpperCase(), v.toUpperCase());
});

module.exports = slugify;

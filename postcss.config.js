// postcss.config.js

module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {},
	}
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	}
}
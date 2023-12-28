// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: ["*.astro", "**/*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],
  semi: false,
  singleQuote: false,
  useTabs: false,
  trailingComma: "all",
  printWidth: 90,
}

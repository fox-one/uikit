const cheerio = require("cheerio");
const { optimize } = require("svgo");

// disable attrs and removeAttrs optimize
// so that handle color in svg file manaully

const processSvg = (svg, style) => {
  let plugins = [
    { name: "convertShapeToPath", active: false },
    { name: "removeTitle", active: true }
  ];

  // if (style === "outline") {
  //   plugins = [
  //     ...plugins,
  //     { name: "removeAttrs", params: { attrs: "(fill|stroke.*)" } }
  //   ];
  // }

  const optimized = optimize(svg, { plugins });
  const $ = cheerio.load(optimized.data);

  return $("body").children().html();
};

const getAttrs = (svg, style) => {
  const $ = cheerio.load(svg);
  const viewBox = $("svg").attr("viewBox");
  const width = $("svg").attr("width");
  const height = $("svg").attr("height");

  const base = {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: viewBox,
    "aria-hidden": "true"
  };

  const fill = {
    // ":fill": "color"
  };

  const stroke = {
    fill: "none"
    // ":stroke": "color",
    // ":stroke-width": "width",
    // "stroke-linecap": "round",
    // "stroke-linejoin": "round"
  };

  const attrs = Object.assign({}, base, style === "fill" ? fill : stroke);

  return Object.keys(attrs)
    .map((key) => `${key}="${attrs[key]}"`)
    .join(" ");
};

const getElementCode = (componentName, svg, style) => {
  const attrs = getAttrs(svg, style);
  const content = style !== "colorful" ? processSvg(svg, style) : svg;

  const str = `
<template>
  <svg ${attrs}>
    ${content}
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "${componentName}" })
export default class ${componentName} extends Vue {}
</script>
`;

  return str;
};

module.exports = { getAttrs, getElementCode };

import { SVG } from "./deps.ts";

if (import.meta.main) {
  await main();
}

async function main() {
  const file = await Deno.readTextFile("./data/csfloor2.svg");
  const svg = new SVG(file);
  //   makeAbsolute(svg);
  console.log({ svg });
}

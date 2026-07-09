import { stitch } from "@google/stitch-sdk";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

if (!process.env.STITCH_API_KEY) {
  console.error("STITCH_API_KEY environment variable is required.");
  process.exit(1);
}

const PROJECT_ID = "9661779091493048265";
const SCREENS = [
  { id: "7329a31f5e60460abc2be9c33cffc408", slug: "home" },
  { id: "96de67b9179640d6a00a5d0b45cdb2ed", slug: "works" },
  { id: "1cf0a540286146d4a1ff242d8ccbca88", slug: "about" },
  { id: "76df121f498f4552a2448ef9476eb404", slug: "contact" },
  { id: "89d35ad293784a089c5d408e35de26f3", slug: "blog" },
];

const outDir = path.join(process.cwd(), "stitch-assets");
await mkdir(outDir, { recursive: true });

const project = stitch.project(PROJECT_ID);

for (const { id, slug } of SCREENS) {
  console.log(`Fetching ${slug} (${id})...`);
  const screen = await project.getScreen(id);
  const htmlUrl = await screen.getHtml();
  const imageUrl = await screen.getImage();

  const htmlRes = await fetch(htmlUrl);
  const html = await htmlRes.text();
  await writeFile(path.join(outDir, `${slug}.html`), html, "utf-8");

  const imgRes = await fetch(imageUrl);
  const imgBuffer = Buffer.from(await imgRes.arrayBuffer());
  await writeFile(path.join(outDir, `${slug}.png`), imgBuffer);

  console.log(`  Saved ${slug}.html (${html.length} bytes) and ${slug}.png`);
}

console.log("Done.");

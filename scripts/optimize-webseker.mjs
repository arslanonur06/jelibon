/**
 * Kullanım: `npm run assets:hero-gif`
 * Orijinal public/assets/webseker.gif okunur; animasyon korunur.
 * Çıktı: public/assets/webseker-hero.gif (küçük boyut — orijinalin üzerine yazmaz, Windows kilit sorunu yok)
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = process.cwd();
const input = path.join(root, "public", "assets", "webseker.gif");
const out = path.join(root, "public", "assets", "webseker-hero.gif");
const backup = path.join(root, "public", "assets", "webseker.gif.bak");

/** Daha dar = daha az bayt; renk indirimi bazen dosyayı büyütür — sadece ölçek + effort */
const TARGET_WIDTH = 480;
const EFFORT = 10;

async function main() {
  const source = fs.existsSync(input) ? input : fs.existsSync(backup) ? backup : null;
  if (!source) {
    console.error("Beklenen dosya yok: webseker.gif veya webseker.gif.bak");
    process.exit(1);
  }

  if (source === input && !fs.existsSync(backup)) {
    fs.copyFileSync(input, backup);
    console.log("Yedek:", path.relative(root, backup));
  }

  const before = fs.statSync(source).size;

  const buf = await sharp(source, { animated: true, limitInputPixels: false })
    .resize({
      width: TARGET_WIDTH,
      withoutEnlargement: true,
      kernel: sharp.kernel.lanczos3,
    })
    .gif({ effort: EFFORT })
    .toBuffer();

  fs.writeFileSync(out, buf);
  const after = buf.length;
  const pct = (((before - after) / before) * 100).toFixed(1);
  console.log(
    `→ ${path.relative(root, out)}: ${(before / 1024 / 1024).toFixed(2)} MB → ${(after / 1024 / 1024).toFixed(2)} MB (${Number(pct) >= 0 ? "−" : "+"}${Math.abs(Number(pct))}%) | ${TARGET_WIDTH}px genişlik`,
  );
  console.log(
    "Canlı site `public/assets/webseker.gif` yükler. Daha hafif dosyayı kullanmak için bu çıktıyı inceleyip memnun kalınca webseker.gif’in üzerine kopyalayın.",
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

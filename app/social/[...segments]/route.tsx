/* ImageResponse requires native img elements; this route does not render browser UI. */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { getAllTopics, getTopicBySlug } from "@/lib/topics";
import { socialPages } from "@/lib/social";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...Object.keys(socialPages).map(key => ({ segments: [key, "card.png"] })),
    ...getAllPosts().map(post => ({ segments: ["insights", post.slug, "card.png"] })),
    ...getAllTopics().map(topic => ({ segments: ["topics", topic.slug, "card.png"] })),
  ];
}

export async function GET(_request: Request, { params }: { params: Promise<{ segments: string[] }> }) {
  const { segments } = await params;
  if (segments.at(-1) !== "card.png") return new Response(null, { status: 404 });
  let title: string;
  let label: string;
  let socialImageSource: string | undefined;
  let socialHeadline: string | undefined;
  const page = segments.length === 2 ? socialPages[segments[0] as keyof typeof socialPages] : undefined;
  if (page) {
    title = page.title;
    label = page.label;
  } else if (segments.length === 3 && segments[0] === "insights") {
    const post = getPostBySlug(segments[1]);
    if (!post) return new Response(null, { status: 404 });
    title = post.meta.socialTitle || post.meta.title;
    label = "INSIGHTS / ANÁLISIS";
    socialImageSource = post.meta.socialImageSource;
    socialHeadline = post.meta.socialHeadline;
  } else if (segments.length === 3 && segments[0] === "topics") {
    const topic = getTopicBySlug(segments[1]);
    if (!topic) return new Response(null, { status: 404 });
    title = topic.title;
    label = "TEMAS / NEGOCIO DIGITAL";
  } else return new Response(null, { status: 404 });

  const font = await readFile(path.join(process.cwd(), "public/fonts/Lora.ttf"));
  // Optional editorial photography: local JPEG assets only, never remote URLs.
  if (socialImageSource && /^[a-z0-9-]+\.jpg$/.test(socialImageSource)) {
    const editorialPhoto = await readFile(path.join(process.cwd(), "assets/social", socialImageSource));
    const response = new ImageResponse(
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#14251D", color: "#F8F6F1" }}>
        <img alt="" src={`data:image/jpeg;base64,${editorialPhoto.toString("base64")}`} width={1200} height={630} style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ display: "flex", position: "absolute", top: 0, left: 0, width: 1200, height: 630, background: "linear-gradient(90deg, rgba(10,24,18,0.95) 0%, rgba(10,24,18,0.83) 36%, rgba(10,24,18,0.1) 76%)" }} />
        <div style={{ display: "flex", flexDirection: "column", padding: "50px 56px", width: "100%", height: "100%" }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 3, color: "#DDC69F" }}>ESTRATEGIA / LIDERAZGO DIGITAL</div>
          <div style={{ display: "flex", alignItems: "center", width: 540, flex: 1, fontFamily: "Lora", fontSize: 64, lineHeight: 1.12, letterSpacing: -2, whiteSpace: "pre-wrap" }}>{socialHeadline || title}</div>
          <div style={{ display: "flex", flexDirection: "column", borderLeft: "3px solid #C8A96E", paddingLeft: 18, gap: 5 }}>
            <div style={{ display: "flex", fontSize: 26 }}>Nicolás Valenzuela</div>
            <div style={{ display: "flex", fontSize: 20, color: "#DDC69F" }}>nicolas.com.ar</div>
          </div>
        </div>
      </div>,
      { width: 1200, height: 630, fonts: [{ name: "Lora", data: font, weight: 400, style: "normal" }] },
    );
    // Quantize the photographic PNG to keep social cards lightweight.
    const png = await sharp(Buffer.from(await response.arrayBuffer()))
      .png({ palette: true, colours: 256, effort: 7, dither: 0.8 }).toBuffer();
    return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
  }
  const portrait = page && ["home", "about"].includes(segments[0]);
  const photo = portrait ? await readFile(path.join(process.cwd(), "assets/social/nicolas-campus.jpeg")) : null;
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#F8F6F1", color: "#1A3A2A", padding: "56px 64px", flexDirection: "column", position: "relative" }}>
      <div style={{ display: "flex", fontSize: 24, letterSpacing: 3, color: "#655741" }}>{label}</div>
      <div style={{ display: "flex", width: portrait ? 670 : 1060, height: 366, alignItems: "center", fontFamily: "Lora", fontSize: title.length > 85 ? 55 : title.length > 58 ? 62 : 70, lineHeight: 1.15, letterSpacing: -2 }}>{title}</div>
      {photo && <img alt="" src={`data:image/jpeg;base64,${photo.toString("base64")}`} width={340} height={400} style={{ position: "absolute", right: 54, top: 65, objectFit: "cover", borderRadius: "170px 170px 8px 8px" }} />}
      <div style={{ display: "flex", borderTop: "2px solid #C8A96E", paddingTop: 24, justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
        <div style={{ display: "flex", fontSize: 30 }}>Nicolás Valenzuela</div>
        <div style={{ display: "flex", fontSize: 23, color: "#655741" }}>nicolas.com.ar</div>
      </div>
    </div>,
    { width: 1200, height: 630, fonts: [{ name: "Lora", data: font, weight: 400, style: "normal" }] },
  );
}

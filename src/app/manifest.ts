import type { MetadataRoute } from "next";
import {
  BRAND_NAME,
  FAVICON_PATH,
  SEO_DEFAULT_DESCRIPTION,
} from "@/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND_NAME,
    short_name: "Jelibon",
    description: SEO_DEFAULT_DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#050510",
    theme_color: "#050510",
    icons: [
      {
        src: FAVICON_PATH,
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

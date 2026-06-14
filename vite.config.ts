import { fileURLToPath, URL } from "node:url";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

const ROBLOX_THUMBNAILS: Record<string, string> = {
  "17984679": "https://t3.rbxcdn.com/180DAY-586d3a8e3fe2ae8314ede2cfa73c6986",
  "2462535763": "https://t3.rbxcdn.com/180DAY-34357bdf76f29bc7791cc5853cd0ff83",
};

function robloxThumbnailApi(): Plugin {
  return {
    name: "roblox-thumbnail-api",
    configureServer(server) {
      server.middlewares.use("/api/roblox-thumbnail", (req, res) => {
        const url = new URL(req.url ?? "", "http://localhost");
        const universeId = url.searchParams.get("universeId");
        const imageUrl = universeId ? ROBLOX_THUMBNAILS[universeId] : undefined;

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ imageUrl: imageUrl ?? null, visits: null }));
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), robloxThumbnailApi()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

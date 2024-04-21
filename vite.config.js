import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     https: {
//       key: "C:/Users/alsai/AppData/Local/mkcert/rootCA-key.pem",
//       cert: "C:/Users/alsai/AppData/Local/mkcert/rootCA.pem",
//     },
//   },
// });

import { HomePage } from "./pages/home";
import { NewList } from "./pages/new-list";
import { renderHtml } from "./utils/render-html";

Bun.serve({
    async fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/") return await renderHtml(<HomePage />);
        if (url.pathname === "/new-list") return await renderHtml(<NewList />);
        return new Response("404!");
    },
});

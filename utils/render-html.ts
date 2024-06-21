import type { ReactNode } from "react";
import { renderToStream } from "./render-to-stream";
import { MainLayout } from "../layout/main-layout";

export async function renderHtml(component: ReactNode) {
    const s = await renderToStream(MainLayout({ children: component }));
    return new Response(s, { status: 200, headers: { "Content-Type": "text/html" } })
}
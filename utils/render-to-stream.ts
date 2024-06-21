import { renderToReadableStream } from "react-dom/server.browser";

export async function renderToStream(component: React.ReactNode) {
    return await renderToReadableStream(
        component
      );
}
import { site } from "@/config/site";

/** Redirects to the WhatsApp chat so the page itself does not link to the chat service directly. */
export function GET() {
  return new Response(null, { status: 307, headers: { Location: site.phones.whatsapp.href } });
}

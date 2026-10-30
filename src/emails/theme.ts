import { brandColors } from "@/config/brand";

export const emailFont = "Poppins, 'Segoe UI', Helvetica, Arial, sans-serif";

export const emailStyles = {
  body: { backgroundColor: brandColors.mist100, margin: 0, padding: "32px 0", fontFamily: emailFont },
  container: { backgroundColor: brandColors.white, maxWidth: "600px", margin: "0 auto" },
  header: { backgroundColor: brandColors.ink, padding: "24px 32px" },
  wordmark: { color: brandColors.white, fontSize: "22px", fontWeight: 700, letterSpacing: "-0.5px", margin: 0 },
  rule: { borderTop: `3px solid ${brandColors.brand}`, margin: 0 },
  content: { padding: "32px" },
  h1: { color: brandColors.ink, fontSize: "24px", lineHeight: "1.25", fontWeight: 600, margin: "0 0 16px" },
  text: { color: brandColors.ink700, fontSize: "15px", lineHeight: "1.6", margin: "0 0 16px" },
  label: { color: brandColors.ink600, fontSize: "12px", textTransform: "uppercase" as const, letterSpacing: "1px", margin: "0 0 4px" },
  value: { color: brandColors.ink, fontSize: "15px", lineHeight: "1.5", margin: "0 0 16px" },
  message: {
    color: brandColors.ink,
    fontSize: "15px",
    lineHeight: "1.6",
    backgroundColor: brandColors.mist100,
    borderLeft: `3px solid ${brandColors.brand}`,
    padding: "16px",
    whiteSpace: "pre-wrap" as const,
    margin: "0 0 16px",
  },
  link: { color: brandColors.brand700, textDecoration: "underline" },
  footer: { padding: "24px 32px", borderTop: `1px solid ${brandColors.mist}` },
  small: { color: brandColors.ink600, fontSize: "12px", lineHeight: "1.5", margin: 0 },
};

/**
 * Brand colour values for places that cannot read CSS variables: generated social images,
 * emails and the browser theme colour. Keep in sync with the @theme tokens in globals.css.
 */
export const brandColors = {
  brand: "#457AF4",
  brand300: "#8FB0F8",
  brand600: "#3366E0",
  brand700: "#2A5BD7",
  ink: "#25262C",
  ink300: "#A9AAB2",
  ink600: "#5A5C66",
  ink700: "#3C3D45",
  mist: "#E2E2E2",
  mist100: "#F3F3F3",
  white: "#FFFFFF",
  /** Logo colour. Supplied logo files use #007BFF; guidelines specify #457AF4. */
  logo: "#457AF4",
} as const;

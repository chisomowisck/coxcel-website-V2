/**
 * Analytics and marketing tags. Every value comes from an environment variable; leave a variable
 * empty to switch that tool off. Tags only load after the visitor accepts cookies.
 * Values are read at build time, so redeploy after changing them.
 */
export type AnalyticsConfig = {
  gtmId?: string;
  gaId?: string;
  fbPixelId?: string;
  twPixelId?: string;
  clarityId?: string;
  smartlook?: { key: string; region: string };
};

const clean = (v: string | undefined) => {
  const t = v?.trim();
  return t ? t : undefined;
};

export function getAnalyticsConfig(): AnalyticsConfig {
  const smartlookKey = clean(process.env.SMART_LOOK_TRACKING_CODE);
  return {
    gtmId: clean(process.env.GOOGLE_GTM),
    gaId: clean(process.env.GA_TRACKING_ID),
    fbPixelId: clean(process.env.FB_PIXEL_ID),
    twPixelId: clean(process.env.TW_PIXEL_ID),
    clarityId: clean(process.env.CLARITY_PROJECT_ID),
    smartlook: smartlookKey
      ? { key: smartlookKey, region: clean(process.env.SMART_LOOK_REGION) ?? "eu" }
      : undefined,
  };
}

export function hasAnyTracker(c: AnalyticsConfig): boolean {
  return Boolean(c.gtmId || c.gaId || c.fbPixelId || c.twPixelId || c.clarityId || c.smartlook);
}

/** Google Search Console verification token (the content value of the meta tag). */
export const googleSiteVerification = clean(process.env.GOOGLE_SEO);

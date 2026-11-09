"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import type { AnalyticsConfig } from "@/config/analytics";

type TrackerWindow = Window & {
  fbq?: (...args: unknown[]) => void;
  twq?: (...args: unknown[]) => void;
};

/**
 * Third-party tags other than Google Tag Manager. Rendered only after the visitor accepts cookies.
 * GTM is always loaded from the page head with Consent Mode (see GoogleTagManager.tsx).
 */
export function Trackers({ config }: { config: AnalyticsConfig }) {
  const { gaId, fbPixelId, twPixelId, clarityId, smartlook } = config;
  const pathname = usePathname();
  const first = useRef(true);

  // Report client-side navigations to the pixels (GA4 tracks history changes itself).
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const w = window as TrackerWindow;
    w.fbq?.("track", "PageView");
    if (twPixelId) w.twq?.("event", "PageView");
  }, [pathname, twPixelId]);

  return (
    <>
      {gaId ? (
        <>
          <Script
            id="ga-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`}
          />
          <Script id="ga" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('consent','default',{ad_storage:'granted',analytics_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});gtag('config',${JSON.stringify(gaId)},{anonymize_ip:true});`}
          </Script>
        </>
      ) : null}

      {fbPixelId ? (
        <Script id="fb-pixel" strategy="lazyOnload">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init',${JSON.stringify(fbPixelId)});fbq('track','PageView');`}
        </Script>
      ) : null}

      {twPixelId ? (
        <Script id="tw-pixel" strategy="lazyOnload">
          {`!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');twq('config',${JSON.stringify(twPixelId)});`}
        </Script>
      ) : null}

      {clarityId ? (
        <Script id="clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script",${JSON.stringify(clarityId)});`}
        </Script>
      ) : null}

      {smartlook ? (
        <Script id="smartlook" strategy="lazyOnload">
          {`window.smartlook||(function(d){var o=smartlook=function(){o.api.push(arguments)},h=d.getElementsByTagName('head')[0];var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);})(document);smartlook('init',${JSON.stringify(smartlook.key)},{region:${JSON.stringify(smartlook.region)}});`}
        </Script>
      ) : null}
    </>
  );
}

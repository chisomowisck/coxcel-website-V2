/**
 * Google Tag Manager with Google Consent Mode v2.
 *
 * The container loads on every page, straight from the HTML, so Google's installation checks can
 * find it. Consent starts as "denied", so Google tags set no cookies and send only cookieless
 * pings until the visitor clicks "Accept cookies" (see ConsentManager), which switches consent to
 * "granted". A choice saved on an earlier visit is applied before the container loads.
 */

const granted =
  "{ad_storage:'granted',analytics_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'}";

export function GoogleTagManagerHead({ gtmId }: { gtmId: string }) {
  const id = JSON.stringify(gtmId);
  const code = [
    "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}",
    "gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});",
    `try{if(localStorage.getItem('cx-consent')==='granted'){gtag('consent','update',${granted});}}catch(e){}`,
    "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})",
    `(window,document,'script','dataLayer',${id});`,
  ].join("");
  return <script id="gtm-init" dangerouslySetInnerHTML={{ __html: code }} />;
}

export function GoogleTagManagerNoScript({ gtmId }: { gtmId: string }) {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(gtmId)}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}

/** Called when the visitor makes a choice in the cookie banner. */
export function updateGoogleConsent(choice: "granted" | "denied") {
  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  const value = choice === "granted" ? "granted" : "denied";
  w.gtag?.("consent", "update", {
    ad_storage: value,
    analytics_storage: value,
    ad_user_data: value,
    ad_personalization: value,
  });
}

// Set the cookie synchronously at document_start so it exists before Wikipedia's script checks for it.
const cookieName = "centralnotice_hide_fundraising";
const domain = location.hostname.split(".").slice(-2).join(".");
const value = encodeURIComponent(
  JSON.stringify({
    v: 1,
    created: Math.floor(Date.now() / 1000),
    reason: "close",
  }),
);

document.cookie = `${cookieName}=${value}; domain=${domain}; path=/; max-age=604800`;

// Set the cookie synchronously at document_start so it exists before Wikipedia's script checks for it.
const cookieName = "centralnotice_hide_fundraising";
const value = encodeURIComponent(
  JSON.stringify({
    v: 1,
    created: Math.floor(Date.now() / 1000),
    reason: "close",
  }),
);

const labels = location.hostname.split(".");
const domain = labels.slice(-2).join(".");

// Clear copies of cookie as a stale one would be read before the new one.
document.cookie = `${cookieName}=; path=/; max-age=0`;
for (let i = 0; i < labels.length - 2; i++) {
  document.cookie = `${cookieName}=; domain=${labels.slice(i).join(".")}; path=/; max-age=0`;
}
document.cookie = `${cookieName}=${value}; domain=${domain}; path=/; max-age=604800`;

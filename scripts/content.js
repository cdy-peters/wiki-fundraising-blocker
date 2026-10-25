// Set the cookie synchronously at document_start so it exists before Wikipedia's CentralNotice script checks for it.
const created = Math.floor(Date.now() / 1000);
const value = encodeURIComponent(JSON.stringify({ v: 1, created, reason: "close" }));

document.cookie = `centralnotice_hide_fundraising=${value}; domain=.wikipedia.org; path=/; max-age=604800`;

# Wiki Fundraiser Blocker

A Chrome extension that hides the fundraising banners on Wikipedia.

## Why

The motive for this extension stems from Wikimedia requesting donations and claiming that Wikipedia's survival depends on your donation; this is misleading. Whilst Wikipedia is a non-profit and does rely on donations, annual financial reports published by the Wikimedia Foundation indicate that they aren't in any danger of running out of money. They ended the 2024–25 fiscal year with $296 million in net assets and a $17.6 million operating surplus ([audit report](https://upload.wikimedia.org/wikipedia/foundation/3/3f/Wikimedia_Foundation_FY_24-25_Audit_Report.pdf)), and the separate Wikimedia Endowment held another $169 million ([audit report](https://wikimediaendowment.org/wp-content/uploads/2026/03/Wikimedia-Endowment-Audit-Report-FY-24-25.pdf)).

The essay [Wikipedia has Cancer](https://en.wikipedia.org/wiki/User:Guy_Macon/Wikipedia_has_Cancer) by Guy Macon gives a good overview of revenue and expenditures since 2003, and the [Wikimedia Foundation's annual financial reports](https://wikimediafoundation.org/wiki/Financial_reports) provide a more detailed breakdown of revenue and expenditures.

You can form your own opinion on whether Wikipedia needs your donation, but if you don't want to see the fundraising banners, this extension will hide them for you.

## How it works

Currently, closing a Wikipedia fundraising banner sets a `centralnotice_hide_fundraising` cookie which is checked when visiting a page to determine if the banner should be hidden. The extension works by setting this cookie and renewing it, ensuring that the banner is always hidden.

[src/scripts/content.js](src/scripts/content.js) runs at `document_start` on every `*.wikipedia.org` page, so the cookie is set before Wikipedia's script reads it. The extension does the following:

1. Removes any existing copies of the cookie so the browser doesn't read a stale cookie first.
2. Sets a fresh cookie on the root `wikipedia.org` domain, which covers every language subdomain and mobile subdomain.

The extension requests no permissions, collects no data, and makes no network requests.

## Install

1. Clone this repository.
2. Open `chrome://extensions` and turn on **Developer mode**.
3. Click **Load unpacked** and select the `src` folder.
4. (Optional) To hide banners in incognito windows, click **Details** on the extension and turn on **Allow in Incognito**. Chrome disables extensions in incognito by default.

## License

[MIT](LICENSE)

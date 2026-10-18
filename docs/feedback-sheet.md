# Feedback form to Google Sheets

The form on the home page posts to a Google Apps Script web app that appends
a row to a Google Sheet. No server, no API keys, no npm packages. About five
minutes to set up.

## 1. Make the sheet

1. Create a Sheet at <https://sheets.new> and name it something like
   `SS Aqua feedback`.
2. In row 1, add headers: `received | name | phone | message | page`.

## 2. Add the script

1. In the Sheet: **Extensions > Apps Script**.
2. Replace the default `Code.gs` with:

```js
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var d = e.parameter || {};
  sheet.appendRow([
    new Date(),
    String(d.name || "").slice(0, 80),
    String(d.phone || "").slice(0, 20),
    String(d.message || "").slice(0, 2000),
    String(d.page || "").slice(0, 300),
  ]);
  return ContentService.createTextOutput("ok");
}
```

3. Save.

## 3. Deploy it

1. **Deploy > New deployment > Select type > Web app**.
2. Description: `feedback`.
3. **Execute as: Me**.
4. **Who has access: Anyone** (required — the browser posts without signing in).
5. **Deploy**, then copy the **Web app URL** (ends in `/exec`).

## 4. Point the site at it

Put the URL in `.env` (see `.env.example`) and on the host:

```
PUBLIC_FEEDBACK_URL=https://script.google.com/macros/s/AKfy.../exec
```

Rebuild (`npm run build`). Until this is set, the form shows a visible
`[FEEDBACK SHEET URL]` marker instead of the fields, and a matching line
appears in the footer's fill-in list.

## Known behaviour

- The post is `mode: "no-cors"`: Apps Script answers without CORS headers, so
  the browser cannot read the response. A failed write cannot be detected
  from the page, so the success message is optimistic. **The Sheet is the
  record of truth** — check it after launch, and if nothing lands, redeploy
  the web app and confirm "Who has access" is still *Anyone*.
- Re-deploying after an edit creates a new URL unless you use
  **Deploy > Manage deployments > edit** on the existing one.
- A hidden `website` field is the spam honeypot; when it is filled the form
  pretends to succeed and sends nothing.
- Fields are trimmed and length-capped on the script side as a second line
  of defence behind the browser's `required` and `maxlength`.
- `AppendRow` on a Sheet that is shared with the shop is enough; if volume
  ever matters, send a notification email from the script instead.

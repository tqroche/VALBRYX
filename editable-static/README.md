VALBRYX Editable Static Website
===============================

This folder is the plain-file version of the site for direct editing and upload
to a traditional static web server (no React build required for small edits).

What to edit
------------

1) Page entry files (route URLs):

- `index.html` -> `/`
- `about/index.html` -> `/about/`
- `investments/index.html` -> `/investments/`
- `contact/index.html` -> `/contact/`

2) Site styles:

- `assets/app.css`

3) Site behavior/content bundle:

- `assets/app.js`

Notes:

- `app.js` and `app.css` are stable filenames so you do not need to chase hashed
  build names.
- For text/content updates, search inside `assets/app.js` for the exact phrase
  and replace it.
- For visual/styling changes, edit `assets/app.css`.

Upload instructions
-------------------

Upload the full contents of this `editable-static` folder to your web root so
the directory structure is preserved.

Important:

- Keep `/assets/` and image files in place.
- Keep `about/`, `contact/`, and `investments/` folders in place.
- Do not remove `index.html` from any route folder.

Provided release zip
--------------------

- `releases/Realtor-Website-Setup-editable-static.zip`

Repo packaging commands
-----------------------

From repo root:

```bash
bash scripts/package-editable-static.sh
bash scripts/package-traditional-static-from-editable.sh
```

This keeps both release zip formats in sync from the editable static source.


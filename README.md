
# VALBRYX Website Repository

This repository contains the original React source and a plain-file static
maintenance package for traditional web hosting.

## Primary maintenance workflow (recommended)

Use `editable-static/` for direct edits without React build tools.

- Edit route files:
  - `editable-static/index.html`
  - `editable-static/about/index.html`
  - `editable-static/investments/index.html`
  - `editable-static/contact/index.html`
- Edit styles in `editable-static/assets/app.css`
- Edit behavior/content bundle in `editable-static/assets/app.js`

After edits, regenerate release zips:

```bash
bash scripts/package-editable-static.sh
bash scripts/package-traditional-static-from-editable.sh
```

## Release artifacts

- `releases/Realtor-Website-Setup-editable-static.zip`
  - Upload as-is when you want stable, editable HTML/CSS/JS files.
- `releases/Realtor-Website-Setup-dist-traditional-static.zip`
  - Legacy format with a top-level `dist/` folder for existing deployment flow.

## React source workflow (optional)

If needed, the source app can still be built with:

```bash
npm i
npm run build
```
  
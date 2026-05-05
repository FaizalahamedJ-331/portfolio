This folder holds the resume PDF used by the site.

Files
- Faizal_Ahamed_J_Resume_updated.pdf — place the final PDF here to serve from the app's `/src/resume` path during local development. Note: when deployed, static files should be in `public/` or copied to the build output.

How to regenerate the PDF (recommended)
1) Option A — Use Pandoc (recommended if you have it installed)
   - Install pandoc (https://pandoc.org/installing.html)
   - From repository root run:

```bash
pandoc resume_optimized.md -o src/resume/Faizal_Ahamed_J_Resume_updated.pdf --pdf-engine=wkhtmltopdf -V geometry:margin=1in
```

2) Option B — Use Chrome/Edge print-to-PDF
   - Open `resume_optimized.md` in VS Code or a Markdown preview, or open the rendered site page.
   - Print (Ctrl+P) → Save as PDF → choose `src/resume/Faizal_Ahamed_J_Resume_updated.pdf`.

3) After generating the PDF
   - If you want the site to link to `/Faizal_Ahamed_J_Resume_updated.pdf` from the root, copy the PDF to the `public/` folder and name it `faizal_resume.pdf` (or update the link in `src/sections/Hero.jsx`).

Notes
- This repo does not automatically generate PDF files. Place the generated PDF at `src/resume/Faizal_Ahamed_J_Resume_updated.pdf` or `public/faizal_resume.pdf` for production use.

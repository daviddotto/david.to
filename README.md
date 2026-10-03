# david.to

David Todd's personal homepage, published as static HTML and CSS through GitHub Pages.

## Editing

- Homepage: `index.html`
- Styles: `styles/profile.css`
- Portrait: `images/david-todd-portrait-green.jpg`

No Keystone, database, Node.js installation or Sass compilation is required. The old CMS and artwork routes have been removed from the current site; their source remains in Git history.

## Deployment

GitHub Pages publishes automatically from the root of `master`. The `.nojekyll` file disables Jekyll processing. No dependency installation or custom build step is needed.

The custom domain is `david.to`. Update Cloudflare's website DNS records to GitHub Pages to complete the domain cutover. Leave email records unchanged.

For local preview, run `python3 -m http.server 8000` and open http://localhost:8000/.

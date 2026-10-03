# david.to

David Todd's personal website. The homepage is a standalone profile covering design and development, VV Insider, Microbooks and North East Digital.

## Editing

- Homepage: `templates/views/index.html`
- Homepage styles: `public/styles/profile.css` (plain CSS, independent of the legacy Sass pipeline)
- Portrait: `public/images/david-todd-portrait-green.jpg` (web asset) and `public/images/david-todd-portrait-green.png` (generated original)
- Homepage controller: `routes/views/index.js` (no content queries)
- Existing artwork feed and category pages: `templates/views/archive.html` and `routes/views/archive.js`
- Existing individual artwork URLs: `/post/:post`

The homepage needs no client-side JavaScript, external fonts or tracking scripts. Keep biographical claims and project links accurate; the public-service work is described as background rather than a current appointment.

## Running and deployment

The application uses Keystone 4, Nunjucks and MongoDB. `npm start` starts the existing Keystone application, which requires its database and session configuration. Its legacy Node Sass dependency is incompatible with current Node releases; use the established hosting environment rather than reinstalling the application with a modern Node runtime without a migration plan.

For an isolated visual preview, serve `templates/views/index.html` as `/` and the `public` directory's assets at their root paths. This verifies the profile HTML and CSS, but does not exercise Keystone or MongoDB.

As of 4 October 2026, the live `david.to` homepage differs from this checkout. The deployment connection must be established before publishing; local edits do not change the live domain.

## Portrait direction

Generated with the built-in image-generation tool from four supplied photographic likeness references. The second version focuses on natural eyelid shape and a relaxed smile. Prompt: one professional editorial photographic portrait; preserve recognisable features, curly brown hair, moustache and light stubble; chest-up, gently turned, direct eye contact and a relaxed smile showing a little teeth; dark olive knit crew-neck, warm stone backdrop, soft directional window light, natural skin texture and restrained warm grading; no logos or text.

The active portrait uses a forest-green monochrome treatment based on `#203d33`, with warm ivory highlights, graduated blur towards the lower outer edges and fine film grain. The face remains sharp. Built-in image-generation prompts are saved in `output/imagegen/portrait-green-prompts.txt`.

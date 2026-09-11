## Current redesign

The current website follows an enterprise infrastructure direction: a light, dense, table-led layout in white, steel and a single deep blue accent, with no photography. It has a dark utility bar, a compact sticky header, a typographic hero paired with an "engagement at a glance" specification panel, a dark capability band, an NVIDIA GPU reference table (stacking to labelled rows under 760 px), a three-column services block, a dedicated GPU cluster block, a four-column process table, an explicit scope-and-limitations block, a disclosure-based FAQ and a grouped quote form. Navigation and footer use a compact horizontal arrangement of the original PNG symbol and wordmark via CSS display crops; the footer places the unmodified logo on a white plate rather than recoloring it. The original file is unchanged. Earlier sections below document delivery history.

## Approved logo update

The user-approved PNG is `src/assets/dataorb-cloud-final.png`, copied byte-for-byte from the supplied original. It replaces the temporary branding in navigation and footer. CSS trims the displayed whitespace without changing or regenerating the image. The favicon is an SVG viewport around the original raster orb; it contains a PNG and is **not vector artwork**. Previous concept studies are archived, not the current identity. The company footer retains Dataorb Cloud LLC.

# Dataorb Cloud

Responsive English website for **Dataorb Cloud LLC**, displaying **Dataorb Cloud** in navigation and the temporary wordmark. Built in this directory with semantic HTML, CSS and browser JavaScript, using a dependency-free Node build and preview server. No framework or package installation is required. Inter is self-hosted under its included SIL Open Font License.

## Preview and build

Requires Node.js 20 or later.

```sh
npm run dev
```

Open http://127.0.0.1:4173 for the website and http://127.0.0.1:4173/brand/ for the logo comparison board. Restart after editing source, or run `npm run build` and refresh the browser. The preview server intentionally listens on local loopback only.

```sh
npm run build
```

Deploy the generated `dist/` directory with any static hosting provider. The project also includes its Sites registration. Preview-only brand exploration files are in `dist/brand/`; remove that directory from a public production export if you do not want to publish the design studies. They are excluded from search crawling by the generated robots file and brand page metadata.

## Central configuration

Edit `site.config.mjs`, then rebuild. It controls the short and legal company names, email, phone, address, domain, description, public form endpoint, privacy URL, indexing and specification review date. Do not put secrets in this file: it is public.

- Empty contact fields produce an honest prelaunch notice rather than invented details.
- The final domain is intentionally unset; canonical URLs and sitemap entries are generated when it is provided.
- Indexing is off for this preview. Set `allowIndexing: true` and the final HTTPS `siteUrl` when ready for public launch.
- Navigation and main content render without JavaScript. The menu and quote preparation require JavaScript. Without it, the form is disabled and displays an explanation.

## Inquiry form

**No email, CRM or backend is connected.** The form explicitly discloses this before input, validates locally, displays a draft, and offers a text-file download. It never claims a submission succeeded. No form entries are sent or stored by the app. Reloading clears entries; downloaded drafts are under the visitor's control.

Validation covers required trimmed values, email syntax, positive integer quantities up to 100,000, past dates and text length. Open questions can use “Help me choose”, “To be determined”, a flexible region, and optional quantity/date fields. Selecting a GPU in the catalog fills the preference automatically. Editing any field invalidates a previously prepared draft.

An optional **Project type** field leads the compute-requirements group. Selecting *Dedicated GPU cluster*
or *Infrastructure planning & consulting* reveals two further optional fields, **Hosting arrangement** and
**Networking & storage requirements**; the short sourcing path is unchanged. The "Discuss Your Cluster"
call to action in the cluster block sets the project type and reveals those fields.

Conditional fields sit inside a `[hidden]` wrapper, and both validation and the generated request use only
fields that are currently visible. A hidden answer is therefore never submitted or printed into a draft,
but it is retained in the DOM so switching project type back does not discard what was typed.

To connect actual submissions:

1. Implement a secure HTTPS endpoint and set `quoteEndpoint` and `privacyUrl`. Both are required to enable sending.
2. The endpoint accepts JSON keys: `name`, `email`, `company`, `project`, `gpu`, `quantity`, `region`, `start`, `term`, `use`, `notes`, plus `hosting` and `networking` when the cluster or planning path is selected. Quantities and dates are strings; optional values may be empty. Because hidden fields are excluded, `hosting` and `networking` are absent from the payload rather than empty on the short path.
3. Validate all fields again on the server. Apply origin/CORS restrictions, spam/rate controls and appropriate data handling. Keep provider credentials server-side.
4. Return a successful HTTP status with `{ "accepted": true }` **only after durably recording or delivering the inquiry**. The frontend reports unconfirmed receipt for any other result or a 15-second timeout and retains the user's input. A timeout can occur after the server accepted a request; handle duplicate delivery on the server.
5. Test receipt end to end with the real mailbox/CRM before public launch. No live endpoint behavior has been verified in this delivery.

## Logo deliverables

- `src/brand/comparison.svg`: one comparison board with Arc Orb, Negative-space D and Signature O, each on white/navy, in navigation, at favicon sizes, and in black/white.
- `src/brand/direction-*.svg`: 18 separate lockup/symbol files, comprising three directions × three color treatments × two asset types.
- `src/brand/prompts.md`: three complete, independently copyable external image generation prompts.
- `scripts/brand.mjs`: reproducible original geometry and comparison layout.
- `src/favicon.svg`: separate temporary D letter favicon used by the website.

The available tool `image_gen.imagegen` does not expose a verifiable model identity or model selector. “image 2.5” could not be confirmed; no image generator was called. In accordance with the requested fallback, the website uses a temporary typographic logo. The comparison studies are **original hand-authored SVG**, with genuine vector path symbols and editable text (Inter/Arial). There are no embedded bitmaps. Lettering is not yet outlined and can vary with the installed font; final optical refinement and outlining follow selection. Direction 02 is the suggested starting point for small-size clarity.

## Design and content sources

Official websites viewed before designing on September 10, 2026:

- [Equinix](https://www.equinix.com/): restrained navigation and compact horizontal logo use.
- [Digital Realty](https://www.digitalrealty.com/): generous heading scale and direct contact CTA.
- [CoreWeave](https://www.coreweave.com/): clear hierarchy and concise service labels.
- [Lambda](https://lambda.ai/): decisive typography and recognizable small navigation logo.

The resulting palette, symbols, layout and copy were authored for Dataorb Cloud. No reference-company logos or marketing claims are used on the site.

GPU memory is labeled by configuration and per GPU:

| GPU | Reference used | Memory |
| --- | --- | --- |
| H100 | SXM | 80 GB HBM3 |
| H200 | SXM | 141 GB HBM3e |
| B200 | HGX B200 | 180 GB HBM3e |
| B300 | DGX B300 | 288 GB per GPU |

Verified against [NVIDIA HGX component documentation](https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory-h100-h200-b200/latest/components.html) and the [NVIDIA DGX B300 user guide](https://docs.nvidia.com/dgx/dgxb300-user-guide/introduction-to-dgxb300.html). H100 NVL and other hardware variants differ. Workload descriptions are qualitative starting points, not performance guarantees. Sources are also linked directly in the GPU section.

The website makes no claims about customers, partnerships, certifications, owned facilities, inventory, SLA, instant provisioning or current pricing.

## Consistency checks

`npm run build` runs `scripts/check.mjs` first and fails the build on drift. It has no
dependencies and guards four couplings that fail silently in a browser:

1. Every `data-project` value resolves to a real `<option>` in `#project`, and that option
   carries `data-extended` (otherwise the CTA reveals nothing, or blanks the select).
2. At least one `<option data-extended>` exists, and `app.js` does not reintroduce a
   hard-coded list of label strings.
3. Draft `labels` keys and form field `name` attributes match in both directions — a missing
   key prints `undefined: <value>` into a customer-facing draft.
4. The mobile drawer breakpoint agrees across files: `styles.css` `max-width: 1000px` must
   pair with `app.js` `matchMedia('(min-width: 1001px)')`, or an open menu fails to close on
   resize. Six nav links plus the CTA stop fitting below a ~1000px viewport.

It also checks that every `href="#…"` has a matching `id`. Run it alone with `npm run check`.
Note `npm run dev` / `npm run preview` call `build.mjs` directly and skip the check; only
`npm run build` (the deploy path) enforces it.

## Deployment

Hosted on GitHub Pages at <https://jackyke73.github.io/dataorb-cloud/>, served from the `gh-pages`
branch root. `main` holds the source; `gh-pages` holds the contents of `dist/`.

To redeploy after changing anything in `src/` or `site.config.mjs`:

```sh
npm run build
git add -A && git commit -m "..."
git push origin main
git subtree push --prefix dist origin gh-pages
```

Notes:

- Asset URLs are document-relative, so the build works both under the Pages subpath and at a domain
  root. Do not reintroduce root-relative `/styles.css` style paths: they 404 under `/dataorb-cloud/`.
- `src/.nojekyll` is copied into `dist/` and stops GitHub Pages running Jekyll over the output.
- The site is currently unindexed. `robots.txt` serves `Disallow: /` and every page carries
  `noindex,nofollow`, because `allowIndexing` is `false` and `siteUrl` is empty.
- `dist/brand/` is published too. It is unlinked and unindexed, but it is publicly reachable.
- A first push over HTTPS may fail with `RPC failed; HTTP 400`. Raising `http.postBuffer` and
  forcing HTTP/1.1 resolves it; both are already set in this clone's git config.

## Before public launch

1. Confirm the preferred logo direction.
2. Provide the final domain and public business email; phone/address are optional.
3. Choose the inquiry destination and supply/approve the privacy notice so real delivery can be integrated and tested.

See `QA.md` for actual browser checks and known limits.

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

To connect actual submissions:

1. Implement a secure HTTPS endpoint and set `quoteEndpoint` and `privacyUrl`. Both are required to enable sending.
2. The endpoint accepts JSON keys: `name`, `email`, `company`, `gpu`, `quantity`, `region`, `start`, `term`, `use`, `notes`. Quantities and dates are strings; optional values may be empty.
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

## Before public launch

1. Confirm the preferred logo direction.
2. Provide the final domain and public business email; phone/address are optional.
3. Choose the inquiry destination and supply/approve the privacy notice so real delivery can be integrated and tested.

See `QA.md` for actual browser checks and known limits.

# Verification — September 10, 2026

## Browser checks completed

- Visually reviewed the official Equinix, Digital Realty, CoreWeave and Lambda homepages before design.
- Visually inspected the website at desktop 1440 px, tablet 1024 px and mobile 390 px widths.
- Checked document overflow at 320, 390, 768, 1024 and 1440 px: no horizontal overflow observed.
- Inspected the mobile hero, GPU rows and single-column quote fields.
- Opened the mobile menu, selected GPU options, and verified that the menu closed and the anchor changed correctly.
- Verified H100, H200, B200 and B300 catalog links populate the matching form selection. Fixed a missing H100 option found during testing.
- Submitted an empty form: required-field errors appeared, with ARIA error associations and focus moved to the first invalid field.
- Tested invalid email, zero quantity and a past date; all three were rejected with specific messages.
- Prepared a valid H100 / eight-GPU request; the preview contained the supplied values and explicitly said NOT SUBMITTED.
- Invoked the local draft download and verified the page continued to say nothing was sent. Browser download initiation was exercised; no third-party submission occurred.
- Changed GPU after preparation and verified the old draft became hidden.
- Confirmed one H1, labels associated with every form control, local Inter font loading, and no browser errors/warnings in captured logs.
- Reviewed the three-direction SVG comparison board. Refined the custom O opening after inspection.
- Checked JavaScript syntax, local static references, SVG XML and Git whitespace.

## Accessibility and prelaunch behavior

Skip link, navigation landmark, labeled figure, labeled form inputs, semantic table roles, keyboard focus indicators, Escape-to-close mobile navigation, ARIA validation errors, live status and reduced-motion CSS are included. Table headers remain available to assistive technology on mobile. The initial disabled fieldset prevents a JavaScript-disabled browser from sending an accidental GET submission.

The preview is noindex; canonical and sitemap origin await the final domain. No analytics, third-party scripts, invented email address or live inventory feed are present.

## Limits

No real mail/CRM/backend integration exists and no real receipt or deliverability test is possible yet. Browser testing used the Codex browser with viewport overrides, not physical iOS/Android devices or every browser engine. This was a practical accessibility and interaction review, not a formal WCAG conformance audit. Logos are concept studies with editable text; final letter outlines and optical refinement follow direction selection.

## Approved logo update

Replaced the navigation/footer temporary wordmarks with the exact supplied PNG, displayed through CSS whitespace cropping. The favicon frames the raster orb and does not claim vector geometry. Original PNG preserved byte-for-byte. Historical concepts are labeled archived. Legal footer remains Dataorb Cloud LLC.

## Full visual redesign — September 10, 2026

- Replaced all main-page layouts and styles with the approved logo's black/white/blue direction; removed the old flowchart and service-card grid.
- Visually reviewed desktop hero, GPU comparison, service accordion and form, plus mobile hero and completed request draft.
- Verified no document overflow at 320, 390, 768, 1024 and 1440 px. The intentionally clipped source PNG extends beyond its CSS viewing window; it does not create page overflow.
- Confirmed all brand image resources loaded and no console warnings/errors were captured.
- Opened the deployment service disclosure; its content became visible.
- Tested mobile menu opening, navigation and auto-close.
- Tested B300 inquiry prefilling, empty required fields with first-error focus, invalid email and zero quantity.
- Prepared a valid eight-GPU B300 inference request, verified the draft values and NOT SUBMITTED status, and invoked its text download.
- Rechecked local resources, unique IDs, anchor targets, form labels, one H1, legal company name, JavaScript syntax and Git whitespace.
- Fixed missing spaces at responsive line breaks and tightened mobile hero action spacing after visual review.

The form backend remains unconnected and explicitly disclosed. This redesign does not change inventory, pricing, delivery or service claims. Native-device and formal accessibility audits remain outside these checks.

## Research-led infrastructure theme — September 10, 2026
- Visually reviewed AWS, Azure, Google Cloud, Equinix, Digital Realty and CoreWeave official homepages. See DESIGN-RESEARCH.md for observations and implementation mapping.
- Replaced oversized logo hero with original conceptual architecture SVG; approved PNG navigation/footer logo preserved.
- Midnight/navy compute sections, ice-blue type, cyan architectural accents, cool light reading/form surfaces.
- Built successfully with the existing static build; no added dependencies or form logic changes.
- Desktop 1440px and mobile 390px preview inspected; no document horizontal overflow. Mobile navigation opened/closed correctly, B200 quote link selected B200, empty request highlighted six remaining required fields and explicitly stated nothing was sent.

## Enterprise infrastructure redesign — September 10, 2026
- Visually reviewed the official CoreWeave, Crusoe, Vantage Data Centers and STACK Infrastructure homepages before redesigning. See DESIGN-RESEARCH.md for observations and implementation mapping.
- Replaced the gradient hero headline, conceptual isometric SVG, numbered monospace eyebrows and decorative arrow glyphs with a light, table-led enterprise layout. GPU options moved from four cards into one specification table; the process section became a four-column stage table.
- Added an explicit scope-and-limitations block stating that Dataorb Cloud does not own or operate data centers, hold inventory, or guarantee availability.
- Rendered and inspected the full page at 1440 px and the narrow layout at 500 px; reviewed the hero, capability band, GPU table, services, process table, scope block, quote form and footer.
- Measured document scrollWidth against clientWidth at 500, 640, 768, 820, 900, 1024, 1280, 1440 and 1920 px: no horizontal overflow at any width.
- Fixed a real overflow found during that check: the visually hidden table header and caption are absolutely positioned, and with no positioned ancestor they resolved against the initial containing block, extending the document to 827 px at 768 px wide. The scroll wrapper is now `position: relative`.
- Fixed the stacked mobile table, where `display: grid` on a cell promoted "80" and its unit span to separate grid items and pushed the unit into the label column. Labels now stack above values.
- Verified the approved logo is never recolored. An earlier footer treatment used a CSS invert filter, which turned the cobalt dot yellow; the unmodified PNG now sits on a white plate instead.
- Drove the quote form programmatically in the browser: a table Select link populated the GPU field; an empty submit produced seven field errors with matching `aria-invalid` associations and stated nothing was sent; a completed request produced a local draft containing the supplied values and the words NOT SUBMITTED; editing a field afterwards hid the stale draft.
- Confirmed one H1, every app.js selector still resolving, the copyright year populating, the fieldset enabling on load, and no uncaught JavaScript errors at four widths.
- Built successfully with the existing static build; no added dependencies and no changes to form logic, endpoints or service claims.

The form backend remains unconnected and explicitly disclosed. This redesign does not change inventory, pricing, delivery or service claims. Native-device and formal accessibility audits remain outside these checks.

## Dedicated cluster planning, expanded inquiry form and FAQ — September 10, 2026
- Added a dedicated GPU cluster block between services and "How we work", with three supporting items, a closing note that equipment, availability, commercial terms and delivery schedules are confirmed with the selected providers, and a "Discuss Your Cluster" call to action.
- Added a six-question FAQ before the inquiry section using native `details`/`summary` disclosures.
- Added "Clusters" and "FAQ" to the primary navigation and footer. An earlier pass dropped "Scope" from the navigation to make room; it was restored, and navigation spacing was tightened for the 800–1100 px range instead.
- Expanded the inquiry form with an optional Project type select, an optional Hosting arrangement select and an optional Networking & storage textarea. The existing quantity field was relabelled "Estimated number of GPUs" with helper text rather than duplicated.
- Verified in the browser that the cluster call to action sets Project type to "Dedicated GPU cluster" and reveals the conditional fields, and that selecting a non-cluster project type hides them again.
- Verified hidden fields neither block validation nor reach a request: with hosting and networking answered and the project then switched to "GPU compute sourcing", the prepared draft contained neither value, while the required-field path still validated and prepared successfully.
- Verified switching back to the cluster path restores the previously typed hosting and networking values and that they then appear in the draft, labelled "Hosting arrangement" and "Networking & storage requirements".
- Verified the draft still carries NOT SUBMITTED, the status line still reads "Your draft is ready below. Online submission is not connected; nothing has been sent.", and the action remains "Prepare request". No success or delivery claim is shown.
- Verified editing a field after preparing a request hides the stale draft.
- Verified the quantity field keeps its helper text associated across an error appearing and clearing: `aria-describedby` reads `quantity-hint quantity-error` while invalid and `quantity-hint` once corrected. Previously `validate()` overwrote the association, which would have dropped the hint from assistive technology.
- Verified FAQ disclosures are keyboard focusable and open and close; all six render.
- Measured document scrollWidth against clientWidth at 500, 640, 768, 820, 900, 1024, 1280, 1440 and 1920 px: no horizontal overflow. Header fit was measured separately at 810, 860, 920, 1000, 1100 and 1440 px with no wordmark/navigation collision.
- Previewed desktop at 1440 px and narrow layout at 500 px: cluster block, FAQ closed and open states, and the form with conditional fields revealed.
- `[hidden]` is now enforced with `display: none !important` because `.field` sets `display: flex`, which would otherwise defeat the attribute.
- Built successfully with the existing static build; no new dependencies.

No GPU ownership, data center operation, inventory, capacity, pricing, performance, certification, partnership or SLA claims were added. Contact details, form delivery and the privacy notice remain unconfigured and are still disclosed as such.

## Pre-landing review — September 10, 2026
Reviewed the uncommitted cluster/FAQ/form work against HEAD with a checklist pass plus five parallel specialist reviews (testing, maintainability, design/accessibility, performance, adversarial). `dist/` is generated and was excluded; the effective source diff was ~130 lines.

Clean on the critical pass, verified rather than assumed:
- No XSS sinks. Every DOM write uses `textContent`, `replaceChildren` or `createTextNode`; no `innerHTML`, `eval` or `new Function`.
- Enum completeness: all five `#project` values drive the reveal correctly, including the entity-encoded "Infrastructure planning &amp; consulting".
- Positioning: a scan of visible page text found no prohibited claim. The only regex hits were the disclaimers "not guaranteed here" and "We do not promise immediate activation".
- Draft `labels` keys and form field names match 13/13, so no field can render as `undefined:`.
- `dist/` is in sync with `src/`; a rebuild is a no-op.

Two earlier verifications in this file were wrong and are corrected here:
- "No horizontal overflow / no navigation collision" was measured with a viewport of 795px for an 810px window, so the mobile drawer had already engaged and the desktop navigation was never exercised in the band that broke.
- "Stale values excluded" was tested only for cluster to sourcing, where the fields hide. It was never tested for cluster to planning, where both fields stay visible and carried their previous answers into the request.

Fixed during review:
- **Navigation wrapped between roughly 801px and 975px.** Six links plus the CTA need a ~1000px viewport; the drawer only took over at 800px, so iPad portrait widths (810, 820, 834) showed a two-line 54px header. The drawer breakpoint moved to 1000px, `app.js` matchMedia to 1001px, the compensating gap and font-size shrink (which also produced 21px tap targets) was removed, and `#primary-nav a` now uses `white-space: nowrap` so future overflow fails visibly. Verified single-line and overflow-free at 375, 500, 700, 815, 875, 915, 975, 1000, 1010, 1015, 1020, 1035, 1060, 1100, 1280, 1440, 1920 and 2560px.
- **Stale conditional answers crossed between project types.** Hiding only suppressed values; switching between two revealing types kept them on screen and serialised them under the new type. Conditional fields are now cleared on any change of project type, not only on hide. Verified for both transitions.
- **The form failed open.** The fieldset was enabled 60 lines before the submit handler was attached, on a `<form>` with no `action`, so any early throw turned "Prepare request" into a native GET carrying name, email, company and notes into the URL and server logs, then reloaded to a blank form that reads as success. The fieldset is now enabled only after every handler is wired, and an error listener registered on the first line re-disables it and shows "This form is unavailable in this browser. Nothing has been sent." Verified by injecting a throw mid-module.
- **Delivery outcomes were erased by ordinary interaction.** Status messages now carry a kind; `invalidateDraft` clears draft-state messages only, so a failed-send message cannot be wiped into a blank status that reads as success.
- **Cross-talk during an in-flight submit.** The cluster CTA and GPU links are ignored while a request is sending, so a success message cannot describe a state that was never transmitted.
- **Required fields could be skipped.** `activeFields()` excluded anything inside `[hidden]` with no `required` guard. It now never excludes a required field.
- **Reveal desynced from value.** `pageshow` now re-syncs, so bfcache restore, session restore and autofill cannot leave the value and the revealed fields disagreeing.
- **Three copies of the same strings.** The reveal is now driven by `<option data-extended>` in the markup rather than a hard-coded array, the CTA resolves its target against the option list instead of blind-assigning, and `scripts/check.mjs` enforces the rest at build time.
- **Accessibility and CSS.** The FAQ marker moved from CSS generated content to an `aria-hidden` span, so screen readers no longer announce "plus" on every row, and it no longer depends on the `content` alt-text syntax that Safari only supports from 17.4. Its colour moved from `var(--muted)` (4.30:1 on the hover surface, under AA) to `var(--body)` (7.61:1). The global `[hidden] { display: none !important }` was scoped to `.field[hidden]`, which wins on specificity alone. `.faq-answer p` narrowed from 86ch to 74ch. A shared `clearError` helper keeps `validate()` and `syncProjectFields()` from drifting, and a missing draft label now falls back to the field name instead of printing `undefined`.

Not changed, recorded for you:
- "Discuss Your Cluster" is the only Title Case control on a site that is otherwise sentence case, but it is verbatim from the brief, so it was left alone.
- `.faq-item summary { display: flex }` overrides the native `display: list-item`; Safari/VoiceOver is known to drop the disclosure mapping when that happens. Keyboard operation and focus visibility are unaffected.
- The conditional fields appear six fields below the control that reveals them, and nothing announces the change through the existing `role="status"` region.
- `#clusters` reuses `.service-grid` directly below `#services`, so two visually identical three-up grids sit next to each other.
- Pre-existing and outside this change: `favicon.svg` is 1,378 KB (an SVG wrapping a base64 1254x1254 PNG), `assets/dataorb-cloud-final.png` is 1,034 KB rendered at 32px and 158x15px, and `fonts/inter-latin.woff2` is 344 KB — roughly 2.7 MB of assets against 14.5 KB of gzipped code.

The form backend remains unconnected and explicitly disclosed. No inventory, pricing, capacity, certification, partnership or SLA claims were added.

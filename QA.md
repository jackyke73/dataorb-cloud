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

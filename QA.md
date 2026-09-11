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

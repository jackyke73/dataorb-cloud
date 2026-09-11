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

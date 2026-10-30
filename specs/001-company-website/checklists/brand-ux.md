# Brand, UX and Accessibility Requirements Checklist: Coxcel Company Website

**Purpose**: Unit tests for the requirements covering brand, design, accessibility and content
**Created**: 2026-10-30
**Feature**: [spec.md](../spec.md) | Depth: Standard | Audience: Reviewer

## Requirement Completeness

- [ ] CHK001 Are all colour roles (accent, text, dark section, border, quiet background) assigned to a named token? [Completeness, Spec FR-002/FR-003]
- [ ] CHK002 Are the accessible blue tints for small text and normal-size button labels specified with target ratios? [Completeness, Spec FR-036, research R2]
- [ ] CHK003 Are both logo variants (light, reversed) and their permitted backgrounds defined? [Completeness, Spec FR-005]
- [ ] CHK004 Is every location of the geometric motif (dividers, card corners, markers, line art, hero grid) listed? [Completeness, Spec FR-006]
- [ ] CHK005 Are required sections for every page enumerated, including Careers, Contact and Legal? [Completeness, Spec FR-011/FR-012]
- [ ] CHK006 Is the content of each service detail page fully enumerated? [Completeness, Spec FR-014]
- [ ] CHK007 Are not-found page contents (links back) specified? [Completeness, Edge Cases]

## Requirement Clarity

- [ ] CHK008 Is "subtle animated vector" in the hero bounded (duration, looping, reduced motion)? [Clarity, Spec FR-007]
- [ ] CHK009 Is "restrained scroll reveal" quantified (distance, duration, once only)? [Clarity, Spec FR-009]
- [ ] CHK010 Are heading scale and tracking expressed as measurable values? [Clarity, Spec FR-001]
- [ ] CHK011 Is "Sample" labelling for proof content defined (where it appears and how it reads)? [Clarity, Spec FR-032]

## Requirement Consistency

- [ ] CHK012 Is the ban on blue background washes consistent with blue primary buttons and highlight blocks? [Consistency, Spec FR-003]
- [ ] CHK013 Do the moodboard references (neon, VR imagery) conflict with the no-neon rule, and is precedence stated? [Consistency, Assumptions]
- [ ] CHK014 Are navigation labels consistent between header, footer, mega-menu and page titles? [Consistency, Spec FR-022]

## Acceptance Criteria Quality

- [ ] CHK015 Can the no-gradient and no-emoji rules be verified mechanically? [Measurability, Spec SC-006]
- [ ] CHK016 Are responsive acceptance widths (360, 768, 1280) applied to every page? [Measurability, Spec SC-007]
- [ ] CHK017 Is the "within 5 seconds" comprehension criterion testable without user research? [Measurability, Spec SC-001]

## Scenario and Edge Case Coverage

- [ ] CHK018 Are keyboard flows for mega-menu and mobile menu defined (open, move, close, focus return, focus trap)? [Coverage, US4]
- [ ] CHK019 Is behaviour without JavaScript specified for content pages and the form? [Coverage, Edge Cases]
- [ ] CHK020 Is layout behaviour defined when all proof sections are switched off? [Edge Case, Edge Cases]
- [ ] CHK021 Is fallback behaviour defined if the SVG logo cannot render (PNG fallback)? [Edge Case, Gap]

## Non-Functional Requirements

- [ ] CHK022 Are performance targets stated per page type and device class? [NFR, Spec SC-004]
- [ ] CHK023 Is the reduced-motion requirement applied to every animated element including hover shifts? [NFR, Spec FR-009]
- [ ] CHK024 Are alt text rules defined for decorative versus meaningful SVGs? [NFR, Spec FR-037]

## Dependencies and Assumptions

- [ ] CHK025 Is the review of legal page templates by the business recorded as a launch dependency? [Assumption]
- [ ] CHK026 Is the logo colour discrepancy (#007BFF vs #457AF4) and its single switch documented? [Dependency, Spec FR-005]

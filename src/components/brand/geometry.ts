/**
 * Logo geometry traced from the supplied mark (viewBox 0 0 761 749).
 * The C is split into four blocks so the hero can assemble it; together they form the full mark.
 */
export const MARK_VIEWBOX = "0 0 761 749";

export const C_PATH = "M324 0 486 93 162 279V460L327 559 556 424 657 452 651 555 326 748 0 551V186Z";

export const ARROW_PATH = "M573 412 656 354 760 381 750 488 667 546 676 440Z";

export const C_BLOCKS = [
  "M324 0 486 93 162 279 0 186Z",
  "M0 186 162 279V460L0 551Z",
  "M0 551 162 460 327 559 326 748Z",
  "M326 748 327 559 556 424 657 452 651 555Z",
] as const;

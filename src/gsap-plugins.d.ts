declare module "gsap/SplitText" {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(target: string | string[] | Element | Element[], vars?: Record<string, unknown>);
    revert(): void;
    split(vars?: Record<string, unknown>): void;
  }
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: Record<string, unknown>): ScrollSmoother;
    static refresh(safe?: boolean): void;
    scrollTop(value?: number): number;
    scrollTo(target: unknown, smooth?: boolean, position?: string): void;
    paused(value?: boolean): boolean;
  }
}

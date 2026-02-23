// import * as React from "react"
// import { cn } from "@/lib/utils"

// type TypographyVariant =
//   | "hero"
//   | "h2"
//   | "h3"
//   | "h4"
//   | "h5"
//   | "h6"
//   | "body-lg"
//   | "body"
//   | "body-md"
//   | "body-sm"
//   | "caption"
//   | "link"
//   | "label"

// type TypographyElement =
//   | "h1"
//   | "h2"
//   | "h3"
//   | "h4"
//   | "h5"
//   | "h6"
//   | "p"
//   | "span"
//   | "div"

// interface TypographyProps
//   extends React.HTMLAttributes<HTMLElement> {
//   variant?: TypographyVariant
//   as?: TypographyElement
//   uppercase?: boolean
//   lowercase?: boolean
//   capitalize?: boolean
//   underline?: boolean
// }

// const variantStyles: Record<TypographyVariant, string> = {
//   hero: `
//     font-rubik font-bold
//     text-[100px] md:text-[160px] lg:text-[223.5px]
//     leading-[100%]
//   `,
//   h2: `
//     font-rubik font-semibold
//     text-[48px] md:text-[60px] lg:text-[74px]
//     leading-[100%]
//   `,
//   h3: `
//     font-rubik font-semibold
//     text-[32px] md:text-[40px] lg:text-[48px]
//     leading-[100%]
//   `,
//   h4: `
//     font-rubik font-semibold
//     text-[28px] md:text-[32px] lg:text-[36px]
//     leading-[100%]
//   `,
//   h5: `
//     font-rubik font-semibold
//     text-[24px] md:text-[28px] lg:text-[32px]
//     leading-[100%]
//   `,
//   h6: `
//     font-rubik font-semibold
//     text-[20px] md:text-[22px] lg:text-[24px]
//     leading-[100%]
//   `,
//   "body-lg": `
//     font-open-sans font-semibold
//     text-[18px] md:text-[20px] lg:text-[24px]
//     leading-[140%]
//   `,
//   body: `
//     font-open-sans font-normal
//     text-[14px] md:text-[15px] lg:text-[16px]
//     leading-[140%]
//   `,
//   "body-md": `
//     font-open-sans font-semibold
//     text-[16px] md:text-[18px] lg:text-[20px]
//     leading-[140%]
//   `,
//   "body-sm": `
//     font-open-sans font-semibold
//     text-[13px] md:text-[14px]
//     leading-[100%]
//   `,
//   caption: `
//     font-open-sans font-semibold
//     text-[11px] md:text-[12px]
//     leading-[100%]
//   `,
//   link: `
//     font-open-sans font-semibold
//     text-[14px] md:text-[15px] lg:text-[16px]
//     underline
//     leading-[100%]
//   `,
//   label: `
//     font-open-sans font-medium
//     text-[13px] md:text-[14px]
//     tracking-[0.25px]
//     uppercase
//     underline
//   `,
// }

// const defaultElement: Record<TypographyVariant, TypographyElement> = {
//   hero: "h1",
//   h2: "h2",
//   h3: "h3",
//   h4: "h4",
//   h5: "h5",
//   h6: "h6",
//   "body-lg": "p",
//   body: "p",
//   "body-md": "p",
//   "body-sm": "p",
//   caption: "span",
//   link: "span",
//   label: "span",
// }

// export function Typography({
//   variant = "body",
//   as,
//   uppercase,
//   lowercase,
//   capitalize,
//   underline,
//   className,
//   ...props
// }: TypographyProps) {
//   const Element = as ?? defaultElement[variant]

//   return React.createElement(
//     Element,
//     {
//       className: cn(
//         variantStyles[variant],
//         uppercase && "uppercase",
//         lowercase && "lowercase",
//         capitalize && "capitalize",
//         underline && "underline",
//         className
//       ),
//       ...props,
//     }
//   )
// }

import * as React from "react";
import { cn } from "@/lib/utils";

type TypographyVariant =
  | "hero"
  | "h2"
  | "h2-display"
  | "h3-display"
  | "h4-display"
  | "h5"
  | "h6"
  | "rubik-base"
  | "rubik-label"
  | "rubik-xs"
  | "body-xl"
  | "body-lg"
  | "body"
  | "body-sm"
  | "link";

type TypographyElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: TypographyElement;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  underline?: boolean;
}

const variantStyles: Record<TypographyVariant, string> = {
  hero: `
    font-rubik font-bold uppercase
    text-[100px] md:text-[160px] lg:text-[223.5px]
    leading-[100%]
  `,

  h2: `
    font-rubik font-semibold
    text-[48px] md:text-[60px] lg:text-[74px]
    leading-[100%]
  `,

  "h2-display": `
    font-rubik font-semibold uppercase
    text-[48px] md:text-[60px] lg:text-[74px]
    leading-[95%]
  `,

  "h3-display": `
    font-rubik font-semibold uppercase
    text-[32px] md:text-[40px] lg:text-[48px]
    leading-[100%]
  `,

  "h4-display": `
    font-rubik font-semibold uppercase
    text-[28px] md:text-[32px] lg:text-[36px]
    leading-[100%]
  `,

  h5: `
    font-rubik font-semibold
    text-[24px] md:text-[28px] lg:text-[32px]
    leading-[100%]
  `,

  h6: `
    font-rubik font-semibold
    text-[20px] md:text-[22px] lg:text-[24px]
    leading-[100%]
  `,

  "rubik-base": `
    font-rubik font-semibold
    text-[14px] md:text-[15px] lg:text-[16px]
    leading-[100%]
  `,

  "rubik-label": `
    font-rubik font-medium uppercase underline
    text-[13px] md:text-[14px]
    tracking-[0.25px]
    leading-[100%]
  `,

  "rubik-xs": `
    font-rubik font-semibold
    text-[11px] md:text-[12px]
    leading-[100%]
  `,

  "body-xl": `
    font-open-sans font-semibold
    text-[18px] md:text-[20px] lg:text-[24px]
    leading-[100%]
  `,

  "body-lg": `
    font-open-sans font-semibold
    text-[16px] md:text-[18px] lg:text-[20px]
    leading-[100%]
  `,

  body: `
    font-open-sans font-normal
    text-[14px] md:text-[15px] lg:text-[16px]
    leading-[100%]
  `,

  "body-sm": `
    font-open-sans font-semibold
    text-[13px] md:text-[14px]
    leading-[100%]
  `,

  link: `
    font-open-sans font-semibold underline
    text-[14px] md:text-[15px] lg:text-[16px]
    leading-[100%]
  `,
};

const defaultElement: Record<TypographyVariant, TypographyElement> = {
  hero: "h1",
  h2: "h2",
  "h2-display": "h2",
  "h3-display": "h3",
  "h4-display": "h4",
  h5: "h5",
  h6: "h6",
  "rubik-base": "span",
  "rubik-label": "span",
  "rubik-xs": "span",
  "body-xl": "p",
  "body-lg": "p",
  body: "p",
  "body-sm": "p",
  link: "span",
};

export function Typography({
  variant = "body",
  as,
  uppercase,
  lowercase,
  capitalize,
  underline,
  className,
  ...props
}: TypographyProps) {
  const Element = as ?? defaultElement[variant];

  return React.createElement(Element, {
    className: cn(
      variantStyles[variant],
      uppercase && "uppercase",
      lowercase && "lowercase",
      capitalize && "capitalize",
      underline && "underline",
      className,
    ),
    ...props,
  });
}

import { tva } from "@gluestack-ui/nativewind-utils/tva";
import { isWeb } from "@gluestack-ui/nativewind-utils/IsWeb";

const baseStyle = isWeb
  ? "font-sans tracking-sm my-0 bg-transparent border-0 box-border display-inline list-none margin-0 padding-0 position-relative text-start no-underline whitespace-pre-wrap word-wrap-break-word"
  : "";

export const textStyle = tva({
  base: `text-typography-700 font-body ${baseStyle}`,

  variants: {
    isTruncated: {
      true: "web:truncate",
    },
    bold: {
      true: "font-bold",
    },
    underline: {
      true: "underline",
    },
    strikeThrough: {
      true: "line-through",
    },
    size: {
      "2xs": "text-2xs",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
    },
    sub: {
      true: "text-xs",
    },
    italic: {
      true: "italic",
    },
    highlight: {
      true: "bg-yellow-500",
    },
  },
});

export const headingStyle = tva({
  base: `text-typography-900 font-bold font-heading tracking-sm my-0 ${baseStyle}`,
  variants: {
    isTruncated: {
      true: "truncate",
    },
    bold: {
      true: "font-bold",
    },
    underline: {
      true: "underline",
    },
    strikeThrough: {
      true: "line-through",
    },
    sub: {
      true: "text-xs",
    },
    italic: {
      true: "italic",
    },
    highlight: {
      true: "bg-yellow-500",
    },
    size: {
      "5xl": "text-6xl",
      "4xl": "text-5xl",
      "3xl": "text-4xl",
      "2xl": "text-3xl",
      xl: "text-2xl",
      lg: "text-xl",
      md: "text-lg",
      sm: "text-base",
      xs: "text-sm",
    },
  },
});

const baseStyleCard = isWeb ? "flex flex-col relative z-0" : "";

export const cardStyle = tva({
  base: baseStyleCard,
  variants: {
    size: {
      sm: "p-3 rounded",
      md: "p-4 rounded-md",
      lg: "p-6 rounded-xl",
    },
    variant: {
      elevated: "bg-background-0",
      outline: "border border-outline-200 ",
      ghost: "rounded-none",
      filled: "bg-background-50",
    },
  },
});

const captionTableStyle = isWeb ? "caption-bottom" : "";

export const tableStyle = tva({
  base: `table border-collapse border-collapse w-[800px]`,
});

export const tableHeaderStyle = tva({
  base: "",
});

export const tableBodyStyle = tva({
  base: "",
});

export const tableFooterStyle = tva({
  base: "",
});

export const tableHeadStyle = tva({
  base: "flex-1 px-6 py-[14px] text-left font-bold text-[16px] leading-[22px] text-typography-800 font-roboto",
});

export const tableRowStyleStyle = tva({
  base: "border-0 border-b border-solid border-outline-200 bg-background-0",
  variants: {
    isHeaderRow: {
      true: "",
    },
    isFooterRow: {
      true: "border-b-0 ",
    },
  },
});

export const tableDataStyle = tva({
  base: "flex-1 px-6 py-[14px] text-left text-[16px] font-medium leading-[22px] text-typography-800 font-roboto",
});

export const tableCaptionStyle = tva({
  base: `${captionTableStyle} px-6 py-[14px] text-[16px] font-normal leading-[22px] text-typography-800 bg-background-50 font-roboto`,
});

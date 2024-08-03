import { RJSFSchema } from "@rjsf/utils";

export const TextSchema: RJSFSchema = {
  description: "Configure Text Properties",
  type: "object",
  required: ["text"],
  properties: {
    text: {
      type: "string",
      title: "Text",
      default: "Aa",
    },
  },
};

export type TextValueType = {
  text: string;
};

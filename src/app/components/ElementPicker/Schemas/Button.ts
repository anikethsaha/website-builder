import { RJSFSchema } from "@rjsf/utils";

export const ButtonSchema: RJSFSchema = {
  description: "Configure Button Properties",
  type: "object",
  required: ["text"],
  properties: {
    text: {
      type: "string",
      title: "Button Text",
      default: "Button",
    },
    id: {
      type: "string",
      title: "Unique Id for the button",
    },
    link: {
      type: "string",
      title: "Redirect on Click",
    },
  },
};

export type ButtonValueType = {
  text: string;
  id?: string;
  link?: string;
};

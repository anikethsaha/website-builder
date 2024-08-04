import { RJSFSchema } from "@rjsf/utils";

export const InputSchema: RJSFSchema = {
  description: "Configure Input Properties",
  type: "object",
  required: [],
  properties: {
    label: {
      type: "string",
      title: "Label",
    },
    placeholder: {
      type: "string",
      title: "Placeholder",
    },
    id: {
      type: "string",
      title: "ID",
    },
    type: {
      type: "string",
      title: "Type",
    },
  },
};

export type InputValueType = {
  label?: string;
  placeholder?: string;
  id?: string;
  type?: React.HTMLInputTypeAttribute;
};

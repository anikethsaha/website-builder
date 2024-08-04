import { RJSFSchema } from "@rjsf/utils";

export const SectionSchema: RJSFSchema = {
  description: "Configure section properties",
  properties: {
    type: {
      enum: ["none", "image"],
      title: "Type",
      default: "none",
    },
  },
  allOf: [
    {
      if: {
        properties: {
          type: {
            const: "image",
          },
        },
      },
      then: {
        properties: {
          imageLink: {
            type: "string",
            title: "Image Link",
            default: "https://placehold.co/600x400",
          },
        },
        required: ["imageLink"],
      },
    },

    {
      required: ["type"],
    },
  ],
};

export type SectionValueType = {
  type: "none" | "image";
  imageLink?: string;
};

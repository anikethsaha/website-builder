import { RJSFSchema } from "@rjsf/utils";

export const BoxSchema: RJSFSchema = {
  description: "Configure box properties",
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

export type BoxValueType = {
  type: "none" | "image";
  imageLink?: string;
};

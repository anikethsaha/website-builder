import React from "react";

import { EditorElement } from "../models/EditorElement";
import { EditorComponent } from "../models/EditorComponents";
import { DEVICE_TYPES } from "../models/device.mode";

const LEFT_MOBILE_OFFSET = 695;
const TOP_MOBILE_OFFSET = 84;
const LEFT_DESKTOP_OFFSET = 290;
const TOP_DESKTOP_OFFSET = 84;

export const withPreviewLayout = (
  Element: React.ComponentType<EditorElement>,
  deviceType?: DEVICE_TYPES
) => {
  const ElementDisplayContainer: React.FC<EditorComponent<unknown>> = (
    props
  ) => {
    const position = props.position?.[deviceType || DEVICE_TYPES.DESKTOP];
    let top = position?.coordinates?.y ?? 0;
    let left = position?.coordinates?.x ?? 0;
    console.log({
      type: typeof top,
      top: top,
      left,
      typed: typeof left,
    });
    if (deviceType === DEVICE_TYPES.MOBILE) {
      top = typeof top === "number" ? top - TOP_MOBILE_OFFSET : 0;
      left = typeof left === "number" ? left - LEFT_MOBILE_OFFSET : 0;
    } else if (deviceType === DEVICE_TYPES.DESKTOP) {
      top = typeof top === "number" ? top - TOP_DESKTOP_OFFSET : 0;
      left = typeof left === "number" ? left - LEFT_DESKTOP_OFFSET : 0;
    }

    left = left < 0 ? 0 : left;
    top = top < 0 ? 0 : top;

    return (
      <div
        className="absolute"
        style={{
          top,
          left,
        }}
      >
        <Element {...props} />
      </div>
    );
  };

  return ElementDisplayContainer;
};

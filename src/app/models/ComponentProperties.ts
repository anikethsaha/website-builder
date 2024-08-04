import { XYCoord } from "react-dnd";
import { DEVICE_TYPES } from "./device.mode";

export type ComponentProperties = {
  style?: {
    [device in DEVICE_TYPES]?: React.CSSProperties;
  };
  position?: Partial<{
    [device in DEVICE_TYPES]: {
      coordinates?: XYCoord;
    };
  }>;
};

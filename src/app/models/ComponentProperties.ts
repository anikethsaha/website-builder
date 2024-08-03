import { XYCoord } from "react-dnd";

export type ComponentProperties = {
  style?: React.CSSProperties;
  position?: Partial<{
    coordinates?: XYCoord;
  }>;
};

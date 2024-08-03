import React from "react";
import { ElementPicker } from "../ElementPicker";
import { PropertySetting } from "../PropertySetting";
import { Canva } from "../Canva";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const Builder = () => {
  return (
    <div className="h-full w-full flex flex-row">
      <DndProvider backend={HTML5Backend}>
        <ElementPicker />
        <Canva />
        <PropertySetting />
      </DndProvider>
    </div>
  );
};

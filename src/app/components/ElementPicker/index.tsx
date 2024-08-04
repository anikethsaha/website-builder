import React from "react";
import { ButtonElement } from "./Elements/ButtonElement";
import {
  EditorElementTypes,
  LayoutElementTypes,
} from "src/app/models/EditorElement";

import { TextElement } from "./Elements/TextElement";
import { BoxElement } from "./Elements/BoxElement";
import { BasicLayout } from "./Layouts/BasicLayout";
import { FlexElement } from "./Elements/FlexElement";
import { InputElement } from "./Elements/InputElement";

enum PICKER_TYPES {
  COMPONENTS = "COMPONENTS",
  LAYOUTS = "LAYOUTS",
}

export const ElementPicker = () => {
  const [pickerType, setPickerType] = React.useState(PICKER_TYPES.COMPONENTS);

  return (
    <div className="w-96  	h-full border-r-slate-300 border-r bg-white">
      <div className="p-3 border-b flex flex-row gap-3">
        <div
          className={`text-xs font-semibold cursor-pointer  ${
            pickerType === PICKER_TYPES.COMPONENTS
              ? "text-gray-600"
              : "text-gray-400 hover:text-gray-500"
          }`}
          onClick={() => setPickerType(PICKER_TYPES.COMPONENTS)}
        >
          Components
        </div>
        <div
          className={`text-xs font-semibold  cursor-pointer hover:text-gray-500 ${
            pickerType === PICKER_TYPES.LAYOUTS
              ? "text-gray-600"
              : "text-gray-400 hover:text-gray-500"
          }`}
          onClick={() => setPickerType(PICKER_TYPES.LAYOUTS)}
        >
          Layouts
        </div>
      </div>

      {pickerType === PICKER_TYPES.COMPONENTS ? (
        <div className="flex flex-col gap-2   mt-4 px-4">
          <ButtonElement type={EditorElementTypes.BUTTON} />
          <TextElement type={EditorElementTypes.TEXT} />
          <BoxElement type={EditorElementTypes.BOX} />
          <InputElement type={EditorElementTypes.INPUT} />
        </div>
      ) : (
        <div className="flex flex-col gap-2   mt-4 px-4">
          <BasicLayout type={LayoutElementTypes.BASIC} kind="layouts" />
        </div>
      )}
    </div>
  );
};

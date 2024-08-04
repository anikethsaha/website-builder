import React from "react";
import { useEditor } from "src/app/hooks/useEditor";
import { EditorComponent } from "src/app/models/EditorComponents";
import { FourSplitPropertyValue } from "./components/FourSplitPropertyValue";
import { BaseStyleSetting } from "./components/BaseStyleSetting";
import { EditorElementTypes } from "src/app/models/EditorElement";
import { FontStyleSetting } from "./components/FontStyleSetting";
import { useDeviceType } from "src/app/stores/editor.store";

const elementsNeedFontStyle = [EditorElementTypes.TEXT];

export const DesignSetting: React.FC<{
  component: EditorComponent<unknown>;
}> = ({ component }) => {
  const { updateStyle } = useEditor();
  const deviceType = useDeviceType();
  const styles = component.style?.[deviceType];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ [e.target.name]: e.target.value });
    e.preventDefault();
    updateStyle(component.id, { [e.target.name]: e.target.value }, deviceType);
  };

  return (
    <div
      className="flex flex-col gap-8 p-3 justify-center items-start overflow-auto"
      style={{ maxHeight: "calc(100vh - 90px)" }}
    >
      <BaseStyleSetting handleChange={handleChange} styles={styles ?? {}} />
      <div className="flex flex-col gap-4">
        <FourSplitPropertyValue
          name="margin"
          handleChange={handleChange}
          styles={styles ?? {}}
        />
        <FourSplitPropertyValue
          name="padding"
          handleChange={handleChange}
          styles={styles ?? {}}
        />
      </div>
      {elementsNeedFontStyle.includes(component.type) && (
        <FontStyleSetting handleChange={handleChange} styles={styles ?? {}} />
      )}
    </div>
  );
};

import React, { use, useMemo } from "react";
import { DesignSetting } from "./DesignSetting";
import { useEditorComponents } from "src/app/hooks/useEditorComponent";
import { ValueSetting } from "./ValueSetting";

enum PropertySettingTypes {
  DESIGN = "DESIGN",
  VALUES = "VALUES",
}

export const PropertySetting = () => {
  const components = useEditorComponents();

  const componentFocused = useMemo(() => {
    return components.find((component) => component.isFocused);
  }, [components]);

  const [propertySettingType, setPropertySettingType] = React.useState(
    PropertySettingTypes.DESIGN
  );

  const handlePropertySettingType = (type: PropertySettingTypes) => {
    setPropertySettingType(type);
  };

  return (
    <div className="w-96  	h-full border-l-slate-300 border-l bg-white">
      <div className="p-3 border-b flex flex-row gap-3">
        <div
          className={`text-xs font-semibold cursor-pointer  ${
            propertySettingType === PropertySettingTypes.DESIGN
              ? "text-gray-600"
              : "text-gray-400 hover:text-gray-500"
          }`}
          onClick={() => handlePropertySettingType(PropertySettingTypes.DESIGN)}
        >
          Design
        </div>
        <div
          className={`text-xs font-semibold  cursor-pointer hover:text-gray-500 ${
            propertySettingType === PropertySettingTypes.VALUES
              ? "text-gray-600"
              : "text-gray-400 hover:text-gray-500"
          }`}
          onClick={() => handlePropertySettingType(PropertySettingTypes.VALUES)}
        >
          Values
        </div>
      </div>

      {componentFocused && (
        <>
          {propertySettingType === PropertySettingTypes.DESIGN ? (
            <DesignSetting component={componentFocused} />
          ) : (
            <ValueSetting component={componentFocused} />
          )}
        </>
      )}
    </div>
  );
};

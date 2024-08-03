import { SCHEMA_MAP } from "../components/PropertySetting/constants/SCHEMA_MAP";
import { ComponentProperties } from "../models/ComponentProperties";
import { EditorComponent } from "../models/EditorComponents";
import { EditorElement } from "../models/EditorElement";
import { useEditorStore } from "../stores/editor.store";
import validator from "@rjsf/validator-ajv8";

export const useEditor = () => {
  const appendComponent = useEditorStore((state) => state.appendComponent);
  const setComponentValue = useEditorStore((state) => state.setComponentValue);
  const focusComponent = useEditorStore((state) => state.focusComponent);
  const updatePosition = useEditorStore((state) => state.updatePosition);
  const updateStyle = useEditorStore((state) => state.updateStyle);

  const clearCompoenntFocus = useEditorStore(
    (state) => state.clearComponentFocus
  );

  const addComponent = (component: EditorElement & ComponentProperties) => {
    appendComponent(component);
  };

  const setValue = <T,>(component: EditorComponent<T>, value: any) => {
    const schema = SCHEMA_MAP[component.type];
    const validationResposne = validator.validateFormData(value, schema);
    const hasError = !!validationResposne.errors.length;

    if (hasError) {
      console.error(
        "Validation failed",
        validationResposne.errors.map((e) => e.message)
      );
      /** @todo show error */
      return;
    }

    setComponentValue(component.id, value);
  };

  return {
    addComponent,
    setValue,
    focusComponent,
    clearCompoenntFocus,
    updatePosition,
    updateStyle,
  };
};

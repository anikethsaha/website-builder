import { SCHEMA_MAP } from "../components/PropertySetting/constants/SCHEMA_MAP";
import { LAYOUT_COMPONENT_MAP } from "../constants/LAYOUT_COMPONENT_MAP";
import { ComponentProperties } from "../models/ComponentProperties";
import { EditorComponent } from "../models/EditorComponents";
import { EditorElement, LayoutElementTypes } from "../models/EditorElement";
import { useEditorStore } from "../stores/editor.store";
import validator from "@rjsf/validator-ajv8";

export const useEditor = () => {
  const appendComponent = useEditorStore((state) => state.appendComponent);
  const setComponentValue = useEditorStore((state) => state.setComponentValue);
  const focusComponent = useEditorStore((state) => state.focusComponent);
  const updatePosition = useEditorStore((state) => state.updatePosition);
  const updateStyle = useEditorStore((state) => state.updateStyle);
  const updateDisableDrag = useEditorStore((state) => state.updateDisableDrag);
  const removeComponent = useEditorStore((state) => state.removeComponent);
  const togglePreviewMode = useEditorStore((state) => state.togglePreviewMode);
  const setDeviceType = useEditorStore((state) => state.setDeviceType);
    const addChilds = useEditorStore((state) => state.addChilds);
    const updateChildsPosition = useEditorStore((state) => state.updateChildsPosition);
  const fillLayoutComponents = useEditorStore(
    (state) => state.fillComponentsForLayout
  );

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

  const setLayout = (layoutName: string) => {
    const componentList =
      LAYOUT_COMPONENT_MAP[layoutName as LayoutElementTypes];

    if (componentList) {
      fillLayoutComponents(componentList, layoutName);
    }
  };

  const appendChildToComponent = (parentId: string, child: EditorElement) => {
    addChilds(parentId, child);
  };

  return {
    addComponent,
    setValue,
    focusComponent,
    clearCompoenntFocus,
    updatePosition,
    updateStyle,
    updateDisableDrag,
    setLayout,
    removeComponent,
    togglePreviewMode,
    setDeviceType,
    appendChildToComponent,
    updateChildsPosition,
  };
};

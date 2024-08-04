import { EditorComponent } from "src/app/models/EditorComponents";
import { create } from "zustand";
import { EditorElement, EditorElementTypes } from "../models/EditorElement";
import { nanoid } from "nanoid";
import { ComponentProperties } from "../models/ComponentProperties";
import { XYCoord } from "react-dnd";
import { LayoutComponentType } from "../models/Layout.models";

export type EditorState = {
  components: EditorComponent<unknown>[];
  disableDrag?: boolean;
  layoutName?: string;
  previewMode: boolean;
  deviceType: "desktop" | "mobile";
};

export type EditorActions = {
  appendComponent: (component: EditorElement) => void;
  removeComponent: (id: string) => void;
  clearComponents: () => void;
  setComponentValue: (componentId: string, value: any) => void;
  focusComponent: (componentId: string) => void;
  clearComponentFocus: (id: string) => void;
  updatePosition: (componentId: string, position: XYCoord) => void;
  updateStyle: (componentId: string, style: React.CSSProperties) => void;
  updateDisableDrag: (disable: boolean) => void;
  fillComponentsForLayout: (
    components: LayoutComponentType<unknown>[],
    layoutName?: string
  ) => void;
  setLayoutName: (name: string) => void;
  togglePreviewMode: () => void;
  setDeviceType: (deviceType: "desktop" | "mobile") => void;
};

export const useEditorStore = create<EditorState & EditorActions>((set) => ({
  components: [],
  previewMode: false,
  deviceType: "desktop",
  updateDisableDrag: (disable) => set({ disableDrag: disable }),
  setDeviceType: (deviceType) => set({ deviceType }),
  togglePreviewMode: () =>
    set((state) => ({ previewMode: !state.previewMode })),
  setLayoutName: (name) => set({ layoutName: name }),
  appendComponent: (component: Partial<EditorElement & ComponentProperties>) =>
    set((state) => ({
      components: [
        ...state.components.map((c) => ({ ...c, isFocused: false })),
        {
          ...component,
          id: nanoid(),
          isFocused: true,
          style: {},
        } as EditorComponent<unknown>,
      ],
    })),
  fillComponentsForLayout: (components, layoutName?: string) =>
    set((state) => ({
      layoutName,
      components: components.map((c) => ({
        ...c,
        id: nanoid(),
        isFocused: false,
      })),
    })),

  focusComponent: (componentId: string) =>
    set((state) => ({
      components: state.components.map((c) => ({
        ...c,
        isFocused: c.id === componentId,
      })),
    })),

  setComponentValue: (componentId: string, value: any) =>
    set((state) => ({
      components: state.components.map((c) =>
        c.id === componentId ? { ...c, value } : c
      ),
    })),
  clearComponentFocus: (id: string) =>
    set((state) => ({
      components: state.components.map((c) =>
        c.id === id ? { ...c, isFocused: false } : c
      ),
    })),
  updatePosition: (componentId: string, position?: XYCoord) =>
    set((state) => ({
      components: state.components.map((c) =>
        c.id === componentId && position
          ? { ...c, position: { ...c.position, coordinates: position } }
          : c
      ),
    })),
  removeComponent: (id: string) =>
    set((state) => ({
      components: state.components.filter((c) => c.id !== id),
    })),
  updateStyle: (componentId: string, style: React.CSSProperties) => {
    return set((state) => ({
      components: state.components.map((c) => {
        return c.id === componentId
          ? { ...c, style: { ...c.style, ...style } }
          : c;
      }),
    }));
  },
  clearComponents: () => set({ components: [] }),
}));

export const usePreviewMode = () =>
  useEditorStore((state) => state.previewMode);

export const useDeviceType = () => useEditorStore((state) => state.deviceType);

import { EditorComponent } from "src/app/models/EditorComponents";
import { create } from "zustand";
import { EditorElement } from "../models/EditorElement";
import { nanoid } from "nanoid";
import { ComponentProperties } from "../models/ComponentProperties";
import { XYCoord } from "react-dnd";
import { LayoutComponentType } from "../models/Layout.models";
import { DEVICE_TYPES } from "../models/device.mode";

export type EditorState = {
  components: EditorComponent<unknown>[];
  disableDrag?: boolean;
  layoutName?: string;
  previewMode: boolean;
  deviceType: DEVICE_TYPES;
};

export type EditorActions = {
  appendComponent: (component: EditorElement) => void;
  removeComponent: (id: string) => void;
  clearComponents: () => void;
  setComponentValue: (componentId: string, value: any) => void;
  focusComponent: (componentId: string) => void;
  clearComponentFocus: (id: string) => void;
  updatePosition: (
    componentId: string,
    position: XYCoord,
    deviceType?: DEVICE_TYPES
  ) => void;
  updateChildsPosition: (
    parentId: string,
    childId: string,
    position: XYCoord,
    deviceType?: DEVICE_TYPES
  ) => void;
  updateStyle: (
    componentId: string,
    style: React.CSSProperties,
    deviceType: DEVICE_TYPES
  ) => void;
  updateDisableDrag: (disable: boolean) => void;
  fillComponentsForLayout: (
    components: LayoutComponentType<unknown>[],
    layoutName?: string
  ) => void;
  setLayoutName: (name: string) => void;
  togglePreviewMode: () => void;
  setDeviceType: (deviceType: DEVICE_TYPES) => void;
  addChilds: (parentId: string, child: EditorElement) => void;
};

export const useEditorStore = create<EditorState & EditorActions>((set) => ({
  components: [],
  previewMode: false,
  deviceType: DEVICE_TYPES.DESKTOP,
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
  updatePosition: (
    componentId: string,
    position?: XYCoord,
    deviceType: DEVICE_TYPES = DEVICE_TYPES.DESKTOP
  ) => {
    return set((state) => ({
      components: state.components.map((c) => {
        return c.id === componentId
          ? {
              ...c,
              position: {
                ...c.position,
                [deviceType]: { coordinates: position },
              },
            }
          : c;
      }),
    }));
  },
  removeComponent: (id: string) =>
    set((state) => ({
      components: state.components.filter((c) => c.id !== id),
    })),
  updateStyle: (
    componentId: string,
    style: React.CSSProperties,
    deviceType: DEVICE_TYPES = DEVICE_TYPES.DESKTOP
  ) => {
    return set((state) => ({
      components: state.components.map((c) => {
        return c.id === componentId
          ? {
              ...c,
              style: {
                ...c.style,
                [deviceType]: { ...c.style?.[deviceType]!, ...style },
              },
            }
          : c;
      }),
    }));
  },
  clearComponents: () => set({ components: [] }),
  addChilds: (parentId: string, child: EditorElement) =>
    set((state) => ({
      components: state.components.map((c) => {
        if (c.id === parentId) {
          return {
            ...c,
            childs: [
              ...(c.childs ?? []),
              {
                ...child,
                id: `${c.id}-${nanoid()}`,
                isFocused: true,
                style: {},
              },
            ],
          };
        }
        return c;
      }),
    })),
  updateChildsPosition: (
    parentId: string,
    childId: string,
    position: XYCoord,
    deviceType: DEVICE_TYPES = DEVICE_TYPES.DESKTOP
  ) =>
    set((state) => ({
      components: state.components.map((c) => {
        if (c.id === parentId && c.childs) {
          return {
            ...c,
            childs: c.childs.map((child) => {
              return child.id === childId
                ? {
                    ...child,
                    position: {
                      ...child.position,
                      [deviceType]: { coordinates: position },
                    },
                  }
                : child;
            }),
          };
        }
        return c;
      }),
    })),
}));

export const usePreviewMode = () =>
  useEditorStore((state) => state.previewMode);

export const useDeviceType = () => useEditorStore((state) => state.deviceType);

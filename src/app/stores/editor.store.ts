import { EditorComponent } from "src/app/models/EditorComponents";
import { create } from "zustand";
import { EditorElement } from "../models/EditorElement";
import { nanoid } from "nanoid";
import { ComponentProperties } from "../models/ComponentProperties";
import { XYCoord } from "react-dnd";

export type EditorState = {
  components: EditorComponent<unknown>[];
};

export type EditorActions = {
  appendComponent: (component: EditorElement) => void;
  removeComponent: (component: EditorComponent<unknown>) => void;
  clearComponents: () => void;
  setComponentValue: (componentId: string, value: any) => void;
  focusComponent: (componentId: string) => void;
  clearComponentFocus: (id: string) => void;
  updatePosition: (componentId: string, position: XYCoord) => void;
  updateStyle: (componentId: string, style: React.CSSProperties) => void;
};

export const useEditorStore = create<EditorState & EditorActions>((set) => ({
  components: [],
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
  removeComponent: (component) =>
    set((state) => ({
      components: state.components.filter((c) => c !== component),
    })),
  updateStyle: (componentId: string, style: React.CSSProperties) =>
    set((state) => ({
      components: state.components.map((c) =>
        c.id === componentId ? { ...c, style } : c
      ),
    })),
  clearComponents: () => set({ components: [] }),
}));

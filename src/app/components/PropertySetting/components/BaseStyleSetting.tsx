import React from "react";

export const BaseStyleSetting: React.FC<{
  styles: React.CSSProperties;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ styles, handleChange }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <div className="flex flex-col">
        <label className="text-sm text-gray-500 mb-2" htmlFor="width">
          Width:
        </label>
        <input
          type="number"
          placeholder="Eg: 100px"
          className="w-full py-2 px-4 block bg-gray-100 border-transparent rounded text-sm focus:border-blue-500 focus:ring-blue-500"
          name="width"
          value={styles?.width}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-gray-500 mb-2" htmlFor="height">
          Height:
        </label>
        <input
          type="number"
          placeholder="Eg: 100px"
          className="w-full py-2 px-4 block bg-gray-100 border-transparent rounded text-sm focus:border-blue-500 focus:ring-blue-500"
          name="height"
          value={styles?.height}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-gray-500 mb-2" htmlFor="backgroundColor">
          Background Color:
        </label>
        <input
          type="text"
          placeholder="Eg: #f3f3f3"
          className="w-full py-2 px-4 block bg-gray-100 border-transparent rounded text-sm focus:border-blue-500 focus:ring-blue-500"
          name="backgroundColor"
          value={styles?.backgroundColor}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-gray-500 mb-2" htmlFor="borderRadius">
          Border Radius:
        </label>
        <input
          type="number"
          placeholder="Eg: 10px"
          className="w-full py-2 px-4 block bg-gray-100 border-transparent rounded text-sm focus:border-blue-500 focus:ring-blue-500"
          name="borderRadius"
          value={styles?.borderRadius}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

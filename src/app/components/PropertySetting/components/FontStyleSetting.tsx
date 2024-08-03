import React, { ChangeEvent } from "react";

export const FontStyleSetting: React.FC<{
  styles: React.CSSProperties;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ styles, handleChange }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="text-sm text-gray-500 mb-2">Font Style</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2" htmlFor="fontFamily">
            Font Family:
          </label>
          <input
            type="text"
            placeholder="Eg: Arial, sans-serif"
            className="w-full py-2 px-4 block bg-gray-100 border-transparent rounded text-sm focus:border-blue-500 focus:ring-blue-500"
            name="fontFamily"
            value={styles.fontFamily}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2" htmlFor="fontSize">
            Font Size:
          </label>
          <input
            type="text"
            placeholder="Eg: 16px"
            className="w-full py-2 px-4 block bg-gray-100 border-transparent rounded text-sm focus:border-blue-500 focus:ring-blue-500"
            name="fontSize"
            value={styles.fontSize}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2" htmlFor="fontWeight">
            Font Weight:
          </label>
          <input
            type="text"
            placeholder="Eg: 400"
            className="w-full py-2 px-4 block bg-gray-100 border-transparent rounded text-sm focus:border-blue-500 focus:ring-blue-500"
            name="fontWeight"
            value={styles.fontWeight}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2" htmlFor="fontStyle">
            Font Style:
          </label>
          <input
            type="text"
            placeholder="Eg: normal"
            className="w-full py-2 px-4 block bg-gray-100 border-transparent rounded text-sm focus:border-blue-500 focus:ring-blue-500"
            name="fontStyle"
            value={styles.fontStyle}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2" htmlFor="color">
            Color:
          </label>
          <input
            type="text"
            placeholder="Eg: #000000"
            className="w-full py-2 px-4 block bg-gray-100 border-transparent rounded text-sm focus:border-blue-500 focus:ring-blue-500"
            name="color"
            value={styles.color}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2" htmlFor="lineHeight">
            Line Height:
          </label>
          <input
            type="text"
            placeholder="Eg: 1.5"
            className="w-full py-2 px-4 block bg-gray-100 border-transparent rounded text-sm focus:border-blue-500 focus:ring-blue-500"
            name="lineHeight"
            value={styles.lineHeight}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2" htmlFor="letterSpacing">
            Letter Spacing:
          </label>
          <input
            type="text"
            placeholder="Eg: 0px"
            className="w-full py-2 px-4 block bg-gray-100 border-transparent rounded text-sm focus:border-blue-500 focus:ring-blue-500"
            name="letterSpacing"
            value={styles.letterSpacing}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-2" htmlFor="textAlign">
            Text Align:
          </label>
          <select
            className="w-full py-2 px-4 block bg-gray-100 border-transparent rounded text-sm focus:border-blue-500 focus:ring-blue-500"
            name="textAlign"
            value={styles.textAlign}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(e)}
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
            <option value="justify">Justify</option>
          </select>
        </div>
      </div>
    </div>
  );
};

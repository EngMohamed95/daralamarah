import React from 'react';

interface CropMarksProps {
  color?: string;
  size?: number;
}

export const CropMarks: React.FC<CropMarksProps> = ({ size = 10 }) => {
  return (
    <>
      <span
        className="crop-corner crop-corner-tl"
        style={{ width: `${size}px`, height: `${size}px` }}
        aria-hidden="true"
      />
      <span
        className="crop-corner crop-corner-tr"
        style={{ width: `${size}px`, height: `${size}px` }}
        aria-hidden="true"
      />
      <span
        className="crop-corner crop-corner-bl"
        style={{ width: `${size}px`, height: `${size}px` }}
        aria-hidden="true"
      />
      <span
        className="crop-corner crop-corner-br"
        style={{ width: `${size}px`, height: `${size}px` }}
        aria-hidden="true"
      />
    </>
  );
};

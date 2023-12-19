export const rem = (px: number) => {
  return `${px / 16}rem`;
};

export function adaptiveValue(
  startSize: number,
  minSize: number,
  widthFrom: number,
  widthTo: number,
): string {
  const slope = (startSize - minSize) / (widthFrom - widthTo);
  const yAxisIntersection = -widthTo * slope + minSize;
  const flyValue = `${yAxisIntersection}px + ${slope * 100}vw`;

  const propertyValue = `clamp(${minSize}px, ${flyValue}, ${startSize}px)`;

  return propertyValue;
}

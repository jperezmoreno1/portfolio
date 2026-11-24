import { getStroke } from "perfect-freehand";
import type { Vec2 } from "perfect-freehand";

export const CANVAS_WIDTH = 600;
export const CANVAS_HEIGHT = 300;

export type Point = [x: number, y: number, pressure: number];

const STROKE_OPTIONS = {size: 8, thinning: 0.5, smoothing: 0.5, streamline: 0.5};

const average = (a: number, b: number) => (a + b) / 2

function getSvgPathFromStroke(points: Vec2[], closed = true) {
  const len = points.length

  if (len < 4) {
    return ``
  }

  let a = points[0]
  let b = points[1]
  const c = points[2]

  let result = `M${a[0].toFixed(2)},${a[1].toFixed(2)} Q${b[0].toFixed(
    2
  )},${b[1].toFixed(2)} ${average(b[0], c[0]).toFixed(2)},${average(
    b[1],
    c[1]
  ).toFixed(2)} T`

  for (let i = 2, max = len - 1; i < max; i++) {
    a = points[i]
    b = points[i + 1]
    result += `${average(a[0], b[0]).toFixed(2)},${average(a[1], b[1]).toFixed(
      2
    )} `
  }

  if (closed) {
    result += 'Z'
  }

  return result
}

export function strokeToPath(points: Point[]) : string {
  const outline = getStroke(points, STROKE_OPTIONS);
  return getSvgPathFromStroke(outline);
}
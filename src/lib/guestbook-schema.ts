import { z } from "astro/zod";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./strokes";

const MAX_STROKES = 200;
const MAX_POINTS_PER_STROKE = 2000;

//export const PointSchema = z.tuple{{
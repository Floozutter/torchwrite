export type Light = 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15;

export interface LightPattern {
    (x: number, z: number): Light;
}

export function lightClamp(n: number): Light {
    return Math.round(Math.min(Math.max(n, 0), 15)) as Light;
}

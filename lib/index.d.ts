declare type typeRgba = {
    r: number;
    g: number;
    b: number;
    rgba: string;
};
declare const _default: {
    rgb2hex: (c1: string | number, c2?: number | undefined, c3?: number | undefined) => string;
    hex2rgb: (hex: string, opacity?: number) => typeRgba;
};
export default _default;

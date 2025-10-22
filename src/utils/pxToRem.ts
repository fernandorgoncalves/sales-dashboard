/**
 * Convert Pixel to rem
 * @Param pixels - Pixels values to be converted
 * @returns The converted rem values
 */
export function pxToRem(pixels: number): string{
    return `${pixels / 16}rem`
}
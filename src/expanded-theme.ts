//eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

//extending the MUI because MUI doesn't have Palette of tertiary and color of 100 - 900 which are user defined on theme.ts, 
declare module "@mui/material/styles/createPalette" {
    interface PaletteColor {
        [key: number]: string
    }

    interface Palette {
        tertiary: PaletteColor
    }
}
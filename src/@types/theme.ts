export type Direction = 'ltr' | 'rtl'
export type Mode = 'light' | 'dark'
export type ControlSize = 'lg' | 'md' | 'sm'
export type SpecialityTheme = "default"| "theme1" | "theme2"
export type LayoutType =
    | 'blank'
    | 'collapsibleSide'
    | 'stackedSide'
    | 'topBarClassic'
    | 'framelessSide'
    | 'contentOverlay'

export type Theme = {
    themeSchema: string
    direction: Direction
    mode: Mode
    panelExpand: boolean
    layout: {
        type: LayoutType
        sideNavCollapse: boolean
        previousType?: LayoutType | ''
    }
}

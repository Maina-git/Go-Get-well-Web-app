/*
import { THEME_ENUM } from '@/constants/theme.constant'
import { Direction, Mode, ControlSize, LayoutType } from '@/@types/theme'
import {Theme} from '@/components/template/Theme'

export type ThemeConfig = {
    themeSchema: string
    direction: Direction
    mode: Mode
    panelExpand: boolean
    controlSize: ControlSize
    layout: {
        type: LayoutType
        sideNavCollapse: boolean
    }
}

/**
 * Since some configurations need to be matched with specific themes,
 * we recommend using the configuration generated from the demo.
 */

/*
export const themeConfig: ThemeConfig = {
    themeSchema: '',
    direction: THEME_ENUM.DIR_LTR,
    mode: THEME_ENUM.MODE_LIGHT,
    panelExpand: false,
    controlSize: 'md',
    layout: {
        type: THEME_ENUM.LAYOUT_COLLAPSIBLE_SIDE,
        sideNavCollapse: false,
    },
}

const defaultTheme: Theme = {
    themeSchema: 'default',
    direction: 'ltr',
    mode: 'light',
    panelExpand: true,
    layout: {
        type: 'topBarClassic',
        sideNavCollapse: false,
    },
}

const transplantTheme: Theme = {
    themeSchema: 'transplant',
    direction: 'ltr',
    mode: 'light',
    panelExpand: true,
    layout: {
        type: 'stackedSide',
        sideNavCollapse: true,
    },
}

const cosmeticTheme: Theme = {
    themeSchema: 'cosmetic',
    direction: 'ltr',
    mode: 'light',
    panelExpand: false,
    layout: {
        type: 'framelessSide',
        sideNavCollapse: false,
    },
}

export const specialtyThemes: Record<string, Theme> = {
    default: defaultTheme,
    theme1: transplantTheme,
    theme2: cosmeticTheme,
}
*/




import { THEME_ENUM } from '@/constants/theme.constant'
import { Direction, Mode, ControlSize, LayoutType } from '@/@types/theme'
import type { ThemeType } from '@/@types/theme' // Import the type separately

export type ThemeConfig = {
    themeSchema: string
    direction: Direction
    mode: Mode
    panelExpand: boolean
    controlSize: ControlSize
    layout: {
        type: LayoutType
        sideNavCollapse: boolean
    }
}

export const themeConfig: ThemeConfig = {
    themeSchema: '',
    direction: THEME_ENUM.DIR_LTR,
    mode: THEME_ENUM.MODE_LIGHT,
    panelExpand: false,
    controlSize: 'md',
    layout: {
        type: THEME_ENUM.LAYOUT_COLLAPSIBLE_SIDE,
        sideNavCollapse: false,
    },
}

const defaultTheme: ThemeType = {
    themeSchema: 'default',
    direction: 'ltr',
    mode: 'light',
    panelExpand: true,
    layout: {
        type: 'topBarClassic',
        sideNavCollapse: false,
    },
}

const transplantTheme: ThemeType = {
    themeSchema: 'transplant',
    direction: 'ltr',
    mode: 'light',
    panelExpand: true,
    layout: {
        type: 'stackedSide',
        sideNavCollapse: true,
    },
}

const cosmeticTheme: ThemeType = {
    themeSchema: 'cosmetic',
    direction: 'ltr',
    mode: 'light',
    panelExpand: false,
    layout: {
        type: 'framelessSide',
        sideNavCollapse: false,
    },
}

export const specialtyThemes: Record<string, ThemeType> = {
    default: defaultTheme,
    theme1: transplantTheme,
    theme2: cosmeticTheme,
}


























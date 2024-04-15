interface ObjectMap {
    [key: string]: string,
}
interface SettingValueMap {
    value: string
}
interface SettingArrValueMap {
    value: Array<String>,
}
interface DefaultMap{
    target: string | Element,
    choices: Array<string>,
    type: string,
}

interface DefaultVStringMap extends DefaultMap, SettingValueMap { }

interface DefaultVArrayMap extends DefaultMap, SettingArrValueMap {}

export interface SettingState {
    saveLocal: string,
    storeKey: string,
    setting: {
        app_name: SettingValueMap,
        theme_scheme: SettingValueMap,
        theme_scheme_direction: SettingValueMap,
        theme_style_appearance: SettingArrValueMap,
        theme_color: {
            colors: ObjectMap,
            value: string,
        },
        theme_transition: SettingValueMap,
        theme_font_size: SettingValueMap,
        page_layout: SettingValueMap,
        header_navbar: SettingValueMap,
        header_banner: SettingValueMap,
        sidebar_color: SettingValueMap,
        sidebar_type: SettingArrValueMap,
        sidebar_menu_style: SettingValueMap,
        footer: SettingValueMap,
        body_font_family: SettingValueMap,
        heading_font_family: SettingValueMap,
    }
}

export interface SettingDefaultState {
    saveLocal: string,
    storeKey: string,
    setting: {
        app_name: DefaultVStringMap,
        theme_scheme: DefaultVStringMap,
        theme_scheme_direction: DefaultVStringMap,
        theme_style_appearance: DefaultVArrayMap,
        theme_color: {
            target: string | Element,
            choices: Array<string>,
            type: string,
            colors: ObjectMap,
            value: string,
        },
        theme_transition: DefaultVStringMap,
        theme_font_size: DefaultVStringMap,
        page_layout: DefaultVStringMap,
        header_navbar: DefaultVStringMap,
        header_banner: DefaultVStringMap,
        sidebar_color: DefaultVStringMap,
        sidebar_type: DefaultVArrayMap,
        sidebar_menu_style: DefaultVStringMap,
        footer: DefaultVStringMap,
        body_font_family: DefaultVStringMap,
        heading_font_family: DefaultVStringMap,
    }
}

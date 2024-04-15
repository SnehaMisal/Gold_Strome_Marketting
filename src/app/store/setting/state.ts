import { SettingState, SettingDefaultState } from "../../model/setting.model"
export const initialState: SettingState = {
  "saveLocal": "sessionStorage",
    "storeKey": "huisetting",
    "setting": {
        "app_name": {
            "value": "Gold Strome Marketting"
        },
        "theme_scheme_direction": {
            "value": "ltr"
        },
        "theme_scheme": {
            "value": "light"
        },
        "theme_style_appearance": {
            "value": [
                "theme-default"
            ]
        },
        "theme_color": {
            "colors": {
                "--{{prefix}}primary": "#7C01E0",
                "--{{prefix}}info": "#08B1BA"
            },
            "value": "theme-color-default"
        },
        "theme_transition": {
            "value": 'theme-with-animation'
        },
        "theme_font_size": {
            "value": "theme-fs-md"
        },
        "page_layout": {
            "value": "container-fluid"
        },
        "header_navbar": {
            "value": "default"
        },
        "header_banner": {
            "value": "default"
        },
        "sidebar_color": {
            "value": "sidebar-white"
        },
        "sidebar_type": {
            "value": []
        },
        "sidebar_menu_style": {
            "value": "sidebar-default navs-rounded-all"
        },
        "footer": {
            "value": "default"
        },
        "body_font_family": {
            "value": 'Inter'
        },
        "heading_font_family": {
            "value": 'Inter'
        }
    }
}



// Default Setting State
export const defaultState: SettingDefaultState = {
    "saveLocal": "sessionStorage",
    "storeKey": "huisetting",
    "setting": {
        app_name: {
          target: '[data-setting="app_name"]',
          choices: [],
          type: "text",
          value: "Gold Strome Marketting",
        },
        theme_scheme_direction: {
          target: "html",
          choices: ["ltr", "rtl"],
          type: "layout_design",
          value: "ltr",
        },
        theme_scheme: {
          target: "body",
          choices: ["light", "dark", "auto"],
          type: "layout_design",
          value: "light",
        },
        theme_style_appearance: {
          target: "body",
          choices: [
            "theme-default",
            "theme-flat",
            "theme-bordered",
            "theme-sharp",
          ],
          type: "layout_design",
          value: ["theme-default"],
        },
        theme_color: {
          target: "body",
          choices: [
            "theme-color-blue",
            "theme-color-gray",
            "theme-color-red",
            "theme-color-yellow",
            "theme-color-pink",
            "theme-color-default",
          ],
          type: "default",
          colors: {
            "--{{prefix}}primary": "#7C01E0",
            "--{{prefix}}info": "#08B1BA",
          },
          value: "theme-color-default",
        },
        theme_transition: {
          target: "body",
          choices: ["theme-without-animation", "theme-with-animation"],
          type: "layout_design",
          value: 'theme-with-animation',
        },
        theme_font_size: {
          target: "html",
          choices: ["theme-fs-sm", "theme-fs-md", "theme-fs-lg"],
          type: "layout_design",
          value: "theme-fs-md",
        },
        page_layout: {
          target: "#page_layout",
          choices: ["container", "container-fluid"],
          type: "layout_design",
          value: "container-fluid",
        },
        header_navbar: {
          target: ".iq-navbar",
          choices: [
            "default",
            "fixed",
            "navs-sticky",
            "nav-glass",
            "navs-transparent",
            "boxed",
            "hidden",
          ],
          type: "layout_design",
          value: "default",
        },
        header_banner: {
          target: ".iq-banner",
          choices: ["default", "navs-bg-color", "hide"],
          type: "layout_design",
          value: "default",
        },
        sidebar_color: {
          target: '[data-toggle="main-sidebar"]',
          choices: [
            "sidebar-white",
            "sidebar-dark",
            "sidebar-color",
            "sidebar-transparent",
          ],
          type: "layout_design",
          value: "sidebar-white",
        },
        sidebar_type: {
          target: '[data-toggle="main-sidebar"]',
          choices: ["sidebar-hover", "sidebar-mini", "sidebar-boxed"],
          type: "layout_design",
          value: [],
        },
        sidebar_menu_style: {
          target: '[data-toggle="main-sidebar"]',
          choices: [
            "sidebar-default navs-rounded",
            "sidebar-default navs-rounded-all",
            "sidebar-default navs-pill",
            "sidebar-default navs-pill-all",
          ],
          type: "layout_design",
          value: "sidebar-default navs-rounded-all",
        },
        footer: {
          target: ".footer",
          choices: ["sticky", "default"],
          type: "layout_design",
          value: "default",
        },
        body_font_family: {
          target: "body",
          choices: [],
          type: "variable",
          value: "Inter",
        },
        heading_font_family: {
          target: "heading",
          choices: [],
          type: "variable",
          value: "Inter",
        },
      }
}

let white = "#ffffff";
let black = "#000000";
let gray = "#dadada";
let primary = "#2675bf";
let background = "#ffffff";
let inactiveBackground = "#f2f2f2";
let activeBackground = "#eeeeee";
let foreground = "#333333";
let inactiveForeground = "#6e6e6e";
let border = "#cccccc";


module.exports = colors = {
    "titleBar.activeBackground": activeBackground,
    "titleBar.activeForeground": foreground,
    "titleBar.inactiveBackground": activeBackground,
    "titleBar.inactiveForeground": foreground,
    "titleBar.border": border,

    "menu.background": activeBackground,
    "menu.foreground": foreground,
    "menu.border": border,
    "menu.selectionBackground": primary,
    "menu.selectionBorder": border,
    "menu.selectionForeground": white,
    "menu.separatorBackground": black,

    "tab.activeBackground": background,
    "tab.activeBorder": primary,
    "tab.inactiveBackground": inactiveBackground,
    "tab.hoverBackground": gray,

    "activityBar.background": background,
    "activityBar.foreground": primary,
    "activityBar.activeBackground": activeBackground,
    "activityBar.inactiveForeground": inactiveForeground,
    "activityBar.activeBorder": primary,
};

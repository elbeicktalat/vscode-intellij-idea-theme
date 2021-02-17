let white = "#ffffff";
let black = "#000000";
let gray = "#dadada";
let transparent = "#ffffff00";
let primary = "#2675bf";
let background = "#ffffff";
let inactiveBackground = "#f2f2f2";
let activeBackground = "#eeeeee";
let foreground = "#333333";
let inactiveForeground = "#6e6e6e";
let border = "#cccccc";
let selectionBackground = "#a6d2ff";
let gitAdded = "#86c53d";
let gitModified = "#ff9028";
let gitDeleted = "#ee4b49";

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
    "activityBar.inactiveForeground": inactiveForeground,
    "activityBar.activeBorder": primary,

    "editor.background": background,
    "editor.foreground": foreground,
    "editor.findMatchBackground": selectionBackground,
    "editor.findMatchBorder": "#505f5f",
    "editor.findMatchHighlightBackground": "#ffe959",
    "editor.hoverHighlightBackground": "#c9ecec",
    "editor.lineHighlightBackground": "#fcfaed",
    "editor.selectionBackground": selectionBackground,
    "editor.wordHighlightBackground": "#c9ecec",
    "editorLineNumber.foreground": foreground,
    "editorLineNumber.activeForeground": primary,
    "editorGutter.background": "#f2f2f2",
    "editorGutter.addedBackground": gitAdded,
    "editorGutter.modifiedBackground": gitModified,
    "editorGutter.deletedBackground": gitDeleted,
    "editorOverviewRuler.background": background,
    "editorOverviewRuler.border": white,
    "gitDecoration.addedResourceForeground": gitAdded,
    "gitDecoration.modifiedResourceForeground": gitModified,
    "gitDecoration.deletedResourceForeground": gitDeleted,
    "gitDecoration.conflictingResourceForeground": "#6e8191",

    "sideBar.background": white,
    "sideBar.border": gray,
    "sideBar.foreground": foreground,
    "sideBarSectionHeader.background": white,
    "scrollbarSlider.background": gray,
    
    "input.background": gray,
    "input.foreground": foreground,
    "input.border": border,
    
    "focusBorder": transparent,

    "statusBar.background": gray,
    "statusBar.foreground": foreground,
    "statusBar.border": border,
};

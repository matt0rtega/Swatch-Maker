// This shows the HTML page in "ui.html".
figma.showUI(__html__);
figma.loadFontAsync({ family: "Roboto", style: "Regular" });
// This is the font i want to set my text style to.
// it seems that this promise never resolves (or errors).
const white = { type: "SOLID", color: { r: 1.0, g: 1.0, b: 1.0 } };
const black = { type: "SOLID", color: { r: 0.0, g: 0.0, b: 0.0 } };
// When a new build of the tokens has been generated and color styles need to be updated. This variable needs to be replaced.
var _styleDictionary = {
    color: {
        dark: {
            base: {
                blue_400: {
                    value: {
                        red: "0.03137",
                        green: "0.57255",
                        blue: "1.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#0892FF",
                    },
                    name: "blue_400",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "blue_400",
                    },
                    path: ["color", "dark", "base", "blue_400"],
                },
                blue_500: {
                    value: {
                        red: "0.09020",
                        green: "0.60000",
                        blue: "1.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#1799FF",
                    },
                    name: "blue_500",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "blue_500",
                    },
                    path: ["color", "dark", "base", "blue_500"],
                },
                blue_600: {
                    value: {
                        red: "0.15294",
                        green: "0.62745",
                        blue: "1.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#27A0FF",
                    },
                    name: "blue_600",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "blue_600",
                    },
                    path: ["color", "dark", "base", "blue_600"],
                },
                blue_700: {
                    value: {
                        red: "0.21176",
                        green: "0.65098",
                        blue: "1.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#36A6FF",
                    },
                    name: "blue_700",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "blue_700",
                    },
                    path: ["color", "dark", "base", "blue_700"],
                },
                green_400: {
                    value: {
                        red: "0.06667",
                        green: "0.65882",
                        blue: "0.37255",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#11A85F",
                    },
                    name: "green_400",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "green_400",
                    },
                    path: ["color", "dark", "base", "green_400"],
                },
                green_500: {
                    value: {
                        red: "0.07451",
                        green: "0.72941",
                        blue: "0.41176",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#13BA69",
                    },
                    name: "green_500",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "green_500",
                    },
                    path: ["color", "dark", "base", "green_500"],
                },
                green_600: {
                    value: {
                        red: "0.08235",
                        green: "0.80392",
                        blue: "0.45490",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#15CD74",
                    },
                    name: "green_600",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "green_600",
                    },
                    path: ["color", "dark", "base", "green_600"],
                },
                green_700: {
                    value: {
                        red: "0.09020",
                        green: "0.87451",
                        blue: "0.49412",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#17DF7E",
                    },
                    name: "green_700",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "green_700",
                    },
                    path: ["color", "dark", "base", "green_700"],
                },
                red_400: {
                    value: {
                        red: "0.84314",
                        green: "0.25098",
                        blue: "0.27059",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#D74045",
                    },
                    name: "red_400",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "red_400",
                    },
                    path: ["color", "dark", "base", "red_400"],
                },
                red_500: {
                    value: {
                        red: "0.85490",
                        green: "0.29804",
                        blue: "0.31765",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#DA4C51",
                    },
                    name: "red_500",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "red_500",
                    },
                    path: ["color", "dark", "base", "red_500"],
                },
                red_600: {
                    value: {
                        red: "0.86275",
                        green: "0.34510",
                        blue: "0.36078",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#DC585C",
                    },
                    name: "red_600",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "red_600",
                    },
                    path: ["color", "dark", "base", "red_600"],
                },
                red_700: {
                    value: {
                        red: "0.87451",
                        green: "0.39216",
                        blue: "0.40784",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#DF6468",
                    },
                    name: "red_700",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "red_700",
                    },
                    path: ["color", "dark", "base", "red_700"],
                },
                orange_400: {
                    value: {
                        red: "0.81961",
                        green: "0.44314",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#D17100",
                    },
                    name: "orange_400",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "orange_400",
                    },
                    path: ["color", "dark", "base", "orange_400"],
                },
                orange_500: {
                    value: {
                        red: "0.89412",
                        green: "0.48235",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#E47B00",
                    },
                    name: "orange_500",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "orange_500",
                    },
                    path: ["color", "dark", "base", "orange_500"],
                },
                orange_600: {
                    value: {
                        red: "0.96863",
                        green: "0.52157",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#F78500",
                    },
                    name: "orange_600",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "orange_600",
                    },
                    path: ["color", "dark", "base", "orange_600"],
                },
                orange_700: {
                    value: {
                        red: "1.00000",
                        green: "0.56078",
                        blue: "0.03922",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#FF8F0A",
                    },
                    name: "orange_700",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "orange_700",
                    },
                    path: ["color", "dark", "base", "orange_700"],
                },
                yellow_400: {
                    value: {
                        red: "0.68235",
                        green: "0.57255",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#AE9200",
                    },
                    name: "yellow_400",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "yellow_400",
                    },
                    path: ["color", "dark", "base", "yellow_400"],
                },
                yellow_500: {
                    value: {
                        red: "0.76471",
                        green: "0.64314",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#C3A400",
                    },
                    name: "yellow_500",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "yellow_500",
                    },
                    path: ["color", "dark", "base", "yellow_500"],
                },
                yellow_600: {
                    value: {
                        red: "0.84706",
                        green: "0.71373",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#D8B600",
                    },
                    name: "yellow_600",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "yellow_600",
                    },
                    path: ["color", "dark", "base", "yellow_600"],
                },
                yellow_700: {
                    value: {
                        red: "0.92941",
                        green: "0.78039",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#EDC700",
                    },
                    name: "yellow_700",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "yellow_700",
                    },
                    path: ["color", "dark", "base", "yellow_700"],
                },
                cyan_400: {
                    value: {
                        red: "0.00000",
                        green: "0.65490",
                        blue: "0.80000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#00A7CC",
                    },
                    name: "cyan_400",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "cyan_400",
                    },
                    path: ["color", "dark", "base", "cyan_400"],
                },
                cyan_500: {
                    value: {
                        red: "0.00000",
                        green: "0.71765",
                        blue: "0.87451",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#00B7DF",
                    },
                    name: "cyan_500",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "cyan_500",
                    },
                    path: ["color", "dark", "base", "cyan_500"],
                },
                cyan_600: {
                    value: {
                        red: "0.00000",
                        green: "0.77647",
                        blue: "0.94902",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#00C6F2",
                    },
                    name: "cyan_600",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "cyan_600",
                    },
                    path: ["color", "dark", "base", "cyan_600"],
                },
                cyan_700: {
                    value: {
                        red: "0.02353",
                        green: "0.82353",
                        blue: "1.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#06D2FF",
                    },
                    name: "cyan_700",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "cyan_700",
                    },
                    path: ["color", "dark", "base", "cyan_700"],
                },
                indigo_400: {
                    value: {
                        red: "0.32549",
                        green: "0.45882",
                        blue: "0.93725",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#5375EF",
                    },
                    name: "indigo_400",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "indigo_400",
                    },
                    path: ["color", "dark", "base", "indigo_400"],
                },
                indigo_500: {
                    value: {
                        red: "0.36863",
                        green: "0.49412",
                        blue: "0.94118",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#5E7EF0",
                    },
                    name: "indigo_500",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "indigo_500",
                    },
                    path: ["color", "dark", "base", "indigo_500"],
                },
                indigo_600: {
                    value: {
                        red: "0.41176",
                        green: "0.52549",
                        blue: "0.94510",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#6986F1",
                    },
                    name: "indigo_600",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "indigo_600",
                    },
                    path: ["color", "dark", "base", "indigo_600"],
                },
                indigo_700: {
                    value: {
                        red: "0.45098",
                        green: "0.56078",
                        blue: "0.94902",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#738FF2",
                    },
                    name: "indigo_700",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "indigo_700",
                    },
                    path: ["color", "dark", "base", "indigo_700"],
                },
                purple_400: {
                    value: {
                        red: "0.59216",
                        green: "0.32549",
                        blue: "0.93725",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#9753EF",
                    },
                    name: "purple_400",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "purple_400",
                    },
                    path: ["color", "dark", "base", "purple_400"],
                },
                purple_500: {
                    value: {
                        red: "0.61961",
                        green: "0.36863",
                        blue: "0.94118",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#9E5EF0",
                    },
                    name: "purple_500",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "purple_500",
                    },
                    path: ["color", "dark", "base", "purple_500"],
                },
                purple_600: {
                    value: {
                        red: "0.64314",
                        green: "0.41176",
                        blue: "0.94510",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#A469F1",
                    },
                    name: "purple_600",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "purple_600",
                    },
                    path: ["color", "dark", "base", "purple_600"],
                },
                purple_700: {
                    value: {
                        red: "0.67059",
                        green: "0.45098",
                        blue: "0.94902",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#AB73F2",
                    },
                    name: "purple_700",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "purple_700",
                    },
                    path: ["color", "dark", "base", "purple_700"],
                },
                pink_400: {
                    value: {
                        red: "0.80784",
                        green: "0.19608",
                        blue: "0.60000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#CE3299",
                    },
                    name: "pink_400",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "pink_400",
                    },
                    path: ["color", "dark", "base", "pink_400"],
                },
                pink_500: {
                    value: {
                        red: "0.81961",
                        green: "0.24706",
                        blue: "0.62353",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#D13F9F",
                    },
                    name: "pink_500",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "pink_500",
                    },
                    path: ["color", "dark", "base", "pink_500"],
                },
                pink_600: {
                    value: {
                        red: "0.83137",
                        green: "0.29804",
                        blue: "0.65098",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#D44CA6",
                    },
                    name: "pink_600",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "pink_600",
                    },
                    path: ["color", "dark", "base", "pink_600"],
                },
                pink_700: {
                    value: {
                        red: "0.84314",
                        green: "0.34510",
                        blue: "0.67451",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#D758AC",
                    },
                    name: "pink_700",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "pink_700",
                    },
                    path: ["color", "dark", "base", "pink_700"],
                },
                gray_25: {
                    value: {
                        red: "0.08235",
                        green: "0.08235",
                        blue: "0.08235",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#151515",
                    },
                    name: "gray_25",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "gray_25",
                    },
                    path: ["color", "dark", "base", "gray_25"],
                },
                gray_50: {
                    value: {
                        red: "0.16863",
                        green: "0.16863",
                        blue: "0.16863",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#2B2B2B",
                    },
                    name: "gray_50",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "gray_50",
                    },
                    path: ["color", "dark", "base", "gray_50"],
                },
                gray_100: {
                    value: {
                        red: "0.25098",
                        green: "0.25098",
                        blue: "0.25098",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#404040",
                    },
                    name: "gray_100",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "gray_100",
                    },
                    path: ["color", "dark", "base", "gray_100"],
                },
                gray_200: {
                    value: {
                        red: "0.33333",
                        green: "0.33333",
                        blue: "0.33333",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#555555",
                    },
                    name: "gray_200",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "gray_200",
                    },
                    path: ["color", "dark", "base", "gray_200"],
                },
                gray_300: {
                    value: {
                        red: "0.41569",
                        green: "0.41569",
                        blue: "0.41569",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#6A6A6A",
                    },
                    name: "gray_300",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "gray_300",
                    },
                    path: ["color", "dark", "base", "gray_300"],
                },
                gray_400: {
                    value: {
                        red: "0.50196",
                        green: "0.50196",
                        blue: "0.50196",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#808080",
                    },
                    name: "gray_400",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "gray_400",
                    },
                    path: ["color", "dark", "base", "gray_400"],
                },
                gray_500: {
                    value: {
                        red: "0.58431",
                        green: "0.58431",
                        blue: "0.58431",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#959595",
                    },
                    name: "gray_500",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "gray_500",
                    },
                    path: ["color", "dark", "base", "gray_500"],
                },
                gray_600: {
                    value: {
                        red: "0.66667",
                        green: "0.66667",
                        blue: "0.66667",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#AAAAAA",
                    },
                    name: "gray_600",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "gray_600",
                    },
                    path: ["color", "dark", "base", "gray_600"],
                },
                gray_700: {
                    value: {
                        red: "0.74902",
                        green: "0.74902",
                        blue: "0.74902",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#BFBFBF",
                    },
                    name: "gray_700",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "gray_700",
                    },
                    path: ["color", "dark", "base", "gray_700"],
                },
                gray_800: {
                    value: {
                        red: "0.83529",
                        green: "0.83529",
                        blue: "0.83529",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#D5D5D5",
                    },
                    name: "gray_800",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "gray_800",
                    },
                    path: ["color", "dark", "base", "gray_800"],
                },
                gray_900: {
                    value: {
                        red: "0.91765",
                        green: "0.91765",
                        blue: "0.91765",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#EAEAEA",
                    },
                    name: "gray_900",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "base",
                        subitem: "gray_900",
                    },
                    path: ["color", "dark", "base", "gray_900"],
                },
            },
            semantic: {
                positive: {
                    value: {
                        red: "0.06667",
                        green: "0.65882",
                        blue: "0.37255",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#11A85F",
                    },
                    name: "positive",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "semantic",
                        subitem: "positive",
                    },
                    path: ["color", "dark", "semantic", "positive"],
                },
                warning: {
                    value: {
                        red: "0.81961",
                        green: "0.44314",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#D17100",
                    },
                    name: "warning",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "semantic",
                        subitem: "warning",
                    },
                    path: ["color", "dark", "semantic", "warning"],
                },
                negative: {
                    value: {
                        red: "0.81961",
                        green: "0.00000",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#D10000",
                    },
                    name: "negative",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "semantic",
                        subitem: "negative",
                    },
                    path: ["color", "dark", "semantic", "negative"],
                },
                informative: {
                    value: {
                        red: "0.03137",
                        green: "0.57255",
                        blue: "1.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#0892FF",
                    },
                    name: "informative",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "semantic",
                        subitem: "informative",
                    },
                    path: ["color", "dark", "semantic", "informative"],
                },
            },
            text: {
                callout: {
                    value: {
                        red: "1.00000",
                        green: "1.00000",
                        blue: "1.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#FFFFFF",
                    },
                    name: "callout",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "text",
                        subitem: "callout",
                    },
                    path: ["color", "dark", "text", "callout"],
                },
                primary: {
                    value: {
                        red: "0.74902",
                        green: "0.74902",
                        blue: "0.74902",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.dark.base.gray_700.value}",
                    },
                    name: "primary",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "text",
                        subitem: "primary",
                    },
                    path: ["color", "dark", "text", "primary"],
                },
                secondary: {
                    value: {
                        red: "0.58431",
                        green: "0.58431",
                        blue: "0.58431",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.dark.base.gray_500.value}",
                    },
                    name: "secondary",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "text",
                        subitem: "secondary",
                    },
                    path: ["color", "dark", "text", "secondary"],
                },
                disabled: {
                    value: {
                        red: "0.41569",
                        green: "0.41569",
                        blue: "0.41569",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.dark.base.gray_300.value}",
                    },
                    name: "disabled",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "text",
                        subitem: "disabled",
                    },
                    path: ["color", "dark", "text", "disabled"],
                },
            },
            controls: {
                default: {
                    value: {
                        red: "0.16863",
                        green: "0.16863",
                        blue: "0.16863",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.dark.base.gray_50.value}",
                    },
                    name: "default",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "controls",
                        subitem: "default",
                    },
                    path: ["color", "dark", "controls", "default"],
                },
                hover: {
                    value: {
                        red: "0.15686",
                        green: "0.15686",
                        blue: "0.15686",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#282828",
                    },
                    name: "hover",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "controls",
                        subitem: "hover",
                    },
                    path: ["color", "dark", "controls", "hover"],
                },
                active: {
                    value: {
                        red: "0.13725",
                        green: "0.13725",
                        blue: "0.13725",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#232323",
                    },
                    name: "active",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "controls",
                        subitem: "active",
                    },
                    path: ["color", "dark", "controls", "active"],
                },
                focused: {
                    value: {
                        red: "0.16863",
                        green: "0.16863",
                        blue: "0.16863",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.dark.base.gray_50.value}",
                    },
                    name: "focused",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "controls",
                        subitem: "focused",
                    },
                    path: ["color", "dark", "controls", "focused"],
                },
                disabled: {
                    value: {
                        red: "0.13725",
                        green: "0.13725",
                        blue: "0.13725",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#232323",
                    },
                    name: "disabled",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "controls",
                        subitem: "disabled",
                    },
                    path: ["color", "dark", "controls", "disabled"],
                },
                border_default: {
                    value: {
                        red: "0.25098",
                        green: "0.25098",
                        blue: "0.25098",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.dark.base.gray_100.value}",
                    },
                    name: "border_default",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "controls",
                        subitem: "border_default",
                    },
                    path: ["color", "dark", "controls", "border_default"],
                },
                border_hover: {
                    value: {
                        red: "0.33333",
                        green: "0.33333",
                        blue: "0.33333",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.dark.base.gray_200.value}",
                    },
                    name: "border_hover",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "controls",
                        subitem: "border_hover",
                    },
                    path: ["color", "dark", "controls", "border_hover"],
                },
                border_pressed: {
                    value: {
                        red: "0.33333",
                        green: "0.33333",
                        blue: "0.33333",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.dark.base.gray_200.value}",
                    },
                    name: "border_pressed",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "controls",
                        subitem: "border_pressed",
                    },
                    path: ["color", "dark", "controls", "border_pressed"],
                },
                border_disabled: {
                    value: {
                        red: "0.16863",
                        green: "0.16863",
                        blue: "0.16863",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.dark.base.gray_50.value}",
                    },
                    name: "border_disabled",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "controls",
                        subitem: "border_disabled",
                    },
                    path: ["color", "dark", "controls", "border_disabled"],
                },
            },
            background: {
                inspector: {
                    value: {
                        red: "0.08235",
                        green: "0.08235",
                        blue: "0.08235",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.dark.base.gray_25.value}",
                    },
                    name: "inspector",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "background",
                        subitem: "inspector",
                    },
                    path: ["color", "dark", "background", "inspector"],
                },
                flyout: {
                    value: {
                        red: "0.16863",
                        green: "0.16863",
                        blue: "0.16863",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.dark.base.gray_50.value}BF",
                    },
                    name: "flyout",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "background",
                        subitem: "flyout",
                    },
                    path: ["color", "dark", "background", "flyout"],
                },
                modal: {
                    value: {
                        red: "0.16863",
                        green: "0.16863",
                        blue: "0.16863",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.dark.base.gray_50.value}",
                    },
                    name: "modal",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "background",
                        subitem: "modal",
                    },
                    path: ["color", "dark", "background", "modal"],
                },
                tooltip: {
                    value: {
                        red: "0.00000",
                        green: "0.00000",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.static.base.black.value}40",
                    },
                    name: "tooltip",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "background",
                        subitem: "tooltip",
                    },
                    path: ["color", "dark", "background", "tooltip"],
                },
                toolbar: {
                    value: {
                        red: "0.00000",
                        green: "0.00000",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.static.base.black.value}40",
                    },
                    name: "toolbar",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "background",
                        subitem: "toolbar",
                    },
                    path: ["color", "dark", "background", "toolbar"],
                },
                toolbar_75: {
                    value: {
                        red: "0.00000",
                        green: "0.00000",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.static.base.black.value}BF",
                    },
                    name: "toolbar_75",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "background",
                        subitem: "toolbar_75",
                    },
                    path: ["color", "dark", "background", "toolbar_75"],
                },
            },
            highlight: {
                default: {
                    value: {
                        red: "0.00000",
                        green: "0.56078",
                        blue: "1.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.static.base.blue_400.value}",
                    },
                    name: "default",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "highlight",
                        subitem: "default",
                    },
                    path: ["color", "dark", "highlight", "default"],
                },
                hover: {
                    value: {
                        red: "0.00000",
                        green: "0.52549",
                        blue: "0.93725",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.static.base.blue_500.value}",
                    },
                    name: "hover",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "highlight",
                        subitem: "hover",
                    },
                    path: ["color", "dark", "highlight", "hover"],
                },
                active: {
                    value: {
                        red: "0.00000",
                        green: "0.45490",
                        blue: "0.81176",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.static.base.blue_700.value}",
                    },
                    name: "active",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "highlight",
                        subitem: "active",
                    },
                    path: ["color", "dark", "highlight", "active"],
                },
                focus: {
                    value: {
                        red: "0.00000",
                        green: "0.45490",
                        blue: "0.81176",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.static.base.blue_700.value}BF",
                    },
                    name: "focus",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "highlight",
                        subitem: "focus",
                    },
                    path: ["color", "dark", "highlight", "focus"],
                },
                ghosted: {
                    value: {
                        red: "0.00000",
                        green: "0.52549",
                        blue: "0.93725",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.static.base.blue_500.value}",
                    },
                    name: "ghosted",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "highlight",
                        subitem: "ghosted",
                    },
                    path: ["color", "dark", "highlight", "ghosted"],
                },
                disabled: {
                    value: {
                        red: "0.13725",
                        green: "0.13725",
                        blue: "0.13725",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "#232323",
                    },
                    name: "disabled",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "highlight",
                        subitem: "disabled",
                    },
                    path: ["color", "dark", "highlight", "disabled"],
                },
            },
            borders: {
                border_50: {
                    value: {
                        red: "0.16863",
                        green: "0.16863",
                        blue: "0.16863",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.dark.base.gray_50.value}",
                    },
                    name: "border_50",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "borders",
                        subitem: "border_50",
                    },
                    path: ["color", "dark", "borders", "border_50"],
                },
                border_100: {
                    value: {
                        red: "0.25098",
                        green: "0.25098",
                        blue: "0.25098",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.dark.base.gray_100.value}",
                    },
                    name: "border_100",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "borders",
                        subitem: "border_100",
                    },
                    path: ["color", "dark", "borders", "border_100"],
                },
                border_200: {
                    value: {
                        red: "0.33333",
                        green: "0.33333",
                        blue: "0.33333",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.dark.base.gray_200.value}",
                    },
                    name: "border_200",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "borders",
                        subitem: "border_200",
                    },
                    path: ["color", "dark", "borders", "border_200"],
                },
            },
            icons: {
                primary: {
                    value: {
                        red: "0.83529",
                        green: "0.83529",
                        blue: "0.83529",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.dark.base.gray_800.value}",
                    },
                    name: "primary",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "icons",
                        subitem: "primary",
                    },
                    path: ["color", "dark", "icons", "primary"],
                },
                secondary: {
                    value: {
                        red: "0.41569",
                        green: "0.41569",
                        blue: "0.41569",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "{color.dark.base.gray_300.value}",
                    },
                    name: "secondary",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "icons",
                        subitem: "secondary",
                    },
                    path: ["color", "dark", "icons", "secondary"],
                },
            },
            input: {
                positive_default: {
                    value: {
                        red: "0.06275",
                        green: "0.61961",
                        blue: "0.35294",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "rgba(16, 158, 90, 0.5)",
                    },
                    name: "positive_default",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "input",
                        subitem: "positive_default",
                    },
                    path: ["color", "dark", "input", "positive_default"],
                },
                positive_hover: {
                    value: {
                        red: "0.05098",
                        green: "0.50588",
                        blue: "0.28627",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "rgba(13, 129, 73, 0.5)",
                    },
                    name: "positive_hover",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "input",
                        subitem: "positive_hover",
                    },
                    path: ["color", "dark", "input", "positive_hover"],
                },
                positive_pressed: {
                    value: {
                        red: "0.05098",
                        green: "0.50588",
                        blue: "0.28627",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "rgba(13, 129, 73, 0.5)",
                    },
                    name: "positive_pressed",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "input",
                        subitem: "positive_pressed",
                    },
                    path: ["color", "dark", "input", "positive_pressed"],
                },
                highlight_default: {
                    value: {
                        red: "0.00000",
                        green: "0.56078",
                        blue: "1.00000",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "rgba(0, 143, 255, 0.5)",
                    },
                    name: "highlight_default",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "input",
                        subitem: "highlight_default",
                    },
                    path: ["color", "dark", "input", "highlight_default"],
                },
                highlight_hover: {
                    value: {
                        red: "0.00000",
                        green: "0.52549",
                        blue: "0.93725",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "rgba(0, 134, 239, 0.5)",
                    },
                    name: "highlight_hover",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "input",
                        subitem: "highlight_hover",
                    },
                    path: ["color", "dark", "input", "highlight_hover"],
                },
                highlight_pressed: {
                    value: {
                        red: "0.00000",
                        green: "0.52549",
                        blue: "0.93725",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "rgba(0, 134, 239, 0.5)",
                    },
                    name: "highlight_pressed",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "input",
                        subitem: "highlight_pressed",
                    },
                    path: ["color", "dark", "input", "highlight_pressed"],
                },
                error_default: {
                    value: {
                        red: "0.84314",
                        green: "0.25098",
                        blue: "0.27059",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "rgba(215, 64, 69, 0.5)",
                    },
                    name: "error_default",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "input",
                        subitem: "error_default",
                    },
                    path: ["color", "dark", "input", "error_default"],
                },
                error_hover: {
                    value: {
                        red: "0.84314",
                        green: "0.25098",
                        blue: "0.27059",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "rgba(215, 64, 69, 0.5)",
                    },
                    name: "error_hover",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "input",
                        subitem: "error_hover",
                    },
                    path: ["color", "dark", "input", "error_hover"],
                },
                error_pressed: {
                    value: {
                        red: "0.84314",
                        green: "0.25098",
                        blue: "0.27059",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-dark.js",
                    isSource: true,
                    original: {
                        value: "rgba(215, 64, 69, 0.5)",
                    },
                    name: "error_pressed",
                    attributes: {
                        category: "color",
                        type: "dark",
                        item: "input",
                        subitem: "error_pressed",
                    },
                    path: ["color", "dark", "input", "error_pressed"],
                },
            },
        },
        light: {
            base: {
                blue_400: {
                    value: {
                        red: "0.00000",
                        green: "0.56078",
                        blue: "1.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#008FFF",
                    },
                    name: "blue_400",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "blue_400",
                    },
                    path: ["color", "light", "base", "blue_400"],
                },
                blue_500: {
                    value: {
                        red: "0.00000",
                        green: "0.52549",
                        blue: "0.93725",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#0086EF",
                    },
                    name: "blue_500",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "blue_500",
                    },
                    path: ["color", "light", "base", "blue_500"],
                },
                blue_600: {
                    value: {
                        red: "0.00000",
                        green: "0.49020",
                        blue: "0.87451",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#007DDF",
                    },
                    name: "blue_600",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "blue_600",
                    },
                    path: ["color", "light", "base", "blue_600"],
                },
                blue_700: {
                    value: {
                        red: "0.00000",
                        green: "0.45490",
                        blue: "0.81176",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#0074CF",
                    },
                    name: "blue_700",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "blue_700",
                    },
                    path: ["color", "light", "base", "blue_700"],
                },
                green_400: {
                    value: {
                        red: "0.06275",
                        green: "0.61961",
                        blue: "0.35294",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#109E5A",
                    },
                    name: "green_400",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "green_400",
                    },
                    path: ["color", "light", "base", "green_400"],
                },
                green_500: {
                    value: {
                        red: "0.05882",
                        green: "0.58039",
                        blue: "0.32941",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#0F9454",
                    },
                    name: "green_500",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "green_500",
                    },
                    path: ["color", "light", "base", "green_500"],
                },
                green_600: {
                    value: {
                        red: "0.05490",
                        green: "0.54510",
                        blue: "0.30980",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#0E8B4F",
                    },
                    name: "green_600",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "green_600",
                    },
                    path: ["color", "light", "base", "green_600"],
                },
                green_700: {
                    value: {
                        red: "0.05098",
                        green: "0.50588",
                        blue: "0.28627",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#0D8149",
                    },
                    name: "green_700",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "green_700",
                    },
                    path: ["color", "light", "base", "green_700"],
                },
                red_400: {
                    value: {
                        red: "0.83922",
                        green: "0.22745",
                        blue: "0.24706",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#D63A3F",
                    },
                    name: "red_400",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "red_400",
                    },
                    path: ["color", "light", "base", "red_400"],
                },
                red_500: {
                    value: {
                        red: "0.82745",
                        green: "0.17255",
                        blue: "0.19216",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#D32C31",
                    },
                    name: "red_500",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "red_500",
                    },
                    path: ["color", "light", "base", "red_500"],
                },
                red_600: {
                    value: {
                        red: "0.77255",
                        green: "0.16078",
                        blue: "0.18039",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#C5292E",
                    },
                    name: "red_600",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "red_600",
                    },
                    path: ["color", "light", "base", "red_600"],
                },
                red_700: {
                    value: {
                        red: "0.71765",
                        green: "0.14902",
                        blue: "0.16863",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#B7262B",
                    },
                    name: "red_700",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "red_700",
                    },
                    path: ["color", "light", "base", "red_700"],
                },
                orange_400: {
                    value: {
                        red: "0.87843",
                        green: "0.47451",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#E07900",
                    },
                    name: "orange_400",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "orange_400",
                    },
                    path: ["color", "light", "base", "orange_400"],
                },
                orange_500: {
                    value: {
                        red: "0.82353",
                        green: "0.44706",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#D27200",
                    },
                    name: "orange_500",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "orange_500",
                    },
                    path: ["color", "light", "base", "orange_500"],
                },
                orange_600: {
                    value: {
                        red: "0.76863",
                        green: "0.41569",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#C46A00",
                    },
                    name: "orange_600",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "orange_600",
                    },
                    path: ["color", "light", "base", "orange_600"],
                },
                orange_700: {
                    value: {
                        red: "0.71373",
                        green: "0.38431",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#B66200",
                    },
                    name: "orange_700",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "orange_700",
                    },
                    path: ["color", "light", "base", "orange_700"],
                },
                yellow_400: {
                    value: {
                        red: "0.79216",
                        green: "0.66667",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#CAAA00",
                    },
                    name: "yellow_400",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "yellow_400",
                    },
                    path: ["color", "light", "base", "yellow_400"],
                },
                yellow_500: {
                    value: {
                        red: "0.74118",
                        green: "0.62353",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#BD9F00",
                    },
                    name: "yellow_500",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "yellow_500",
                    },
                    path: ["color", "light", "base", "yellow_500"],
                },
                yellow_600: {
                    value: {
                        red: "0.69412",
                        green: "0.58431",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#B19500",
                    },
                    name: "yellow_600",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "yellow_600",
                    },
                    path: ["color", "light", "base", "yellow_600"],
                },
                yellow_700: {
                    value: {
                        red: "0.64314",
                        green: "0.54118",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#A48A00",
                    },
                    name: "yellow_700",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "yellow_700",
                    },
                    path: ["color", "light", "base", "yellow_700"],
                },
                cyan_400: {
                    value: {
                        red: "0.00000",
                        green: "0.69020",
                        blue: "0.83922",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#00B0D6",
                    },
                    name: "cyan_400",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "cyan_400",
                    },
                    path: ["color", "light", "base", "cyan_400"],
                },
                cyan_500: {
                    value: {
                        red: "0.00000",
                        green: "0.64706",
                        blue: "0.78824",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#00A5C9",
                    },
                    name: "cyan_500",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "cyan_500",
                    },
                    path: ["color", "light", "base", "cyan_500"],
                },
                cyan_600: {
                    value: {
                        red: "0.00000",
                        green: "0.60392",
                        blue: "0.73333",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#009ABB",
                    },
                    name: "cyan_600",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "cyan_600",
                    },
                    path: ["color", "light", "base", "cyan_600"],
                },
                cyan_700: {
                    value: {
                        red: "0.00000",
                        green: "0.56078",
                        blue: "0.68235",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#008FAE",
                    },
                    name: "cyan_700",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "cyan_700",
                    },
                    path: ["color", "light", "base", "cyan_700"],
                },
                indigo_400: {
                    value: {
                        red: "0.30196",
                        green: "0.43922",
                        blue: "0.93333",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#4D70EE",
                    },
                    name: "indigo_400",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "indigo_400",
                    },
                    path: ["color", "light", "base", "indigo_400"],
                },
                indigo_500: {
                    value: {
                        red: "0.23137",
                        green: "0.38431",
                        blue: "0.92549",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#3B62EC",
                    },
                    name: "indigo_500",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "indigo_500",
                    },
                    path: ["color", "light", "base", "indigo_500"],
                },
                indigo_600: {
                    value: {
                        red: "0.16078",
                        green: "0.32941",
                        blue: "0.92157",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#2954EB",
                    },
                    name: "indigo_600",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "indigo_600",
                    },
                    path: ["color", "light", "base", "indigo_600"],
                },
                indigo_700: {
                    value: {
                        red: "0.09020",
                        green: "0.27059",
                        blue: "0.91373",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#1745E9",
                    },
                    name: "indigo_700",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "indigo_700",
                    },
                    path: ["color", "light", "base", "indigo_700"],
                },
                purple_400: {
                    value: {
                        red: "0.58039",
                        green: "0.30196",
                        blue: "0.93333",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#944DEE",
                    },
                    name: "purple_400",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "purple_400",
                    },
                    path: ["color", "light", "base", "purple_400"],
                },
                purple_500: {
                    value: {
                        red: "0.53725",
                        green: "0.23137",
                        blue: "0.92549",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#893BEC",
                    },
                    name: "purple_500",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "purple_500",
                    },
                    path: ["color", "light", "base", "purple_500"],
                },
                purple_600: {
                    value: {
                        red: "0.49412",
                        green: "0.16078",
                        blue: "0.92157",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#7E29EB",
                    },
                    name: "purple_600",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "purple_600",
                    },
                    path: ["color", "light", "base", "purple_600"],
                },
                purple_700: {
                    value: {
                        red: "0.45098",
                        green: "0.09020",
                        blue: "0.91373",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#7317E9",
                    },
                    name: "purple_700",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "purple_700",
                    },
                    path: ["color", "light", "base", "purple_700"],
                },
                pink_400: {
                    value: {
                        red: "0.78431",
                        green: "0.18824",
                        blue: "0.58039",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#C83094",
                    },
                    name: "pink_400",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "pink_400",
                    },
                    path: ["color", "light", "base", "pink_400"],
                },
                pink_500: {
                    value: {
                        red: "0.73725",
                        green: "0.17647",
                        blue: "0.54510",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#BC2D8B",
                    },
                    name: "pink_500",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "pink_500",
                    },
                    path: ["color", "light", "base", "pink_500"],
                },
                pink_600: {
                    value: {
                        red: "0.68627",
                        green: "0.16471",
                        blue: "0.50980",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#AF2A82",
                    },
                    name: "pink_600",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "pink_600",
                    },
                    path: ["color", "light", "base", "pink_600"],
                },
                pink_700: {
                    value: {
                        red: "0.63922",
                        green: "0.15294",
                        blue: "0.47451",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#A32779",
                    },
                    name: "pink_700",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "pink_700",
                    },
                    path: ["color", "light", "base", "pink_700"],
                },
                gray_25: {
                    value: {
                        red: "0.91765",
                        green: "0.91765",
                        blue: "0.91765",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#EAEAEA",
                    },
                    name: "gray_25",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "gray_25",
                    },
                    path: ["color", "light", "base", "gray_25"],
                },
                gray_50: {
                    value: {
                        red: "0.83529",
                        green: "0.83529",
                        blue: "0.83529",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#D5D5D5",
                    },
                    name: "gray_50",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "gray_50",
                    },
                    path: ["color", "light", "base", "gray_50"],
                },
                gray_100: {
                    value: {
                        red: "0.74902",
                        green: "0.74902",
                        blue: "0.74902",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#BFBFBF",
                    },
                    name: "gray_100",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "gray_100",
                    },
                    path: ["color", "light", "base", "gray_100"],
                },
                gray_200: {
                    value: {
                        red: "0.66667",
                        green: "0.66667",
                        blue: "0.66667",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#AAAAAA",
                    },
                    name: "gray_200",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "gray_200",
                    },
                    path: ["color", "light", "base", "gray_200"],
                },
                gray_300: {
                    value: {
                        red: "0.58431",
                        green: "0.58431",
                        blue: "0.58431",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#959595",
                    },
                    name: "gray_300",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "gray_300",
                    },
                    path: ["color", "light", "base", "gray_300"],
                },
                gray_400: {
                    value: {
                        red: "0.50196",
                        green: "0.50196",
                        blue: "0.50196",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#808080",
                    },
                    name: "gray_400",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "gray_400",
                    },
                    path: ["color", "light", "base", "gray_400"],
                },
                gray_500: {
                    value: {
                        red: "0.41569",
                        green: "0.41569",
                        blue: "0.41569",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#6A6A6A",
                    },
                    name: "gray_500",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "gray_500",
                    },
                    path: ["color", "light", "base", "gray_500"],
                },
                gray_600: {
                    value: {
                        red: "0.33333",
                        green: "0.33333",
                        blue: "0.33333",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#555555",
                    },
                    name: "gray_600",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "gray_600",
                    },
                    path: ["color", "light", "base", "gray_600"],
                },
                gray_700: {
                    value: {
                        red: "0.25098",
                        green: "0.25098",
                        blue: "0.25098",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#404040",
                    },
                    name: "gray_700",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "gray_700",
                    },
                    path: ["color", "light", "base", "gray_700"],
                },
                gray_800: {
                    value: {
                        red: "0.16863",
                        green: "0.16863",
                        blue: "0.16863",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#2B2B2B",
                    },
                    name: "gray_800",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "gray_800",
                    },
                    path: ["color", "light", "base", "gray_800"],
                },
                gray_900: {
                    value: {
                        red: "0.08235",
                        green: "0.08235",
                        blue: "0.08235",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#151515",
                    },
                    name: "gray_900",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "base",
                        subitem: "gray_900",
                    },
                    path: ["color", "light", "base", "gray_900"],
                },
            },
            semantic: {
                positive: {
                    value: {
                        red: "0.06275",
                        green: "0.61961",
                        blue: "0.35294",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#109E5A",
                    },
                    name: "positive",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "semantic",
                        subitem: "positive",
                    },
                    path: ["color", "light", "semantic", "positive"],
                },
                warning: {
                    value: {
                        red: "0.87843",
                        green: "0.47451",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#E07900",
                    },
                    name: "warning",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "semantic",
                        subitem: "warning",
                    },
                    path: ["color", "light", "semantic", "warning"],
                },
                negative: {
                    value: {
                        red: "0.78431",
                        green: "0.00000",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#C80000",
                    },
                    name: "negative",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "semantic",
                        subitem: "negative",
                    },
                    path: ["color", "light", "semantic", "negative"],
                },
                informative: {
                    value: {
                        red: "0.00000",
                        green: "0.56078",
                        blue: "1.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#008FFF",
                    },
                    name: "informative",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "semantic",
                        subitem: "informative",
                    },
                    path: ["color", "light", "semantic", "informative"],
                },
            },
            text: {
                callout: {
                    value: {
                        red: "0.00000",
                        green: "0.00000",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#000000",
                    },
                    name: "callout",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "text",
                        subitem: "callout",
                    },
                    path: ["color", "light", "text", "callout"],
                },
                primary: {
                    value: {
                        red: "0.25098",
                        green: "0.25098",
                        blue: "0.25098",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.light.base.gray_700.value}",
                    },
                    name: "primary",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "text",
                        subitem: "primary",
                    },
                    path: ["color", "light", "text", "primary"],
                },
                secondary: {
                    value: {
                        red: "0.41569",
                        green: "0.41569",
                        blue: "0.41569",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.light.base.gray_500.value}",
                    },
                    name: "secondary",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "text",
                        subitem: "secondary",
                    },
                    path: ["color", "light", "text", "secondary"],
                },
                disabled: {
                    value: {
                        red: "0.58431",
                        green: "0.58431",
                        blue: "0.58431",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.light.base.gray_300.value}",
                    },
                    name: "disabled",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "text",
                        subitem: "disabled",
                    },
                    path: ["color", "light", "text", "disabled"],
                },
            },
            controls: {
                default: {
                    value: {
                        red: "0.83529",
                        green: "0.83529",
                        blue: "0.83529",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.light.base.gray_50.value}",
                    },
                    name: "default",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "controls",
                        subitem: "default",
                    },
                    path: ["color", "light", "controls", "default"],
                },
                hover: {
                    value: {
                        red: "0.83137",
                        green: "0.83137",
                        blue: "0.83137",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#D4D4D4",
                    },
                    name: "hover",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "controls",
                        subitem: "hover",
                    },
                    path: ["color", "light", "controls", "hover"],
                },
                active: {
                    value: {
                        red: "0.81961",
                        green: "0.81961",
                        blue: "0.81961",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#D1D1D1",
                    },
                    name: "active",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "controls",
                        subitem: "active",
                    },
                    path: ["color", "light", "controls", "active"],
                },
                focused: {
                    value: {
                        red: "0.83529",
                        green: "0.83529",
                        blue: "0.83529",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.light.base.gray_50.value}",
                    },
                    name: "focused",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "controls",
                        subitem: "focused",
                    },
                    path: ["color", "light", "controls", "focused"],
                },
                disabled: {
                    value: {
                        red: "0.81961",
                        green: "0.81961",
                        blue: "0.81961",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#D1D1D1",
                    },
                    name: "disabled",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "controls",
                        subitem: "disabled",
                    },
                    path: ["color", "light", "controls", "disabled"],
                },
                border_default: {
                    value: {
                        red: "0.74902",
                        green: "0.74902",
                        blue: "0.74902",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.light.base.gray_100.value}",
                    },
                    name: "border_default",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "controls",
                        subitem: "border_default",
                    },
                    path: ["color", "light", "controls", "border_default"],
                },
                border_hover: {
                    value: {
                        red: "0.66667",
                        green: "0.66667",
                        blue: "0.66667",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.light.base.gray_200.value}",
                    },
                    name: "border_hover",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "controls",
                        subitem: "border_hover",
                    },
                    path: ["color", "light", "controls", "border_hover"],
                },
                border_pressed: {
                    value: {
                        red: "0.66667",
                        green: "0.66667",
                        blue: "0.66667",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.light.base.gray_200.value}",
                    },
                    name: "border_pressed",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "controls",
                        subitem: "border_pressed",
                    },
                    path: ["color", "light", "controls", "border_pressed"],
                },
                border_disabled: {
                    value: {
                        red: "0.83529",
                        green: "0.83529",
                        blue: "0.83529",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.light.base.gray_50.value}",
                    },
                    name: "border_disabled",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "controls",
                        subitem: "border_disabled",
                    },
                    path: ["color", "light", "controls", "border_disabled"],
                },
            },
            background: {
                inspector: {
                    value: {
                        red: "0.91765",
                        green: "0.91765",
                        blue: "0.91765",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.light.base.gray_25.value}",
                    },
                    name: "inspector",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "background",
                        subitem: "inspector",
                    },
                    path: ["color", "light", "background", "inspector"],
                },
                flyout: {
                    value: {
                        red: "0.83529",
                        green: "0.83529",
                        blue: "0.83529",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.light.base.gray_50.value}BF",
                    },
                    name: "flyout",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "background",
                        subitem: "flyout",
                    },
                    path: ["color", "light", "background", "flyout"],
                },
                modal: {
                    value: {
                        red: "0.83529",
                        green: "0.83529",
                        blue: "0.83529",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.light.base.gray_50.value}",
                    },
                    name: "modal",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "background",
                        subitem: "modal",
                    },
                    path: ["color", "light", "background", "modal"],
                },
                tooltip: {
                    value: {
                        red: "1.00000",
                        green: "1.00000",
                        blue: "1.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.static.base.white.value}40",
                    },
                    name: "tooltip",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "background",
                        subitem: "tooltip",
                    },
                    path: ["color", "light", "background", "tooltip"],
                },
                toolbar: {
                    value: {
                        red: "1.00000",
                        green: "1.00000",
                        blue: "1.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.static.base.white.value}40",
                    },
                    name: "toolbar",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "background",
                        subitem: "toolbar",
                    },
                    path: ["color", "light", "background", "toolbar"],
                },
                toolbar_75: {
                    value: {
                        red: "1.00000",
                        green: "1.00000",
                        blue: "1.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.static.base.white.value}BF",
                    },
                    name: "toolbar_75",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "background",
                        subitem: "toolbar_75",
                    },
                    path: ["color", "light", "background", "toolbar_75"],
                },
            },
            highlight: {
                default: {
                    value: {
                        red: "0.00000",
                        green: "0.56078",
                        blue: "1.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.static.base.blue_400.value}",
                    },
                    name: "default",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "highlight",
                        subitem: "default",
                    },
                    path: ["color", "light", "highlight", "default"],
                },
                hover: {
                    value: {
                        red: "0.00000",
                        green: "0.52549",
                        blue: "0.93725",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.static.base.blue_500.value}",
                    },
                    name: "hover",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "highlight",
                        subitem: "hover",
                    },
                    path: ["color", "light", "highlight", "hover"],
                },
                active: {
                    value: {
                        red: "0.00000",
                        green: "0.45490",
                        blue: "0.81176",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.static.base.blue_700.value}",
                    },
                    name: "active",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "highlight",
                        subitem: "active",
                    },
                    path: ["color", "light", "highlight", "active"],
                },
                focus: {
                    value: {
                        red: "0.00000",
                        green: "0.45490",
                        blue: "0.81176",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.static.base.blue_700.value}BF",
                    },
                    name: "focus",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "highlight",
                        subitem: "focus",
                    },
                    path: ["color", "light", "highlight", "focus"],
                },
                ghosted: {
                    value: {
                        red: "0.00000",
                        green: "0.52549",
                        blue: "0.93725",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.static.base.blue_500.value}",
                    },
                    name: "ghosted",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "highlight",
                        subitem: "ghosted",
                    },
                    path: ["color", "light", "highlight", "ghosted"],
                },
                disabled: {
                    value: {
                        red: "0.80000",
                        green: "0.80000",
                        blue: "0.80000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "#CCCCCC",
                    },
                    name: "disabled",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "highlight",
                        subitem: "disabled",
                    },
                    path: ["color", "light", "highlight", "disabled"],
                },
            },
            borders: {
                border_50: {
                    value: {
                        red: "0.83529",
                        green: "0.83529",
                        blue: "0.83529",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.light.base.gray_50.value}",
                    },
                    name: "border_50",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "borders",
                        subitem: "border_50",
                    },
                    path: ["color", "light", "borders", "border_50"],
                },
                border_100: {
                    value: {
                        red: "0.74902",
                        green: "0.74902",
                        blue: "0.74902",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.light.base.gray_100.value}",
                    },
                    name: "border_100",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "borders",
                        subitem: "border_100",
                    },
                    path: ["color", "light", "borders", "border_100"],
                },
                border_200: {
                    value: {
                        red: "0.66667",
                        green: "0.66667",
                        blue: "0.66667",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.light.base.gray_200.value}",
                    },
                    name: "border_200",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "borders",
                        subitem: "border_200",
                    },
                    path: ["color", "light", "borders", "border_200"],
                },
            },
            icons: {
                primary: {
                    value: {
                        red: "0.16863",
                        green: "0.16863",
                        blue: "0.16863",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.light.base.gray_800.value}",
                    },
                    name: "primary",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "icons",
                        subitem: "primary",
                    },
                    path: ["color", "light", "icons", "primary"],
                },
                secondary: {
                    value: {
                        red: "0.58431",
                        green: "0.58431",
                        blue: "0.58431",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "{color.light.base.gray_300.value}",
                    },
                    name: "secondary",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "icons",
                        subitem: "secondary",
                    },
                    path: ["color", "light", "icons", "secondary"],
                },
            },
            input: {
                positive_default: {
                    value: {
                        red: "0.06275",
                        green: "0.61961",
                        blue: "0.35294",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "rgba(16, 158, 90, 0.5)",
                    },
                    name: "positive_default",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "input",
                        subitem: "positive_default",
                    },
                    path: ["color", "light", "input", "positive_default"],
                },
                positive_hover: {
                    value: {
                        red: "0.05098",
                        green: "0.50588",
                        blue: "0.28627",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "rgba(13, 129, 73, 0.5)",
                    },
                    name: "positive_hover",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "input",
                        subitem: "positive_hover",
                    },
                    path: ["color", "light", "input", "positive_hover"],
                },
                positive_pressed: {
                    value: {
                        red: "0.05098",
                        green: "0.50588",
                        blue: "0.28627",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "rgba(13, 129, 73, 0.5)",
                    },
                    name: "positive_pressed",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "input",
                        subitem: "positive_pressed",
                    },
                    path: ["color", "light", "input", "positive_pressed"],
                },
                highlight_default: {
                    value: {
                        red: "0.00000",
                        green: "0.56078",
                        blue: "1.00000",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "rgba(0, 143, 255, 0.5)",
                    },
                    name: "highlight_default",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "input",
                        subitem: "highlight_default",
                    },
                    path: ["color", "light", "input", "highlight_default"],
                },
                highlight_hover: {
                    value: {
                        red: "0.00000",
                        green: "0.52549",
                        blue: "0.93725",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "rgba(0, 134, 239, 0.5)",
                    },
                    name: "highlight_hover",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "input",
                        subitem: "highlight_hover",
                    },
                    path: ["color", "light", "input", "highlight_hover"],
                },
                highlight_pressed: {
                    value: {
                        red: "0.00000",
                        green: "0.52549",
                        blue: "0.93725",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "rgba(0, 134, 239, 0.5)",
                    },
                    name: "highlight_pressed",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "input",
                        subitem: "highlight_pressed",
                    },
                    path: ["color", "light", "input", "highlight_pressed"],
                },
                error_default: {
                    value: {
                        red: "0.84314",
                        green: "0.25098",
                        blue: "0.27059",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "rgba(215, 64, 69, 0.5)",
                    },
                    name: "error_default",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "input",
                        subitem: "error_default",
                    },
                    path: ["color", "light", "input", "error_default"],
                },
                error_hover: {
                    value: {
                        red: "0.84314",
                        green: "0.25098",
                        blue: "0.27059",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "rgba(215, 64, 69, 0.5)",
                    },
                    name: "error_hover",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "input",
                        subitem: "error_hover",
                    },
                    path: ["color", "light", "input", "error_hover"],
                },
                error_pressed: {
                    value: {
                        red: "0.84314",
                        green: "0.25098",
                        blue: "0.27059",
                        alpha: 0.5,
                    },
                    filePath: "tokens/color/color-light.js",
                    isSource: true,
                    original: {
                        value: "rgba(215, 64, 69, 0.5)",
                    },
                    name: "error_pressed",
                    attributes: {
                        category: "color",
                        type: "light",
                        item: "input",
                        subitem: "error_pressed",
                    },
                    path: ["color", "light", "input", "error_pressed"],
                },
            },
        },
        static: {
            base: {
                blue_400: {
                    value: {
                        red: "0.00000",
                        green: "0.56078",
                        blue: "1.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#008FFF",
                    },
                    name: "blue_400",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "blue_400",
                    },
                    path: ["color", "static", "base", "blue_400"],
                },
                blue_500: {
                    value: {
                        red: "0.00000",
                        green: "0.52549",
                        blue: "0.93725",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#0086EF",
                    },
                    name: "blue_500",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "blue_500",
                    },
                    path: ["color", "static", "base", "blue_500"],
                },
                blue_600: {
                    value: {
                        red: "0.00000",
                        green: "0.49020",
                        blue: "0.87451",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#007DDF",
                    },
                    name: "blue_600",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "blue_600",
                    },
                    path: ["color", "static", "base", "blue_600"],
                },
                blue_700: {
                    value: {
                        red: "0.00000",
                        green: "0.45490",
                        blue: "0.81176",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#0074CF",
                    },
                    name: "blue_700",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "blue_700",
                    },
                    path: ["color", "static", "base", "blue_700"],
                },
                green_400: {
                    value: {
                        red: "0.06667",
                        green: "0.65882",
                        blue: "0.37255",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#11A85F",
                    },
                    name: "green_400",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "green_400",
                    },
                    path: ["color", "static", "base", "green_400"],
                },
                green_500: {
                    value: {
                        red: "0.07451",
                        green: "0.72941",
                        blue: "0.41176",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#13BA69",
                    },
                    name: "green_500",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "green_500",
                    },
                    path: ["color", "static", "base", "green_500"],
                },
                green_600: {
                    value: {
                        red: "0.08235",
                        green: "0.80392",
                        blue: "0.45490",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#15CD74",
                    },
                    name: "green_600",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "green_600",
                    },
                    path: ["color", "static", "base", "green_600"],
                },
                green_700: {
                    value: {
                        red: "0.09020",
                        green: "0.87451",
                        blue: "0.49412",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#17DF7E",
                    },
                    name: "green_700",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "green_700",
                    },
                    path: ["color", "static", "base", "green_700"],
                },
                red_400: {
                    value: {
                        red: "0.84314",
                        green: "0.25098",
                        blue: "0.27059",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#D74045",
                    },
                    name: "red_400",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "red_400",
                    },
                    path: ["color", "static", "base", "red_400"],
                },
                red_500: {
                    value: {
                        red: "0.85490",
                        green: "0.29804",
                        blue: "0.31765",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#DA4C51",
                    },
                    name: "red_500",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "red_500",
                    },
                    path: ["color", "static", "base", "red_500"],
                },
                red_600: {
                    value: {
                        red: "0.86275",
                        green: "0.34510",
                        blue: "0.36078",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#DC585C",
                    },
                    name: "red_600",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "red_600",
                    },
                    path: ["color", "static", "base", "red_600"],
                },
                red_700: {
                    value: {
                        red: "0.87451",
                        green: "0.39216",
                        blue: "0.40784",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#DF6468",
                    },
                    name: "red_700",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "red_700",
                    },
                    path: ["color", "static", "base", "red_700"],
                },
                orange_400: {
                    value: {
                        red: "0.81961",
                        green: "0.44314",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#D17100",
                    },
                    name: "orange_400",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "orange_400",
                    },
                    path: ["color", "static", "base", "orange_400"],
                },
                orange_500: {
                    value: {
                        red: "0.89412",
                        green: "0.48235",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#E47B00",
                    },
                    name: "orange_500",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "orange_500",
                    },
                    path: ["color", "static", "base", "orange_500"],
                },
                orange_600: {
                    value: {
                        red: "0.96863",
                        green: "0.52157",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#F78500",
                    },
                    name: "orange_600",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "orange_600",
                    },
                    path: ["color", "static", "base", "orange_600"],
                },
                orange_700: {
                    value: {
                        red: "1.00000",
                        green: "0.56078",
                        blue: "0.03922",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#FF8F0A",
                    },
                    name: "orange_700",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "orange_700",
                    },
                    path: ["color", "static", "base", "orange_700"],
                },
                yellow_400: {
                    value: {
                        red: "0.68235",
                        green: "0.57255",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#AE9200",
                    },
                    name: "yellow_400",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "yellow_400",
                    },
                    path: ["color", "static", "base", "yellow_400"],
                },
                yellow_500: {
                    value: {
                        red: "0.76471",
                        green: "0.64314",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#C3A400",
                    },
                    name: "yellow_500",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "yellow_500",
                    },
                    path: ["color", "static", "base", "yellow_500"],
                },
                yellow_600: {
                    value: {
                        red: "0.84706",
                        green: "0.71373",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#D8B600",
                    },
                    name: "yellow_600",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "yellow_600",
                    },
                    path: ["color", "static", "base", "yellow_600"],
                },
                yellow_700: {
                    value: {
                        red: "0.92941",
                        green: "0.78039",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#EDC700",
                    },
                    name: "yellow_700",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "yellow_700",
                    },
                    path: ["color", "static", "base", "yellow_700"],
                },
                cyan_400: {
                    value: {
                        red: "0.00000",
                        green: "0.65490",
                        blue: "0.80000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#00A7CC",
                    },
                    name: "cyan_400",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "cyan_400",
                    },
                    path: ["color", "static", "base", "cyan_400"],
                },
                cyan_500: {
                    value: {
                        red: "0.00000",
                        green: "0.71765",
                        blue: "0.87451",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#00B7DF",
                    },
                    name: "cyan_500",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "cyan_500",
                    },
                    path: ["color", "static", "base", "cyan_500"],
                },
                cyan_600: {
                    value: {
                        red: "0.00000",
                        green: "0.77647",
                        blue: "0.94902",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#00C6F2",
                    },
                    name: "cyan_600",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "cyan_600",
                    },
                    path: ["color", "static", "base", "cyan_600"],
                },
                cyan_700: {
                    value: {
                        red: "0.02353",
                        green: "0.82353",
                        blue: "1.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#06D2FF",
                    },
                    name: "cyan_700",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "cyan_700",
                    },
                    path: ["color", "static", "base", "cyan_700"],
                },
                indigo_400: {
                    value: {
                        red: "0.32549",
                        green: "0.45882",
                        blue: "0.93725",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#5375EF",
                    },
                    name: "indigo_400",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "indigo_400",
                    },
                    path: ["color", "static", "base", "indigo_400"],
                },
                indigo_500: {
                    value: {
                        red: "0.36863",
                        green: "0.49412",
                        blue: "0.94118",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#5E7EF0",
                    },
                    name: "indigo_500",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "indigo_500",
                    },
                    path: ["color", "static", "base", "indigo_500"],
                },
                indigo_600: {
                    value: {
                        red: "0.41176",
                        green: "0.52549",
                        blue: "0.94510",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#6986F1",
                    },
                    name: "indigo_600",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "indigo_600",
                    },
                    path: ["color", "static", "base", "indigo_600"],
                },
                indigo_700: {
                    value: {
                        red: "0.45098",
                        green: "0.56078",
                        blue: "0.94902",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#738FF2",
                    },
                    name: "indigo_700",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "indigo_700",
                    },
                    path: ["color", "static", "base", "indigo_700"],
                },
                purple_400: {
                    value: {
                        red: "0.59216",
                        green: "0.32549",
                        blue: "0.93725",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#9753EF",
                    },
                    name: "purple_400",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "purple_400",
                    },
                    path: ["color", "static", "base", "purple_400"],
                },
                purple_500: {
                    value: {
                        red: "0.61961",
                        green: "0.36863",
                        blue: "0.94118",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#9E5EF0",
                    },
                    name: "purple_500",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "purple_500",
                    },
                    path: ["color", "static", "base", "purple_500"],
                },
                purple_600: {
                    value: {
                        red: "0.64314",
                        green: "0.41176",
                        blue: "0.94510",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#A469F1",
                    },
                    name: "purple_600",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "purple_600",
                    },
                    path: ["color", "static", "base", "purple_600"],
                },
                purple_700: {
                    value: {
                        red: "0.67059",
                        green: "0.45098",
                        blue: "0.94902",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#AB73F2",
                    },
                    name: "purple_700",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "purple_700",
                    },
                    path: ["color", "static", "base", "purple_700"],
                },
                pink_400: {
                    value: {
                        red: "0.80784",
                        green: "0.19608",
                        blue: "0.60000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#CE3299",
                    },
                    name: "pink_400",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "pink_400",
                    },
                    path: ["color", "static", "base", "pink_400"],
                },
                pink_500: {
                    value: {
                        red: "0.81961",
                        green: "0.24706",
                        blue: "0.62353",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#D13F9F",
                    },
                    name: "pink_500",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "pink_500",
                    },
                    path: ["color", "static", "base", "pink_500"],
                },
                pink_600: {
                    value: {
                        red: "0.83137",
                        green: "0.29804",
                        blue: "0.65098",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#D44CA6",
                    },
                    name: "pink_600",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "pink_600",
                    },
                    path: ["color", "static", "base", "pink_600"],
                },
                pink_700: {
                    value: {
                        red: "0.84314",
                        green: "0.34510",
                        blue: "0.67451",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#D758AC",
                    },
                    name: "pink_700",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "pink_700",
                    },
                    path: ["color", "static", "base", "pink_700"],
                },
                gray_25: {
                    value: {
                        red: "0.91765",
                        green: "0.91765",
                        blue: "0.91765",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#EAEAEA",
                    },
                    name: "gray_25",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "gray_25",
                    },
                    path: ["color", "static", "base", "gray_25"],
                },
                gray_50: {
                    value: {
                        red: "0.83529",
                        green: "0.83529",
                        blue: "0.83529",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#D5D5D5",
                    },
                    name: "gray_50",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "gray_50",
                    },
                    path: ["color", "static", "base", "gray_50"],
                },
                gray_100: {
                    value: {
                        red: "0.74902",
                        green: "0.74902",
                        blue: "0.74902",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#BFBFBF",
                    },
                    name: "gray_100",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "gray_100",
                    },
                    path: ["color", "static", "base", "gray_100"],
                },
                gray_200: {
                    value: {
                        red: "0.66667",
                        green: "0.66667",
                        blue: "0.66667",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#AAAAAA",
                    },
                    name: "gray_200",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "gray_200",
                    },
                    path: ["color", "static", "base", "gray_200"],
                },
                gray_300: {
                    value: {
                        red: "0.58431",
                        green: "0.58431",
                        blue: "0.58431",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#959595",
                    },
                    name: "gray_300",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "gray_300",
                    },
                    path: ["color", "static", "base", "gray_300"],
                },
                gray_400: {
                    value: {
                        red: "0.50196",
                        green: "0.50196",
                        blue: "0.50196",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#808080",
                    },
                    name: "gray_400",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "gray_400",
                    },
                    path: ["color", "static", "base", "gray_400"],
                },
                gray_500: {
                    value: {
                        red: "0.41569",
                        green: "0.41569",
                        blue: "0.41569",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#6A6A6A",
                    },
                    name: "gray_500",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "gray_500",
                    },
                    path: ["color", "static", "base", "gray_500"],
                },
                gray_600: {
                    value: {
                        red: "0.33333",
                        green: "0.33333",
                        blue: "0.33333",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#555555",
                    },
                    name: "gray_600",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "gray_600",
                    },
                    path: ["color", "static", "base", "gray_600"],
                },
                gray_700: {
                    value: {
                        red: "0.25098",
                        green: "0.25098",
                        blue: "0.25098",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#404040",
                    },
                    name: "gray_700",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "gray_700",
                    },
                    path: ["color", "static", "base", "gray_700"],
                },
                gray_800: {
                    value: {
                        red: "0.16863",
                        green: "0.16863",
                        blue: "0.16863",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#2B2B2B",
                    },
                    name: "gray_800",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "gray_800",
                    },
                    path: ["color", "static", "base", "gray_800"],
                },
                gray_900: {
                    value: {
                        red: "0.08235",
                        green: "0.08235",
                        blue: "0.08235",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#151515",
                    },
                    name: "gray_900",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "gray_900",
                    },
                    path: ["color", "static", "base", "gray_900"],
                },
                white: {
                    value: {
                        red: "1.00000",
                        green: "1.00000",
                        blue: "1.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#FFFFFF",
                    },
                    name: "white",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "white",
                    },
                    path: ["color", "static", "base", "white"],
                },
                black: {
                    value: {
                        red: "0.00000",
                        green: "0.00000",
                        blue: "0.00000",
                        alpha: 1,
                    },
                    filePath: "tokens/color/color-static.js",
                    isSource: true,
                    original: {
                        value: "#000000",
                    },
                    name: "black",
                    attributes: {
                        category: "color",
                        type: "static",
                        item: "base",
                        subitem: "black",
                    },
                    path: ["color", "static", "base", "black"],
                },
            },
        },
    },
};
// Get the local existing styles so that we can check against them.
const localStyles = figma.getLocalPaintStyles();
// We use Inter for the title and swatch details
async function createNewTextStyle() {
    await figma.loadFontAsync({
        family: 'Inter',
        style: 'Regular',
    });
    await figma.loadFontAsync({
        family: 'Inter',
        style: 'Bold',
    });
}
createNewTextStyle().then(n => console.log("Text styles added."));
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
    // Creates styles if none exists. If styles exist, they are updated to the latest in the tokens.
    if (msg.type === 'generate-styles') {
        generateStylesFromTokens(msg.mode);
    }
    // Generates documentation from the color tokens.
    if (msg.type === 'create-pages') {
        createPages();
    }
    // Removes all styles from the current document. 
    if (msg.type === 'remove') {
        const styles = figma.getLocalPaintStyles();
        styles.map(style => {
            style.remove();
        });
    }
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
};
// Create page helper function
function createPage(page, title) {
    page = figma.createFrame();
    page.layoutMode = "VERTICAL";
    page.name = title;
    page.itemSpacing = 24;
    page.counterAxisSizingMode = 'AUTO';
    page.primaryAxisAlignItems = "CENTER";
    page.paddingBottom = 160;
    page.paddingTop = 160;
    page.paddingLeft = 160;
    page.paddingRight = 160;
    page.resize(1280, 1280);
    page.primaryAxisSizingMode = 'AUTO';
    page.fills = [black];
}
// Creates pages for documentation
function createPages() {
    // Create a title
    const title = figma.createText();
    title.characters = "Colors";
    title.fills = [white];
    title.fontSize = 110;
    title.y = -250;
    title.fontName = {
        family: 'Inter',
        style: 'Bold',
    };
    // Container for all of the pages
    // The container can be ungrouped after creation.
    let container;
    container = figma.createFrame();
    container.layoutMode = "HORIZONTAL";
    container.name = "container";
    container.itemSpacing = 160;
    container.counterAxisSizingMode = 'AUTO';
    container.primaryAxisAlignItems = "MIN";
    container.primaryAxisSizingMode = 'AUTO';
    container.counterAxisSizingMode = "AUTO";
    container.fills = [];
    const styles = figma.getLocalPaintStyles();
    let currentCategory;
    let prevCategory;
    let page;
    let row; // Create a row
    let item;
    let categoryDidEnd = false;
    let firstRun = true;
    let i = 0;
    let count = 0;
    // Loop through all of the styles and add them to their category pages
    styles.map((style, idx) => {
        if (currentCategory != null) {
            prevCategory = currentCategory;
        }
        // Get the parts of the name
        const parts = getNameParts(style.name);
        currentCategory = parts[0];
        const token = parts[1];
        console.log("Previous category: " + prevCategory);
        console.log("Current category: " + currentCategory);
        // Create a page on first run and the first row to add to
        if (firstRun) {
            prevCategory = currentCategory;
            page = figma.createFrame();
            page.layoutMode = "VERTICAL";
            page.name = currentCategory;
            page.itemSpacing = 24;
            page.counterAxisSizingMode = 'AUTO';
            page.primaryAxisAlignItems = "CENTER";
            page.paddingBottom = 160;
            page.paddingTop = 160;
            page.paddingLeft = 160;
            page.paddingRight = 160;
            page.resize(1280, 1280);
            page.primaryAxisSizingMode = 'AUTO';
            page.fills = [black];
            const textColor = white;
            const text = figma.createText();
            text.fontName = {
                family: 'Inter',
                style: 'Bold',
            };
            text.characters = currentCategory;
            text.fills = [white];
            text.fontSize = 48;
            page.appendChild(text);
            // Create a row
            row = figma.createFrame();
            row.layoutMode = "HORIZONTAL";
            row.resize(960, 100);
            row.counterAxisSizingMode = "AUTO";
            row.counterAxisAlignItems = "MIN";
            row.primaryAxisAlignItems = "SPACE_BETWEEN";
            row.name = "row";
            row.itemSpacing = 24;
            row.fills = [];
        }
        // Check if the category for this item is the same as the previous. If not, create a new page.
        if (currentCategory != prevCategory) {
            if (row != null) {
                page.appendChild(row);
            }
            container.appendChild(page);
            page = figma.createFrame();
            page.layoutMode = "VERTICAL";
            page.name = currentCategory;
            page.itemSpacing = 24;
            page.counterAxisSizingMode = 'AUTO';
            page.primaryAxisAlignItems = "CENTER";
            page.paddingBottom = 160;
            page.paddingTop = 160;
            page.paddingLeft = 160;
            page.paddingRight = 160;
            page.resize(1280, 1280);
            page.primaryAxisSizingMode = 'AUTO';
            page.fills = [black];
            const textColor = white;
            const text = figma.createText();
            text.characters = currentCategory;
            text.fills = [white];
            text.fontSize = 48;
            text.fontName = {
                family: 'Inter',
                style: 'Bold',
            };
            page.appendChild(text);
            row = figma.createFrame();
            row.layoutMode = "HORIZONTAL";
            row.resize(960, 100);
            row.counterAxisSizingMode = "AUTO";
            row.counterAxisAlignItems = "MIN";
            row.primaryAxisAlignItems = "MIN";
            row.name = "row";
            row.itemSpacing = 24;
            row.fills = [];
            count = 0;
        }
        // If the items in the row exceeds 4, then create a new row
        if (count % 4 == 0 && count != 0) {
            console.log(count);
            if (row != null) {
                page.appendChild(row);
            }
            // Create a row
            row = figma.createFrame();
            row.layoutMode = "HORIZONTAL";
            row.resize(960, 100);
            row.counterAxisSizingMode = "AUTO";
            row.counterAxisAlignItems = "MIN";
            row.primaryAxisAlignItems = "MIN";
            row.name = "row";
            row.itemSpacing = 24;
            row.fills = [];
        }
        // Create and Item
        const paint = style.paints[0];
        const localColor = paint.color;
        const red = localColor.r.toFixed(2);
        const green = localColor.g.toFixed(2);
        const blue = localColor.b.toFixed(2);
        item = figma.createFrame();
        item.fillStyleId = style.id;
        item.resize(222, 100);
        item.paddingBottom = 16;
        item.paddingTop = 16;
        item.paddingLeft = 16;
        item.paddingRight = 16;
        item.name = token;
        item.layoutMode = "VERTICAL";
        // Create the labels
        const textColor = white;
        const text = figma.createText();
        text.characters = token;
        text.fills = [white];
        text.fontName = {
            family: 'Inter',
            style: 'Bold',
        };
        const val = figma.createText();
        val.characters = `${red}, ${green},${blue}`;
        val.name = "rgb";
        val.fills = [white];
        val.fontName = {
            family: 'Inter',
            style: 'Regular',
        };
        const opacity = figma.createText();
        opacity.characters = "opacity: " + paint.opacity.toFixed(2);
        opacity.name = "opacity";
        opacity.fills = [white];
        val.fontName = {
            family: 'Inter',
            style: 'Regular',
        };
        // Append labels
        item.appendChild(text);
        item.appendChild(val);
        item.appendChild(opacity);
        row.appendChild(item);
        firstRun = false;
        categoryDidEnd = false;
        count++;
        if (idx == styles.length - 1) {
            page.appendChild(row);
        }
    });
    container.appendChild(page);
    figma.currentPage.appendChild(container);
}
function createTitle(category = "") {
    const title = figma.createText();
    title.characters = category;
    const solidPaint = { type: "SOLID", color: { r: 1.0, g: 1.0, b: 1.0 } };
    title.fills = [solidPaint];
}
function generateStylesFromTokens(colorMode) {
    // Get all categories
    const categories = Object.entries(_styleDictionary.color[colorMode]);
    console.log(categories);
    let countExisting = 0;
    categories.forEach(([key, value], idx) => {
        // Print out the key
        console.log(toPascalCase(key));
        const category = key;
        // Create colors array and loop through
        const cols = Object.entries(value);
        // For each color in each category
        cols.forEach(([key, color], idx) => {
            const red = parseFloat(color.value.red);
            const green = parseFloat(color.value.green);
            const blue = parseFloat(color.value.blue);
            const localPaintStyles = figma.getLocalPaintStyles();
            const tokenName = toPascalCase(category) + "/" + color.name;
            let exists = false;
            let needsUpdate = false;
            localPaintStyles.map(style => {
                if (style.name === tokenName && !exists) {
                    console.log(toPascalCase(category) + "/" + color.name);
                    console.log(style.name);
                    console.log("I already exist, check to see if we are equal");
                    exists = true;
                }
            });
            console.log(exists);
            if (!exists) {
                const solidPaint = { type: "SOLID", color: { r: red, g: green, b: blue }, opacity: color.value.alpha };
                const paint = figma.createPaintStyle();
                paint.paints = [solidPaint];
                paint.name = tokenName;
            }
            else {
                console.log("Do nothing");
                countExisting += 1;
            }
        });
    });
    console.log(`Styles generated with ${colorMode}`);
    console.log(`${countExisting} styles already exist. No styles created.`);
}
// Utility Functions
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16) / 255.0,
        g: parseInt(result[2], 16) / 255.0,
        b: parseInt(result[3], 16) / 255.0
    } : null;
}
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}
function getRatio(color1luminance, color2luminance) {
    let ratio;
    if (color1luminance > color2luminance) {
        ratio = ((color2luminance + 0.05) / (color1luminance + 0.05));
    }
    else {
        ratio = ((color1luminance + 0.05) / (color2luminance + 0.05));
    }
    return ratio;
}
function toPascalCase(string) {
    return `${string}`
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(new RegExp(/\s+(.)(\w+)/, 'g'), ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`)
        .replace(new RegExp(/\s/, 'g'), '')
        .replace(new RegExp(/\w/), s => s.toUpperCase());
}
const getNameParts = (name) => {
    const nameParts = name.split('/').filter((part) => !!part);
    return nameParts.map((part) => part.trim());
};
const getNamePrefix = (name) => {
    const pathParts = getNameParts(name);
    pathParts.pop();
    return pathParts.join('/');
};

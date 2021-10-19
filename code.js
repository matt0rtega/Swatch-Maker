// This shows the HTML page in "ui.html".
figma.showUI(__html__);
figma.loadFontAsync({ family: "Roboto", style: "Regular" });
// This is the font i want to set my text style to.
// it seems that this promise never resolves (or errors).
const white = { r: 1, g: 1, b: 1 };
const black = { r: 0, g: 0, b: 0 };
const list = figma.listAvailableFontsAsync();
console.log(list);
// var _styleDictionary = {
//   "color": {
//     "light": {
//       "base": {
//         "blue_400": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.56078",
//             "blue": "1.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#008FFF"
//           },
//           "name": "blue_400",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "blue_400"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "blue_400"
//           ]
//         },
//         "blue_500": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.52549",
//             "blue": "0.93725",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#0086EF"
//           },
//           "name": "blue_500",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "blue_500"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "blue_500"
//           ]
//         },
//         "blue_600": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.49020",
//             "blue": "0.87451",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#007DDF"
//           },
//           "name": "blue_600",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "blue_600"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "blue_600"
//           ]
//         },
//         "blue_700": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.45490",
//             "blue": "0.81176",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#0074CF"
//           },
//           "name": "blue_700",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "blue_700"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "blue_700"
//           ]
//         },
//         "green_400": {
//           "value": {
//             "red": "0.06667",
//             "green": "0.65882",
//             "blue": "0.37255",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#11A85F"
//           },
//           "name": "green_400",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "green_400"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "green_400"
//           ]
//         },
//         "green_500": {
//           "value": {
//             "red": "0.07451",
//             "green": "0.72941",
//             "blue": "0.41176",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#13BA69"
//           },
//           "name": "green_500",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "green_500"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "green_500"
//           ]
//         },
//         "green_600": {
//           "value": {
//             "red": "0.08235",
//             "green": "0.80392",
//             "blue": "0.45490",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#15CD74"
//           },
//           "name": "green_600",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "green_600"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "green_600"
//           ]
//         },
//         "green_700": {
//           "value": {
//             "red": "0.09020",
//             "green": "0.87451",
//             "blue": "0.49412",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#17DF7E"
//           },
//           "name": "green_700",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "green_700"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "green_700"
//           ]
//         },
//         "red_400": {
//           "value": {
//             "red": "0.84314",
//             "green": "0.25098",
//             "blue": "0.27059",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D74045"
//           },
//           "name": "red_400",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "red_400"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "red_400"
//           ]
//         },
//         "red_500": {
//           "value": {
//             "red": "0.85490",
//             "green": "0.29804",
//             "blue": "0.31765",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#DA4C51"
//           },
//           "name": "red_500",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "red_500"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "red_500"
//           ]
//         },
//         "red_600": {
//           "value": {
//             "red": "0.86275",
//             "green": "0.34510",
//             "blue": "0.36078",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#DC585C"
//           },
//           "name": "red_600",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "red_600"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "red_600"
//           ]
//         },
//         "red_700": {
//           "value": {
//             "red": "0.87451",
//             "green": "0.39216",
//             "blue": "0.40784",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#DF6468"
//           },
//           "name": "red_700",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "red_700"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "red_700"
//           ]
//         },
//         "orange_400": {
//           "value": {
//             "red": "0.81961",
//             "green": "0.44314",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D17100"
//           },
//           "name": "orange_400",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "orange_400"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "orange_400"
//           ]
//         },
//         "orange_500": {
//           "value": {
//             "red": "0.89412",
//             "green": "0.48235",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#E47B00"
//           },
//           "name": "orange_500",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "orange_500"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "orange_500"
//           ]
//         },
//         "orange_600": {
//           "value": {
//             "red": "0.96863",
//             "green": "0.52157",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#F78500"
//           },
//           "name": "orange_600",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "orange_600"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "orange_600"
//           ]
//         },
//         "orange_700": {
//           "value": {
//             "red": "1.00000",
//             "green": "0.56078",
//             "blue": "0.03922",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#FF8F0A"
//           },
//           "name": "orange_700",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "orange_700"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "orange_700"
//           ]
//         },
//         "yellow_400": {
//           "value": {
//             "red": "0.68235",
//             "green": "0.57255",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#AE9200"
//           },
//           "name": "yellow_400",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "yellow_400"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "yellow_400"
//           ]
//         },
//         "yellow_500": {
//           "value": {
//             "red": "0.76471",
//             "green": "0.64314",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#C3A400"
//           },
//           "name": "yellow_500",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "yellow_500"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "yellow_500"
//           ]
//         },
//         "yellow_600": {
//           "value": {
//             "red": "0.84706",
//             "green": "0.71373",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D8B600"
//           },
//           "name": "yellow_600",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "yellow_600"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "yellow_600"
//           ]
//         },
//         "yellow_700": {
//           "value": {
//             "red": "0.92941",
//             "green": "0.78039",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#EDC700"
//           },
//           "name": "yellow_700",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "yellow_700"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "yellow_700"
//           ]
//         },
//         "cyan_400": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.65490",
//             "blue": "0.80000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#00A7CC"
//           },
//           "name": "cyan_400",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "cyan_400"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "cyan_400"
//           ]
//         },
//         "cyan_500": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.71765",
//             "blue": "0.87451",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#00B7DF"
//           },
//           "name": "cyan_500",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "cyan_500"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "cyan_500"
//           ]
//         },
//         "cyan_600": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.77647",
//             "blue": "0.94902",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#00C6F2"
//           },
//           "name": "cyan_600",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "cyan_600"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "cyan_600"
//           ]
//         },
//         "cyan_700": {
//           "value": {
//             "red": "0.02353",
//             "green": "0.82353",
//             "blue": "1.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#06D2FF"
//           },
//           "name": "cyan_700",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "cyan_700"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "cyan_700"
//           ]
//         },
//         "indigo_400": {
//           "value": {
//             "red": "0.32549",
//             "green": "0.45882",
//             "blue": "0.93725",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#5375EF"
//           },
//           "name": "indigo_400",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "indigo_400"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "indigo_400"
//           ]
//         },
//         "indigo_500": {
//           "value": {
//             "red": "0.36863",
//             "green": "0.49412",
//             "blue": "0.94118",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#5E7EF0"
//           },
//           "name": "indigo_500",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "indigo_500"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "indigo_500"
//           ]
//         },
//         "indigo_600": {
//           "value": {
//             "red": "0.41176",
//             "green": "0.52549",
//             "blue": "0.94510",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#6986F1"
//           },
//           "name": "indigo_600",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "indigo_600"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "indigo_600"
//           ]
//         },
//         "indigo_700": {
//           "value": {
//             "red": "0.45098",
//             "green": "0.56078",
//             "blue": "0.94902",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#738FF2"
//           },
//           "name": "indigo_700",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "indigo_700"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "indigo_700"
//           ]
//         },
//         "purple_400": {
//           "value": {
//             "red": "0.59216",
//             "green": "0.32549",
//             "blue": "0.93725",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#9753EF"
//           },
//           "name": "purple_400",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "purple_400"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "purple_400"
//           ]
//         },
//         "purple_500": {
//           "value": {
//             "red": "0.61961",
//             "green": "0.36863",
//             "blue": "0.94118",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#9E5EF0"
//           },
//           "name": "purple_500",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "purple_500"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "purple_500"
//           ]
//         },
//         "purple_600": {
//           "value": {
//             "red": "0.64314",
//             "green": "0.41176",
//             "blue": "0.94510",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#A469F1"
//           },
//           "name": "purple_600",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "purple_600"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "purple_600"
//           ]
//         },
//         "purple_700": {
//           "value": {
//             "red": "0.67059",
//             "green": "0.45098",
//             "blue": "0.94902",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#AB73F2"
//           },
//           "name": "purple_700",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "purple_700"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "purple_700"
//           ]
//         },
//         "pink_400": {
//           "value": {
//             "red": "0.80784",
//             "green": "0.19608",
//             "blue": "0.60000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#CE3299"
//           },
//           "name": "pink_400",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "pink_400"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "pink_400"
//           ]
//         },
//         "pink_500": {
//           "value": {
//             "red": "0.81961",
//             "green": "0.24706",
//             "blue": "0.62353",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D13F9F"
//           },
//           "name": "pink_500",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "pink_500"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "pink_500"
//           ]
//         },
//         "pink_600": {
//           "value": {
//             "red": "0.83137",
//             "green": "0.29804",
//             "blue": "0.65098",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D44CA6"
//           },
//           "name": "pink_600",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "pink_600"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "pink_600"
//           ]
//         },
//         "pink_700": {
//           "value": {
//             "red": "0.84314",
//             "green": "0.34510",
//             "blue": "0.67451",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D758AC"
//           },
//           "name": "pink_700",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "pink_700"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "pink_700"
//           ]
//         },
//         "gray_25": {
//           "value": {
//             "red": "0.91765",
//             "green": "0.91765",
//             "blue": "0.91765",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#EAEAEA"
//           },
//           "name": "gray_25",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "gray_25"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "gray_25"
//           ]
//         },
//         "gray_50": {
//           "value": {
//             "red": "0.83529",
//             "green": "0.83529",
//             "blue": "0.83529",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D5D5D5"
//           },
//           "name": "gray_50",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "gray_50"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "gray_50"
//           ]
//         },
//         "gray_100": {
//           "value": {
//             "red": "0.74902",
//             "green": "0.74902",
//             "blue": "0.74902",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#BFBFBF"
//           },
//           "name": "gray_100",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "gray_100"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "gray_100"
//           ]
//         },
//         "gray_200": {
//           "value": {
//             "red": "0.66667",
//             "green": "0.66667",
//             "blue": "0.66667",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#AAAAAA"
//           },
//           "name": "gray_200",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "gray_200"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "gray_200"
//           ]
//         },
//         "gray_300": {
//           "value": {
//             "red": "0.58431",
//             "green": "0.58431",
//             "blue": "0.58431",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#959595"
//           },
//           "name": "gray_300",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "gray_300"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "gray_300"
//           ]
//         },
//         "gray_400": {
//           "value": {
//             "red": "0.50196",
//             "green": "0.50196",
//             "blue": "0.50196",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#808080"
//           },
//           "name": "gray_400",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "gray_400"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "gray_400"
//           ]
//         },
//         "gray_500": {
//           "value": {
//             "red": "0.41569",
//             "green": "0.41569",
//             "blue": "0.41569",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#6A6A6A"
//           },
//           "name": "gray_500",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "gray_500"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "gray_500"
//           ]
//         },
//         "gray_600": {
//           "value": {
//             "red": "0.33333",
//             "green": "0.33333",
//             "blue": "0.33333",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#555555"
//           },
//           "name": "gray_600",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "gray_600"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "gray_600"
//           ]
//         },
//         "gray_700": {
//           "value": {
//             "red": "0.25098",
//             "green": "0.25098",
//             "blue": "0.25098",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#404040"
//           },
//           "name": "gray_700",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "gray_700"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "gray_700"
//           ]
//         },
//         "gray_800": {
//           "value": {
//             "red": "0.16863",
//             "green": "0.16863",
//             "blue": "0.16863",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#2B2B2B"
//           },
//           "name": "gray_800",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "gray_800"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "gray_800"
//           ]
//         },
//         "gray_900": {
//           "value": {
//             "red": "0.08235",
//             "green": "0.08235",
//             "blue": "0.08235",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#151515"
//           },
//           "name": "gray_900",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "base",
//             "subitem": "gray_900"
//           },
//           "path": [
//             "color",
//             "light",
//             "base",
//             "gray_900"
//           ]
//         }
//       },
//       "semantic": {
//         "positive": {
//           "value": {
//             "red": "0.06667",
//             "green": "0.65882",
//             "blue": "0.37255",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#11A85F"
//           },
//           "name": "positive",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "semantic",
//             "subitem": "positive"
//           },
//           "path": [
//             "color",
//             "light",
//             "semantic",
//             "positive"
//           ]
//         },
//         "warning": {
//           "value": {
//             "red": "0.81961",
//             "green": "0.44314",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D17100"
//           },
//           "name": "warning",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "semantic",
//             "subitem": "warning"
//           },
//           "path": [
//             "color",
//             "light",
//             "semantic",
//             "warning"
//           ]
//         },
//         "negative": {
//           "value": {
//             "red": "0.81961",
//             "green": "0.00000",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D10000"
//           },
//           "name": "negative",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "semantic",
//             "subitem": "negative"
//           },
//           "path": [
//             "color",
//             "light",
//             "semantic",
//             "negative"
//           ]
//         },
//         "informative": {
//           "value": {
//             "red": "0.03137",
//             "green": "0.57255",
//             "blue": "1.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#0892FF"
//           },
//           "name": "informative",
//           "attributes": {
//             "category": "color",
//             "type": "light",
//             "item": "semantic",
//             "subitem": "informative"
//           },
//           "path": [
//             "color",
//             "light",
//             "semantic",
//             "informative"
//           ]
//         }
//       },
//       "highlights": {}
//     },
//     "static": {
//       "base": {
//         "blue_400": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.56078",
//             "blue": "1.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#008FFF"
//           },
//           "name": "blue_400",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "blue_400"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "blue_400"
//           ]
//         },
//         "blue_500": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.52549",
//             "blue": "0.93725",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#0086EF"
//           },
//           "name": "blue_500",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "blue_500"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "blue_500"
//           ]
//         },
//         "blue_600": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.49020",
//             "blue": "0.87451",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#007DDF"
//           },
//           "name": "blue_600",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "blue_600"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "blue_600"
//           ]
//         },
//         "blue_700": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.45490",
//             "blue": "0.81176",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#0074CF"
//           },
//           "name": "blue_700",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "blue_700"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "blue_700"
//           ]
//         },
//         "green_400": {
//           "value": {
//             "red": "0.06667",
//             "green": "0.65882",
//             "blue": "0.37255",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#11A85F"
//           },
//           "name": "green_400",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "green_400"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "green_400"
//           ]
//         },
//         "green_500": {
//           "value": {
//             "red": "0.07451",
//             "green": "0.72941",
//             "blue": "0.41176",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#13BA69"
//           },
//           "name": "green_500",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "green_500"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "green_500"
//           ]
//         },
//         "green_600": {
//           "value": {
//             "red": "0.08235",
//             "green": "0.80392",
//             "blue": "0.45490",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#15CD74"
//           },
//           "name": "green_600",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "green_600"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "green_600"
//           ]
//         },
//         "green_700": {
//           "value": {
//             "red": "0.09020",
//             "green": "0.87451",
//             "blue": "0.49412",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#17DF7E"
//           },
//           "name": "green_700",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "green_700"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "green_700"
//           ]
//         },
//         "red_400": {
//           "value": {
//             "red": "0.84314",
//             "green": "0.25098",
//             "blue": "0.27059",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D74045"
//           },
//           "name": "red_400",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "red_400"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "red_400"
//           ]
//         },
//         "red_500": {
//           "value": {
//             "red": "0.85490",
//             "green": "0.29804",
//             "blue": "0.31765",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#DA4C51"
//           },
//           "name": "red_500",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "red_500"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "red_500"
//           ]
//         },
//         "red_600": {
//           "value": {
//             "red": "0.86275",
//             "green": "0.34510",
//             "blue": "0.36078",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#DC585C"
//           },
//           "name": "red_600",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "red_600"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "red_600"
//           ]
//         },
//         "red_700": {
//           "value": {
//             "red": "0.87451",
//             "green": "0.39216",
//             "blue": "0.40784",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#DF6468"
//           },
//           "name": "red_700",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "red_700"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "red_700"
//           ]
//         },
//         "orange_400": {
//           "value": {
//             "red": "0.81961",
//             "green": "0.44314",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D17100"
//           },
//           "name": "orange_400",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "orange_400"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "orange_400"
//           ]
//         },
//         "orange_500": {
//           "value": {
//             "red": "0.89412",
//             "green": "0.48235",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#E47B00"
//           },
//           "name": "orange_500",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "orange_500"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "orange_500"
//           ]
//         },
//         "orange_600": {
//           "value": {
//             "red": "0.96863",
//             "green": "0.52157",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#F78500"
//           },
//           "name": "orange_600",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "orange_600"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "orange_600"
//           ]
//         },
//         "orange_700": {
//           "value": {
//             "red": "1.00000",
//             "green": "0.56078",
//             "blue": "0.03922",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#FF8F0A"
//           },
//           "name": "orange_700",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "orange_700"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "orange_700"
//           ]
//         },
//         "yellow_400": {
//           "value": {
//             "red": "0.68235",
//             "green": "0.57255",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#AE9200"
//           },
//           "name": "yellow_400",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "yellow_400"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "yellow_400"
//           ]
//         },
//         "yellow_500": {
//           "value": {
//             "red": "0.76471",
//             "green": "0.64314",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#C3A400"
//           },
//           "name": "yellow_500",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "yellow_500"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "yellow_500"
//           ]
//         },
//         "yellow_600": {
//           "value": {
//             "red": "0.84706",
//             "green": "0.71373",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D8B600"
//           },
//           "name": "yellow_600",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "yellow_600"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "yellow_600"
//           ]
//         },
//         "yellow_700": {
//           "value": {
//             "red": "0.92941",
//             "green": "0.78039",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#EDC700"
//           },
//           "name": "yellow_700",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "yellow_700"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "yellow_700"
//           ]
//         },
//         "cyan_400": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.65490",
//             "blue": "0.80000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#00A7CC"
//           },
//           "name": "cyan_400",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "cyan_400"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "cyan_400"
//           ]
//         },
//         "cyan_500": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.71765",
//             "blue": "0.87451",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#00B7DF"
//           },
//           "name": "cyan_500",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "cyan_500"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "cyan_500"
//           ]
//         },
//         "cyan_600": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.77647",
//             "blue": "0.94902",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#00C6F2"
//           },
//           "name": "cyan_600",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "cyan_600"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "cyan_600"
//           ]
//         },
//         "cyan_700": {
//           "value": {
//             "red": "0.02353",
//             "green": "0.82353",
//             "blue": "1.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#06D2FF"
//           },
//           "name": "cyan_700",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "cyan_700"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "cyan_700"
//           ]
//         },
//         "indigo_400": {
//           "value": {
//             "red": "0.32549",
//             "green": "0.45882",
//             "blue": "0.93725",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#5375EF"
//           },
//           "name": "indigo_400",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "indigo_400"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "indigo_400"
//           ]
//         },
//         "indigo_500": {
//           "value": {
//             "red": "0.36863",
//             "green": "0.49412",
//             "blue": "0.94118",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#5E7EF0"
//           },
//           "name": "indigo_500",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "indigo_500"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "indigo_500"
//           ]
//         },
//         "indigo_600": {
//           "value": {
//             "red": "0.41176",
//             "green": "0.52549",
//             "blue": "0.94510",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#6986F1"
//           },
//           "name": "indigo_600",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "indigo_600"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "indigo_600"
//           ]
//         },
//         "indigo_700": {
//           "value": {
//             "red": "0.45098",
//             "green": "0.56078",
//             "blue": "0.94902",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#738FF2"
//           },
//           "name": "indigo_700",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "indigo_700"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "indigo_700"
//           ]
//         },
//         "purple_400": {
//           "value": {
//             "red": "0.59216",
//             "green": "0.32549",
//             "blue": "0.93725",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#9753EF"
//           },
//           "name": "purple_400",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "purple_400"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "purple_400"
//           ]
//         },
//         "purple_500": {
//           "value": {
//             "red": "0.61961",
//             "green": "0.36863",
//             "blue": "0.94118",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#9E5EF0"
//           },
//           "name": "purple_500",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "purple_500"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "purple_500"
//           ]
//         },
//         "purple_600": {
//           "value": {
//             "red": "0.64314",
//             "green": "0.41176",
//             "blue": "0.94510",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#A469F1"
//           },
//           "name": "purple_600",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "purple_600"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "purple_600"
//           ]
//         },
//         "purple_700": {
//           "value": {
//             "red": "0.67059",
//             "green": "0.45098",
//             "blue": "0.94902",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#AB73F2"
//           },
//           "name": "purple_700",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "purple_700"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "purple_700"
//           ]
//         },
//         "pink_400": {
//           "value": {
//             "red": "0.80784",
//             "green": "0.19608",
//             "blue": "0.60000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#CE3299"
//           },
//           "name": "pink_400",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "pink_400"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "pink_400"
//           ]
//         },
//         "pink_500": {
//           "value": {
//             "red": "0.81961",
//             "green": "0.24706",
//             "blue": "0.62353",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D13F9F"
//           },
//           "name": "pink_500",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "pink_500"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "pink_500"
//           ]
//         },
//         "pink_600": {
//           "value": {
//             "red": "0.83137",
//             "green": "0.29804",
//             "blue": "0.65098",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D44CA6"
//           },
//           "name": "pink_600",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "pink_600"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "pink_600"
//           ]
//         },
//         "pink_700": {
//           "value": {
//             "red": "0.84314",
//             "green": "0.34510",
//             "blue": "0.67451",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D758AC"
//           },
//           "name": "pink_700",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "pink_700"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "pink_700"
//           ]
//         },
//         "gray_25": {
//           "value": {
//             "red": "0.91765",
//             "green": "0.91765",
//             "blue": "0.91765",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#EAEAEA"
//           },
//           "name": "gray_25",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "gray_25"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "gray_25"
//           ]
//         },
//         "gray_50": {
//           "value": {
//             "red": "0.83529",
//             "green": "0.83529",
//             "blue": "0.83529",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D5D5D5"
//           },
//           "name": "gray_50",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "gray_50"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "gray_50"
//           ]
//         },
//         "gray_100": {
//           "value": {
//             "red": "0.74902",
//             "green": "0.74902",
//             "blue": "0.74902",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#BFBFBF"
//           },
//           "name": "gray_100",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "gray_100"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "gray_100"
//           ]
//         },
//         "gray_200": {
//           "value": {
//             "red": "0.66667",
//             "green": "0.66667",
//             "blue": "0.66667",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#AAAAAA"
//           },
//           "name": "gray_200",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "gray_200"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "gray_200"
//           ]
//         },
//         "gray_300": {
//           "value": {
//             "red": "0.58431",
//             "green": "0.58431",
//             "blue": "0.58431",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#959595"
//           },
//           "name": "gray_300",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "gray_300"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "gray_300"
//           ]
//         },
//         "gray_400": {
//           "value": {
//             "red": "0.50196",
//             "green": "0.50196",
//             "blue": "0.50196",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#808080"
//           },
//           "name": "gray_400",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "gray_400"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "gray_400"
//           ]
//         },
//         "gray_500": {
//           "value": {
//             "red": "0.41569",
//             "green": "0.41569",
//             "blue": "0.41569",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#6A6A6A"
//           },
//           "name": "gray_500",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "gray_500"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "gray_500"
//           ]
//         },
//         "gray_600": {
//           "value": {
//             "red": "0.33333",
//             "green": "0.33333",
//             "blue": "0.33333",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#555555"
//           },
//           "name": "gray_600",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "gray_600"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "gray_600"
//           ]
//         },
//         "gray_700": {
//           "value": {
//             "red": "0.25098",
//             "green": "0.25098",
//             "blue": "0.25098",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#404040"
//           },
//           "name": "gray_700",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "gray_700"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "gray_700"
//           ]
//         },
//         "gray_800": {
//           "value": {
//             "red": "0.16863",
//             "green": "0.16863",
//             "blue": "0.16863",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#2B2B2B"
//           },
//           "name": "gray_800",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "gray_800"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "gray_800"
//           ]
//         },
//         "gray_900": {
//           "value": {
//             "red": "0.08235",
//             "green": "0.08235",
//             "blue": "0.08235",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#151515"
//           },
//           "name": "gray_900",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "gray_900"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "gray_900"
//           ]
//         },
//         "white": {
//           "value": {
//             "red": "1.00000",
//             "green": "1.00000",
//             "blue": "1.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#FFFFFF"
//           },
//           "name": "white",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "white"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "white"
//           ]
//         },
//         "black": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.00000",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#000000"
//           },
//           "name": "black",
//           "attributes": {
//             "category": "color",
//             "type": "static",
//             "item": "base",
//             "subitem": "black"
//           },
//           "path": [
//             "color",
//             "static",
//             "base",
//             "black"
//           ]
//         }
//       }
//     },
//     "dark": {
//       "base": {
//         "blue_400": {
//           "value": {
//             "red": "0.03137",
//             "green": "0.57255",
//             "blue": "1.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#0892FF"
//           },
//           "name": "blue_400",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "blue_400"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "blue_400"
//           ]
//         },
//         "blue_500": {
//           "value": {
//             "red": "0.09020",
//             "green": "0.60000",
//             "blue": "1.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#1799FF"
//           },
//           "name": "blue_500",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "blue_500"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "blue_500"
//           ]
//         },
//         "blue_600": {
//           "value": {
//             "red": "0.15294",
//             "green": "0.62745",
//             "blue": "1.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#27A0FF"
//           },
//           "name": "blue_600",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "blue_600"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "blue_600"
//           ]
//         },
//         "blue_700": {
//           "value": {
//             "red": "0.21176",
//             "green": "0.65098",
//             "blue": "1.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#36A6FF"
//           },
//           "name": "blue_700",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "blue_700"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "blue_700"
//           ]
//         },
//         "green_400": {
//           "value": {
//             "red": "0.06667",
//             "green": "0.65882",
//             "blue": "0.37255",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#11A85F"
//           },
//           "name": "green_400",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "green_400"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "green_400"
//           ]
//         },
//         "green_500": {
//           "value": {
//             "red": "0.07451",
//             "green": "0.72941",
//             "blue": "0.41176",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#13BA69"
//           },
//           "name": "green_500",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "green_500"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "green_500"
//           ]
//         },
//         "green_600": {
//           "value": {
//             "red": "0.08235",
//             "green": "0.80392",
//             "blue": "0.45490",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#15CD74"
//           },
//           "name": "green_600",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "green_600"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "green_600"
//           ]
//         },
//         "green_700": {
//           "value": {
//             "red": "0.09020",
//             "green": "0.87451",
//             "blue": "0.49412",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#17DF7E"
//           },
//           "name": "green_700",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "green_700"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "green_700"
//           ]
//         },
//         "red_400": {
//           "value": {
//             "red": "0.84314",
//             "green": "0.25098",
//             "blue": "0.27059",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D74045"
//           },
//           "name": "red_400",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "red_400"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "red_400"
//           ]
//         },
//         "red_500": {
//           "value": {
//             "red": "0.85490",
//             "green": "0.29804",
//             "blue": "0.31765",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#DA4C51"
//           },
//           "name": "red_500",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "red_500"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "red_500"
//           ]
//         },
//         "red_600": {
//           "value": {
//             "red": "0.86275",
//             "green": "0.34510",
//             "blue": "0.36078",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#DC585C"
//           },
//           "name": "red_600",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "red_600"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "red_600"
//           ]
//         },
//         "red_700": {
//           "value": {
//             "red": "0.87451",
//             "green": "0.39216",
//             "blue": "0.40784",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#DF6468"
//           },
//           "name": "red_700",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "red_700"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "red_700"
//           ]
//         },
//         "orange_400": {
//           "value": {
//             "red": "0.81961",
//             "green": "0.44314",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D17100"
//           },
//           "name": "orange_400",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "orange_400"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "orange_400"
//           ]
//         },
//         "orange_500": {
//           "value": {
//             "red": "0.89412",
//             "green": "0.48235",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#E47B00"
//           },
//           "name": "orange_500",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "orange_500"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "orange_500"
//           ]
//         },
//         "orange_600": {
//           "value": {
//             "red": "0.96863",
//             "green": "0.52157",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#F78500"
//           },
//           "name": "orange_600",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "orange_600"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "orange_600"
//           ]
//         },
//         "orange_700": {
//           "value": {
//             "red": "1.00000",
//             "green": "0.56078",
//             "blue": "0.03922",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#FF8F0A"
//           },
//           "name": "orange_700",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "orange_700"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "orange_700"
//           ]
//         },
//         "yellow_400": {
//           "value": {
//             "red": "0.68235",
//             "green": "0.57255",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#AE9200"
//           },
//           "name": "yellow_400",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "yellow_400"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "yellow_400"
//           ]
//         },
//         "yellow_500": {
//           "value": {
//             "red": "0.76471",
//             "green": "0.64314",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#C3A400"
//           },
//           "name": "yellow_500",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "yellow_500"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "yellow_500"
//           ]
//         },
//         "yellow_600": {
//           "value": {
//             "red": "0.84706",
//             "green": "0.71373",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D8B600"
//           },
//           "name": "yellow_600",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "yellow_600"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "yellow_600"
//           ]
//         },
//         "yellow_700": {
//           "value": {
//             "red": "0.92941",
//             "green": "0.78039",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#EDC700"
//           },
//           "name": "yellow_700",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "yellow_700"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "yellow_700"
//           ]
//         },
//         "cyan_400": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.65490",
//             "blue": "0.80000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#00A7CC"
//           },
//           "name": "cyan_400",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "cyan_400"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "cyan_400"
//           ]
//         },
//         "cyan_500": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.71765",
//             "blue": "0.87451",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#00B7DF"
//           },
//           "name": "cyan_500",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "cyan_500"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "cyan_500"
//           ]
//         },
//         "cyan_600": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.77647",
//             "blue": "0.94902",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#00C6F2"
//           },
//           "name": "cyan_600",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "cyan_600"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "cyan_600"
//           ]
//         },
//         "cyan_700": {
//           "value": {
//             "red": "0.02353",
//             "green": "0.82353",
//             "blue": "1.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#06D2FF"
//           },
//           "name": "cyan_700",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "cyan_700"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "cyan_700"
//           ]
//         },
//         "indigo_400": {
//           "value": {
//             "red": "0.32549",
//             "green": "0.45882",
//             "blue": "0.93725",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#5375EF"
//           },
//           "name": "indigo_400",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "indigo_400"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "indigo_400"
//           ]
//         },
//         "indigo_500": {
//           "value": {
//             "red": "0.36863",
//             "green": "0.49412",
//             "blue": "0.94118",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#5E7EF0"
//           },
//           "name": "indigo_500",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "indigo_500"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "indigo_500"
//           ]
//         },
//         "indigo_600": {
//           "value": {
//             "red": "0.41176",
//             "green": "0.52549",
//             "blue": "0.94510",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#6986F1"
//           },
//           "name": "indigo_600",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "indigo_600"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "indigo_600"
//           ]
//         },
//         "indigo_700": {
//           "value": {
//             "red": "0.45098",
//             "green": "0.56078",
//             "blue": "0.94902",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#738FF2"
//           },
//           "name": "indigo_700",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "indigo_700"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "indigo_700"
//           ]
//         },
//         "purple_400": {
//           "value": {
//             "red": "0.59216",
//             "green": "0.32549",
//             "blue": "0.93725",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#9753EF"
//           },
//           "name": "purple_400",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "purple_400"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "purple_400"
//           ]
//         },
//         "purple_500": {
//           "value": {
//             "red": "0.61961",
//             "green": "0.36863",
//             "blue": "0.94118",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#9E5EF0"
//           },
//           "name": "purple_500",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "purple_500"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "purple_500"
//           ]
//         },
//         "purple_600": {
//           "value": {
//             "red": "0.64314",
//             "green": "0.41176",
//             "blue": "0.94510",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#A469F1"
//           },
//           "name": "purple_600",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "purple_600"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "purple_600"
//           ]
//         },
//         "purple_700": {
//           "value": {
//             "red": "0.67059",
//             "green": "0.45098",
//             "blue": "0.94902",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#AB73F2"
//           },
//           "name": "purple_700",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "purple_700"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "purple_700"
//           ]
//         },
//         "pink_400": {
//           "value": {
//             "red": "0.80784",
//             "green": "0.19608",
//             "blue": "0.60000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#CE3299"
//           },
//           "name": "pink_400",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "pink_400"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "pink_400"
//           ]
//         },
//         "pink_500": {
//           "value": {
//             "red": "0.81961",
//             "green": "0.24706",
//             "blue": "0.62353",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D13F9F"
//           },
//           "name": "pink_500",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "pink_500"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "pink_500"
//           ]
//         },
//         "pink_600": {
//           "value": {
//             "red": "0.83137",
//             "green": "0.29804",
//             "blue": "0.65098",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D44CA6"
//           },
//           "name": "pink_600",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "pink_600"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "pink_600"
//           ]
//         },
//         "pink_700": {
//           "value": {
//             "red": "0.84314",
//             "green": "0.34510",
//             "blue": "0.67451",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D758AC"
//           },
//           "name": "pink_700",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "pink_700"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "pink_700"
//           ]
//         },
//         "gray_25": {
//           "value": {
//             "red": "0.08235",
//             "green": "0.08235",
//             "blue": "0.08235",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#151515"
//           },
//           "name": "gray_25",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "gray_25"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "gray_25"
//           ]
//         },
//         "gray_50": {
//           "value": {
//             "red": "0.16863",
//             "green": "0.16863",
//             "blue": "0.16863",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#2B2B2B"
//           },
//           "name": "gray_50",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "gray_50"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "gray_50"
//           ]
//         },
//         "gray_100": {
//           "value": {
//             "red": "0.25098",
//             "green": "0.25098",
//             "blue": "0.25098",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#404040"
//           },
//           "name": "gray_100",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "gray_100"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "gray_100"
//           ]
//         },
//         "gray_200": {
//           "value": {
//             "red": "0.33333",
//             "green": "0.33333",
//             "blue": "0.33333",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#555555"
//           },
//           "name": "gray_200",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "gray_200"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "gray_200"
//           ]
//         },
//         "gray_300": {
//           "value": {
//             "red": "0.41569",
//             "green": "0.41569",
//             "blue": "0.41569",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#6A6A6A"
//           },
//           "name": "gray_300",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "gray_300"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "gray_300"
//           ]
//         },
//         "gray_400": {
//           "value": {
//             "red": "0.50196",
//             "green": "0.50196",
//             "blue": "0.50196",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#808080"
//           },
//           "name": "gray_400",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "gray_400"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "gray_400"
//           ]
//         },
//         "gray_500": {
//           "value": {
//             "red": "0.58431",
//             "green": "0.58431",
//             "blue": "0.58431",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#959595"
//           },
//           "name": "gray_500",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "gray_500"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "gray_500"
//           ]
//         },
//         "gray_600": {
//           "value": {
//             "red": "0.66667",
//             "green": "0.66667",
//             "blue": "0.66667",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#AAAAAA"
//           },
//           "name": "gray_600",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "gray_600"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "gray_600"
//           ]
//         },
//         "gray_700": {
//           "value": {
//             "red": "0.74902",
//             "green": "0.74902",
//             "blue": "0.74902",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#BFBFBF"
//           },
//           "name": "gray_700",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "gray_700"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "gray_700"
//           ]
//         },
//         "gray_800": {
//           "value": {
//             "red": "0.83529",
//             "green": "0.83529",
//             "blue": "0.83529",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D5D5D5"
//           },
//           "name": "gray_800",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "gray_800"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "gray_800"
//           ]
//         },
//         "gray_900": {
//           "value": {
//             "red": "0.91765",
//             "green": "0.91765",
//             "blue": "0.91765",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#EAEAEA"
//           },
//           "name": "gray_900",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "base",
//             "subitem": "gray_900"
//           },
//           "path": [
//             "color",
//             "dark",
//             "base",
//             "gray_900"
//           ]
//         }
//       },
//       "semantic": {
//         "positive": {
//           "value": {
//             "red": "0.06667",
//             "green": "0.65882",
//             "blue": "0.37255",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#11A85F"
//           },
//           "name": "positive",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "semantic",
//             "subitem": "positive"
//           },
//           "path": [
//             "color",
//             "dark",
//             "semantic",
//             "positive"
//           ]
//         },
//         "warning": {
//           "value": {
//             "red": "0.81961",
//             "green": "0.44314",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D17100"
//           },
//           "name": "warning",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "semantic",
//             "subitem": "warning"
//           },
//           "path": [
//             "color",
//             "dark",
//             "semantic",
//             "warning"
//           ]
//         },
//         "negative": {
//           "value": {
//             "red": "0.81961",
//             "green": "0.00000",
//             "blue": "0.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#D10000"
//           },
//           "name": "negative",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "semantic",
//             "subitem": "negative"
//           },
//           "path": [
//             "color",
//             "dark",
//             "semantic",
//             "negative"
//           ]
//         },
//         "informative": {
//           "value": {
//             "red": "0.03137",
//             "green": "0.57255",
//             "blue": "1.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#0892FF"
//           },
//           "name": "informative",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "semantic",
//             "subitem": "informative"
//           },
//           "path": [
//             "color",
//             "dark",
//             "semantic",
//             "informative"
//           ]
//         }
//       },
//       "text": {
//         "primary": {
//           "value": {
//             "red": "0.50196",
//             "green": "0.50196",
//             "blue": "0.50196",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.dark.base.gray_400.value}"
//           },
//           "name": "primary",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "text",
//             "subitem": "primary"
//           },
//           "path": [
//             "color",
//             "dark",
//             "text",
//             "primary"
//           ]
//         },
//         "secondary": {
//           "value": {
//             "red": "0.58431",
//             "green": "0.58431",
//             "blue": "0.58431",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.dark.base.gray_500.value}"
//           },
//           "name": "secondary",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "text",
//             "subitem": "secondary"
//           },
//           "path": [
//             "color",
//             "dark",
//             "text",
//             "secondary"
//           ]
//         },
//         "disabled": {
//           "value": {
//             "red": "0.41569",
//             "green": "0.41569",
//             "blue": "0.41569",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.dark.base.gray_300.value}"
//           },
//           "name": "disabled",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "text",
//             "subitem": "disabled"
//           },
//           "path": [
//             "color",
//             "dark",
//             "text",
//             "disabled"
//           ]
//         }
//       },
//       "controls": {
//         "default": {
//           "value": {
//             "red": "0.16863",
//             "green": "0.16863",
//             "blue": "0.16863",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.dark.base.gray_50.value}"
//           },
//           "name": "default",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "controls",
//             "subitem": "default"
//           },
//           "path": [
//             "color",
//             "dark",
//             "controls",
//             "default"
//           ]
//         },
//         "hover": {
//           "value": {
//             "red": "0.15686",
//             "green": "0.15686",
//             "blue": "0.15686",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#282828"
//           },
//           "name": "hover",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "controls",
//             "subitem": "hover"
//           },
//           "path": [
//             "color",
//             "dark",
//             "controls",
//             "hover"
//           ]
//         },
//         "active": {
//           "value": {
//             "red": "0.13725",
//             "green": "0.13725",
//             "blue": "0.13725",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#232323"
//           },
//           "name": "active",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "controls",
//             "subitem": "active"
//           },
//           "path": [
//             "color",
//             "dark",
//             "controls",
//             "active"
//           ]
//         },
//         "focused": {
//           "value": {
//             "red": "0.16863",
//             "green": "0.16863",
//             "blue": "0.16863",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.dark.base.gray_50.value}"
//           },
//           "name": "focused",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "controls",
//             "subitem": "focused"
//           },
//           "path": [
//             "color",
//             "dark",
//             "controls",
//             "focused"
//           ]
//         },
//         "disabled": {
//           "value": {
//             "red": "0.13725",
//             "green": "0.13725",
//             "blue": "0.13725",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#232323"
//           },
//           "name": "disabled",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "controls",
//             "subitem": "disabled"
//           },
//           "path": [
//             "color",
//             "dark",
//             "controls",
//             "disabled"
//           ]
//         },
//         "border_default": {
//           "value": {
//             "red": "0.25098",
//             "green": "0.25098",
//             "blue": "0.25098",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.dark.base.gray_100.value}"
//           },
//           "name": "border_default",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "controls",
//             "subitem": "border_default"
//           },
//           "path": [
//             "color",
//             "dark",
//             "controls",
//             "border_default"
//           ]
//         },
//         "border_hover": {
//           "value": {
//             "red": "0.33333",
//             "green": "0.33333",
//             "blue": "0.33333",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.dark.base.gray_200.value}"
//           },
//           "name": "border_hover",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "controls",
//             "subitem": "border_hover"
//           },
//           "path": [
//             "color",
//             "dark",
//             "controls",
//             "border_hover"
//           ]
//         },
//         "border_pressed": {
//           "value": {
//             "red": "0.33333",
//             "green": "0.33333",
//             "blue": "0.33333",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.dark.base.gray_200.value}"
//           },
//           "name": "border_pressed",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "controls",
//             "subitem": "border_pressed"
//           },
//           "path": [
//             "color",
//             "dark",
//             "controls",
//             "border_pressed"
//           ]
//         },
//         "border_disabled": {
//           "value": {
//             "red": "0.16863",
//             "green": "0.16863",
//             "blue": "0.16863",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.dark.base.gray_50.value}"
//           },
//           "name": "border_disabled",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "controls",
//             "subitem": "border_disabled"
//           },
//           "path": [
//             "color",
//             "dark",
//             "controls",
//             "border_disabled"
//           ]
//         }
//       },
//       "background": {
//         "inspector": {
//           "value": {
//             "red": "0.08235",
//             "green": "0.08235",
//             "blue": "0.08235",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.dark.base.gray_25.value}"
//           },
//           "name": "inspector",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "background",
//             "subitem": "inspector"
//           },
//           "path": [
//             "color",
//             "dark",
//             "background",
//             "inspector"
//           ]
//         },
//         "flyout": {
//           "value": {
//             "red": "0.16863",
//             "green": "0.16863",
//             "blue": "0.16863",
//             "alpha": 0.75
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "rgba(43, 43, 43, 0.75)"
//           },
//           "name": "flyout",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "background",
//             "subitem": "flyout"
//           },
//           "path": [
//             "color",
//             "dark",
//             "background",
//             "flyout"
//           ]
//         },
//         "modal": {
//           "value": {
//             "red": "0.16863",
//             "green": "0.16863",
//             "blue": "0.16863",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#2B2B2B"
//           },
//           "name": "modal",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "background",
//             "subitem": "modal"
//           },
//           "path": [
//             "color",
//             "dark",
//             "background",
//             "modal"
//           ]
//         },
//         "tooltip": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.00000",
//             "blue": "0.00000",
//             "alpha": 0.75
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "rgba(0, 0, 0, 0.75)"
//           },
//           "name": "tooltip",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "background",
//             "subitem": "tooltip"
//           },
//           "path": [
//             "color",
//             "dark",
//             "background",
//             "tooltip"
//           ]
//         },
//         "toolbar": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.00000",
//             "blue": "0.00000",
//             "alpha": 0.25
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "rgba(0, 0, 0, 0.25)"
//           },
//           "name": "toolbar",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "background",
//             "subitem": "toolbar"
//           },
//           "path": [
//             "color",
//             "dark",
//             "background",
//             "toolbar"
//           ]
//         },
//         "toolbar_75": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.00000",
//             "blue": "0.00000",
//             "alpha": 0.75
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "rgba(0, 0, 0, 0.75)"
//           },
//           "name": "toolbar_75",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "background",
//             "subitem": "toolbar_75"
//           },
//           "path": [
//             "color",
//             "dark",
//             "background",
//             "toolbar_75"
//           ]
//         }
//       },
//       "highlight": {
//         "default": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.56078",
//             "blue": "1.00000",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.static.base.blue_400.value}"
//           },
//           "name": "default",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "highlight",
//             "subitem": "default"
//           },
//           "path": [
//             "color",
//             "dark",
//             "highlight",
//             "default"
//           ]
//         },
//         "hover": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.52549",
//             "blue": "0.93725",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.static.base.blue_500.value}"
//           },
//           "name": "hover",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "highlight",
//             "subitem": "hover"
//           },
//           "path": [
//             "color",
//             "dark",
//             "highlight",
//             "hover"
//           ]
//         },
//         "active": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.45490",
//             "blue": "0.81176",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.static.base.blue_700.value}"
//           },
//           "name": "active",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "highlight",
//             "subitem": "active"
//           },
//           "path": [
//             "color",
//             "dark",
//             "highlight",
//             "active"
//           ]
//         },
//         "focus": {
//           "value": {
//             "red": "0.21176",
//             "green": "0.65098",
//             "blue": "1.00000",
//             "alpha": 0.75
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "rgba(54, 166, 255, 0.75)"
//           },
//           "name": "focus",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "highlight",
//             "subitem": "focus"
//           },
//           "path": [
//             "color",
//             "dark",
//             "highlight",
//             "focus"
//           ]
//         },
//         "ghosted": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.52549",
//             "blue": "0.93725",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.static.base.blue_500.value}"
//           },
//           "name": "ghosted",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "highlight",
//             "subitem": "ghosted"
//           },
//           "path": [
//             "color",
//             "dark",
//             "highlight",
//             "ghosted"
//           ]
//         },
//         "disabled": {
//           "value": {
//             "red": "0.13725",
//             "green": "0.13725",
//             "blue": "0.13725",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "#232323"
//           },
//           "name": "disabled",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "highlight",
//             "subitem": "disabled"
//           },
//           "path": [
//             "color",
//             "dark",
//             "highlight",
//             "disabled"
//           ]
//         }
//       },
//       "borders": {
//         "border_50": {
//           "value": {
//             "red": "0.16863",
//             "green": "0.16863",
//             "blue": "0.16863",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.dark.base.gray_50.value}"
//           },
//           "name": "border_50",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "borders",
//             "subitem": "border_50"
//           },
//           "path": [
//             "color",
//             "dark",
//             "borders",
//             "border_50"
//           ]
//         },
//         "border_100": {
//           "value": {
//             "red": "0.25098",
//             "green": "0.25098",
//             "blue": "0.25098",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.dark.base.gray_100.value}"
//           },
//           "name": "border_100",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "borders",
//             "subitem": "border_100"
//           },
//           "path": [
//             "color",
//             "dark",
//             "borders",
//             "border_100"
//           ]
//         },
//         "border_200": {
//           "value": {
//             "red": "0.33333",
//             "green": "0.33333",
//             "blue": "0.33333",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.dark.base.gray_200.value}"
//           },
//           "name": "border_200",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "borders",
//             "subitem": "border_200"
//           },
//           "path": [
//             "color",
//             "dark",
//             "borders",
//             "border_200"
//           ]
//         }
//       },
//       "icons": {
//         "primary": {
//           "value": {
//             "red": "0.83529",
//             "green": "0.83529",
//             "blue": "0.83529",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.dark.base.gray_800.value}"
//           },
//           "name": "primary",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "icons",
//             "subitem": "primary"
//           },
//           "path": [
//             "color",
//             "dark",
//             "icons",
//             "primary"
//           ]
//         },
//         "secondary": {
//           "value": {
//             "red": "0.41569",
//             "green": "0.41569",
//             "blue": "0.41569",
//             "alpha": 1
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "{color.dark.base.gray_300.value}"
//           },
//           "name": "secondary",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "icons",
//             "subitem": "secondary"
//           },
//           "path": [
//             "color",
//             "dark",
//             "icons",
//             "secondary"
//           ]
//         }
//       },
//       "input": {
//         "positive_default": {
//           "value": {
//             "red": "0.06275",
//             "green": "0.61961",
//             "blue": "0.35294",
//             "alpha": 0.5
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "rgba(16, 158, 90, 0.5)"
//           },
//           "name": "positive_default",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "input",
//             "subitem": "positive_default"
//           },
//           "path": [
//             "color",
//             "dark",
//             "input",
//             "positive_default"
//           ]
//         },
//         "positive_hover": {
//           "value": {
//             "red": "0.05098",
//             "green": "0.50588",
//             "blue": "0.28627",
//             "alpha": 0.5
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "rgba(13, 129, 73, 0.5)"
//           },
//           "name": "positive_hover",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "input",
//             "subitem": "positive_hover"
//           },
//           "path": [
//             "color",
//             "dark",
//             "input",
//             "positive_hover"
//           ]
//         },
//         "positive_pressed": {
//           "value": {
//             "red": "0.05098",
//             "green": "0.50588",
//             "blue": "0.28627",
//             "alpha": 0.5
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "rgba(13, 129, 73, 0.5)"
//           },
//           "name": "positive_pressed",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "input",
//             "subitem": "positive_pressed"
//           },
//           "path": [
//             "color",
//             "dark",
//             "input",
//             "positive_pressed"
//           ]
//         },
//         "highlight_default": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.56078",
//             "blue": "1.00000",
//             "alpha": 0.5
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "rgba(0, 143, 255, 0.5)"
//           },
//           "name": "highlight_default",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "input",
//             "subitem": "highlight_default"
//           },
//           "path": [
//             "color",
//             "dark",
//             "input",
//             "highlight_default"
//           ]
//         },
//         "highlight_hover": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.52549",
//             "blue": "0.93725",
//             "alpha": 0.5
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "rgba(0, 134, 239, 0.5)"
//           },
//           "name": "highlight_hover",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "input",
//             "subitem": "highlight_hover"
//           },
//           "path": [
//             "color",
//             "dark",
//             "input",
//             "highlight_hover"
//           ]
//         },
//         "highlight_pressed": {
//           "value": {
//             "red": "0.00000",
//             "green": "0.52549",
//             "blue": "0.93725",
//             "alpha": 0.5
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "rgba(0, 134, 239, 0.5)"
//           },
//           "name": "highlight_pressed",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "input",
//             "subitem": "highlight_pressed"
//           },
//           "path": [
//             "color",
//             "dark",
//             "input",
//             "highlight_pressed"
//           ]
//         },
//         "error_default": {
//           "value": {
//             "red": "0.84314",
//             "green": "0.25098",
//             "blue": "0.27059",
//             "alpha": 0.5
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "rgba(215, 64, 69, 0.5)"
//           },
//           "name": "error_default",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "input",
//             "subitem": "error_default"
//           },
//           "path": [
//             "color",
//             "dark",
//             "input",
//             "error_default"
//           ]
//         },
//         "error_hover": {
//           "value": {
//             "red": "0.84314",
//             "green": "0.25098",
//             "blue": "0.27059",
//             "alpha": 0.5
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "rgba(215, 64, 69, 0.5)"
//           },
//           "name": "error_hover",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "input",
//             "subitem": "error_hover"
//           },
//           "path": [
//             "color",
//             "dark",
//             "input",
//             "error_hover"
//           ]
//         },
//         "error_pressed": {
//           "value": {
//             "red": "0.84314",
//             "green": "0.25098",
//             "blue": "0.27059",
//             "alpha": 0.5
//           },
//           "filePath": "tokens/color/colors.js",
//           "isSource": true,
//           "original": {
//             "value": "rgba(215, 64, 69, 0.5)"
//           },
//           "name": "error_pressed",
//           "attributes": {
//             "category": "color",
//             "type": "dark",
//             "item": "input",
//             "subitem": "error_pressed"
//           },
//           "path": [
//             "color",
//             "dark",
//             "input",
//             "error_pressed"
//           ]
//         }
//       }
//     }
//   }
// };
var _styleDictionary = {
    "color": {
        "dark": {
            "base": {
                "blue_400": {
                    "value": {
                        "red": "0.03137",
                        "green": "0.57255",
                        "blue": "1.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#0892FF"
                    },
                    "name": "blue_400",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "blue_400",
                        "hex": "0892ff",
                        "rgb": {
                            "r": 8,
                            "g": 146,
                            "b": 255,
                            "a": 1
                        },
                        "hsl": {
                            "h": 206.47773279352225,
                            "s": 1,
                            "l": 0.5156862745098039,
                            "a": 1
                        },
                        "hsv": {
                            "h": 206.47773279352225,
                            "s": 0.9686274509803922,
                            "v": 1,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "blue_400"
                    ]
                },
                "blue_500": {
                    "value": {
                        "red": "0.09020",
                        "green": "0.60000",
                        "blue": "1.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#1799FF"
                    },
                    "name": "blue_500",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "blue_500",
                        "hex": "1799ff",
                        "rgb": {
                            "r": 23,
                            "g": 153,
                            "b": 255,
                            "a": 1
                        },
                        "hsl": {
                            "h": 206.3793103448276,
                            "s": 1,
                            "l": 0.5450980392156862,
                            "a": 1
                        },
                        "hsv": {
                            "h": 206.3793103448276,
                            "s": 0.9098039215686274,
                            "v": 1,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "blue_500"
                    ]
                },
                "blue_600": {
                    "value": {
                        "red": "0.15294",
                        "green": "0.62745",
                        "blue": "1.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#27A0FF"
                    },
                    "name": "blue_600",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "blue_600",
                        "hex": "27a0ff",
                        "rgb": {
                            "r": 39,
                            "g": 160,
                            "b": 255,
                            "a": 1
                        },
                        "hsl": {
                            "h": 206.3888888888889,
                            "s": 1,
                            "l": 0.5764705882352941,
                            "a": 1
                        },
                        "hsv": {
                            "h": 206.3888888888889,
                            "s": 0.8470588235294118,
                            "v": 1,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "blue_600"
                    ]
                },
                "blue_700": {
                    "value": {
                        "red": "0.21176",
                        "green": "0.65098",
                        "blue": "1.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#36A6FF"
                    },
                    "name": "blue_700",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "blue_700",
                        "hex": "36a6ff",
                        "rgb": {
                            "r": 54,
                            "g": 166,
                            "b": 255,
                            "a": 1
                        },
                        "hsl": {
                            "h": 206.56716417910445,
                            "s": 1,
                            "l": 0.6058823529411764,
                            "a": 1
                        },
                        "hsv": {
                            "h": 206.56716417910445,
                            "s": 0.788235294117647,
                            "v": 1,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "blue_700"
                    ]
                },
                "green_400": {
                    "value": {
                        "red": "0.06667",
                        "green": "0.65882",
                        "blue": "0.37255",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#11A85F"
                    },
                    "name": "green_400",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "green_400",
                        "hex": "11a85f",
                        "rgb": {
                            "r": 17,
                            "g": 168,
                            "b": 95,
                            "a": 1
                        },
                        "hsl": {
                            "h": 150.9933774834437,
                            "s": 0.8162162162162162,
                            "l": 0.3627450980392157,
                            "a": 1
                        },
                        "hsv": {
                            "h": 150.9933774834437,
                            "s": 0.8988095238095238,
                            "v": 0.6588235294117647,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "green_400"
                    ]
                },
                "green_500": {
                    "value": {
                        "red": "0.07451",
                        "green": "0.72941",
                        "blue": "0.41176",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#13BA69"
                    },
                    "name": "green_500",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "green_500",
                        "hex": "13ba69",
                        "rgb": {
                            "r": 19,
                            "g": 186,
                            "b": 105,
                            "a": 1
                        },
                        "hsl": {
                            "h": 150.89820359281435,
                            "s": 0.8146341463414635,
                            "l": 0.40196078431372545,
                            "a": 1
                        },
                        "hsv": {
                            "h": 150.89820359281435,
                            "s": 0.8978494623655915,
                            "v": 0.7294117647058823,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "green_500"
                    ]
                },
                "green_600": {
                    "value": {
                        "red": "0.08235",
                        "green": "0.80392",
                        "blue": "0.45490",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#15CD74"
                    },
                    "name": "green_600",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "green_600",
                        "hex": "15cd74",
                        "rgb": {
                            "r": 21,
                            "g": 205,
                            "b": 116,
                            "a": 1
                        },
                        "hsl": {
                            "h": 150.97826086956522,
                            "s": 0.8141592920353982,
                            "l": 0.4431372549019608,
                            "a": 1
                        },
                        "hsv": {
                            "h": 150.97826086956522,
                            "s": 0.897560975609756,
                            "v": 0.803921568627451,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "green_600"
                    ]
                },
                "green_700": {
                    "value": {
                        "red": "0.09020",
                        "green": "0.87451",
                        "blue": "0.49412",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#17DF7E"
                    },
                    "name": "green_700",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "green_700",
                        "hex": "17df7e",
                        "rgb": {
                            "r": 23,
                            "g": 223,
                            "b": 126,
                            "a": 1
                        },
                        "hsl": {
                            "h": 150.9,
                            "s": 0.8130081300813008,
                            "l": 0.4823529411764706,
                            "a": 1
                        },
                        "hsv": {
                            "h": 150.9,
                            "s": 0.8968609865470852,
                            "v": 0.8745098039215686,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "green_700"
                    ]
                },
                "red_400": {
                    "value": {
                        "red": "0.84314",
                        "green": "0.25098",
                        "blue": "0.27059",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#D74045"
                    },
                    "name": "red_400",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "red_400",
                        "hex": "d74045",
                        "rgb": {
                            "r": 215,
                            "g": 64,
                            "b": 69,
                            "a": 1
                        },
                        "hsl": {
                            "h": 358.0132450331126,
                            "s": 0.6536796536796537,
                            "l": 0.5470588235294118,
                            "a": 1
                        },
                        "hsv": {
                            "h": 358.0132450331126,
                            "s": 0.7023255813953488,
                            "v": 0.8431372549019608,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "red_400"
                    ]
                },
                "red_500": {
                    "value": {
                        "red": "0.85490",
                        "green": "0.29804",
                        "blue": "0.31765",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#DA4C51"
                    },
                    "name": "red_500",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "red_500",
                        "hex": "da4c51",
                        "rgb": {
                            "r": 218,
                            "g": 76,
                            "b": 81,
                            "a": 1
                        },
                        "hsl": {
                            "h": 357.88732394366195,
                            "s": 0.6574074074074076,
                            "l": 0.5764705882352941,
                            "a": 1
                        },
                        "hsv": {
                            "h": 357.88732394366195,
                            "s": 0.6513761467889909,
                            "v": 0.8549019607843137,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "red_500"
                    ]
                },
                "red_600": {
                    "value": {
                        "red": "0.86275",
                        "green": "0.34510",
                        "blue": "0.36078",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#DC585C"
                    },
                    "name": "red_600",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "red_600",
                        "hex": "dc585c",
                        "rgb": {
                            "r": 220,
                            "g": 88,
                            "b": 92,
                            "a": 1
                        },
                        "hsl": {
                            "h": 358.1818181818182,
                            "s": 0.6534653465346536,
                            "l": 0.603921568627451,
                            "a": 1
                        },
                        "hsv": {
                            "h": 358.1818181818182,
                            "s": 0.6,
                            "v": 0.8627450980392157,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "red_600"
                    ]
                },
                "red_700": {
                    "value": {
                        "red": "0.87451",
                        "green": "0.39216",
                        "blue": "0.40784",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#DF6468"
                    },
                    "name": "red_700",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "red_700",
                        "hex": "df6468",
                        "rgb": {
                            "r": 223,
                            "g": 100,
                            "b": 104,
                            "a": 1
                        },
                        "hsl": {
                            "h": 358.0487804878049,
                            "s": 0.6577540106951871,
                            "l": 0.6333333333333333,
                            "a": 1
                        },
                        "hsv": {
                            "h": 358.0487804878049,
                            "s": 0.5515695067264574,
                            "v": 0.8745098039215686,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "red_700"
                    ]
                },
                "orange_400": {
                    "value": {
                        "red": "0.81961",
                        "green": "0.44314",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#D17100"
                    },
                    "name": "orange_400",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "orange_400",
                        "hex": "d17100",
                        "rgb": {
                            "r": 209,
                            "g": 113,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 32.440191387559814,
                            "s": 1,
                            "l": 0.40980392156862744,
                            "a": 1
                        },
                        "hsv": {
                            "h": 32.440191387559814,
                            "s": 1,
                            "v": 0.8196078431372549,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "orange_400"
                    ]
                },
                "orange_500": {
                    "value": {
                        "red": "0.89412",
                        "green": "0.48235",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#E47B00"
                    },
                    "name": "orange_500",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "orange_500",
                        "hex": "e47b00",
                        "rgb": {
                            "r": 228,
                            "g": 123,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 32.36842105263158,
                            "s": 1,
                            "l": 0.4470588235294118,
                            "a": 1
                        },
                        "hsv": {
                            "h": 32.36842105263158,
                            "s": 1,
                            "v": 0.8941176470588236,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "orange_500"
                    ]
                },
                "orange_600": {
                    "value": {
                        "red": "0.96863",
                        "green": "0.52157",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#F78500"
                    },
                    "name": "orange_600",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "orange_600",
                        "hex": "f78500",
                        "rgb": {
                            "r": 247,
                            "g": 133,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 32.307692307692314,
                            "s": 1,
                            "l": 0.4843137254901961,
                            "a": 1
                        },
                        "hsv": {
                            "h": 32.307692307692314,
                            "s": 1,
                            "v": 0.9686274509803922,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "orange_600"
                    ]
                },
                "orange_700": {
                    "value": {
                        "red": "1.00000",
                        "green": "0.56078",
                        "blue": "0.03922",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#FF8F0A"
                    },
                    "name": "orange_700",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "orange_700",
                        "hex": "ff8f0a",
                        "rgb": {
                            "r": 255,
                            "g": 143,
                            "b": 10,
                            "a": 1
                        },
                        "hsl": {
                            "h": 32.57142857142858,
                            "s": 1,
                            "l": 0.5196078431372549,
                            "a": 1
                        },
                        "hsv": {
                            "h": 32.57142857142858,
                            "s": 0.9607843137254902,
                            "v": 1,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "orange_700"
                    ]
                },
                "yellow_400": {
                    "value": {
                        "red": "0.68235",
                        "green": "0.57255",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#AE9200"
                    },
                    "name": "yellow_400",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "yellow_400",
                        "hex": "ae9200",
                        "rgb": {
                            "r": 174,
                            "g": 146,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 50.34482758620689,
                            "s": 1,
                            "l": 0.3411764705882353,
                            "a": 1
                        },
                        "hsv": {
                            "h": 50.34482758620689,
                            "s": 1,
                            "v": 0.6823529411764706,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "yellow_400"
                    ]
                },
                "yellow_500": {
                    "value": {
                        "red": "0.76471",
                        "green": "0.64314",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#C3A400"
                    },
                    "name": "yellow_500",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "yellow_500",
                        "hex": "c3a400",
                        "rgb": {
                            "r": 195,
                            "g": 164,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 50.461538461538474,
                            "s": 1,
                            "l": 0.38235294117647056,
                            "a": 1
                        },
                        "hsv": {
                            "h": 50.461538461538474,
                            "s": 1,
                            "v": 0.7647058823529411,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "yellow_500"
                    ]
                },
                "yellow_600": {
                    "value": {
                        "red": "0.84706",
                        "green": "0.71373",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#D8B600"
                    },
                    "name": "yellow_600",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "yellow_600",
                        "hex": "d8b600",
                        "rgb": {
                            "r": 216,
                            "g": 182,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 50.55555555555556,
                            "s": 1,
                            "l": 0.4235294117647059,
                            "a": 1
                        },
                        "hsv": {
                            "h": 50.55555555555556,
                            "s": 1,
                            "v": 0.8470588235294118,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "yellow_600"
                    ]
                },
                "yellow_700": {
                    "value": {
                        "red": "0.92941",
                        "green": "0.78039",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#EDC700"
                    },
                    "name": "yellow_700",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "yellow_700",
                        "hex": "edc700",
                        "rgb": {
                            "r": 237,
                            "g": 199,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 50.379746835443036,
                            "s": 1,
                            "l": 0.4647058823529412,
                            "a": 1
                        },
                        "hsv": {
                            "h": 50.379746835443036,
                            "s": 1,
                            "v": 0.9294117647058824,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "yellow_700"
                    ]
                },
                "cyan_400": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.65490",
                        "blue": "0.80000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#00A7CC"
                    },
                    "name": "cyan_400",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "cyan_400",
                        "hex": "00a7cc",
                        "rgb": {
                            "r": 0,
                            "g": 167,
                            "b": 204,
                            "a": 1
                        },
                        "hsl": {
                            "h": 190.88235294117646,
                            "s": 1,
                            "l": 0.4,
                            "a": 1
                        },
                        "hsv": {
                            "h": 190.88235294117646,
                            "s": 1,
                            "v": 0.8,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "cyan_400"
                    ]
                },
                "cyan_500": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.71765",
                        "blue": "0.87451",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#00B7DF"
                    },
                    "name": "cyan_500",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "cyan_500",
                        "hex": "00b7df",
                        "rgb": {
                            "r": 0,
                            "g": 183,
                            "b": 223,
                            "a": 1
                        },
                        "hsl": {
                            "h": 190.76233183856502,
                            "s": 1,
                            "l": 0.4372549019607843,
                            "a": 1
                        },
                        "hsv": {
                            "h": 190.76233183856502,
                            "s": 1,
                            "v": 0.8745098039215686,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "cyan_500"
                    ]
                },
                "cyan_600": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.77647",
                        "blue": "0.94902",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#00C6F2"
                    },
                    "name": "cyan_600",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "cyan_600",
                        "hex": "00c6f2",
                        "rgb": {
                            "r": 0,
                            "g": 198,
                            "b": 242,
                            "a": 1
                        },
                        "hsl": {
                            "h": 190.9090909090909,
                            "s": 1,
                            "l": 0.4745098039215686,
                            "a": 1
                        },
                        "hsv": {
                            "h": 190.9090909090909,
                            "s": 1,
                            "v": 0.9490196078431372,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "cyan_600"
                    ]
                },
                "cyan_700": {
                    "value": {
                        "red": "0.02353",
                        "green": "0.82353",
                        "blue": "1.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#06D2FF"
                    },
                    "name": "cyan_700",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "cyan_700",
                        "hex": "06d2ff",
                        "rgb": {
                            "r": 6,
                            "g": 210,
                            "b": 255,
                            "a": 1
                        },
                        "hsl": {
                            "h": 190.84337349397592,
                            "s": 1,
                            "l": 0.5117647058823529,
                            "a": 1
                        },
                        "hsv": {
                            "h": 190.84337349397592,
                            "s": 0.9764705882352941,
                            "v": 1,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "cyan_700"
                    ]
                },
                "indigo_400": {
                    "value": {
                        "red": "0.32549",
                        "green": "0.45882",
                        "blue": "0.93725",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#5375EF"
                    },
                    "name": "indigo_400",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "indigo_400",
                        "hex": "5375ef",
                        "rgb": {
                            "r": 83,
                            "g": 117,
                            "b": 239,
                            "a": 1
                        },
                        "hsl": {
                            "h": 226.9230769230769,
                            "s": 0.8297872340425532,
                            "l": 0.6313725490196078,
                            "a": 1
                        },
                        "hsv": {
                            "h": 226.9230769230769,
                            "s": 0.6527196652719666,
                            "v": 0.9372549019607843,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "indigo_400"
                    ]
                },
                "indigo_500": {
                    "value": {
                        "red": "0.36863",
                        "green": "0.49412",
                        "blue": "0.94118",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#5E7EF0"
                    },
                    "name": "indigo_500",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "indigo_500",
                        "hex": "5e7ef0",
                        "rgb": {
                            "r": 94,
                            "g": 126,
                            "b": 240,
                            "a": 1
                        },
                        "hsl": {
                            "h": 226.84931506849313,
                            "s": 0.8295454545454545,
                            "l": 0.6549019607843137,
                            "a": 1
                        },
                        "hsv": {
                            "h": 226.84931506849313,
                            "s": 0.6083333333333333,
                            "v": 0.9411764705882353,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "indigo_500"
                    ]
                },
                "indigo_600": {
                    "value": {
                        "red": "0.41176",
                        "green": "0.52549",
                        "blue": "0.94510",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#6986F1"
                    },
                    "name": "indigo_600",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "indigo_600",
                        "hex": "6986f1",
                        "rgb": {
                            "r": 105,
                            "g": 134,
                            "b": 241,
                            "a": 1
                        },
                        "hsl": {
                            "h": 227.20588235294116,
                            "s": 0.8292682926829268,
                            "l": 0.6784313725490196,
                            "a": 1
                        },
                        "hsv": {
                            "h": 227.20588235294116,
                            "s": 0.5643153526970954,
                            "v": 0.9450980392156862,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "indigo_600"
                    ]
                },
                "indigo_700": {
                    "value": {
                        "red": "0.45098",
                        "green": "0.56078",
                        "blue": "0.94902",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#738FF2"
                    },
                    "name": "indigo_700",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "indigo_700",
                        "hex": "738ff2",
                        "rgb": {
                            "r": 115,
                            "g": 143,
                            "b": 242,
                            "a": 1
                        },
                        "hsl": {
                            "h": 226.77165354330708,
                            "s": 0.830065359477124,
                            "l": 0.7,
                            "a": 1
                        },
                        "hsv": {
                            "h": 226.77165354330708,
                            "s": 0.524793388429752,
                            "v": 0.9490196078431372,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "indigo_700"
                    ]
                },
                "purple_400": {
                    "value": {
                        "red": "0.59216",
                        "green": "0.32549",
                        "blue": "0.93725",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#9753EF"
                    },
                    "name": "purple_400",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "purple_400",
                        "hex": "9753ef",
                        "rgb": {
                            "r": 151,
                            "g": 83,
                            "b": 239,
                            "a": 1
                        },
                        "hsl": {
                            "h": 266.1538461538462,
                            "s": 0.8297872340425532,
                            "l": 0.6313725490196078,
                            "a": 1
                        },
                        "hsv": {
                            "h": 266.1538461538462,
                            "s": 0.6527196652719666,
                            "v": 0.9372549019607843,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "purple_400"
                    ]
                },
                "purple_500": {
                    "value": {
                        "red": "0.61961",
                        "green": "0.36863",
                        "blue": "0.94118",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#9E5EF0"
                    },
                    "name": "purple_500",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "purple_500",
                        "hex": "9e5ef0",
                        "rgb": {
                            "r": 158,
                            "g": 94,
                            "b": 240,
                            "a": 1
                        },
                        "hsl": {
                            "h": 266.3013698630137,
                            "s": 0.8295454545454545,
                            "l": 0.6549019607843137,
                            "a": 1
                        },
                        "hsv": {
                            "h": 266.3013698630137,
                            "s": 0.6083333333333333,
                            "v": 0.9411764705882353,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "purple_500"
                    ]
                },
                "purple_600": {
                    "value": {
                        "red": "0.64314",
                        "green": "0.41176",
                        "blue": "0.94510",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#A469F1"
                    },
                    "name": "purple_600",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "purple_600",
                        "hex": "a469f1",
                        "rgb": {
                            "r": 164,
                            "g": 105,
                            "b": 241,
                            "a": 1
                        },
                        "hsl": {
                            "h": 266.02941176470586,
                            "s": 0.8292682926829268,
                            "l": 0.6784313725490196,
                            "a": 1
                        },
                        "hsv": {
                            "h": 266.02941176470586,
                            "s": 0.5643153526970954,
                            "v": 0.9450980392156862,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "purple_600"
                    ]
                },
                "purple_700": {
                    "value": {
                        "red": "0.67059",
                        "green": "0.45098",
                        "blue": "0.94902",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#AB73F2"
                    },
                    "name": "purple_700",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "purple_700",
                        "hex": "ab73f2",
                        "rgb": {
                            "r": 171,
                            "g": 115,
                            "b": 242,
                            "a": 1
                        },
                        "hsl": {
                            "h": 266.45669291338584,
                            "s": 0.830065359477124,
                            "l": 0.7,
                            "a": 1
                        },
                        "hsv": {
                            "h": 266.45669291338584,
                            "s": 0.524793388429752,
                            "v": 0.9490196078431372,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "purple_700"
                    ]
                },
                "pink_400": {
                    "value": {
                        "red": "0.80784",
                        "green": "0.19608",
                        "blue": "0.60000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#CE3299"
                    },
                    "name": "pink_400",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "pink_400",
                        "hex": "ce3299",
                        "rgb": {
                            "r": 206,
                            "g": 50,
                            "b": 153,
                            "a": 1
                        },
                        "hsl": {
                            "h": 320.38461538461536,
                            "s": 0.6141732283464567,
                            "l": 0.5019607843137255,
                            "a": 1
                        },
                        "hsv": {
                            "h": 320.38461538461536,
                            "s": 0.7572815533980582,
                            "v": 0.807843137254902,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "pink_400"
                    ]
                },
                "pink_500": {
                    "value": {
                        "red": "0.81961",
                        "green": "0.24706",
                        "blue": "0.62353",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#D13F9F"
                    },
                    "name": "pink_500",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "pink_500",
                        "hex": "d13f9f",
                        "rgb": {
                            "r": 209,
                            "g": 63,
                            "b": 159,
                            "a": 1
                        },
                        "hsl": {
                            "h": 320.54794520547944,
                            "s": 0.6134453781512604,
                            "l": 0.5333333333333333,
                            "a": 1
                        },
                        "hsv": {
                            "h": 320.54794520547944,
                            "s": 0.6985645933014354,
                            "v": 0.8196078431372549,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "pink_500"
                    ]
                },
                "pink_600": {
                    "value": {
                        "red": "0.83137",
                        "green": "0.29804",
                        "blue": "0.65098",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#D44CA6"
                    },
                    "name": "pink_600",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "pink_600",
                        "hex": "d44ca6",
                        "rgb": {
                            "r": 212,
                            "g": 76,
                            "b": 166,
                            "a": 1
                        },
                        "hsl": {
                            "h": 320.2941176470588,
                            "s": 0.6126126126126129,
                            "l": 0.5647058823529412,
                            "a": 1
                        },
                        "hsv": {
                            "h": 320.2941176470588,
                            "s": 0.6415094339622642,
                            "v": 0.8313725490196079,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "pink_600"
                    ]
                },
                "pink_700": {
                    "value": {
                        "red": "0.84314",
                        "green": "0.34510",
                        "blue": "0.67451",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#D758AC"
                    },
                    "name": "pink_700",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "pink_700",
                        "hex": "d758ac",
                        "rgb": {
                            "r": 215,
                            "g": 88,
                            "b": 172,
                            "a": 1
                        },
                        "hsl": {
                            "h": 320.3149606299213,
                            "s": 0.6135265700483092,
                            "l": 0.5941176470588235,
                            "a": 1
                        },
                        "hsv": {
                            "h": 320.3149606299213,
                            "s": 0.5906976744186047,
                            "v": 0.8431372549019608,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "pink_700"
                    ]
                },
                "gray_25": {
                    "value": {
                        "red": "0.08235",
                        "green": "0.08235",
                        "blue": "0.08235",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#151515"
                    },
                    "name": "gray_25",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "gray_25",
                        "hex": "151515",
                        "rgb": {
                            "r": 21,
                            "g": 21,
                            "b": 21,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.08235294117647059,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.08235294117647059,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "gray_25"
                    ]
                },
                "gray_50": {
                    "value": {
                        "red": "0.16863",
                        "green": "0.16863",
                        "blue": "0.16863",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#2B2B2B"
                    },
                    "name": "gray_50",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "gray_50",
                        "hex": "2b2b2b",
                        "rgb": {
                            "r": 43,
                            "g": 43,
                            "b": 43,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.16862745098039217,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.16862745098039217,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "gray_50"
                    ]
                },
                "gray_100": {
                    "value": {
                        "red": "0.25098",
                        "green": "0.25098",
                        "blue": "0.25098",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#404040"
                    },
                    "name": "gray_100",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "gray_100",
                        "hex": "404040",
                        "rgb": {
                            "r": 64,
                            "g": 64,
                            "b": 64,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.25098039215686274,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.25098039215686274,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "gray_100"
                    ]
                },
                "gray_200": {
                    "value": {
                        "red": "0.33333",
                        "green": "0.33333",
                        "blue": "0.33333",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#555555"
                    },
                    "name": "gray_200",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "gray_200",
                        "hex": "555555",
                        "rgb": {
                            "r": 85,
                            "g": 85,
                            "b": 85,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.3333333333333333,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.3333333333333333,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "gray_200"
                    ]
                },
                "gray_300": {
                    "value": {
                        "red": "0.41569",
                        "green": "0.41569",
                        "blue": "0.41569",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#6A6A6A"
                    },
                    "name": "gray_300",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "gray_300",
                        "hex": "6a6a6a",
                        "rgb": {
                            "r": 106,
                            "g": 106,
                            "b": 106,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.41568627450980394,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.41568627450980394,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "gray_300"
                    ]
                },
                "gray_400": {
                    "value": {
                        "red": "0.50196",
                        "green": "0.50196",
                        "blue": "0.50196",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#808080"
                    },
                    "name": "gray_400",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "gray_400",
                        "hex": "808080",
                        "rgb": {
                            "r": 128,
                            "g": 128,
                            "b": 128,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.5019607843137255,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.5019607843137255,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "gray_400"
                    ]
                },
                "gray_500": {
                    "value": {
                        "red": "0.58431",
                        "green": "0.58431",
                        "blue": "0.58431",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#959595"
                    },
                    "name": "gray_500",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "gray_500",
                        "hex": "959595",
                        "rgb": {
                            "r": 149,
                            "g": 149,
                            "b": 149,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.5843137254901961,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.5843137254901961,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "gray_500"
                    ]
                },
                "gray_600": {
                    "value": {
                        "red": "0.66667",
                        "green": "0.66667",
                        "blue": "0.66667",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#AAAAAA"
                    },
                    "name": "gray_600",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "gray_600",
                        "hex": "aaaaaa",
                        "rgb": {
                            "r": 170,
                            "g": 170,
                            "b": 170,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.6666666666666666,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.6666666666666666,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "gray_600"
                    ]
                },
                "gray_700": {
                    "value": {
                        "red": "0.74902",
                        "green": "0.74902",
                        "blue": "0.74902",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#BFBFBF"
                    },
                    "name": "gray_700",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "gray_700",
                        "hex": "bfbfbf",
                        "rgb": {
                            "r": 191,
                            "g": 191,
                            "b": 191,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.7490196078431373,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.7490196078431373,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "gray_700"
                    ]
                },
                "gray_800": {
                    "value": {
                        "red": "0.83529",
                        "green": "0.83529",
                        "blue": "0.83529",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#D5D5D5"
                    },
                    "name": "gray_800",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "gray_800",
                        "hex": "d5d5d5",
                        "rgb": {
                            "r": 213,
                            "g": 213,
                            "b": 213,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.8352941176470589,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.8352941176470589,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "gray_800"
                    ]
                },
                "gray_900": {
                    "value": {
                        "red": "0.91765",
                        "green": "0.91765",
                        "blue": "0.91765",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#EAEAEA"
                    },
                    "name": "gray_900",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "base",
                        "subitem": "gray_900",
                        "hex": "eaeaea",
                        "rgb": {
                            "r": 234,
                            "g": 234,
                            "b": 234,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.9176470588235294,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.9176470588235294,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "base",
                        "gray_900"
                    ]
                }
            },
            "semantic": {
                "positive": {
                    "value": {
                        "red": "0.06667",
                        "green": "0.65882",
                        "blue": "0.37255",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#11A85F"
                    },
                    "name": "positive",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "semantic",
                        "subitem": "positive",
                        "hex": "11a85f",
                        "rgb": {
                            "r": 17,
                            "g": 168,
                            "b": 95,
                            "a": 1
                        },
                        "hsl": {
                            "h": 150.9933774834437,
                            "s": 0.8162162162162162,
                            "l": 0.3627450980392157,
                            "a": 1
                        },
                        "hsv": {
                            "h": 150.9933774834437,
                            "s": 0.8988095238095238,
                            "v": 0.6588235294117647,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "semantic",
                        "positive"
                    ]
                },
                "warning": {
                    "value": {
                        "red": "0.81961",
                        "green": "0.44314",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#D17100"
                    },
                    "name": "warning",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "semantic",
                        "subitem": "warning",
                        "hex": "d17100",
                        "rgb": {
                            "r": 209,
                            "g": 113,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 32.440191387559814,
                            "s": 1,
                            "l": 0.40980392156862744,
                            "a": 1
                        },
                        "hsv": {
                            "h": 32.440191387559814,
                            "s": 1,
                            "v": 0.8196078431372549,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "semantic",
                        "warning"
                    ]
                },
                "negative": {
                    "value": {
                        "red": "0.81961",
                        "green": "0.00000",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#D10000"
                    },
                    "name": "negative",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "semantic",
                        "subitem": "negative",
                        "hex": "d10000",
                        "rgb": {
                            "r": 209,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 1,
                            "l": 0.40980392156862744,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 1,
                            "v": 0.8196078431372549,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "semantic",
                        "negative"
                    ]
                },
                "informative": {
                    "value": {
                        "red": "0.03137",
                        "green": "0.57255",
                        "blue": "1.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#0892FF"
                    },
                    "name": "informative",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "semantic",
                        "subitem": "informative",
                        "hex": "0892ff",
                        "rgb": {
                            "r": 8,
                            "g": 146,
                            "b": 255,
                            "a": 1
                        },
                        "hsl": {
                            "h": 206.47773279352225,
                            "s": 1,
                            "l": 0.5156862745098039,
                            "a": 1
                        },
                        "hsv": {
                            "h": 206.47773279352225,
                            "s": 0.9686274509803922,
                            "v": 1,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "semantic",
                        "informative"
                    ]
                }
            },
            "controls": {
                "default": {
                    "value": {
                        "red": "0.16863",
                        "green": "0.16863",
                        "blue": "0.16863",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.dark.base.gray_50.value}"
                    },
                    "name": "default",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "controls",
                        "subitem": "default",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "controls",
                        "default"
                    ]
                },
                "hover": {
                    "value": {
                        "red": "0.15686",
                        "green": "0.15686",
                        "blue": "0.15686",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#282828"
                    },
                    "name": "hover",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "controls",
                        "subitem": "hover",
                        "hex": "282828",
                        "rgb": {
                            "r": 40,
                            "g": 40,
                            "b": 40,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.1568627450980392,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.1568627450980392,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "controls",
                        "hover"
                    ]
                },
                "active": {
                    "value": {
                        "red": "0.13725",
                        "green": "0.13725",
                        "blue": "0.13725",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#232323"
                    },
                    "name": "active",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "controls",
                        "subitem": "active",
                        "hex": "232323",
                        "rgb": {
                            "r": 35,
                            "g": 35,
                            "b": 35,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.13725490196078433,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.13725490196078433,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "controls",
                        "active"
                    ]
                },
                "focused": {
                    "value": {
                        "red": "0.16863",
                        "green": "0.16863",
                        "blue": "0.16863",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.dark.base.gray_50.value}"
                    },
                    "name": "focused",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "controls",
                        "subitem": "focused",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "controls",
                        "focused"
                    ]
                },
                "disabled": {
                    "value": {
                        "red": "0.13725",
                        "green": "0.13725",
                        "blue": "0.13725",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#232323"
                    },
                    "name": "disabled",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "controls",
                        "subitem": "disabled",
                        "hex": "232323",
                        "rgb": {
                            "r": 35,
                            "g": 35,
                            "b": 35,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.13725490196078433,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.13725490196078433,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "controls",
                        "disabled"
                    ]
                },
                "border_default": {
                    "value": {
                        "red": "0.25098",
                        "green": "0.25098",
                        "blue": "0.25098",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.dark.base.gray_100.value}"
                    },
                    "name": "border_default",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "controls",
                        "subitem": "border_default",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "controls",
                        "border_default"
                    ]
                },
                "border_hover": {
                    "value": {
                        "red": "0.33333",
                        "green": "0.33333",
                        "blue": "0.33333",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.dark.base.gray_200.value}"
                    },
                    "name": "border_hover",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "controls",
                        "subitem": "border_hover",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "controls",
                        "border_hover"
                    ]
                },
                "border_pressed": {
                    "value": {
                        "red": "0.33333",
                        "green": "0.33333",
                        "blue": "0.33333",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.dark.base.gray_200.value}"
                    },
                    "name": "border_pressed",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "controls",
                        "subitem": "border_pressed",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "controls",
                        "border_pressed"
                    ]
                },
                "border_disabled": {
                    "value": {
                        "red": "0.16863",
                        "green": "0.16863",
                        "blue": "0.16863",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.dark.base.gray_50.value}"
                    },
                    "name": "border_disabled",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "controls",
                        "subitem": "border_disabled",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "controls",
                        "border_disabled"
                    ]
                }
            },
            "background": {
                "inspector": {
                    "value": {
                        "red": "0.08235",
                        "green": "0.08235",
                        "blue": "0.08235",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.dark.base.gray_25.value}"
                    },
                    "name": "inspector",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "background",
                        "subitem": "inspector",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "background",
                        "inspector"
                    ]
                },
                "flyout": {
                    "value": {
                        "red": "0.16863",
                        "green": "0.16863",
                        "blue": "0.16863",
                        "alpha": 0.75
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(43, 43, 43, 0.75)"
                    },
                    "name": "flyout",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "background",
                        "subitem": "flyout",
                        "hex": "2b2b2b",
                        "rgb": {
                            "r": 43,
                            "g": 43,
                            "b": 43,
                            "a": 0.75
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.16862745098039217,
                            "a": 0.75
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.16862745098039217,
                            "a": 0.75
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "background",
                        "flyout"
                    ]
                },
                "modal": {
                    "value": {
                        "red": "0.16863",
                        "green": "0.16863",
                        "blue": "0.16863",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#2B2B2B"
                    },
                    "name": "modal",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "background",
                        "subitem": "modal",
                        "hex": "2b2b2b",
                        "rgb": {
                            "r": 43,
                            "g": 43,
                            "b": 43,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.16862745098039217,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.16862745098039217,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "background",
                        "modal"
                    ]
                },
                "tooltip": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.00000",
                        "blue": "0.00000",
                        "alpha": 0.75
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(0, 0, 0, 0.75)"
                    },
                    "name": "tooltip",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "background",
                        "subitem": "tooltip",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 0.75
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 0.75
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 0.75
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "background",
                        "tooltip"
                    ]
                },
                "toolbar": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.00000",
                        "blue": "0.00000",
                        "alpha": 0.25
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(0, 0, 0, 0.25)"
                    },
                    "name": "toolbar",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "background",
                        "subitem": "toolbar",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 0.25
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 0.25
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 0.25
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "background",
                        "toolbar"
                    ]
                },
                "toolbar_75": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.00000",
                        "blue": "0.00000",
                        "alpha": 0.75
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(0, 0, 0, 0.75)"
                    },
                    "name": "toolbar_75",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "background",
                        "subitem": "toolbar_75",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 0.75
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 0.75
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 0.75
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "background",
                        "toolbar_75"
                    ]
                }
            },
            "highlight": {
                "default": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.56078",
                        "blue": "1.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.static.base.blue_400.value}"
                    },
                    "name": "default",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "highlight",
                        "subitem": "default",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "highlight",
                        "default"
                    ]
                },
                "hover": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.52549",
                        "blue": "0.93725",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.static.base.blue_500.value}"
                    },
                    "name": "hover",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "highlight",
                        "subitem": "hover",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "highlight",
                        "hover"
                    ]
                },
                "active": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.45490",
                        "blue": "0.81176",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.static.base.blue_700.value}"
                    },
                    "name": "active",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "highlight",
                        "subitem": "active",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "highlight",
                        "active"
                    ]
                },
                "focus": {
                    "value": {
                        "red": "0.21176",
                        "green": "0.65098",
                        "blue": "1.00000",
                        "alpha": 0.75
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(54, 166, 255, 0.75)"
                    },
                    "name": "focus",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "highlight",
                        "subitem": "focus",
                        "hex": "36a6ff",
                        "rgb": {
                            "r": 54,
                            "g": 166,
                            "b": 255,
                            "a": 0.75
                        },
                        "hsl": {
                            "h": 206.56716417910445,
                            "s": 1,
                            "l": 0.6058823529411764,
                            "a": 0.75
                        },
                        "hsv": {
                            "h": 206.56716417910445,
                            "s": 0.788235294117647,
                            "v": 1,
                            "a": 0.75
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "highlight",
                        "focus"
                    ]
                },
                "ghosted": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.52549",
                        "blue": "0.93725",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.static.base.blue_500.value}"
                    },
                    "name": "ghosted",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "highlight",
                        "subitem": "ghosted",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "highlight",
                        "ghosted"
                    ]
                },
                "disabled": {
                    "value": {
                        "red": "0.13725",
                        "green": "0.13725",
                        "blue": "0.13725",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "#232323"
                    },
                    "name": "disabled",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "highlight",
                        "subitem": "disabled",
                        "hex": "232323",
                        "rgb": {
                            "r": 35,
                            "g": 35,
                            "b": 35,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.13725490196078433,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.13725490196078433,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "highlight",
                        "disabled"
                    ]
                }
            },
            "borders": {
                "border_50": {
                    "value": {
                        "red": "0.16863",
                        "green": "0.16863",
                        "blue": "0.16863",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.dark.base.gray_50.value}"
                    },
                    "name": "border_50",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "borders",
                        "subitem": "border_50",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "borders",
                        "border_50"
                    ]
                },
                "border_100": {
                    "value": {
                        "red": "0.25098",
                        "green": "0.25098",
                        "blue": "0.25098",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.dark.base.gray_100.value}"
                    },
                    "name": "border_100",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "borders",
                        "subitem": "border_100",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "borders",
                        "border_100"
                    ]
                },
                "border_200": {
                    "value": {
                        "red": "0.33333",
                        "green": "0.33333",
                        "blue": "0.33333",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.dark.base.gray_200.value}"
                    },
                    "name": "border_200",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "borders",
                        "subitem": "border_200",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "borders",
                        "border_200"
                    ]
                }
            },
            "icons": {
                "primary": {
                    "value": {
                        "red": "0.83529",
                        "green": "0.83529",
                        "blue": "0.83529",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.dark.base.gray_800.value}"
                    },
                    "name": "primary",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "icons",
                        "subitem": "primary",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "icons",
                        "primary"
                    ]
                },
                "secondary": {
                    "value": {
                        "red": "0.41569",
                        "green": "0.41569",
                        "blue": "0.41569",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.dark.base.gray_300.value}"
                    },
                    "name": "secondary",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "icons",
                        "subitem": "secondary",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "icons",
                        "secondary"
                    ]
                }
            },
            "input": {
                "positive_default": {
                    "value": {
                        "red": "0.06275",
                        "green": "0.61961",
                        "blue": "0.35294",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(16, 158, 90, 0.5)"
                    },
                    "name": "positive_default",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "input",
                        "subitem": "positive_default",
                        "hex": "109e5a",
                        "rgb": {
                            "r": 16,
                            "g": 158,
                            "b": 90,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 151.26760563380282,
                            "s": 0.8160919540229885,
                            "l": 0.3411764705882353,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 151.26760563380282,
                            "s": 0.8987341772151899,
                            "v": 0.6196078431372549,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "input",
                        "positive_default"
                    ]
                },
                "positive_hover": {
                    "value": {
                        "red": "0.05098",
                        "green": "0.50588",
                        "blue": "0.28627",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(13, 129, 73, 0.5)"
                    },
                    "name": "positive_hover",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "input",
                        "subitem": "positive_hover",
                        "hex": "0d8149",
                        "rgb": {
                            "r": 13,
                            "g": 129,
                            "b": 73,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 151.0344827586207,
                            "s": 0.8169014084507041,
                            "l": 0.2784313725490196,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 151.0344827586207,
                            "s": 0.8992248062015504,
                            "v": 0.5058823529411764,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "input",
                        "positive_hover"
                    ]
                },
                "positive_pressed": {
                    "value": {
                        "red": "0.05098",
                        "green": "0.50588",
                        "blue": "0.28627",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(13, 129, 73, 0.5)"
                    },
                    "name": "positive_pressed",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "input",
                        "subitem": "positive_pressed",
                        "hex": "0d8149",
                        "rgb": {
                            "r": 13,
                            "g": 129,
                            "b": 73,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 151.0344827586207,
                            "s": 0.8169014084507041,
                            "l": 0.2784313725490196,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 151.0344827586207,
                            "s": 0.8992248062015504,
                            "v": 0.5058823529411764,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "input",
                        "positive_pressed"
                    ]
                },
                "highlight_default": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.56078",
                        "blue": "1.00000",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(0, 143, 255, 0.5)"
                    },
                    "name": "highlight_default",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "input",
                        "subitem": "highlight_default",
                        "hex": "008fff",
                        "rgb": {
                            "r": 0,
                            "g": 143,
                            "b": 255,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 206.3529411764706,
                            "s": 1,
                            "l": 0.5,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 206.3529411764706,
                            "s": 1,
                            "v": 1,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "input",
                        "highlight_default"
                    ]
                },
                "highlight_hover": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.52549",
                        "blue": "0.93725",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(0, 134, 239, 0.5)"
                    },
                    "name": "highlight_hover",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "input",
                        "subitem": "highlight_hover",
                        "hex": "0086ef",
                        "rgb": {
                            "r": 0,
                            "g": 134,
                            "b": 239,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 206.35983263598325,
                            "s": 1,
                            "l": 0.46862745098039216,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 206.35983263598325,
                            "s": 1,
                            "v": 0.9372549019607843,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "input",
                        "highlight_hover"
                    ]
                },
                "highlight_pressed": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.52549",
                        "blue": "0.93725",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(0, 134, 239, 0.5)"
                    },
                    "name": "highlight_pressed",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "input",
                        "subitem": "highlight_pressed",
                        "hex": "0086ef",
                        "rgb": {
                            "r": 0,
                            "g": 134,
                            "b": 239,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 206.35983263598325,
                            "s": 1,
                            "l": 0.46862745098039216,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 206.35983263598325,
                            "s": 1,
                            "v": 0.9372549019607843,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "input",
                        "highlight_pressed"
                    ]
                },
                "error_default": {
                    "value": {
                        "red": "0.84314",
                        "green": "0.25098",
                        "blue": "0.27059",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(215, 64, 69, 0.5)"
                    },
                    "name": "error_default",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "input",
                        "subitem": "error_default",
                        "hex": "d74045",
                        "rgb": {
                            "r": 215,
                            "g": 64,
                            "b": 69,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 358.0132450331126,
                            "s": 0.6536796536796537,
                            "l": 0.5470588235294118,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 358.0132450331126,
                            "s": 0.7023255813953488,
                            "v": 0.8431372549019608,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "input",
                        "error_default"
                    ]
                },
                "error_hover": {
                    "value": {
                        "red": "0.84314",
                        "green": "0.25098",
                        "blue": "0.27059",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(215, 64, 69, 0.5)"
                    },
                    "name": "error_hover",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "input",
                        "subitem": "error_hover",
                        "hex": "d74045",
                        "rgb": {
                            "r": 215,
                            "g": 64,
                            "b": 69,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 358.0132450331126,
                            "s": 0.6536796536796537,
                            "l": 0.5470588235294118,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 358.0132450331126,
                            "s": 0.7023255813953488,
                            "v": 0.8431372549019608,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "input",
                        "error_hover"
                    ]
                },
                "error_pressed": {
                    "value": {
                        "red": "0.84314",
                        "green": "0.25098",
                        "blue": "0.27059",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-dark.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(215, 64, 69, 0.5)"
                    },
                    "name": "error_pressed",
                    "attributes": {
                        "category": "color",
                        "type": "dark",
                        "item": "input",
                        "subitem": "error_pressed",
                        "hex": "d74045",
                        "rgb": {
                            "r": 215,
                            "g": 64,
                            "b": 69,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 358.0132450331126,
                            "s": 0.6536796536796537,
                            "l": 0.5470588235294118,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 358.0132450331126,
                            "s": 0.7023255813953488,
                            "v": 0.8431372549019608,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "dark",
                        "input",
                        "error_pressed"
                    ]
                }
            }
        },
        "light": {
            "base": {
                "blue_400": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.56078",
                        "blue": "1.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#008FFF"
                    },
                    "name": "blue_400",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "blue_400",
                        "hex": "008fff",
                        "rgb": {
                            "r": 0,
                            "g": 143,
                            "b": 255,
                            "a": 1
                        },
                        "hsl": {
                            "h": 206.3529411764706,
                            "s": 1,
                            "l": 0.5,
                            "a": 1
                        },
                        "hsv": {
                            "h": 206.3529411764706,
                            "s": 1,
                            "v": 1,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "blue_400"
                    ]
                },
                "blue_500": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.52549",
                        "blue": "0.93725",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#0086EF"
                    },
                    "name": "blue_500",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "blue_500",
                        "hex": "0086ef",
                        "rgb": {
                            "r": 0,
                            "g": 134,
                            "b": 239,
                            "a": 1
                        },
                        "hsl": {
                            "h": 206.35983263598325,
                            "s": 1,
                            "l": 0.46862745098039216,
                            "a": 1
                        },
                        "hsv": {
                            "h": 206.35983263598325,
                            "s": 1,
                            "v": 0.9372549019607843,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "blue_500"
                    ]
                },
                "blue_600": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.49020",
                        "blue": "0.87451",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#007DDF"
                    },
                    "name": "blue_600",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "blue_600",
                        "hex": "007ddf",
                        "rgb": {
                            "r": 0,
                            "g": 125,
                            "b": 223,
                            "a": 1
                        },
                        "hsl": {
                            "h": 206.3677130044843,
                            "s": 1,
                            "l": 0.4372549019607843,
                            "a": 1
                        },
                        "hsv": {
                            "h": 206.3677130044843,
                            "s": 1,
                            "v": 0.8745098039215686,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "blue_600"
                    ]
                },
                "blue_700": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.45490",
                        "blue": "0.81176",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#0074CF"
                    },
                    "name": "blue_700",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "blue_700",
                        "hex": "0074cf",
                        "rgb": {
                            "r": 0,
                            "g": 116,
                            "b": 207,
                            "a": 1
                        },
                        "hsl": {
                            "h": 206.3768115942029,
                            "s": 1,
                            "l": 0.40588235294117647,
                            "a": 1
                        },
                        "hsv": {
                            "h": 206.3768115942029,
                            "s": 1,
                            "v": 0.8117647058823529,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "blue_700"
                    ]
                },
                "green_400": {
                    "value": {
                        "red": "0.06667",
                        "green": "0.65882",
                        "blue": "0.37255",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#11A85F"
                    },
                    "name": "green_400",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "green_400",
                        "hex": "11a85f",
                        "rgb": {
                            "r": 17,
                            "g": 168,
                            "b": 95,
                            "a": 1
                        },
                        "hsl": {
                            "h": 150.9933774834437,
                            "s": 0.8162162162162162,
                            "l": 0.3627450980392157,
                            "a": 1
                        },
                        "hsv": {
                            "h": 150.9933774834437,
                            "s": 0.8988095238095238,
                            "v": 0.6588235294117647,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "green_400"
                    ]
                },
                "green_500": {
                    "value": {
                        "red": "0.07451",
                        "green": "0.72941",
                        "blue": "0.41176",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#13BA69"
                    },
                    "name": "green_500",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "green_500",
                        "hex": "13ba69",
                        "rgb": {
                            "r": 19,
                            "g": 186,
                            "b": 105,
                            "a": 1
                        },
                        "hsl": {
                            "h": 150.89820359281435,
                            "s": 0.8146341463414635,
                            "l": 0.40196078431372545,
                            "a": 1
                        },
                        "hsv": {
                            "h": 150.89820359281435,
                            "s": 0.8978494623655915,
                            "v": 0.7294117647058823,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "green_500"
                    ]
                },
                "green_600": {
                    "value": {
                        "red": "0.08235",
                        "green": "0.80392",
                        "blue": "0.45490",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#15CD74"
                    },
                    "name": "green_600",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "green_600",
                        "hex": "15cd74",
                        "rgb": {
                            "r": 21,
                            "g": 205,
                            "b": 116,
                            "a": 1
                        },
                        "hsl": {
                            "h": 150.97826086956522,
                            "s": 0.8141592920353982,
                            "l": 0.4431372549019608,
                            "a": 1
                        },
                        "hsv": {
                            "h": 150.97826086956522,
                            "s": 0.897560975609756,
                            "v": 0.803921568627451,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "green_600"
                    ]
                },
                "green_700": {
                    "value": {
                        "red": "0.09020",
                        "green": "0.87451",
                        "blue": "0.49412",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#17DF7E"
                    },
                    "name": "green_700",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "green_700",
                        "hex": "17df7e",
                        "rgb": {
                            "r": 23,
                            "g": 223,
                            "b": 126,
                            "a": 1
                        },
                        "hsl": {
                            "h": 150.9,
                            "s": 0.8130081300813008,
                            "l": 0.4823529411764706,
                            "a": 1
                        },
                        "hsv": {
                            "h": 150.9,
                            "s": 0.8968609865470852,
                            "v": 0.8745098039215686,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "green_700"
                    ]
                },
                "red_400": {
                    "value": {
                        "red": "0.84314",
                        "green": "0.25098",
                        "blue": "0.27059",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#D74045"
                    },
                    "name": "red_400",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "red_400",
                        "hex": "d74045",
                        "rgb": {
                            "r": 215,
                            "g": 64,
                            "b": 69,
                            "a": 1
                        },
                        "hsl": {
                            "h": 358.0132450331126,
                            "s": 0.6536796536796537,
                            "l": 0.5470588235294118,
                            "a": 1
                        },
                        "hsv": {
                            "h": 358.0132450331126,
                            "s": 0.7023255813953488,
                            "v": 0.8431372549019608,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "red_400"
                    ]
                },
                "red_500": {
                    "value": {
                        "red": "0.85490",
                        "green": "0.29804",
                        "blue": "0.31765",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#DA4C51"
                    },
                    "name": "red_500",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "red_500",
                        "hex": "da4c51",
                        "rgb": {
                            "r": 218,
                            "g": 76,
                            "b": 81,
                            "a": 1
                        },
                        "hsl": {
                            "h": 357.88732394366195,
                            "s": 0.6574074074074076,
                            "l": 0.5764705882352941,
                            "a": 1
                        },
                        "hsv": {
                            "h": 357.88732394366195,
                            "s": 0.6513761467889909,
                            "v": 0.8549019607843137,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "red_500"
                    ]
                },
                "red_600": {
                    "value": {
                        "red": "0.86275",
                        "green": "0.34510",
                        "blue": "0.36078",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#DC585C"
                    },
                    "name": "red_600",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "red_600",
                        "hex": "dc585c",
                        "rgb": {
                            "r": 220,
                            "g": 88,
                            "b": 92,
                            "a": 1
                        },
                        "hsl": {
                            "h": 358.1818181818182,
                            "s": 0.6534653465346536,
                            "l": 0.603921568627451,
                            "a": 1
                        },
                        "hsv": {
                            "h": 358.1818181818182,
                            "s": 0.6,
                            "v": 0.8627450980392157,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "red_600"
                    ]
                },
                "red_700": {
                    "value": {
                        "red": "0.87451",
                        "green": "0.39216",
                        "blue": "0.40784",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#DF6468"
                    },
                    "name": "red_700",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "red_700",
                        "hex": "df6468",
                        "rgb": {
                            "r": 223,
                            "g": 100,
                            "b": 104,
                            "a": 1
                        },
                        "hsl": {
                            "h": 358.0487804878049,
                            "s": 0.6577540106951871,
                            "l": 0.6333333333333333,
                            "a": 1
                        },
                        "hsv": {
                            "h": 358.0487804878049,
                            "s": 0.5515695067264574,
                            "v": 0.8745098039215686,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "red_700"
                    ]
                },
                "orange_400": {
                    "value": {
                        "red": "0.81961",
                        "green": "0.44314",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#D17100"
                    },
                    "name": "orange_400",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "orange_400",
                        "hex": "d17100",
                        "rgb": {
                            "r": 209,
                            "g": 113,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 32.440191387559814,
                            "s": 1,
                            "l": 0.40980392156862744,
                            "a": 1
                        },
                        "hsv": {
                            "h": 32.440191387559814,
                            "s": 1,
                            "v": 0.8196078431372549,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "orange_400"
                    ]
                },
                "orange_500": {
                    "value": {
                        "red": "0.89412",
                        "green": "0.48235",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#E47B00"
                    },
                    "name": "orange_500",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "orange_500",
                        "hex": "e47b00",
                        "rgb": {
                            "r": 228,
                            "g": 123,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 32.36842105263158,
                            "s": 1,
                            "l": 0.4470588235294118,
                            "a": 1
                        },
                        "hsv": {
                            "h": 32.36842105263158,
                            "s": 1,
                            "v": 0.8941176470588236,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "orange_500"
                    ]
                },
                "orange_600": {
                    "value": {
                        "red": "0.96863",
                        "green": "0.52157",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#F78500"
                    },
                    "name": "orange_600",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "orange_600",
                        "hex": "f78500",
                        "rgb": {
                            "r": 247,
                            "g": 133,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 32.307692307692314,
                            "s": 1,
                            "l": 0.4843137254901961,
                            "a": 1
                        },
                        "hsv": {
                            "h": 32.307692307692314,
                            "s": 1,
                            "v": 0.9686274509803922,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "orange_600"
                    ]
                },
                "orange_700": {
                    "value": {
                        "red": "1.00000",
                        "green": "0.56078",
                        "blue": "0.03922",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#FF8F0A"
                    },
                    "name": "orange_700",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "orange_700",
                        "hex": "ff8f0a",
                        "rgb": {
                            "r": 255,
                            "g": 143,
                            "b": 10,
                            "a": 1
                        },
                        "hsl": {
                            "h": 32.57142857142858,
                            "s": 1,
                            "l": 0.5196078431372549,
                            "a": 1
                        },
                        "hsv": {
                            "h": 32.57142857142858,
                            "s": 0.9607843137254902,
                            "v": 1,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "orange_700"
                    ]
                },
                "yellow_400": {
                    "value": {
                        "red": "0.68235",
                        "green": "0.57255",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#AE9200"
                    },
                    "name": "yellow_400",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "yellow_400",
                        "hex": "ae9200",
                        "rgb": {
                            "r": 174,
                            "g": 146,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 50.34482758620689,
                            "s": 1,
                            "l": 0.3411764705882353,
                            "a": 1
                        },
                        "hsv": {
                            "h": 50.34482758620689,
                            "s": 1,
                            "v": 0.6823529411764706,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "yellow_400"
                    ]
                },
                "yellow_500": {
                    "value": {
                        "red": "0.76471",
                        "green": "0.64314",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#C3A400"
                    },
                    "name": "yellow_500",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "yellow_500",
                        "hex": "c3a400",
                        "rgb": {
                            "r": 195,
                            "g": 164,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 50.461538461538474,
                            "s": 1,
                            "l": 0.38235294117647056,
                            "a": 1
                        },
                        "hsv": {
                            "h": 50.461538461538474,
                            "s": 1,
                            "v": 0.7647058823529411,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "yellow_500"
                    ]
                },
                "yellow_600": {
                    "value": {
                        "red": "0.84706",
                        "green": "0.71373",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#D8B600"
                    },
                    "name": "yellow_600",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "yellow_600",
                        "hex": "d8b600",
                        "rgb": {
                            "r": 216,
                            "g": 182,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 50.55555555555556,
                            "s": 1,
                            "l": 0.4235294117647059,
                            "a": 1
                        },
                        "hsv": {
                            "h": 50.55555555555556,
                            "s": 1,
                            "v": 0.8470588235294118,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "yellow_600"
                    ]
                },
                "yellow_700": {
                    "value": {
                        "red": "0.92941",
                        "green": "0.78039",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#EDC700"
                    },
                    "name": "yellow_700",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "yellow_700",
                        "hex": "edc700",
                        "rgb": {
                            "r": 237,
                            "g": 199,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 50.379746835443036,
                            "s": 1,
                            "l": 0.4647058823529412,
                            "a": 1
                        },
                        "hsv": {
                            "h": 50.379746835443036,
                            "s": 1,
                            "v": 0.9294117647058824,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "yellow_700"
                    ]
                },
                "cyan_400": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.65490",
                        "blue": "0.80000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#00A7CC"
                    },
                    "name": "cyan_400",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "cyan_400",
                        "hex": "00a7cc",
                        "rgb": {
                            "r": 0,
                            "g": 167,
                            "b": 204,
                            "a": 1
                        },
                        "hsl": {
                            "h": 190.88235294117646,
                            "s": 1,
                            "l": 0.4,
                            "a": 1
                        },
                        "hsv": {
                            "h": 190.88235294117646,
                            "s": 1,
                            "v": 0.8,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "cyan_400"
                    ]
                },
                "cyan_500": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.71765",
                        "blue": "0.87451",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#00B7DF"
                    },
                    "name": "cyan_500",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "cyan_500",
                        "hex": "00b7df",
                        "rgb": {
                            "r": 0,
                            "g": 183,
                            "b": 223,
                            "a": 1
                        },
                        "hsl": {
                            "h": 190.76233183856502,
                            "s": 1,
                            "l": 0.4372549019607843,
                            "a": 1
                        },
                        "hsv": {
                            "h": 190.76233183856502,
                            "s": 1,
                            "v": 0.8745098039215686,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "cyan_500"
                    ]
                },
                "cyan_600": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.77647",
                        "blue": "0.94902",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#00C6F2"
                    },
                    "name": "cyan_600",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "cyan_600",
                        "hex": "00c6f2",
                        "rgb": {
                            "r": 0,
                            "g": 198,
                            "b": 242,
                            "a": 1
                        },
                        "hsl": {
                            "h": 190.9090909090909,
                            "s": 1,
                            "l": 0.4745098039215686,
                            "a": 1
                        },
                        "hsv": {
                            "h": 190.9090909090909,
                            "s": 1,
                            "v": 0.9490196078431372,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "cyan_600"
                    ]
                },
                "cyan_700": {
                    "value": {
                        "red": "0.02353",
                        "green": "0.82353",
                        "blue": "1.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#06D2FF"
                    },
                    "name": "cyan_700",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "cyan_700",
                        "hex": "06d2ff",
                        "rgb": {
                            "r": 6,
                            "g": 210,
                            "b": 255,
                            "a": 1
                        },
                        "hsl": {
                            "h": 190.84337349397592,
                            "s": 1,
                            "l": 0.5117647058823529,
                            "a": 1
                        },
                        "hsv": {
                            "h": 190.84337349397592,
                            "s": 0.9764705882352941,
                            "v": 1,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "cyan_700"
                    ]
                },
                "indigo_400": {
                    "value": {
                        "red": "0.32549",
                        "green": "0.45882",
                        "blue": "0.93725",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#5375EF"
                    },
                    "name": "indigo_400",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "indigo_400",
                        "hex": "5375ef",
                        "rgb": {
                            "r": 83,
                            "g": 117,
                            "b": 239,
                            "a": 1
                        },
                        "hsl": {
                            "h": 226.9230769230769,
                            "s": 0.8297872340425532,
                            "l": 0.6313725490196078,
                            "a": 1
                        },
                        "hsv": {
                            "h": 226.9230769230769,
                            "s": 0.6527196652719666,
                            "v": 0.9372549019607843,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "indigo_400"
                    ]
                },
                "indigo_500": {
                    "value": {
                        "red": "0.36863",
                        "green": "0.49412",
                        "blue": "0.94118",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#5E7EF0"
                    },
                    "name": "indigo_500",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "indigo_500",
                        "hex": "5e7ef0",
                        "rgb": {
                            "r": 94,
                            "g": 126,
                            "b": 240,
                            "a": 1
                        },
                        "hsl": {
                            "h": 226.84931506849313,
                            "s": 0.8295454545454545,
                            "l": 0.6549019607843137,
                            "a": 1
                        },
                        "hsv": {
                            "h": 226.84931506849313,
                            "s": 0.6083333333333333,
                            "v": 0.9411764705882353,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "indigo_500"
                    ]
                },
                "indigo_600": {
                    "value": {
                        "red": "0.41176",
                        "green": "0.52549",
                        "blue": "0.94510",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#6986F1"
                    },
                    "name": "indigo_600",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "indigo_600",
                        "hex": "6986f1",
                        "rgb": {
                            "r": 105,
                            "g": 134,
                            "b": 241,
                            "a": 1
                        },
                        "hsl": {
                            "h": 227.20588235294116,
                            "s": 0.8292682926829268,
                            "l": 0.6784313725490196,
                            "a": 1
                        },
                        "hsv": {
                            "h": 227.20588235294116,
                            "s": 0.5643153526970954,
                            "v": 0.9450980392156862,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "indigo_600"
                    ]
                },
                "indigo_700": {
                    "value": {
                        "red": "0.45098",
                        "green": "0.56078",
                        "blue": "0.94902",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#738FF2"
                    },
                    "name": "indigo_700",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "indigo_700",
                        "hex": "738ff2",
                        "rgb": {
                            "r": 115,
                            "g": 143,
                            "b": 242,
                            "a": 1
                        },
                        "hsl": {
                            "h": 226.77165354330708,
                            "s": 0.830065359477124,
                            "l": 0.7,
                            "a": 1
                        },
                        "hsv": {
                            "h": 226.77165354330708,
                            "s": 0.524793388429752,
                            "v": 0.9490196078431372,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "indigo_700"
                    ]
                },
                "purple_400": {
                    "value": {
                        "red": "0.59216",
                        "green": "0.32549",
                        "blue": "0.93725",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#9753EF"
                    },
                    "name": "purple_400",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "purple_400",
                        "hex": "9753ef",
                        "rgb": {
                            "r": 151,
                            "g": 83,
                            "b": 239,
                            "a": 1
                        },
                        "hsl": {
                            "h": 266.1538461538462,
                            "s": 0.8297872340425532,
                            "l": 0.6313725490196078,
                            "a": 1
                        },
                        "hsv": {
                            "h": 266.1538461538462,
                            "s": 0.6527196652719666,
                            "v": 0.9372549019607843,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "purple_400"
                    ]
                },
                "purple_500": {
                    "value": {
                        "red": "0.61961",
                        "green": "0.36863",
                        "blue": "0.94118",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#9E5EF0"
                    },
                    "name": "purple_500",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "purple_500",
                        "hex": "9e5ef0",
                        "rgb": {
                            "r": 158,
                            "g": 94,
                            "b": 240,
                            "a": 1
                        },
                        "hsl": {
                            "h": 266.3013698630137,
                            "s": 0.8295454545454545,
                            "l": 0.6549019607843137,
                            "a": 1
                        },
                        "hsv": {
                            "h": 266.3013698630137,
                            "s": 0.6083333333333333,
                            "v": 0.9411764705882353,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "purple_500"
                    ]
                },
                "purple_600": {
                    "value": {
                        "red": "0.64314",
                        "green": "0.41176",
                        "blue": "0.94510",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#A469F1"
                    },
                    "name": "purple_600",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "purple_600",
                        "hex": "a469f1",
                        "rgb": {
                            "r": 164,
                            "g": 105,
                            "b": 241,
                            "a": 1
                        },
                        "hsl": {
                            "h": 266.02941176470586,
                            "s": 0.8292682926829268,
                            "l": 0.6784313725490196,
                            "a": 1
                        },
                        "hsv": {
                            "h": 266.02941176470586,
                            "s": 0.5643153526970954,
                            "v": 0.9450980392156862,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "purple_600"
                    ]
                },
                "purple_700": {
                    "value": {
                        "red": "0.67059",
                        "green": "0.45098",
                        "blue": "0.94902",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#AB73F2"
                    },
                    "name": "purple_700",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "purple_700",
                        "hex": "ab73f2",
                        "rgb": {
                            "r": 171,
                            "g": 115,
                            "b": 242,
                            "a": 1
                        },
                        "hsl": {
                            "h": 266.45669291338584,
                            "s": 0.830065359477124,
                            "l": 0.7,
                            "a": 1
                        },
                        "hsv": {
                            "h": 266.45669291338584,
                            "s": 0.524793388429752,
                            "v": 0.9490196078431372,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "purple_700"
                    ]
                },
                "pink_400": {
                    "value": {
                        "red": "0.80784",
                        "green": "0.19608",
                        "blue": "0.60000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#CE3299"
                    },
                    "name": "pink_400",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "pink_400",
                        "hex": "ce3299",
                        "rgb": {
                            "r": 206,
                            "g": 50,
                            "b": 153,
                            "a": 1
                        },
                        "hsl": {
                            "h": 320.38461538461536,
                            "s": 0.6141732283464567,
                            "l": 0.5019607843137255,
                            "a": 1
                        },
                        "hsv": {
                            "h": 320.38461538461536,
                            "s": 0.7572815533980582,
                            "v": 0.807843137254902,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "pink_400"
                    ]
                },
                "pink_500": {
                    "value": {
                        "red": "0.81961",
                        "green": "0.24706",
                        "blue": "0.62353",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#D13F9F"
                    },
                    "name": "pink_500",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "pink_500",
                        "hex": "d13f9f",
                        "rgb": {
                            "r": 209,
                            "g": 63,
                            "b": 159,
                            "a": 1
                        },
                        "hsl": {
                            "h": 320.54794520547944,
                            "s": 0.6134453781512604,
                            "l": 0.5333333333333333,
                            "a": 1
                        },
                        "hsv": {
                            "h": 320.54794520547944,
                            "s": 0.6985645933014354,
                            "v": 0.8196078431372549,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "pink_500"
                    ]
                },
                "pink_600": {
                    "value": {
                        "red": "0.83137",
                        "green": "0.29804",
                        "blue": "0.65098",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#D44CA6"
                    },
                    "name": "pink_600",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "pink_600",
                        "hex": "d44ca6",
                        "rgb": {
                            "r": 212,
                            "g": 76,
                            "b": 166,
                            "a": 1
                        },
                        "hsl": {
                            "h": 320.2941176470588,
                            "s": 0.6126126126126129,
                            "l": 0.5647058823529412,
                            "a": 1
                        },
                        "hsv": {
                            "h": 320.2941176470588,
                            "s": 0.6415094339622642,
                            "v": 0.8313725490196079,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "pink_600"
                    ]
                },
                "pink_700": {
                    "value": {
                        "red": "0.84314",
                        "green": "0.34510",
                        "blue": "0.67451",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#D758AC"
                    },
                    "name": "pink_700",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "pink_700",
                        "hex": "d758ac",
                        "rgb": {
                            "r": 215,
                            "g": 88,
                            "b": 172,
                            "a": 1
                        },
                        "hsl": {
                            "h": 320.3149606299213,
                            "s": 0.6135265700483092,
                            "l": 0.5941176470588235,
                            "a": 1
                        },
                        "hsv": {
                            "h": 320.3149606299213,
                            "s": 0.5906976744186047,
                            "v": 0.8431372549019608,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "pink_700"
                    ]
                },
                "gray_25": {
                    "value": {
                        "red": "0.91765",
                        "green": "0.91765",
                        "blue": "0.91765",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#EAEAEA"
                    },
                    "name": "gray_25",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "gray_25",
                        "hex": "eaeaea",
                        "rgb": {
                            "r": 234,
                            "g": 234,
                            "b": 234,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.9176470588235294,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.9176470588235294,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "gray_25"
                    ]
                },
                "gray_50": {
                    "value": {
                        "red": "0.83529",
                        "green": "0.83529",
                        "blue": "0.83529",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#D5D5D5"
                    },
                    "name": "gray_50",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "gray_50",
                        "hex": "d5d5d5",
                        "rgb": {
                            "r": 213,
                            "g": 213,
                            "b": 213,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.8352941176470589,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.8352941176470589,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "gray_50"
                    ]
                },
                "gray_100": {
                    "value": {
                        "red": "0.74902",
                        "green": "0.74902",
                        "blue": "0.74902",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#BFBFBF"
                    },
                    "name": "gray_100",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "gray_100",
                        "hex": "bfbfbf",
                        "rgb": {
                            "r": 191,
                            "g": 191,
                            "b": 191,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.7490196078431373,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.7490196078431373,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "gray_100"
                    ]
                },
                "gray_200": {
                    "value": {
                        "red": "0.66667",
                        "green": "0.66667",
                        "blue": "0.66667",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#AAAAAA"
                    },
                    "name": "gray_200",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "gray_200",
                        "hex": "aaaaaa",
                        "rgb": {
                            "r": 170,
                            "g": 170,
                            "b": 170,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.6666666666666666,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.6666666666666666,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "gray_200"
                    ]
                },
                "gray_300": {
                    "value": {
                        "red": "0.58431",
                        "green": "0.58431",
                        "blue": "0.58431",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#959595"
                    },
                    "name": "gray_300",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "gray_300",
                        "hex": "959595",
                        "rgb": {
                            "r": 149,
                            "g": 149,
                            "b": 149,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.5843137254901961,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.5843137254901961,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "gray_300"
                    ]
                },
                "gray_400": {
                    "value": {
                        "red": "0.50196",
                        "green": "0.50196",
                        "blue": "0.50196",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#808080"
                    },
                    "name": "gray_400",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "gray_400",
                        "hex": "808080",
                        "rgb": {
                            "r": 128,
                            "g": 128,
                            "b": 128,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.5019607843137255,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.5019607843137255,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "gray_400"
                    ]
                },
                "gray_500": {
                    "value": {
                        "red": "0.41569",
                        "green": "0.41569",
                        "blue": "0.41569",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#6A6A6A"
                    },
                    "name": "gray_500",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "gray_500",
                        "hex": "6a6a6a",
                        "rgb": {
                            "r": 106,
                            "g": 106,
                            "b": 106,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.41568627450980394,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.41568627450980394,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "gray_500"
                    ]
                },
                "gray_600": {
                    "value": {
                        "red": "0.33333",
                        "green": "0.33333",
                        "blue": "0.33333",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#555555"
                    },
                    "name": "gray_600",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "gray_600",
                        "hex": "555555",
                        "rgb": {
                            "r": 85,
                            "g": 85,
                            "b": 85,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.3333333333333333,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.3333333333333333,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "gray_600"
                    ]
                },
                "gray_700": {
                    "value": {
                        "red": "0.25098",
                        "green": "0.25098",
                        "blue": "0.25098",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#404040"
                    },
                    "name": "gray_700",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "gray_700",
                        "hex": "404040",
                        "rgb": {
                            "r": 64,
                            "g": 64,
                            "b": 64,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.25098039215686274,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.25098039215686274,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "gray_700"
                    ]
                },
                "gray_800": {
                    "value": {
                        "red": "0.16863",
                        "green": "0.16863",
                        "blue": "0.16863",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#2B2B2B"
                    },
                    "name": "gray_800",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "gray_800",
                        "hex": "2b2b2b",
                        "rgb": {
                            "r": 43,
                            "g": 43,
                            "b": 43,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.16862745098039217,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.16862745098039217,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "gray_800"
                    ]
                },
                "gray_900": {
                    "value": {
                        "red": "0.08235",
                        "green": "0.08235",
                        "blue": "0.08235",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#151515"
                    },
                    "name": "gray_900",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "base",
                        "subitem": "gray_900",
                        "hex": "151515",
                        "rgb": {
                            "r": 21,
                            "g": 21,
                            "b": 21,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.08235294117647059,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.08235294117647059,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "base",
                        "gray_900"
                    ]
                }
            },
            "semantic": {
                "positive": {
                    "value": {
                        "red": "0.06667",
                        "green": "0.65882",
                        "blue": "0.37255",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#11A85F"
                    },
                    "name": "positive",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "semantic",
                        "subitem": "positive",
                        "hex": "11a85f",
                        "rgb": {
                            "r": 17,
                            "g": 168,
                            "b": 95,
                            "a": 1
                        },
                        "hsl": {
                            "h": 150.9933774834437,
                            "s": 0.8162162162162162,
                            "l": 0.3627450980392157,
                            "a": 1
                        },
                        "hsv": {
                            "h": 150.9933774834437,
                            "s": 0.8988095238095238,
                            "v": 0.6588235294117647,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "semantic",
                        "positive"
                    ]
                },
                "warning": {
                    "value": {
                        "red": "0.81961",
                        "green": "0.44314",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#D17100"
                    },
                    "name": "warning",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "semantic",
                        "subitem": "warning",
                        "hex": "d17100",
                        "rgb": {
                            "r": 209,
                            "g": 113,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 32.440191387559814,
                            "s": 1,
                            "l": 0.40980392156862744,
                            "a": 1
                        },
                        "hsv": {
                            "h": 32.440191387559814,
                            "s": 1,
                            "v": 0.8196078431372549,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "semantic",
                        "warning"
                    ]
                },
                "negative": {
                    "value": {
                        "red": "0.81961",
                        "green": "0.00000",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#D10000"
                    },
                    "name": "negative",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "semantic",
                        "subitem": "negative",
                        "hex": "d10000",
                        "rgb": {
                            "r": 209,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 1,
                            "l": 0.40980392156862744,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 1,
                            "v": 0.8196078431372549,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "semantic",
                        "negative"
                    ]
                },
                "informative": {
                    "value": {
                        "red": "0.03137",
                        "green": "0.57255",
                        "blue": "1.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#0892FF"
                    },
                    "name": "informative",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "semantic",
                        "subitem": "informative",
                        "hex": "0892ff",
                        "rgb": {
                            "r": 8,
                            "g": 146,
                            "b": 255,
                            "a": 1
                        },
                        "hsl": {
                            "h": 206.47773279352225,
                            "s": 1,
                            "l": 0.5156862745098039,
                            "a": 1
                        },
                        "hsv": {
                            "h": 206.47773279352225,
                            "s": 0.9686274509803922,
                            "v": 1,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "semantic",
                        "informative"
                    ]
                }
            },
            "text": {
                "primary": {
                    "value": {
                        "red": "0.50196",
                        "green": "0.50196",
                        "blue": "0.50196",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.light.base.gray_400.value}"
                    },
                    "name": "primary",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "text",
                        "subitem": "primary",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "text",
                        "primary"
                    ]
                },
                "secondary": {
                    "value": {
                        "red": "0.41569",
                        "green": "0.41569",
                        "blue": "0.41569",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.light.base.gray_500.value}"
                    },
                    "name": "secondary",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "text",
                        "subitem": "secondary",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "text",
                        "secondary"
                    ]
                },
                "disabled": {
                    "value": {
                        "red": "0.58431",
                        "green": "0.58431",
                        "blue": "0.58431",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.light.base.gray_300.value}"
                    },
                    "name": "disabled",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "text",
                        "subitem": "disabled",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "text",
                        "disabled"
                    ]
                }
            },
            "controls": {
                "default": {
                    "value": {
                        "red": "0.83529",
                        "green": "0.83529",
                        "blue": "0.83529",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.light.base.gray_50.value}"
                    },
                    "name": "default",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "controls",
                        "subitem": "default",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "controls",
                        "default"
                    ]
                },
                "hover": {
                    "value": {
                        "red": "0.83137",
                        "green": "0.83137",
                        "blue": "0.83137",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#D4D4D4"
                    },
                    "name": "hover",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "controls",
                        "subitem": "hover",
                        "hex": "d4d4d4",
                        "rgb": {
                            "r": 212,
                            "g": 212,
                            "b": 212,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.8313725490196079,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.8313725490196079,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "controls",
                        "hover"
                    ]
                },
                "active": {
                    "value": {
                        "red": "0.81961",
                        "green": "0.81961",
                        "blue": "0.81961",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#D1D1D1"
                    },
                    "name": "active",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "controls",
                        "subitem": "active",
                        "hex": "d1d1d1",
                        "rgb": {
                            "r": 209,
                            "g": 209,
                            "b": 209,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.8196078431372549,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.8196078431372549,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "controls",
                        "active"
                    ]
                },
                "focused": {
                    "value": {
                        "red": "0.83529",
                        "green": "0.83529",
                        "blue": "0.83529",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.light.base.gray_50.value}"
                    },
                    "name": "focused",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "controls",
                        "subitem": "focused",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "controls",
                        "focused"
                    ]
                },
                "disabled": {
                    "value": {
                        "red": "0.81961",
                        "green": "0.81961",
                        "blue": "0.81961",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#D1D1D1"
                    },
                    "name": "disabled",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "controls",
                        "subitem": "disabled",
                        "hex": "d1d1d1",
                        "rgb": {
                            "r": 209,
                            "g": 209,
                            "b": 209,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.8196078431372549,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.8196078431372549,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "controls",
                        "disabled"
                    ]
                },
                "border_default": {
                    "value": {
                        "red": "0.74902",
                        "green": "0.74902",
                        "blue": "0.74902",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.light.base.gray_100.value}"
                    },
                    "name": "border_default",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "controls",
                        "subitem": "border_default",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "controls",
                        "border_default"
                    ]
                },
                "border_hover": {
                    "value": {
                        "red": "0.66667",
                        "green": "0.66667",
                        "blue": "0.66667",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.light.base.gray_200.value}"
                    },
                    "name": "border_hover",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "controls",
                        "subitem": "border_hover",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "controls",
                        "border_hover"
                    ]
                },
                "border_pressed": {
                    "value": {
                        "red": "0.66667",
                        "green": "0.66667",
                        "blue": "0.66667",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.light.base.gray_200.value}"
                    },
                    "name": "border_pressed",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "controls",
                        "subitem": "border_pressed",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "controls",
                        "border_pressed"
                    ]
                },
                "border_disabled": {
                    "value": {
                        "red": "0.83529",
                        "green": "0.83529",
                        "blue": "0.83529",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.light.base.gray_50.value}"
                    },
                    "name": "border_disabled",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "controls",
                        "subitem": "border_disabled",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "controls",
                        "border_disabled"
                    ]
                }
            },
            "background": {
                "inspector": {
                    "value": {
                        "red": "0.91765",
                        "green": "0.91765",
                        "blue": "0.91765",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.light.base.gray_25.value}"
                    },
                    "name": "inspector",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "background",
                        "subitem": "inspector",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "background",
                        "inspector"
                    ]
                },
                "flyout": {
                    "value": {
                        "red": "0.83529",
                        "green": "0.83529",
                        "blue": "0.83529",
                        "alpha": 0.75
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(213, 213, 213, 0.75)"
                    },
                    "name": "flyout",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "background",
                        "subitem": "flyout",
                        "hex": "d5d5d5",
                        "rgb": {
                            "r": 213,
                            "g": 213,
                            "b": 213,
                            "a": 0.75
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.8352941176470589,
                            "a": 0.75
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.8352941176470589,
                            "a": 0.75
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "background",
                        "flyout"
                    ]
                },
                "modal": {
                    "value": {
                        "red": "0.83529",
                        "green": "0.83529",
                        "blue": "0.83529",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.light.base.gray_50.value}"
                    },
                    "name": "modal",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "background",
                        "subitem": "modal",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "background",
                        "modal"
                    ]
                },
                "tooltip": {
                    "value": {
                        "red": "0.00392",
                        "green": "0.00392",
                        "blue": "0.00392",
                        "alpha": 0.75
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(1, 1, 1, 0.75)"
                    },
                    "name": "tooltip",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "background",
                        "subitem": "tooltip",
                        "hex": "010101",
                        "rgb": {
                            "r": 1,
                            "g": 1,
                            "b": 1,
                            "a": 0.75
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.00392156862745098,
                            "a": 0.75
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.00392156862745098,
                            "a": 0.75
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "background",
                        "tooltip"
                    ]
                },
                "toolbar": {
                    "value": {
                        "red": "0.00392",
                        "green": "0.00392",
                        "blue": "0.00392",
                        "alpha": 0.25
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(1, 1, 1, 0.25)"
                    },
                    "name": "toolbar",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "background",
                        "subitem": "toolbar",
                        "hex": "010101",
                        "rgb": {
                            "r": 1,
                            "g": 1,
                            "b": 1,
                            "a": 0.25
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.00392156862745098,
                            "a": 0.25
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.00392156862745098,
                            "a": 0.25
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "background",
                        "toolbar"
                    ]
                },
                "toolbar_75": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.00000",
                        "blue": "0.00000",
                        "alpha": 0.75
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(0, 0, 0, 0.75)"
                    },
                    "name": "toolbar_75",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "background",
                        "subitem": "toolbar_75",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 0.75
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 0.75
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 0.75
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "background",
                        "toolbar_75"
                    ]
                }
            },
            "highlight": {
                "default": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.56078",
                        "blue": "1.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.static.base.blue_400.value}"
                    },
                    "name": "default",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "highlight",
                        "subitem": "default",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "highlight",
                        "default"
                    ]
                },
                "hover": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.52549",
                        "blue": "0.93725",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.static.base.blue_500.value}"
                    },
                    "name": "hover",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "highlight",
                        "subitem": "hover",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "highlight",
                        "hover"
                    ]
                },
                "active": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.45490",
                        "blue": "0.81176",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.static.base.blue_700.value}"
                    },
                    "name": "active",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "highlight",
                        "subitem": "active",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "highlight",
                        "active"
                    ]
                },
                "focus": {
                    "value": {
                        "red": "0.21176",
                        "green": "0.65098",
                        "blue": "1.00000",
                        "alpha": 0.75
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(54, 166, 255, 0.75)"
                    },
                    "name": "focus",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "highlight",
                        "subitem": "focus",
                        "hex": "36a6ff",
                        "rgb": {
                            "r": 54,
                            "g": 166,
                            "b": 255,
                            "a": 0.75
                        },
                        "hsl": {
                            "h": 206.56716417910445,
                            "s": 1,
                            "l": 0.6058823529411764,
                            "a": 0.75
                        },
                        "hsv": {
                            "h": 206.56716417910445,
                            "s": 0.788235294117647,
                            "v": 1,
                            "a": 0.75
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "highlight",
                        "focus"
                    ]
                },
                "ghosted": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.52549",
                        "blue": "0.93725",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.static.base.blue_500.value}"
                    },
                    "name": "ghosted",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "highlight",
                        "subitem": "ghosted",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "highlight",
                        "ghosted"
                    ]
                },
                "disabled": {
                    "value": {
                        "red": "0.80000",
                        "green": "0.80000",
                        "blue": "0.80000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "#CCCCCC"
                    },
                    "name": "disabled",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "highlight",
                        "subitem": "disabled",
                        "hex": "cccccc",
                        "rgb": {
                            "r": 204,
                            "g": 204,
                            "b": 204,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.8,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.8,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "highlight",
                        "disabled"
                    ]
                }
            },
            "borders": {
                "border_50": {
                    "value": {
                        "red": "0.83529",
                        "green": "0.83529",
                        "blue": "0.83529",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.light.base.gray_50.value}"
                    },
                    "name": "border_50",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "borders",
                        "subitem": "border_50",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "borders",
                        "border_50"
                    ]
                },
                "border_100": {
                    "value": {
                        "red": "0.74902",
                        "green": "0.74902",
                        "blue": "0.74902",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.light.base.gray_100.value}"
                    },
                    "name": "border_100",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "borders",
                        "subitem": "border_100",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "borders",
                        "border_100"
                    ]
                },
                "border_200": {
                    "value": {
                        "red": "0.66667",
                        "green": "0.66667",
                        "blue": "0.66667",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.light.base.gray_200.value}"
                    },
                    "name": "border_200",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "borders",
                        "subitem": "border_200",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "borders",
                        "border_200"
                    ]
                }
            },
            "icons": {
                "primary": {
                    "value": {
                        "red": "0.16863",
                        "green": "0.16863",
                        "blue": "0.16863",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.light.base.gray_800.value}"
                    },
                    "name": "primary",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "icons",
                        "subitem": "primary",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "icons",
                        "primary"
                    ]
                },
                "secondary": {
                    "value": {
                        "red": "0.58431",
                        "green": "0.58431",
                        "blue": "0.58431",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "{color.light.base.gray_300.value}"
                    },
                    "name": "secondary",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "icons",
                        "subitem": "secondary",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "icons",
                        "secondary"
                    ]
                }
            },
            "input": {
                "positive_default": {
                    "value": {
                        "red": "0.06275",
                        "green": "0.61961",
                        "blue": "0.35294",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(16, 158, 90, 0.5)"
                    },
                    "name": "positive_default",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "input",
                        "subitem": "positive_default",
                        "hex": "109e5a",
                        "rgb": {
                            "r": 16,
                            "g": 158,
                            "b": 90,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 151.26760563380282,
                            "s": 0.8160919540229885,
                            "l": 0.3411764705882353,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 151.26760563380282,
                            "s": 0.8987341772151899,
                            "v": 0.6196078431372549,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "input",
                        "positive_default"
                    ]
                },
                "positive_hover": {
                    "value": {
                        "red": "0.05098",
                        "green": "0.50588",
                        "blue": "0.28627",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(13, 129, 73, 0.5)"
                    },
                    "name": "positive_hover",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "input",
                        "subitem": "positive_hover",
                        "hex": "0d8149",
                        "rgb": {
                            "r": 13,
                            "g": 129,
                            "b": 73,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 151.0344827586207,
                            "s": 0.8169014084507041,
                            "l": 0.2784313725490196,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 151.0344827586207,
                            "s": 0.8992248062015504,
                            "v": 0.5058823529411764,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "input",
                        "positive_hover"
                    ]
                },
                "positive_pressed": {
                    "value": {
                        "red": "0.05098",
                        "green": "0.50588",
                        "blue": "0.28627",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(13, 129, 73, 0.5)"
                    },
                    "name": "positive_pressed",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "input",
                        "subitem": "positive_pressed",
                        "hex": "0d8149",
                        "rgb": {
                            "r": 13,
                            "g": 129,
                            "b": 73,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 151.0344827586207,
                            "s": 0.8169014084507041,
                            "l": 0.2784313725490196,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 151.0344827586207,
                            "s": 0.8992248062015504,
                            "v": 0.5058823529411764,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "input",
                        "positive_pressed"
                    ]
                },
                "highlight_default": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.56078",
                        "blue": "1.00000",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(0, 143, 255, 0.5)"
                    },
                    "name": "highlight_default",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "input",
                        "subitem": "highlight_default",
                        "hex": "008fff",
                        "rgb": {
                            "r": 0,
                            "g": 143,
                            "b": 255,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 206.3529411764706,
                            "s": 1,
                            "l": 0.5,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 206.3529411764706,
                            "s": 1,
                            "v": 1,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "input",
                        "highlight_default"
                    ]
                },
                "highlight_hover": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.52549",
                        "blue": "0.93725",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(0, 134, 239, 0.5)"
                    },
                    "name": "highlight_hover",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "input",
                        "subitem": "highlight_hover",
                        "hex": "0086ef",
                        "rgb": {
                            "r": 0,
                            "g": 134,
                            "b": 239,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 206.35983263598325,
                            "s": 1,
                            "l": 0.46862745098039216,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 206.35983263598325,
                            "s": 1,
                            "v": 0.9372549019607843,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "input",
                        "highlight_hover"
                    ]
                },
                "highlight_pressed": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.52549",
                        "blue": "0.93725",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(0, 134, 239, 0.5)"
                    },
                    "name": "highlight_pressed",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "input",
                        "subitem": "highlight_pressed",
                        "hex": "0086ef",
                        "rgb": {
                            "r": 0,
                            "g": 134,
                            "b": 239,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 206.35983263598325,
                            "s": 1,
                            "l": 0.46862745098039216,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 206.35983263598325,
                            "s": 1,
                            "v": 0.9372549019607843,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "input",
                        "highlight_pressed"
                    ]
                },
                "error_default": {
                    "value": {
                        "red": "0.84314",
                        "green": "0.25098",
                        "blue": "0.27059",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(215, 64, 69, 0.5)"
                    },
                    "name": "error_default",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "input",
                        "subitem": "error_default",
                        "hex": "d74045",
                        "rgb": {
                            "r": 215,
                            "g": 64,
                            "b": 69,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 358.0132450331126,
                            "s": 0.6536796536796537,
                            "l": 0.5470588235294118,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 358.0132450331126,
                            "s": 0.7023255813953488,
                            "v": 0.8431372549019608,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "input",
                        "error_default"
                    ]
                },
                "error_hover": {
                    "value": {
                        "red": "0.84314",
                        "green": "0.25098",
                        "blue": "0.27059",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(215, 64, 69, 0.5)"
                    },
                    "name": "error_hover",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "input",
                        "subitem": "error_hover",
                        "hex": "d74045",
                        "rgb": {
                            "r": 215,
                            "g": 64,
                            "b": 69,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 358.0132450331126,
                            "s": 0.6536796536796537,
                            "l": 0.5470588235294118,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 358.0132450331126,
                            "s": 0.7023255813953488,
                            "v": 0.8431372549019608,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "input",
                        "error_hover"
                    ]
                },
                "error_pressed": {
                    "value": {
                        "red": "0.84314",
                        "green": "0.25098",
                        "blue": "0.27059",
                        "alpha": 0.5
                    },
                    "filePath": "tokens/color/colors-light.js",
                    "isSource": true,
                    "original": {
                        "value": "rgba(215, 64, 69, 0.5)"
                    },
                    "name": "error_pressed",
                    "attributes": {
                        "category": "color",
                        "type": "light",
                        "item": "input",
                        "subitem": "error_pressed",
                        "hex": "d74045",
                        "rgb": {
                            "r": 215,
                            "g": 64,
                            "b": 69,
                            "a": 0.5
                        },
                        "hsl": {
                            "h": 358.0132450331126,
                            "s": 0.6536796536796537,
                            "l": 0.5470588235294118,
                            "a": 0.5
                        },
                        "hsv": {
                            "h": 358.0132450331126,
                            "s": 0.7023255813953488,
                            "v": 0.8431372549019608,
                            "a": 0.5
                        }
                    },
                    "path": [
                        "color",
                        "light",
                        "input",
                        "error_pressed"
                    ]
                }
            }
        },
        "static": {
            "base": {
                "blue_400": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.56078",
                        "blue": "1.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#008FFF"
                    },
                    "name": "blue_400",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "blue_400",
                        "hex": "008fff",
                        "rgb": {
                            "r": 0,
                            "g": 143,
                            "b": 255,
                            "a": 1
                        },
                        "hsl": {
                            "h": 206.3529411764706,
                            "s": 1,
                            "l": 0.5,
                            "a": 1
                        },
                        "hsv": {
                            "h": 206.3529411764706,
                            "s": 1,
                            "v": 1,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "blue_400"
                    ]
                },
                "blue_500": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.52549",
                        "blue": "0.93725",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#0086EF"
                    },
                    "name": "blue_500",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "blue_500",
                        "hex": "0086ef",
                        "rgb": {
                            "r": 0,
                            "g": 134,
                            "b": 239,
                            "a": 1
                        },
                        "hsl": {
                            "h": 206.35983263598325,
                            "s": 1,
                            "l": 0.46862745098039216,
                            "a": 1
                        },
                        "hsv": {
                            "h": 206.35983263598325,
                            "s": 1,
                            "v": 0.9372549019607843,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "blue_500"
                    ]
                },
                "blue_600": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.49020",
                        "blue": "0.87451",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#007DDF"
                    },
                    "name": "blue_600",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "blue_600",
                        "hex": "007ddf",
                        "rgb": {
                            "r": 0,
                            "g": 125,
                            "b": 223,
                            "a": 1
                        },
                        "hsl": {
                            "h": 206.3677130044843,
                            "s": 1,
                            "l": 0.4372549019607843,
                            "a": 1
                        },
                        "hsv": {
                            "h": 206.3677130044843,
                            "s": 1,
                            "v": 0.8745098039215686,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "blue_600"
                    ]
                },
                "blue_700": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.45490",
                        "blue": "0.81176",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#0074CF"
                    },
                    "name": "blue_700",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "blue_700",
                        "hex": "0074cf",
                        "rgb": {
                            "r": 0,
                            "g": 116,
                            "b": 207,
                            "a": 1
                        },
                        "hsl": {
                            "h": 206.3768115942029,
                            "s": 1,
                            "l": 0.40588235294117647,
                            "a": 1
                        },
                        "hsv": {
                            "h": 206.3768115942029,
                            "s": 1,
                            "v": 0.8117647058823529,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "blue_700"
                    ]
                },
                "green_400": {
                    "value": {
                        "red": "0.06667",
                        "green": "0.65882",
                        "blue": "0.37255",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#11A85F"
                    },
                    "name": "green_400",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "green_400",
                        "hex": "11a85f",
                        "rgb": {
                            "r": 17,
                            "g": 168,
                            "b": 95,
                            "a": 1
                        },
                        "hsl": {
                            "h": 150.9933774834437,
                            "s": 0.8162162162162162,
                            "l": 0.3627450980392157,
                            "a": 1
                        },
                        "hsv": {
                            "h": 150.9933774834437,
                            "s": 0.8988095238095238,
                            "v": 0.6588235294117647,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "green_400"
                    ]
                },
                "green_500": {
                    "value": {
                        "red": "0.07451",
                        "green": "0.72941",
                        "blue": "0.41176",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#13BA69"
                    },
                    "name": "green_500",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "green_500",
                        "hex": "13ba69",
                        "rgb": {
                            "r": 19,
                            "g": 186,
                            "b": 105,
                            "a": 1
                        },
                        "hsl": {
                            "h": 150.89820359281435,
                            "s": 0.8146341463414635,
                            "l": 0.40196078431372545,
                            "a": 1
                        },
                        "hsv": {
                            "h": 150.89820359281435,
                            "s": 0.8978494623655915,
                            "v": 0.7294117647058823,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "green_500"
                    ]
                },
                "green_600": {
                    "value": {
                        "red": "0.08235",
                        "green": "0.80392",
                        "blue": "0.45490",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#15CD74"
                    },
                    "name": "green_600",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "green_600",
                        "hex": "15cd74",
                        "rgb": {
                            "r": 21,
                            "g": 205,
                            "b": 116,
                            "a": 1
                        },
                        "hsl": {
                            "h": 150.97826086956522,
                            "s": 0.8141592920353982,
                            "l": 0.4431372549019608,
                            "a": 1
                        },
                        "hsv": {
                            "h": 150.97826086956522,
                            "s": 0.897560975609756,
                            "v": 0.803921568627451,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "green_600"
                    ]
                },
                "green_700": {
                    "value": {
                        "red": "0.09020",
                        "green": "0.87451",
                        "blue": "0.49412",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#17DF7E"
                    },
                    "name": "green_700",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "green_700",
                        "hex": "17df7e",
                        "rgb": {
                            "r": 23,
                            "g": 223,
                            "b": 126,
                            "a": 1
                        },
                        "hsl": {
                            "h": 150.9,
                            "s": 0.8130081300813008,
                            "l": 0.4823529411764706,
                            "a": 1
                        },
                        "hsv": {
                            "h": 150.9,
                            "s": 0.8968609865470852,
                            "v": 0.8745098039215686,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "green_700"
                    ]
                },
                "red_400": {
                    "value": {
                        "red": "0.84314",
                        "green": "0.25098",
                        "blue": "0.27059",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#D74045"
                    },
                    "name": "red_400",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "red_400",
                        "hex": "d74045",
                        "rgb": {
                            "r": 215,
                            "g": 64,
                            "b": 69,
                            "a": 1
                        },
                        "hsl": {
                            "h": 358.0132450331126,
                            "s": 0.6536796536796537,
                            "l": 0.5470588235294118,
                            "a": 1
                        },
                        "hsv": {
                            "h": 358.0132450331126,
                            "s": 0.7023255813953488,
                            "v": 0.8431372549019608,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "red_400"
                    ]
                },
                "red_500": {
                    "value": {
                        "red": "0.85490",
                        "green": "0.29804",
                        "blue": "0.31765",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#DA4C51"
                    },
                    "name": "red_500",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "red_500",
                        "hex": "da4c51",
                        "rgb": {
                            "r": 218,
                            "g": 76,
                            "b": 81,
                            "a": 1
                        },
                        "hsl": {
                            "h": 357.88732394366195,
                            "s": 0.6574074074074076,
                            "l": 0.5764705882352941,
                            "a": 1
                        },
                        "hsv": {
                            "h": 357.88732394366195,
                            "s": 0.6513761467889909,
                            "v": 0.8549019607843137,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "red_500"
                    ]
                },
                "red_600": {
                    "value": {
                        "red": "0.86275",
                        "green": "0.34510",
                        "blue": "0.36078",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#DC585C"
                    },
                    "name": "red_600",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "red_600",
                        "hex": "dc585c",
                        "rgb": {
                            "r": 220,
                            "g": 88,
                            "b": 92,
                            "a": 1
                        },
                        "hsl": {
                            "h": 358.1818181818182,
                            "s": 0.6534653465346536,
                            "l": 0.603921568627451,
                            "a": 1
                        },
                        "hsv": {
                            "h": 358.1818181818182,
                            "s": 0.6,
                            "v": 0.8627450980392157,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "red_600"
                    ]
                },
                "red_700": {
                    "value": {
                        "red": "0.87451",
                        "green": "0.39216",
                        "blue": "0.40784",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#DF6468"
                    },
                    "name": "red_700",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "red_700",
                        "hex": "df6468",
                        "rgb": {
                            "r": 223,
                            "g": 100,
                            "b": 104,
                            "a": 1
                        },
                        "hsl": {
                            "h": 358.0487804878049,
                            "s": 0.6577540106951871,
                            "l": 0.6333333333333333,
                            "a": 1
                        },
                        "hsv": {
                            "h": 358.0487804878049,
                            "s": 0.5515695067264574,
                            "v": 0.8745098039215686,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "red_700"
                    ]
                },
                "orange_400": {
                    "value": {
                        "red": "0.81961",
                        "green": "0.44314",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#D17100"
                    },
                    "name": "orange_400",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "orange_400",
                        "hex": "d17100",
                        "rgb": {
                            "r": 209,
                            "g": 113,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 32.440191387559814,
                            "s": 1,
                            "l": 0.40980392156862744,
                            "a": 1
                        },
                        "hsv": {
                            "h": 32.440191387559814,
                            "s": 1,
                            "v": 0.8196078431372549,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "orange_400"
                    ]
                },
                "orange_500": {
                    "value": {
                        "red": "0.89412",
                        "green": "0.48235",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#E47B00"
                    },
                    "name": "orange_500",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "orange_500",
                        "hex": "e47b00",
                        "rgb": {
                            "r": 228,
                            "g": 123,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 32.36842105263158,
                            "s": 1,
                            "l": 0.4470588235294118,
                            "a": 1
                        },
                        "hsv": {
                            "h": 32.36842105263158,
                            "s": 1,
                            "v": 0.8941176470588236,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "orange_500"
                    ]
                },
                "orange_600": {
                    "value": {
                        "red": "0.96863",
                        "green": "0.52157",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#F78500"
                    },
                    "name": "orange_600",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "orange_600",
                        "hex": "f78500",
                        "rgb": {
                            "r": 247,
                            "g": 133,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 32.307692307692314,
                            "s": 1,
                            "l": 0.4843137254901961,
                            "a": 1
                        },
                        "hsv": {
                            "h": 32.307692307692314,
                            "s": 1,
                            "v": 0.9686274509803922,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "orange_600"
                    ]
                },
                "orange_700": {
                    "value": {
                        "red": "1.00000",
                        "green": "0.56078",
                        "blue": "0.03922",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#FF8F0A"
                    },
                    "name": "orange_700",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "orange_700",
                        "hex": "ff8f0a",
                        "rgb": {
                            "r": 255,
                            "g": 143,
                            "b": 10,
                            "a": 1
                        },
                        "hsl": {
                            "h": 32.57142857142858,
                            "s": 1,
                            "l": 0.5196078431372549,
                            "a": 1
                        },
                        "hsv": {
                            "h": 32.57142857142858,
                            "s": 0.9607843137254902,
                            "v": 1,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "orange_700"
                    ]
                },
                "yellow_400": {
                    "value": {
                        "red": "0.68235",
                        "green": "0.57255",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#AE9200"
                    },
                    "name": "yellow_400",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "yellow_400",
                        "hex": "ae9200",
                        "rgb": {
                            "r": 174,
                            "g": 146,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 50.34482758620689,
                            "s": 1,
                            "l": 0.3411764705882353,
                            "a": 1
                        },
                        "hsv": {
                            "h": 50.34482758620689,
                            "s": 1,
                            "v": 0.6823529411764706,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "yellow_400"
                    ]
                },
                "yellow_500": {
                    "value": {
                        "red": "0.76471",
                        "green": "0.64314",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#C3A400"
                    },
                    "name": "yellow_500",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "yellow_500",
                        "hex": "c3a400",
                        "rgb": {
                            "r": 195,
                            "g": 164,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 50.461538461538474,
                            "s": 1,
                            "l": 0.38235294117647056,
                            "a": 1
                        },
                        "hsv": {
                            "h": 50.461538461538474,
                            "s": 1,
                            "v": 0.7647058823529411,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "yellow_500"
                    ]
                },
                "yellow_600": {
                    "value": {
                        "red": "0.84706",
                        "green": "0.71373",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#D8B600"
                    },
                    "name": "yellow_600",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "yellow_600",
                        "hex": "d8b600",
                        "rgb": {
                            "r": 216,
                            "g": 182,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 50.55555555555556,
                            "s": 1,
                            "l": 0.4235294117647059,
                            "a": 1
                        },
                        "hsv": {
                            "h": 50.55555555555556,
                            "s": 1,
                            "v": 0.8470588235294118,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "yellow_600"
                    ]
                },
                "yellow_700": {
                    "value": {
                        "red": "0.92941",
                        "green": "0.78039",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#EDC700"
                    },
                    "name": "yellow_700",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "yellow_700",
                        "hex": "edc700",
                        "rgb": {
                            "r": 237,
                            "g": 199,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 50.379746835443036,
                            "s": 1,
                            "l": 0.4647058823529412,
                            "a": 1
                        },
                        "hsv": {
                            "h": 50.379746835443036,
                            "s": 1,
                            "v": 0.9294117647058824,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "yellow_700"
                    ]
                },
                "cyan_400": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.65490",
                        "blue": "0.80000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#00A7CC"
                    },
                    "name": "cyan_400",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "cyan_400",
                        "hex": "00a7cc",
                        "rgb": {
                            "r": 0,
                            "g": 167,
                            "b": 204,
                            "a": 1
                        },
                        "hsl": {
                            "h": 190.88235294117646,
                            "s": 1,
                            "l": 0.4,
                            "a": 1
                        },
                        "hsv": {
                            "h": 190.88235294117646,
                            "s": 1,
                            "v": 0.8,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "cyan_400"
                    ]
                },
                "cyan_500": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.71765",
                        "blue": "0.87451",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#00B7DF"
                    },
                    "name": "cyan_500",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "cyan_500",
                        "hex": "00b7df",
                        "rgb": {
                            "r": 0,
                            "g": 183,
                            "b": 223,
                            "a": 1
                        },
                        "hsl": {
                            "h": 190.76233183856502,
                            "s": 1,
                            "l": 0.4372549019607843,
                            "a": 1
                        },
                        "hsv": {
                            "h": 190.76233183856502,
                            "s": 1,
                            "v": 0.8745098039215686,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "cyan_500"
                    ]
                },
                "cyan_600": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.77647",
                        "blue": "0.94902",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#00C6F2"
                    },
                    "name": "cyan_600",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "cyan_600",
                        "hex": "00c6f2",
                        "rgb": {
                            "r": 0,
                            "g": 198,
                            "b": 242,
                            "a": 1
                        },
                        "hsl": {
                            "h": 190.9090909090909,
                            "s": 1,
                            "l": 0.4745098039215686,
                            "a": 1
                        },
                        "hsv": {
                            "h": 190.9090909090909,
                            "s": 1,
                            "v": 0.9490196078431372,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "cyan_600"
                    ]
                },
                "cyan_700": {
                    "value": {
                        "red": "0.02353",
                        "green": "0.82353",
                        "blue": "1.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#06D2FF"
                    },
                    "name": "cyan_700",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "cyan_700",
                        "hex": "06d2ff",
                        "rgb": {
                            "r": 6,
                            "g": 210,
                            "b": 255,
                            "a": 1
                        },
                        "hsl": {
                            "h": 190.84337349397592,
                            "s": 1,
                            "l": 0.5117647058823529,
                            "a": 1
                        },
                        "hsv": {
                            "h": 190.84337349397592,
                            "s": 0.9764705882352941,
                            "v": 1,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "cyan_700"
                    ]
                },
                "indigo_400": {
                    "value": {
                        "red": "0.32549",
                        "green": "0.45882",
                        "blue": "0.93725",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#5375EF"
                    },
                    "name": "indigo_400",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "indigo_400",
                        "hex": "5375ef",
                        "rgb": {
                            "r": 83,
                            "g": 117,
                            "b": 239,
                            "a": 1
                        },
                        "hsl": {
                            "h": 226.9230769230769,
                            "s": 0.8297872340425532,
                            "l": 0.6313725490196078,
                            "a": 1
                        },
                        "hsv": {
                            "h": 226.9230769230769,
                            "s": 0.6527196652719666,
                            "v": 0.9372549019607843,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "indigo_400"
                    ]
                },
                "indigo_500": {
                    "value": {
                        "red": "0.36863",
                        "green": "0.49412",
                        "blue": "0.94118",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#5E7EF0"
                    },
                    "name": "indigo_500",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "indigo_500",
                        "hex": "5e7ef0",
                        "rgb": {
                            "r": 94,
                            "g": 126,
                            "b": 240,
                            "a": 1
                        },
                        "hsl": {
                            "h": 226.84931506849313,
                            "s": 0.8295454545454545,
                            "l": 0.6549019607843137,
                            "a": 1
                        },
                        "hsv": {
                            "h": 226.84931506849313,
                            "s": 0.6083333333333333,
                            "v": 0.9411764705882353,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "indigo_500"
                    ]
                },
                "indigo_600": {
                    "value": {
                        "red": "0.41176",
                        "green": "0.52549",
                        "blue": "0.94510",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#6986F1"
                    },
                    "name": "indigo_600",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "indigo_600",
                        "hex": "6986f1",
                        "rgb": {
                            "r": 105,
                            "g": 134,
                            "b": 241,
                            "a": 1
                        },
                        "hsl": {
                            "h": 227.20588235294116,
                            "s": 0.8292682926829268,
                            "l": 0.6784313725490196,
                            "a": 1
                        },
                        "hsv": {
                            "h": 227.20588235294116,
                            "s": 0.5643153526970954,
                            "v": 0.9450980392156862,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "indigo_600"
                    ]
                },
                "indigo_700": {
                    "value": {
                        "red": "0.45098",
                        "green": "0.56078",
                        "blue": "0.94902",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#738FF2"
                    },
                    "name": "indigo_700",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "indigo_700",
                        "hex": "738ff2",
                        "rgb": {
                            "r": 115,
                            "g": 143,
                            "b": 242,
                            "a": 1
                        },
                        "hsl": {
                            "h": 226.77165354330708,
                            "s": 0.830065359477124,
                            "l": 0.7,
                            "a": 1
                        },
                        "hsv": {
                            "h": 226.77165354330708,
                            "s": 0.524793388429752,
                            "v": 0.9490196078431372,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "indigo_700"
                    ]
                },
                "purple_400": {
                    "value": {
                        "red": "0.59216",
                        "green": "0.32549",
                        "blue": "0.93725",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#9753EF"
                    },
                    "name": "purple_400",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "purple_400",
                        "hex": "9753ef",
                        "rgb": {
                            "r": 151,
                            "g": 83,
                            "b": 239,
                            "a": 1
                        },
                        "hsl": {
                            "h": 266.1538461538462,
                            "s": 0.8297872340425532,
                            "l": 0.6313725490196078,
                            "a": 1
                        },
                        "hsv": {
                            "h": 266.1538461538462,
                            "s": 0.6527196652719666,
                            "v": 0.9372549019607843,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "purple_400"
                    ]
                },
                "purple_500": {
                    "value": {
                        "red": "0.61961",
                        "green": "0.36863",
                        "blue": "0.94118",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#9E5EF0"
                    },
                    "name": "purple_500",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "purple_500",
                        "hex": "9e5ef0",
                        "rgb": {
                            "r": 158,
                            "g": 94,
                            "b": 240,
                            "a": 1
                        },
                        "hsl": {
                            "h": 266.3013698630137,
                            "s": 0.8295454545454545,
                            "l": 0.6549019607843137,
                            "a": 1
                        },
                        "hsv": {
                            "h": 266.3013698630137,
                            "s": 0.6083333333333333,
                            "v": 0.9411764705882353,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "purple_500"
                    ]
                },
                "purple_600": {
                    "value": {
                        "red": "0.64314",
                        "green": "0.41176",
                        "blue": "0.94510",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#A469F1"
                    },
                    "name": "purple_600",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "purple_600",
                        "hex": "a469f1",
                        "rgb": {
                            "r": 164,
                            "g": 105,
                            "b": 241,
                            "a": 1
                        },
                        "hsl": {
                            "h": 266.02941176470586,
                            "s": 0.8292682926829268,
                            "l": 0.6784313725490196,
                            "a": 1
                        },
                        "hsv": {
                            "h": 266.02941176470586,
                            "s": 0.5643153526970954,
                            "v": 0.9450980392156862,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "purple_600"
                    ]
                },
                "purple_700": {
                    "value": {
                        "red": "0.67059",
                        "green": "0.45098",
                        "blue": "0.94902",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#AB73F2"
                    },
                    "name": "purple_700",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "purple_700",
                        "hex": "ab73f2",
                        "rgb": {
                            "r": 171,
                            "g": 115,
                            "b": 242,
                            "a": 1
                        },
                        "hsl": {
                            "h": 266.45669291338584,
                            "s": 0.830065359477124,
                            "l": 0.7,
                            "a": 1
                        },
                        "hsv": {
                            "h": 266.45669291338584,
                            "s": 0.524793388429752,
                            "v": 0.9490196078431372,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "purple_700"
                    ]
                },
                "pink_400": {
                    "value": {
                        "red": "0.80784",
                        "green": "0.19608",
                        "blue": "0.60000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#CE3299"
                    },
                    "name": "pink_400",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "pink_400",
                        "hex": "ce3299",
                        "rgb": {
                            "r": 206,
                            "g": 50,
                            "b": 153,
                            "a": 1
                        },
                        "hsl": {
                            "h": 320.38461538461536,
                            "s": 0.6141732283464567,
                            "l": 0.5019607843137255,
                            "a": 1
                        },
                        "hsv": {
                            "h": 320.38461538461536,
                            "s": 0.7572815533980582,
                            "v": 0.807843137254902,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "pink_400"
                    ]
                },
                "pink_500": {
                    "value": {
                        "red": "0.81961",
                        "green": "0.24706",
                        "blue": "0.62353",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#D13F9F"
                    },
                    "name": "pink_500",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "pink_500",
                        "hex": "d13f9f",
                        "rgb": {
                            "r": 209,
                            "g": 63,
                            "b": 159,
                            "a": 1
                        },
                        "hsl": {
                            "h": 320.54794520547944,
                            "s": 0.6134453781512604,
                            "l": 0.5333333333333333,
                            "a": 1
                        },
                        "hsv": {
                            "h": 320.54794520547944,
                            "s": 0.6985645933014354,
                            "v": 0.8196078431372549,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "pink_500"
                    ]
                },
                "pink_600": {
                    "value": {
                        "red": "0.83137",
                        "green": "0.29804",
                        "blue": "0.65098",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#D44CA6"
                    },
                    "name": "pink_600",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "pink_600",
                        "hex": "d44ca6",
                        "rgb": {
                            "r": 212,
                            "g": 76,
                            "b": 166,
                            "a": 1
                        },
                        "hsl": {
                            "h": 320.2941176470588,
                            "s": 0.6126126126126129,
                            "l": 0.5647058823529412,
                            "a": 1
                        },
                        "hsv": {
                            "h": 320.2941176470588,
                            "s": 0.6415094339622642,
                            "v": 0.8313725490196079,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "pink_600"
                    ]
                },
                "pink_700": {
                    "value": {
                        "red": "0.84314",
                        "green": "0.34510",
                        "blue": "0.67451",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#D758AC"
                    },
                    "name": "pink_700",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "pink_700",
                        "hex": "d758ac",
                        "rgb": {
                            "r": 215,
                            "g": 88,
                            "b": 172,
                            "a": 1
                        },
                        "hsl": {
                            "h": 320.3149606299213,
                            "s": 0.6135265700483092,
                            "l": 0.5941176470588235,
                            "a": 1
                        },
                        "hsv": {
                            "h": 320.3149606299213,
                            "s": 0.5906976744186047,
                            "v": 0.8431372549019608,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "pink_700"
                    ]
                },
                "gray_25": {
                    "value": {
                        "red": "0.91765",
                        "green": "0.91765",
                        "blue": "0.91765",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#EAEAEA"
                    },
                    "name": "gray_25",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "gray_25",
                        "hex": "eaeaea",
                        "rgb": {
                            "r": 234,
                            "g": 234,
                            "b": 234,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.9176470588235294,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.9176470588235294,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "gray_25"
                    ]
                },
                "gray_50": {
                    "value": {
                        "red": "0.83529",
                        "green": "0.83529",
                        "blue": "0.83529",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#D5D5D5"
                    },
                    "name": "gray_50",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "gray_50",
                        "hex": "d5d5d5",
                        "rgb": {
                            "r": 213,
                            "g": 213,
                            "b": 213,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.8352941176470589,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.8352941176470589,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "gray_50"
                    ]
                },
                "gray_100": {
                    "value": {
                        "red": "0.74902",
                        "green": "0.74902",
                        "blue": "0.74902",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#BFBFBF"
                    },
                    "name": "gray_100",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "gray_100",
                        "hex": "bfbfbf",
                        "rgb": {
                            "r": 191,
                            "g": 191,
                            "b": 191,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.7490196078431373,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.7490196078431373,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "gray_100"
                    ]
                },
                "gray_200": {
                    "value": {
                        "red": "0.66667",
                        "green": "0.66667",
                        "blue": "0.66667",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#AAAAAA"
                    },
                    "name": "gray_200",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "gray_200",
                        "hex": "aaaaaa",
                        "rgb": {
                            "r": 170,
                            "g": 170,
                            "b": 170,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.6666666666666666,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.6666666666666666,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "gray_200"
                    ]
                },
                "gray_300": {
                    "value": {
                        "red": "0.58431",
                        "green": "0.58431",
                        "blue": "0.58431",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#959595"
                    },
                    "name": "gray_300",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "gray_300",
                        "hex": "959595",
                        "rgb": {
                            "r": 149,
                            "g": 149,
                            "b": 149,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.5843137254901961,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.5843137254901961,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "gray_300"
                    ]
                },
                "gray_400": {
                    "value": {
                        "red": "0.50196",
                        "green": "0.50196",
                        "blue": "0.50196",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#808080"
                    },
                    "name": "gray_400",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "gray_400",
                        "hex": "808080",
                        "rgb": {
                            "r": 128,
                            "g": 128,
                            "b": 128,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.5019607843137255,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.5019607843137255,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "gray_400"
                    ]
                },
                "gray_500": {
                    "value": {
                        "red": "0.41569",
                        "green": "0.41569",
                        "blue": "0.41569",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#6A6A6A"
                    },
                    "name": "gray_500",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "gray_500",
                        "hex": "6a6a6a",
                        "rgb": {
                            "r": 106,
                            "g": 106,
                            "b": 106,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.41568627450980394,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.41568627450980394,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "gray_500"
                    ]
                },
                "gray_600": {
                    "value": {
                        "red": "0.33333",
                        "green": "0.33333",
                        "blue": "0.33333",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#555555"
                    },
                    "name": "gray_600",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "gray_600",
                        "hex": "555555",
                        "rgb": {
                            "r": 85,
                            "g": 85,
                            "b": 85,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.3333333333333333,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.3333333333333333,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "gray_600"
                    ]
                },
                "gray_700": {
                    "value": {
                        "red": "0.25098",
                        "green": "0.25098",
                        "blue": "0.25098",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#404040"
                    },
                    "name": "gray_700",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "gray_700",
                        "hex": "404040",
                        "rgb": {
                            "r": 64,
                            "g": 64,
                            "b": 64,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.25098039215686274,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.25098039215686274,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "gray_700"
                    ]
                },
                "gray_800": {
                    "value": {
                        "red": "0.16863",
                        "green": "0.16863",
                        "blue": "0.16863",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#2B2B2B"
                    },
                    "name": "gray_800",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "gray_800",
                        "hex": "2b2b2b",
                        "rgb": {
                            "r": 43,
                            "g": 43,
                            "b": 43,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.16862745098039217,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.16862745098039217,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "gray_800"
                    ]
                },
                "gray_900": {
                    "value": {
                        "red": "0.08235",
                        "green": "0.08235",
                        "blue": "0.08235",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#151515"
                    },
                    "name": "gray_900",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "gray_900",
                        "hex": "151515",
                        "rgb": {
                            "r": 21,
                            "g": 21,
                            "b": 21,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0.08235294117647059,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0.08235294117647059,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "gray_900"
                    ]
                },
                "white": {
                    "value": {
                        "red": "1.00000",
                        "green": "1.00000",
                        "blue": "1.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#FFFFFF"
                    },
                    "name": "white",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "white",
                        "hex": "ffffff",
                        "rgb": {
                            "r": 255,
                            "g": 255,
                            "b": 255,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 1,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 1,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "white"
                    ]
                },
                "black": {
                    "value": {
                        "red": "0.00000",
                        "green": "0.00000",
                        "blue": "0.00000",
                        "alpha": 1
                    },
                    "filePath": "tokens/color/colors-static.js",
                    "isSource": true,
                    "original": {
                        "value": "#000000"
                    },
                    "name": "black",
                    "attributes": {
                        "category": "color",
                        "type": "static",
                        "item": "base",
                        "subitem": "black",
                        "hex": "000000",
                        "rgb": {
                            "r": 0,
                            "g": 0,
                            "b": 0,
                            "a": 1
                        },
                        "hsl": {
                            "h": 0,
                            "s": 0,
                            "l": 0,
                            "a": 1
                        },
                        "hsv": {
                            "h": 0,
                            "s": 0,
                            "v": 0,
                            "a": 1
                        }
                    },
                    "path": [
                        "color",
                        "static",
                        "base",
                        "black"
                    ]
                }
            }
        }
    }
};
const colors = {
    blue_400: "#007AFF",
    blue_500: "#1799FF",
    blue_600: "#27A0FF",
    blue_700: "#36A6FF",
    green_400: "#11A85F",
    green_500: "#13BA69",
    green_600: "#15CD74",
    green_700: "#17DF7E",
    red_400: "#D74045",
    red_500: "#DA4C51",
    red_600: "#DC585C",
    red_700: "#DF6468",
    orange_400: "#D17100",
    orange_500: "#E47B00",
    orange_600: "#F78500",
    orange_700: "#FF8F0A",
    yellow_400: "#AE9200",
    yellow_500: "#C3A400",
    yellow_600: "#D8B600",
    yellow_700: "#EDC700",
    cyan_400: "#00A7CC",
    cyan_500: "#00B7DF",
    cyan_600: "#00C6F2",
    cyan_700: "#06D2FF",
    indigo_400: "#5375EF",
    indigo_500: "#5E7EF0",
    indigo_600: "#6986F1",
    indigo_700: "#738FF2",
    purple_400: "#9753EF",
    purple_500: "#9E5EF0",
    purple_600: "#A469F1",
    purple_700: "#AB73F2",
    pink_400: "#CE3299",
    pink_500: "#D13F9F",
    pink_600: "#D44CA6",
    pink_700: "#D758AC",
    positive: "#11A85F",
    warning: "#D17100",
    negative: "#D10000",
    informative: "#0892FF",
    gray_25: "#151515",
    gray_50: "#2B2B2B",
    gray_100: "#404040",
    gray_200: "#555555",
    gray_300: "#6A6A6A",
    gray_400: "#808080",
    gray_500: "#959595",
    gray_600: "#AAAAAA",
    gray_700: "#BFBFBF",
    gray_800: "#D5D5D5",
    gray_900: "#EAEAEA",
};
const dark = {
    foundation: {
        blue_400: "#000000",
        blue_500: "#1799FF",
        blue_600: "#27A0FF",
        blue_700: "#36A6FF",
        green_400: "#11A85F",
        green_500: "#13BA69",
        green_600: "#15CD74",
        green_700: "#17DF7E",
        red_400: "#D74045",
        red_500: "#DA4C51",
        red_600: "#DC585C",
        red_700: "#DF6468",
        orange_400: "#D17100",
        orange_500: "#E47B00",
        orange_600: "#F78500",
        orange_700: "#FF8F0A",
        yellow_400: "#AE9200",
        yellow_500: "#C3A400",
        yellow_600: "#D8B600",
        yellow_700: "#EDC700",
        cyan_400: "#00A7CC",
        cyan_500: "#00B7DF",
        cyan_600: "#00C6F2",
        cyan_700: "#06D2FF",
        indigo_400: "#5375EF",
        indigo_500: "#5E7EF0",
        indigo_600: "#6986F1",
        indigo_700: "#738FF2",
        purple_400: "#9753EF",
        purple_500: "#9E5EF0",
        purple_600: "#A469F1",
        purple_700: "#AB73F2",
        pink_400: "#CE3299",
        pink_500: "#D13F9F",
        pink_600: "#D44CA6",
        pink_700: "#D758AC",
        positive: "#11A85F",
        warning: "#D17100",
        negative: "#D10000",
        informative: "#0892FF",
        gray_25: "#151515",
        gray_50: "#2B2B2B",
        gray_100: "#404040",
        gray_200: "#555555",
        gray_300: "#6A6A6A",
        gray_400: "#808080",
        gray_500: "#959595",
        gray_600: "#AAAAAA",
        gray_700: "#BFBFBF",
        gray_800: "#D5D5D5",
        gray_900: "#EAEAEA",
    },
    icons: {
        gray_25: "#151515",
        gray_50: "#2B2B2B",
        gray_100: "#404040",
        gray_200: "#555555",
        gray_300: "#6A6A6A",
    }
};
const objectArray = Object.entries(colors);
const localStyles = figma.getLocalPaintStyles();
const layered = Object.entries(dark);
async function createNewTextStyle() {
    // Style does not yet exist, so create it
    await figma.loadFontAsync({
        family: 'Inter',
        style: 'Regular',
    });
    await figma.loadFontAsync({
        family: 'Inter',
        style: 'Bold',
    });
}
createNewTextStyle().then(n => console.log("I am done"));
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
    if (msg.type === 'generate-styles') {
        generateStylesFromTokens("light");
    }
    if (msg.type === 'create-pages') {
        createPages();
    }
    if (msg.type === 'remove') {
        const styles = figma.getLocalPaintStyles();
        styles.map(style => {
            style.remove();
        });
    }
    if (msg.type === 'test-update') {
        console.log("Test update");
        localStyles.map(style => {
            // Go through all of the categories
            layered.forEach(([key, value], idx) => {
                // Get the color
                const cols = Object.entries(dark[key]);
                // For each of the colors
                cols.forEach(([colorKey, colorValue], idx) => {
                    const category = toPascalCase(key);
                    // console.log("Style name: " + style.name);
                    // console.log(`${category}/${colorKey}`);
                    // If they have the same name, check the color
                    const paint = style.paints[0];
                    const localColor = paint.color;
                    let rgb = hexToRgb(colorValue);
                    if (style.name === `${category}/${colorKey}`) {
                        const pr = localColor.r.toFixed(2);
                        const r = rgb.r.toFixed(2);
                        const pg = localColor.g.toFixed(2);
                        const g = rgb.g.toFixed(2);
                        const pb = localColor.b.toFixed(2);
                        const b = rgb.b.toFixed(2);
                        if (pr != r || pg != g || pb != b) {
                            console.log("update color");
                            const solidPaint = { type: "SOLID", color: { r: rgb.r, g: rgb.g, b: rgb.g } };
                            style.paints = [solidPaint];
                        }
                        console.log("Local Color: " + localColor.r.toFixed(2));
                        console.log("My Color: " + rgb.r.toFixed(2));
                    }
                });
            });
        });
    }
    if (msg.type === 'test') {
        // For each of the categories
        layered.forEach(([key, value], idx) => {
            // Print out the category
            const category = toPascalCase(key);
            // Get the color
            const cols = Object.entries(dark[key]);
            // For each of the colors
            cols.forEach(([colorKey, colorValue], idx) => {
                // Print the key
                console.log(colorKey);
                // Convert to RGB
                let col = hexToRgb(colorValue);
                const solidPaint = { type: "SOLID", color: { r: col.r, g: col.g, b: col.b } };
                const paint = figma.createPaintStyle();
                paint.paints = [solidPaint];
                paint.name = category + "/" + colorKey;
                // if(style.name == `${category}/${colorKey}`){
                //   console.log("Yep");
                //   style.paints = [solidPaint];
                // }
            });
        });
    }
    if (msg.type === 'update-colors') {
        localStyles.map(style => {
            console.log(style.name);
            objectArray.forEach(([key, value], idx) => {
                let col = hexToRgb(value);
                const solidPaint = { type: "SOLID", color: { r: col.r, g: col.g, b: col.b } };
                if (style.name == `Foundation/${key}`) {
                    console.log("Yep");
                    style.paints = [solidPaint];
                }
            });
        });
    }
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    if (msg.type === 'create-rectangles') {
        const nodes = [];
        let x = 0;
        let container = figma.createFrame();
        container.layoutMode = "VERTICAL";
        container.name = "container";
        container.itemSpacing = 24;
        container.counterAxisSizingMode = 'AUTO';
        container.primaryAxisAlignItems = "CENTER";
        container.paddingBottom = 24;
        container.paddingTop = 24;
        container.paddingLeft = 160;
        container.paddingRight = 160;
        container.resize(1280, 1280);
        container.primaryAxisSizingMode = 'AUTO';
        let i = 0;
        let row;
        objectArray.forEach(([key, value], idx) => {
            // Reset row
            if (idx % 4 === 0) {
                row = figma.createFrame();
                row.layoutMode = "HORIZONTAL";
                row.resize(960, 100);
                row.counterAxisSizingMode = "AUTO";
                row.counterAxisAlignItems = "MIN";
                row.name = "row";
                row.itemSpacing = 16;
                row.fills = [];
                console.log("Create row");
                i++;
            }
            let col = hexToRgb(value);
            const solidPaint = { type: "SOLID", color: { r: col.r, g: col.g, b: col.b } };
            // Create the swatch
            const item = figma.createFrame();
            item.name = key;
            item.layoutMode = "VERTICAL";
            item.resize(200, 100);
            item.primaryAxisSizingMode = 'AUTO';
            item.layoutAlign = "STRETCH";
            item.layoutGrow = 1;
            item.fills = [solidPaint];
            item.paddingBottom = 16;
            item.paddingTop = 16;
            item.paddingLeft = 8;
            item.paddingRight = 8;
            // Create color styles
            const paint = figma.createPaintStyle();
            paint.paints = [solidPaint];
            paint.name = `Foundation/${key}`;
            item.fillStyleId = paint.id;
            // Create the labels
            const textColor = white;
            const text = figma.createText();
            text.characters = key;
            text.fills = [{ type: 'SOLID', color: textColor }];
            const val = figma.createText();
            val.characters = value;
            val.fills = [{ type: 'SOLID', color: textColor }];
            // Append labels
            item.appendChild(text);
            item.appendChild(val);
            // Add it to the row
            // row.appendChild(item);
            if (idx % 4 === 0) {
                container.appendChild(row);
            }
        });
        figma.currentPage.appendChild(container);
        figma.currentPage.selection = nodes;
        figma.viewport.scrollAndZoomIntoView(nodes);
    }
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
};
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
function createPage(page, title) {
    //Create other pages
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
function createPages() {
    const white = { type: "SOLID", color: { r: 1.0, g: 1.0, b: 1.0 } };
    const black = { type: "SOLID", color: { r: 0.0, g: 0.0, b: 0.0 } };
    createNewTextStyle().then(n => console.log("I am done"));
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
function generateStylesFromTokens(colorMode = "dark") {
    // Get all dark categories
    const darkColors = Object.entries(_styleDictionary.color[colorMode]);
    console.log(darkColors);
    let countExisting = 0;
    darkColors.forEach(([key, value], idx) => {
        // Print out the key
        console.log(toPascalCase(key));
        const category = key;
        // Create colors array and loop through
        const cols = Object.entries(value);
        cols.forEach(([key, color], idx) => {
            // console.log(color.value);
            // console.log(toPascalCase(category) + "/" + color.name);
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
                    // TO DO : Compare Items
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
    console.log(`${countExisting} styles already exist. No styles created.`);
}
// Utility Functions
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

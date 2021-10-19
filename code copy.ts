// // This shows the HTML page in "ui.html".
// figma.showUI(__html__);

// figma.loadFontAsync({ family: "Roboto", style: "Regular" })

// const white = { r: 1, g: 1, b: 1 }
// const black = {r: 0, g: 0, b: 0 }

// const colors = {
//       blue_400: "#0892FF",
//       blue_500: "#1799FF",
//       blue_600: "#27A0FF",
//       blue_700: "#36A6FF",
//       green_400: "#11A85F",
//       green_500: "#13BA69",
//       green_600: "#15CD74",
//       green_700: "#17DF7E",
//       red_400: "#D74045",
//       red_500: "#DA4C51",
//       red_600: "#DC585C",
//       red_700: "#DF6468",
//       orange_400: "#D17100",
//       orange_500: "#E47B00",
//       orange_600: "#F78500",
//       orange_700: "#FF8F0A",
//       yellow_400: "#AE9200",
//       yellow_500: "#C3A400",
//       yellow_600: "#D8B600",
//       yellow_700: "#EDC700",
//       cyan_400: "#00A7CC",
//       cyan_500: "#00B7DF",
//       cyan_600: "#00C6F2",
//       cyan_700: "#06D2FF",
//       indigo_400: "#5375EF",
//       indigo_500: "#5E7EF0",
//       indigo_600: "#6986F1",
//       indigo_700: "#738FF2",
//       purple_400: "#9753EF",
//       purple_500: "#9E5EF0",
//       purple_600: "#A469F1",
//       purple_700: "#AB73F2",
//       pink_400: "#CE3299",
//       pink_500: "#D13F9F",
//       pink_600: "#D44CA6",
//       pink_700: "#D758AC",
//       positive: "#11A85F",
//       warning: "#D17100",
//       negative: "#D10000",
//       informative: "#0892FF",
// };

// const objectArray = Object.entries(colors);




// // Calls to "parent.postMessage" from within the HTML page will trigger this
// // callback. The callback will be passed the "pluginMessage" property of the
// // posted message.
// figma.ui.onmessage = msg => {

//   // One way of distinguishing between different types of messages sent from
//   // your HTML page is to use an object with a "type" property like this.
//   if (msg.type === 'create-rectangles') {
//     const nodes: SceneNode[] = [];


//     let x=0;

//     // Create the initial row
//     let row = figma.createFrame();
  

//     let i = 0;

//     objectArray.forEach(([key, value], idx) => {

//       if(idx % 4 === 0){
//         figma.currentPage.appendChild(row);

//         row = figma.createFrame();
//         row.layoutMode = "HORIZONTAL"
//         row.counterAxisSizingMode = "AUTO"
//         row.name = "row"
//         row.resize(960, 100);
//         row.itemSpacing = 16
//         row.fills = [];
//         console.log("Create row")
//         row.y = i * 100;
//         i++;
//       }
      
//       let col = hexToRgb(value);
//       const solidPaint: SolidPaint = {type: "SOLID", color: {r: col.r, g: col.g, b: col.b}}

//       // Create the swatch
//       const item  = figma.createFrame();
//       item.name = key
//       item.layoutMode = "VERTICAL"
//       item.resize(200, 100);
//       item.fills = [solidPaint]

//       // Create the labels
//       const textColor = white
//       const text = figma.createText();
//       text.characters = key
//       text.fills = [{ type: 'SOLID', color: textColor }];

//       const val = figma.createText();
//       val.characters = value
//       val.fills = [{ type: 'SOLID', color: textColor }];

//       // Append labels
//       item.appendChild(text); 
//       item.appendChild(val);


//       row.appendChild(item);
//       // Create color styles
//       const paint = figma.createPaintStyle();
//       paint.paints = [solidPaint]
//       paint.name = key

//     });


//     for (let i = 0; i < msg.count; i++) {

//       const frame = figma.createFrame();
//       frame.layoutMode = "VERTICAL"
//       frame.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }]
//       frame.x = 0;
//       frame.y = 0;
//       frame.resize(200, 100);
//       frame.paddingBottom = 16
//       frame.paddingTop = 16
//       frame.paddingLeft = 8
//       frame.paddingRight = 8

//       const colorLabel = figma.createText();
//       colorLabel.characters = "blue-400"
//       colorLabel.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
//       frame.appendChild(colorLabel);

//       const colorHex = figma.createText();
//       colorHex.characters = "#007AFF"
//       colorHex.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
//       frame.appendChild(colorHex);
//       frame.name = "blue-400"

//       row.appendChild(frame);

//       figma.currentPage.appendChild(row);
//       nodes.push(frame);
//     }

//     figma.currentPage.selection = nodes;
//     figma.viewport.scrollAndZoomIntoView(nodes);

//   }

//   // Make sure to close the plugin when you're done. Otherwise the plugin will
//   // keep running, which shows the cancel button at the bottom of the screen.
//   figma.closePlugin();
// };








// function hexToRgb(hex) {
//   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

//   return result ? {
//     r: parseInt(result[1], 16) / 255.0,
//     g: parseInt(result[2], 16) / 255.0,
//     b: parseInt(result[3], 16) / 255.0
//   } : null;
// }

// function getRatio(color1luminance, color2luminance){
// let ratio;
//   if( color1luminance > color2luminance  ){
//     ratio = ((color2luminance + 0.05) / (color1luminance + 0.05))
//   } else {
//     ratio = ((color1luminance + 0.05) / (color2luminance + 0.05))
//   }
   
//  return ratio;
// }
import { startsite, pai } from "../controller/variavels.js";
export function startSite() {
  startsite.addEventListener("click", () => {
    let html = `
      <!DOCTYPE html>
      <html>
      <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>area de test</title>
      <style>
        body{text-align:center;background: black;
         position: relative;  margin: 0;height: 100vh;
         display: block;align-items: center;justify-content: center;
         }
      </style>
      </head>
      <body >
        ${pai.children[0].innerHTML}
      </body>`;
    let blob = new Blob([html], {
      type: "text/html",
    });
    let url = URL.createObjectURL(blob);
    window.open(url);
  });
}

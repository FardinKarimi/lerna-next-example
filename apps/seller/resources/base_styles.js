export default () => (
  <style>{`
@font-face {
  font-family: "LatoLatin";
  font-weight: normal;
  font-style: normal;
  text-rendering: optimizeLegibility;
  src:
      url("/static/fonts/LatoLatin-Regular.woff2") format("woff2"),
      url("/static/fonts/LatoLatin-Regular.woff") format("woff"),
      url("/static/fonts/LatoLatin-Regular.eot") format("embedded-opentype");
}
@font-face {
  font-family: "LatoLatin";
  font-weight: bold;
  font-style: normal;
  text-rendering: optimizeLegibility;
  src:
      url("/static/fonts/LatoLatin-Bold.woff2") format("woff2"),
      url("/static/fonts/LatoLatin-Bold.woff") format("woff"),
      url("/static/fonts/LatoLatin-Bold.eot") format("embedded-opentype");
}

* {
  outline: none;
  box-sizing: border-box;
  font-family: inherit;
}
html {
  margin: 0;
  padding: 0;
  font-family: LatoLatin,Helvetica,Arial,sans-serif;
  width: 100vw;
  max-width: 100%;
}
`}</style>
)

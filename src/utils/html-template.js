export default config => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="./favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: '${config.backgroundColor}';
      }
    </style>
    <title>OpenAPI Specification</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="redoc-container"></div>
    <script src="https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js"> </script>
    <script type="text/javascript">
    (function() {
      Redoc.init(
        "${config.specUrl}",
        ${JSON.stringify(config.options, null, 2).replace(/\n/g, '\n        ')},
        document.getElementById('redoc-container'));
    })();
    </script>
  </body>
</html>
`;

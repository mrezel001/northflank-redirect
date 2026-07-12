import http from "node:http";

const port = Number(process.env.PORT || 3000);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redirecting...</title>

  <script>
    setTimeout(function () {
      window.location.href = "https://facebook.com";
    }, 3000);
  </script>
</head>
<body>
</body>
</html>`;

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html; charset=UTF-8",
    "Cache-Control": "no-store"
  });

  response.end(html);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server is listening on port ${port}`);
});

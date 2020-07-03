import app from "./app";

const server = app.listen(9001, () => {
  console.info("🚀 Server listening on port " + 9001);
});

export default server;

//server
const app = require("./app");
const PORT = 7001;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get("/home", (req, res) => {
  res.send("this is home");
});

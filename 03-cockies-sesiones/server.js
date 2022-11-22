const express = require("express");
const cookieSession = require("cookie-session")

const app = express();

app.use(cookieSession({
  name: "session",
  keys: ["shdhshdgh", "svdhshdjjsd"]
}))

app.get("/", (req, res) => {
  req.session.visits = req.session.visits || 0
  req.session.visits = req.session.visits +1

  res.send("Cantidad de visitas: " + req.session.visits)

})

app.listen(3000, () => {
  console.log("servidor escuchando en el puerto 3000")
})
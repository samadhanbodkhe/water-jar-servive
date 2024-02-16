const express = require("express")
const cors = require("cors")
require("dotenv").config({ path: "./.env" }
)

const app = express()

app.use(express.json())
app.use(cors({ origin:"http://localhost:5173" }))
app.use("/api/admin", require("./routes/adminRoute"))

app.listen(5000, console.log("server running"))
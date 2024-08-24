import 'dotenv/config'
import dbconnect from "./db/dbconnect.js"
import app from "./app.js";


const PORT = process.env.PORT || 8000;

dbconnect()
  .then(() => {
    console.log("hello")
    app.listen(PORT, () => {
      console.log(`Successfully running on ${PORT}`);
    });
  })
  .catch(() => {
    console.log("error in index file")
  })


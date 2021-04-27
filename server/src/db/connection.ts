import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const connect = () => {
  mongoose.connect(
    "mongodb+srv://" +
      process.env.DB_USER +
      ":" +
      process.env.DB_PASS +
      "@todolistcluster.5f8dd.mongodb.net/" + process.env.DB_NAME + "?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log("Connected to DB!");
      }
    }
  );
}

export default connect

const express = require("express");
const mongoose = require("mongoose");
const router = require("./src/app/routes/routes");

(async () => {
    try {
        await mongoose.connect("mongodb+srv://andre:andre@people.joqos.mongodb.net/people?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    } catch (err) {
        console.error(err);
    }
})();

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log("API is Running");
});


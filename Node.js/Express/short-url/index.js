const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./connection");

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const URL = require("./models/url");

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
    console.log("Mongodb connected")
);

// Set view engine and location configuration
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Middlewares to handle incoming formats
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routed paths
app.use("/url", urlRoute);
app.use("/", staticRoute);

app.get("/url/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );
    res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
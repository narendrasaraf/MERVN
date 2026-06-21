const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// MongoDB Connection
mongoose
    .connect("mongodb://127.0.0.1:27017/RESTAPI")
    .then(() => console.log("💯 MongoDB connected successfully!"))
    .catch((err) => console.log("❌ Failed to connect MongoDB", err));

// Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
    },
    job_title: {
        type: String,
    },
});

const User = mongoose.model("User", userSchema);

// ======================
// GET ALL USERS
// ======================

app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
});

// ======================
// GET USER BY ID
// ======================

app.get("/api/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
});

// ======================
// CREATE USER
// ======================

app.post("/api/users", async (req, res) => {
    try {
        const body = req.body;

        if (
            !body.first_name ||
            !body.last_name ||
            !body.email ||
            !body.gender ||
            !body.job_title
        ) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const result = await User.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            gender: body.gender,
            job_title: body.job_title,
        });

        return res.status(201).json({
            message: "User created successfully",
            user: result,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
});

// ======================
// PATCH USER
// ======================

app.patch("/api/users/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                firstName: req.body.first_name,
                lastName: req.body.last_name,
                email: req.body.email,
                gender: req.body.gender,
                job_title: req.body.job_title,
            },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.status(200).json({
            message: "User updated successfully",
            user: updatedUser,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
});

// ======================
// PUT USER
// ======================

app.put("/api/users/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                firstName: req.body.first_name,
                lastName: req.body.last_name,
                email: req.body.email,
                gender: req.body.gender,
                job_title: req.body.job_title,
            },
            {
                new: true,
                overwrite: true,
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.status(200).json({
            message: "User replaced successfully",
            user: updatedUser,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
});

// ======================
// DELETE USER
// ======================

app.delete("/api/users/:id", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.status(200).json({
            message: "User deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
});

// Start Server
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
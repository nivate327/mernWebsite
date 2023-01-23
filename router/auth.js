const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");


router.post("/register", async (req, res) => {

    try {
        const { name, email, phone, work, password, cpassword } = req.body;

        if (!name || !email || !phone || !work || !password || !cpassword) {
            return res.status(422).json({ error: "please filled the field properly !" })
        }

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email is already exists.." });
        } else if (password !== cpassword) {
            return res.status(422).json({ error: "Password are not matching.." });
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });

            //before save password has hashing...
            await user.save();

            return res.status(201).json({ message: "User registered sucessfully !" })

        }

    } catch (error) {
        console.log(error);
    }
})


router.post("/signin", async (req, res) => {
    try {
        let token;
        let { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the Data !" })
        }

        let userLogin = await User.findOne({ email: email });


        if (userLogin) {
            console.log(password);
            let isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credientials 1 !" });
            } else {
                res.json({ message: "Login Sucessfully !" })
                console.log(userLogin);
            }

        } else {
            res.status(400).json({ error: "Invalid Credientials !" });
        }

    } catch (error) {
        console.log(error);
    }
})

router.get("/about", authenticate, (req, res) => {
    res.send(req.rootUser);
})

router.get("/logout", (req, res) => {
    console.log("user logout !");
    res.clearCookie("jwtoken", {path:"/"});
    res.status(200).send("user logout successfully !");
})

router.get("/getdata", authenticate, (req, res) => {
    res.send(req.rootUser);
})

router.post("/contact", authenticate, async (req, res) => {

    try {
        let { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            return res.json({ error: "input filled is empty.." });
        }

        let userContact = await User.findOne({ _id: req.userId });

        if (userContact) {
            const usermsg = await userContact.addMessage(name, email, phone, message);

            await userContact.save();
            res.status(201).json({ message: "user Contact successfully !" })

        }

    } catch (error) {
        console.log(error);
    }

})

module.exports = router;
// const express = require("express");
// const router = express.Router();

// // Help Centre
// router.get("/help",          (req, res) => res.render("pages/help"));
// router.get("/help/home",     (req, res) => res.render("pages/help-home"));
// router.get("/help/booking",  (req, res) => res.render("pages/help-booking"));
// router.get("/help/payments", (req, res) => res.render("pages/help-payments"));
// router.get("/help/safety",   (req, res) => res.render("pages/help-safety"));
// router.get("/help/reviews",  (req, res) => res.render("pages/help-reviews"));
// router.get("/help/account",  (req, res) => res.render("pages/help-account"));

// // Other pages
// router.get("/refer-host",    (req, res) => res.render("pages/refer-host"));
// router.get("/co-host",       (req, res) => res.render("pages/co-host"));

// module.exports = router;

const express = require("express");
const router = express.Router();

// Help Centre
router.get("/help",          (req, res) => res.render("pages/help"));
router.get("/help/home",     (req, res) => res.render("pages/help-home"));
router.get("/help/booking",  (req, res) => res.render("pages/help-booking"));
router.get("/help/payments", (req, res) => res.render("pages/help-payments"));
router.get("/help/safety",   (req, res) => res.render("pages/help-safety"));
router.get("/help/reviews",  (req, res) => res.render("pages/help-reviews"));
router.get("/help/account",  (req, res) => res.render("pages/help-account"));

// Other pages
router.get("/refer-host",    (req, res) => res.render("pages/refer-host"));
router.get("/co-host",       (req, res) => res.render("pages/co-host"));

// Legal pages
router.get("/privacy",       (req, res) => res.render("pages/privacy"));
router.get("/terms",         (req, res) => res.render("pages/terms"));

module.exports = router;
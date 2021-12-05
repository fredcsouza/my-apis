const { Router } = require("express");
const Tmdb = require("./tmdb");
const router = Router();

router.get('/api/tmdb', Tmdb.data);

module.exports = router;
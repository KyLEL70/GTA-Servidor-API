const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name" : "fazt",
        "website": "faztweb.com"
    };
    res.json(data);
})

module.exports = router;
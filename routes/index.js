const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   res.render('home');
});

router.get('/me', (req, res) => {
   res.render('me');
});

router.get('/node', (req, res) => {
   res.render('node');
});

router.get('/nodejs', (req, res) => {
   res.render('node');
});

router.get('/download', (req, res) => {
   res.render('download');
});

router.get('/web', (req, res) => {
   res.render('web');
});

router.get('/code', (req, res) => {
   res.render('code');
});

module.exports = router;
const express = require('express')
const router = express.Router()

const {
	test,
	quotes, 
	tiktokdl, 
	fbImage, 
	textToSpeech
} = require('../controllers/api')

router.get('/', (req, res, next) => {
	res.redirect('/');
})

router.route("/test").get(test);
router.route('/tiktok-dl').get(tiktokdl)
router.route('/quotes').get(quotes)
router.route('/fbImage').get(fbImage)
router.route('/text-to-speech').get(textToSpeech)

module.exports = router
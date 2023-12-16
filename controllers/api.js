const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
const getAPI = require('../utils/getAPI')

const test = asyncWrapper(async (req, res) => {
	getAPI('test', (api) => {
		api.test(req.query.message, (err, resp) => {
			res.type("json").send(JSON.stringify(data, null, 2) + "\n");
        })
  });
});
const quotes = asyncWrapper(async (req, res) => {
	getAPI('quotes', (api) => {
		api.quotes((data) => {
			res.type('json').send(JSON.stringify(data, null, 2) + '\n');
        })
    })
}) 
const tiktokdl = asyncWrapper(async (req, res) => {
	getAPI('tiktokdl', (api) => {
		api.tiktokdl(req.query.url, (err, resp) => {
			if (!err && resp.statusCode === 200) {
                res.set("Content-Type", "video/mp4");
                res.send(resp.body);
            }
        })
    })
})
const fbImage = asyncWrapper(async (req, res) => {
	getAPI('facebook-image', (api) => {
		api.getFbImage(req.query.uid, (err, resp) => {
			if (!err && resp.statusCode === 200) {
                res.set("Content-Type", "image/png");
                res.send(resp.body);
            }
        })
    })
})
const textToSpeech = asyncWrapper(async (req, res) => {
	getAPI('text-to-speech', (api) => {
		api.tts({ lang: req.query.lang, text: req.query.text }, (err, resp) => {
      if (!err && resp.statusCode === 200) {
        res.set("Content-Type", "audio/mp3");
        res.send(resp.body);
      }
    });
    })
}) 


module.exports = {
	test,
	quotes, 
	tiktokdl, 
	fbImage, 
	textToSpeech
}

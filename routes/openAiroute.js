const express = require('express');
const { summaryController,paragraphController,chatbotController,scifiimageController,jsconverterController } = require('../controlers/OpenaiControler');


const router = express.Router();

router.post('/summary',summaryController)
router.post('/paragraph',paragraphController)
router.post('/chatbot',chatbotController)
router.post('/js-converter',jsconverterController)
router.post('/scifi-image',scifiimageController)



module.exports = router;
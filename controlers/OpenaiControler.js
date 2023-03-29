const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

exports.summaryController = async(req,res)=>{
    try {
        const {text} = req.body;
        const {data} = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Summarize this \n${text}`,
            max_tokens: 500,
            temperature: 0.5,
        })
if(data){
    if(data.choices[0].text){
        return res.status(200).json(data.choices[0].text)
    }
}

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message :error.message
        })
    }

}



exports.paragraphController = async(req,res)=>{
    try {
        const {text} = req.body;
        const {data} = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Write detail paragraph about \n${text}`,
            max_tokens: 500,
            temperature: 0.5,
        })
if(data){
    if(data.choices[0].text){
        return res.status(200).json(data.choices[0].text)
    }
}

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message :error.message
        })
    }

}



exports.chatbotController = async(req,res)=>{
    try {
        const {text} = req.body;
        const {data} = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Answer Question similar to how yoda from star war would.
            Me :'What is your name?'
            yoda : 'yoda is my name.'
            Me :${text}
            `,
            max_tokens: 300,
            temperature: 0.7,
        })
if(data){
    if(data.choices[0].text){
        return res.status(200).json(data.choices[0].text)
    }
}

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message :error.message
        })
    }

}
exports.jsconverterController = async(req,res)=>{
    try {
        const {text} = req.body;
        const {data} = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: `/* covert these instruction into javascript code \n ${text}`,
            max_tokens: 400,
            temperature: 0.25,
        })
if(data){
    if(data.choices[0].text){
        return res.status(200).json(data.choices[0].text)
    }
}

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message :error.message
        })
    }

}
exports.scifiimageController = async(req,res)=>{
    try {
        const {text} = req.body;
        const {data} = await openai.createImage({
            // model: "text-davinci-002",
            prompt: `generate a scifi image of ${text}`,
             n:1,
             size:'512x512'
        })
if(data){
    if(data.data[0].url){
        return res.status(200).json(data.data[0].url)
    }
}

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message :error.message
        })
    }

}
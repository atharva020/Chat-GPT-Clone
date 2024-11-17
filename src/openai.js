
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'API_KEY',
  dangerouslyAllowBrowser: true
});

export async function sendMsgToOpenAi(message){
    const res =await openai.chat.completions.create({
        model:'gpt-3.5-turbo',
        prompt:message,
        temprature:0.7,
        max_token:256,
        top_p:1,
        frequency_penality:0,
        presense_penality:0
    });
    return res.data.choices[0].text;
}

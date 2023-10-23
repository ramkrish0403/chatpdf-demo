import OpenAI from 'openai';
import ENV from '../../../environment';

const openai = new OpenAI({
	apiKey: ENV.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

export default openai;
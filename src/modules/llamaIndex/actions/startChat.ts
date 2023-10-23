import { VectorStoreIndex, ContextChatEngine, OpenAI } from 'llamaindex';
import * as readline from 'readline';
import ENV from '../../../environment';

export default async function startChatFromIndex(index: VectorStoreIndex) {
	const retriever = index.asRetriever();
	const chatModel = new OpenAI({
		model: 'gpt-3.5-turbo',
		apiKey: ENV.OPENAI_API_KEY,
	});
	const chatEngine = new ContextChatEngine({ retriever, chatModel });

	// Start chatting with the chat engine
	console.log('Bot: Hello! I am a OPENAI. Ask me anything!');
	while (true) {
		// Ask the user for a message on the command line
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		// Use a Promise to wait for user input
		const userInputPromise = new Promise<string>((resolve) => {
			rl.question('User: ', (input: string) => {
				resolve(input);
				rl.close();
			});
		});

		const userInput = await userInputPromise;

		const response = await chatEngine.chat(userInput);
		// Handle and display the response
		console.log(`Bot: ${response}`, "\n");
	}
}

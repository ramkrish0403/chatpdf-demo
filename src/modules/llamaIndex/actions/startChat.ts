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
	console.log(
		'\x1b[32m%s\x1b[0m',
		'Bot: ',
		'Hello! I am OPENAI Bot. Ask me anything!',
	);

	while (true) {
		// Ask the user for a message on the command line
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		// Use a Promise to wait for user input
		const userInputPromise = new Promise<string>((resolve) => {
			rl.question('\x1b[31mUser:\x1b[0m ', (input: string) => {
				resolve(input);
				rl.close();
			});
		});

		const userInput = await userInputPromise;

		const response = await chatEngine.chat(userInput);
		// Handle and display the response
		console.log('\x1b[32m%s\x1b[0m', 'Bot: ', `${response}`, "\n");
	}
}

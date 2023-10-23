import {
	indexDocuments,
	startChatFromIndex,
	loadDocumentsFromDataFolder,
} from './modules/llamaIndex';

(async () => {
  const documents = await loadDocumentsFromDataFolder();
	const docs = documents instanceof Promise ? await documents : documents;
	const index = await indexDocuments(docs);
	await startChatFromIndex(index);
})();

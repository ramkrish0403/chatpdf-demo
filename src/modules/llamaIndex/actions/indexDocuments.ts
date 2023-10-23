import { Document, VectorStoreIndex } from 'llamaindex';

export default async function indexDocuments(documents: Document | Document[]) {
	if (!Array.isArray(documents)) documents = [documents];
	const index = await VectorStoreIndex.fromDocuments(documents);
	return index;
}

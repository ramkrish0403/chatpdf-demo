import { VectorStoreIndex, ContextChatEngine } from 'llamaindex';

export default async function getChatEngine(index: VectorStoreIndex) {
    const retriever = index.asRetriever();
    const chatEngine = new ContextChatEngine({ retriever });
    return chatEngine;
}
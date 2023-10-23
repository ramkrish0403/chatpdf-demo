import path from 'path';
import {
	SimpleDirectoryReader,
	SimpleDirectoryReaderLoadDataProps,
	Document,
} from 'llamaindex';

let documents: Document[];
export default async function loadDocumentsFromDataFolder() {
	if (documents) return documents;
	const dataProps: SimpleDirectoryReaderLoadDataProps = {
		directoryPath: path.join(__dirname, '../data'),
	};

	documents = await new SimpleDirectoryReader().loadData(dataProps);
	return documents;
}

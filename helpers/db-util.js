import { MongoClient } from "mongodb";

export async function connectData() {
    const client = await MongoClient.connect(
        'mongodb+srv://NextEvents:Guuux7K3zfcgxutB@cluster0.dmlqlfs.mongodb.net/?retryWrites=true&w=majority'
    );
    return client;
}

export async function insertDocument(client, collection, document) {
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);
    return result;
}

export async function getAllDocuments(client, collection, sort) {
    const db = client.db()
    const documents = await db
        .collection('comments')
        .find()
        .sort({ id: -1 })
        .toArray();

    return documents;
}
import { MongoClient } from "mongodb";

export async function connectData() {
    const client = await MongoClient.connect(
        process.env.MONGODB_URL);
    //     const client = await MongoClient.connect(
    // );
    // 'mongodb+srv://bhumi:ylqdi5p9kLQFLNGS@cluster0.dmlqlfs.mongodb.net/EventList?retryWrites=true&w=majority');
    console.log(client)
    return client;
}

export async function insertDocument(client, collection, document) {
    const db = await client.db();
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
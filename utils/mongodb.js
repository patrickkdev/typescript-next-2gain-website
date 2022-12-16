import { connect } from "http2";
import {MongoClient} from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

const cachedDb;
const cachedClient;

if (!uri) {
    throw new Error(
        "Please define the MONGODB_URL enviroment variable inside .env.local",
    );
}

if (!dbName){
    throw new Error(
        "Please define the MONGODB_DB enviroment variable inside .env.local",
    );
}

export function connectToDatabase()
{
    if (cachedDb && cachedClient)
    {
        return { client: cachedClient, db: cachedDb };
    }

    const client = new MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = await client.db(dbName);

    cachedClient = client;
    cachedDb = db;

    return { client, db };
}

export default connectToDatabase;
import { MongoClient, Db } from 'mongodb';
import nextConnect from 'next-connect';
import { ExtendedRequest } from '../interfaces/server';
import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()



async function database(req: any, res: any, next: any) {

  try {
    if (!global['mongodb'] || !global['mongodb'].dbClient) {
      console.log(`Adding mongo client to global...`);
      const client = new MongoClient(serverRuntimeConfig.mongodb.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      if (!client.isConnected()) {
        await client.connect();
        console.log(`MongoDB client connected!`);
      }

      global['mongodb'] = {
        dbClient: client,
        db: client.db(serverRuntimeConfig.mongodb.db)
      }
    }

    req.mongodb = global['mongodb'];
  } catch (e) {
    return res.status(500).send({ message: `Unable to establish a connection to MongoDB. Error: ${e.message}`, });
  }

  return next();
}

const middleware = nextConnect<ExtendedRequest>();

middleware.use(database);

export default middleware;
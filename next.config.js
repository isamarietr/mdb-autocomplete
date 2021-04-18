
module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mongodb: {
      uri: process.env.MDB_URI,
      db: process.env.DB_NAME,
      collection: process.env.COLLECTION_NAME,
    }
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    index: {
      name: process.env.INDEX_NAME,
      field: process.env.INDEX_FIELD
    }
  },
}

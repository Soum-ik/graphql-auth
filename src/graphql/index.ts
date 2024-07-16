import { ApolloServer } from "@apollo/server";

async function CreataApolloServer() {
    const gqlServer = new ApolloServer({ typeDefs: '' });
    await gqlServer.start();
    return gqlServer
}

export default CreataApolloServer;

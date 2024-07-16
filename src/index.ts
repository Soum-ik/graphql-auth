import express from "express";  
import { expressMiddleware } from "@apollo/server/express4";
import CreataApolloServer from "./graphql";


async function init() {
    const app = express();
    const PORT = Number(process.env.PORT) || 8000;
    
    app.use(express.json());

    try {
        app.get("/", (req, res) => {
            res.json({ message: "Server is up and running" });
        });

        app.use("/graphql", expressMiddleware(await CreataApolloServer()));

        app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
    } catch (error) {
        console.error("Failed to start the server", error);
    }
}

init();

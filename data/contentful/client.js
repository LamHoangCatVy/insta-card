import { createClient } from "contentful";

//process.env is a node.js global variable
//if we are on the server, we can use process.env
//if we are on the client, we can't use process.env
//so we need to check if we are on the server or client
//best conventions is to create a function called isServer
//that checks if we are on the server or client

// Function to check if we are on the server or client
function isServer() {
  return !(typeof window !== "undefined" && window.document);
}

// Function to create Contentful client only on the server
const serverOnlyCreateClient = () => {
  if (!isServer()) return;
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    environment: process.env.CONTENTFUL_ENVIRONMENT,
  });

  return client;
};

// Create the client only on the server and export it
const client = serverOnlyCreateClient();

export default client;


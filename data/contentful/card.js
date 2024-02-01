import client from "./client";

export const getCardBlock = async () => {
  const cardData = await client.getEntries({
    content_type: "cardBlock",
  });
  return cardData.items;
};

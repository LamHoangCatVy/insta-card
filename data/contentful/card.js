import client from "./client";

export const getCardBlock = async () => {
  const cardData = await client.getEntries({
    content_type: "cardBlock",
  });
  console.log(cardData);
  return cardData.items;
};

import client from "./client";

export const getHero = async () => {
  const data = await client.getEntries({
    content_type: "hero",
  });
  return data.items;
};

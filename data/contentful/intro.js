import client from "./client";

export const getIntroBlock = async () => {
  const introData = await client.getEntries({
    content_type: "imageIntroBlock",
  });
  return introData.items;
};

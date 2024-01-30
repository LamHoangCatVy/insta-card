const HERO_COMPONENT_GRAPHQL_FIELDS = `
  title
  img {
    url
  }
  description
  buttonLink
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    },
  ).then((response) => response.json());
}


function extractHeroComponent(fetchResponse: any): any {
  return fetchResponse?.data?.heroComponentCollection?.items?.[0];
}

export async function getHeroComponent(preview = false): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      heroComponent(preview: ${preview}, limit: 1) {
        items {
          ${HERO_COMPONENT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  return extractHeroComponent(entry);
}
export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/6759e52588767cdc34b9b3b4?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`,
      { next: { revalidate: 120 } }
    );

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }

    return res.json();
  } catch (err) {
    throw new Error("failed to fetch data");
  }
}

export async function getSubMenu() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,`,
      { next: { revalidate: 120 } }
    );

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }

    return res.json();
  } catch (err) {
    throw new Error("failed to fetch data");
  }
}

export async function getItemBySlug(itemSlug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;

  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: itemSlug,
    }),
    props: "slug, title, content, metadata",
    read_key: process.env.READ_KEY as string,
  });

  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const res = await fetch(url, { next: { revalidate: 120 } });

    if (!res.ok) {
      throw new Error("failed ge item by slug");
    }

    return res.json();
  } catch (err) {
    throw new Error("failed ge item by slug");
  }
}

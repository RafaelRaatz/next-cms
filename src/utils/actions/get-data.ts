export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/6759e52588767cdc34b9b3b4?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`
    );

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }

    return res.json();
  } catch (err) {
    throw new Error("failed to fetch data");
  }
}

export async function getMyProductApi({ order = "recent", page = 1 }) {
  const res = await fetch(
    `https://panda-market-api.vercel.app/products?page=${page}&pageSize=10&orderBy=${order}`
  );

  try {
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

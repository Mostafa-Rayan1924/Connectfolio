// get posts
export const getPosts = async (page = 1) => {
  let fetchData = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts?limit=10&page=${page}`
  );
  if (!fetchData.ok) throw new Error("Failed to fetch data");
  let { data } = await fetchData.json();
  return data;
};

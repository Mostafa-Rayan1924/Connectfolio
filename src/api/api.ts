// get posts
export const getPosts = async (page = 1) => {
  let fetchData = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts?limit=8&page=${page}`,
    {
      cache: "no-store",
    }
  );
  if (!fetchData.ok) {
    console.log(fetchData);
    throw new Error("Failed to fetch data");
  }
  let res = await fetchData.json();
  return res;
};
// get user info for profile
export const getUserInfo = async (id: number) => {
  let fetchData = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!fetchData.ok) throw new Error("Failed to fetch user info");
  let { data } = await fetchData.json();
  return data;
};
// get posts of users
export const getPostsOfUser = async (id: number) => {
  let fetchData = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users/${id}/posts`,
    {
      cache: "no-store",
    }
  );
  if (!fetchData.ok) throw new Error("Failed to fetch users posts ");
  let { data } = await fetchData.json();
  return data;
};

// get users

export const getUsers = async (page: number) => {
  let fetchData = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users?limit=8&page=${page}`
  );
  if (!fetchData.ok) {
    throw new Error("Failed to fetch data");
  }
  let res = await fetchData.json();
  return res;
};

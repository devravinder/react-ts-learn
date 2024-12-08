const API_BASEPATH = 'https://jsonplaceholder.typicode.com';

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getUsers = async () => {
  await sleep(1000);
  const res = await fetch(`${API_BASEPATH}/users`);
  //throw new Error('Some Error');
  return res.json();
};

export const QueryKeys = {
  users: () => ['users'],
};

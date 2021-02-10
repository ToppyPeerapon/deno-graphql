const page = 1;
const limit = 12;

export const fetchGetOrganizations = async () => {
  const dataJSON = await fetch(
    `https://poseidon-api-in-staging.uat.kaidee.com/v7/organisations?page=${page}&limit=${limit}`,
  );
  const data = await dataJSON.json();
  return data;
};

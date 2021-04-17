import axios from "axios";

export const getAllCharacters = async () => {
  let response;
  const endpoint =
    "https://rickandmortyapi.com/api/character/?page=1&status=alive";

  try {
    response = await axios.get(endpoint);
  } catch (error) {
    return Promise.reject(error);
  }

  console.log({ response  }, `length ${response.data.results.length}`);

  return Promise.resolve(response.data);
};

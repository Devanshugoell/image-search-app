import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Lz4jDowcxSD_p24jjpPd_9k_yUwFjiPVVGJcO9W-5yI",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;

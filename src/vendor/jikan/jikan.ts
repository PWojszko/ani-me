import { Anime, SeasonAnimeList, TopAnimeList } from "./jikanTypes";
import NodeCache from "node-cache";

const myCache = new NodeCache({ stdTTL: 60 });
const baseUrl = "https://api.jikan.moe/v4";

const fetchWithCache = async <T>(path: string): Promise<T> => {
  try {
    let data = myCache.get(`${baseUrl}/${path}`);

    if (data == undefined) {
      const response = await fetch(`${baseUrl}/${path}`);
      data = await response.json();
      myCache.set(`${baseUrl}/${path}`, data);
    }

    return data as T;
  } catch (e) {
    throw e;
  }
};

const Jikan = {
  animeById: async (id: string) =>
    fetchWithCache<{ data: Anime }>(`anime/${id}/full`).then(
      (data) => data.data
    ),

  // characters: async (id: string) => fetch(`${baseUrl}/anime/${id}/characters`),

  topList: async () => fetchWithCache<TopAnimeList>("top/anime"),
  seasonList: async () => fetchWithCache<SeasonAnimeList>("seasons/now"),
};

export default Jikan;

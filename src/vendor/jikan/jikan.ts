import { Anime, Character, SeasonAnimeList, TopAnimeList } from "./jikanTypes";
import NodeCache from "node-cache";

const myCache = new NodeCache({ stdTTL: 5 });
const baseUrl = "https://api.jikan.moe/v4";

const fetchWithCache = async <T>(path: string): Promise<T | undefined> => {
  try {
    let data = myCache.get(`${baseUrl}/${path}`);

    if (!data) {
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
    fetchWithCache<{ data: Anime }>(`anime/${id}/full`),
  characters: async (id: string) =>
    fetchWithCache<{ data: Character[] }>(`anime/${id}/characters`),
  topList: async () => fetchWithCache<TopAnimeList>("top/anime"),
  seasonList: async () => fetchWithCache<SeasonAnimeList>("seasons/now"),
};

export default Jikan;

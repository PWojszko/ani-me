import {
  Anime,
  Character,
  Season,
  SeasonNow,
  SeasonsList,
  TopAnime,
} from "./jikanTypes";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const fetchWithCache = async <T>(path: string): Promise<T | undefined> => {
  const baseUrl = "https://api.jikan.moe/v4";

  try {
    const response = await fetch(`${baseUrl}/${path}`);
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Failed to fetch data");
  }
};

const Jikan = {
  animeById: async (id: string) =>
    fetchWithCache<{ data: Anime }>(`anime/${id}/full`),
  characters: async (id: string) =>
    fetchWithCache<{ data: Character[] }>(`anime/${id}/characters`),

  getTopAnime: async () => fetchWithCache<TopAnime>("top/anime"),
  getSeasonNow: async () => fetchWithCache<SeasonNow>("seasons/now"),
  getSeasonsList: async () => fetchWithCache<SeasonsList>(`seasons`),
  getSeason: async (year: string | number, season: string) =>
    fetchWithCache<Season>(`seasons/${year}/${season}`),
};

export default Jikan;

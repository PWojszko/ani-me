import {
  Anime,
  Character,
  Season,
  SeasonNow,
  SeasonsList,
  TopAnime,
} from "./JikanTypes";

const fetchData = async <T>(path: string): Promise<T | undefined> => {
  const baseURL = "http://localhost:3000";

  try {
    const response = await fetch(`${baseURL}/${path}`);
    const data: T = await response.json();
    return data;
  } catch (e) {
    throw new Error("Failed to fetch data");
  }
};

const Jikan = {
  animeById: async (id: string) =>
    fetchData<{ data: Anime }>(`api/jikan/anime/${id}/full`),
  characters: async (id: string) =>
    fetchData<{ data: Character[] }>(`anime/${id}/characters`),
  getTopAnime: async () => fetchData<TopAnime>("top/anime"),
  getSeasonNow: async () => fetchData<SeasonNow>("seasons/now"),
  getSeasonsList: async () => fetchData<SeasonsList>(`seasons`),
  getSeason: async (year: string | number, season: string) =>
    fetchData<Season>(`seasons/${year}/${season}`),
};

export default Jikan;

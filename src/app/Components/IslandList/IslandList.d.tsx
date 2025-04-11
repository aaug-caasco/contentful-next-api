export interface IIslandListProps {
  listNamesData: string[];
  apiUrl: string;
  componentHeader: string;
}

export interface IPostProps {
  data: {
    country: string;
    iso3: string;
    cities: string[];
  }[];
}

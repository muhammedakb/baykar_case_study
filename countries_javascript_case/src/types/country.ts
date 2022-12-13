interface Ara {
  official: string;
  common: string;
}
interface Nld {
  official: string;
  common: string;
}
interface Pap {
  official: string;
  common: string;
}
interface NativeName {
  ara: Ara;
  nld: Nld;
  pap: Pap;
}
interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}
interface MRU {
  name: string;
  symbol: string;
}
interface AWG {
  name: string;
  symbol: string;
}
interface Currencies {
  MRU: MRU;
  AWG: AWG;
}
interface Idd {
  root: string;
  suffixes: string[];
}
interface Languages {
  ara: string;
  nld: string;
  pap: string;
}
interface Ara2 {
  official: string;
  common: string;
}
interface Bre {
  official: string;
  common: string;
}
interface Ces {
  official: string;
  common: string;
}
interface Cym {
  official: string;
  common: string;
}
interface Deu {
  official: string;
  common: string;
}
interface Est {
  official: string;
  common: string;
}
interface Fin {
  official: string;
  common: string;
}
interface Fra {
  official: string;
  common: string;
}
interface Hrv {
  official: string;
  common: string;
}
interface Hun {
  official: string;
  common: string;
}
interface Ita {
  official: string;
  common: string;
}
interface Jpn {
  official: string;
  common: string;
}
interface Kor {
  official: string;
  common: string;
}
interface Nld2 {
  official: string;
  common: string;
}
interface Per {
  official: string;
  common: string;
}
interface Pol {
  official: string;
  common: string;
}
interface Por {
  official: string;
  common: string;
}
interface Rus {
  official: string;
  common: string;
}
interface Slk {
  official: string;
  common: string;
}
interface Spa {
  official: string;
  common: string;
}
interface Swe {
  official: string;
  common: string;
}
interface Tur {
  official: string;
  common: string;
}
interface Urd {
  official: string;
  common: string;
}
interface Zho {
  official: string;
  common: string;
}
interface Translations {
  ara: Ara2;
  bre: Bre;
  ces: Ces;
  cym: Cym;
  deu: Deu;
  est: Est;
  fin: Fin;
  fra: Fra;
  hrv: Hrv;
  hun: Hun;
  ita: Ita;
  jpn: Jpn;
  kor: Kor;
  nld: Nld2;
  per: Per;
  pol: Pol;
  por: Por;
  rus: Rus;
  slk: Slk;
  spa: Spa;
  swe: Swe;
  tur: Tur;
  urd: Urd;
  zho: Zho;
}
interface Eng {
  f: string;
  m: string;
}
interface Fra2 {
  f: string;
  m: string;
}
interface Demonyms {
  eng: Eng;
  fra: Fra2;
}
interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}
interface Gini {
  2014: number;
}
interface Car {
  signs: string[];
  side: string;
}
interface Flags {
  png: string;
  svg: string;
}
interface CoatOfArms {
  png: string;
  svg: string;
}
interface CapitalInfo {
  latlng: number[];
}

export interface ICountry {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
}

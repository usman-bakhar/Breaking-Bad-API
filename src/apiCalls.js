import Axios from "axios";

export function getCharactersList(search) {
  return Axios.get(`https://www.breakingbadapi.com/api/characters?name=${search}`);
}

export function getCharactersDetail(id) {
  return Axios.get(`https://www.breakingbadapi.com/api/characters/${id}`);
}

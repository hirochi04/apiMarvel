import md5 from 'md5';

const publicKey = '369de61d35579a4af83363857085f1ce';
const privateKey = '2ed791dc352da2b199508fc0be8a9ed697707064';

export const getGifs = async (name) => {
  const ts = new Date().getTime();
  const hash = md5(`${ts}${privateKey}${publicKey}`);
  const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
    const { data } = await resp.json();
    const characters = data.results.map((character) => ({
      id: character.id,
      name: character.name,
      thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      descripcion: character.description,
    }));
    return characters;
  } catch (err) {
    console.error("Failed to fetch characters: ", err);
    throw err;
  }
};
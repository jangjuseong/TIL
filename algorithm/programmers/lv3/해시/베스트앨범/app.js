function solution(genres, plays) {
  const songs = [];
  const genreCount = {};
  for (let i = 0; i < genres.length; i++) {
    if (!genreCount[genres[i]]) {
      genreCount[genres[i]] = 0;
    }
    genreCount[genres[i]] += plays[i];

    songs.push({ genre: genres[i], playCount: plays[i], index: i });
  }

  songs.sort((a, b) => {
    if (a.genre !== b.genre) {
      return genreCount[b.genre] - genreCount[a.genre];
    } else if (a.playCount !== b.playCount) {
      return b.playCount - a.playCount;
    } else {
      return a.index - b.index;
    }
  });

  const result = [];
  const selected = {};

  for (const song of songs) {
    if (!selected[song.genre]) {
      selected[song.genre] = 0;
    }
    if (selected[song.genre] < 2) {
      result.push(song['index']);
      selected[song.genre]++;
    }
  }
  return result;
}

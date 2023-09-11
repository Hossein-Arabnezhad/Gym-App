export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();

  return data;
};



// const options = {
//   method: 'GET',
//   url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
//   headers: {
//     'X-RapidAPI-Key': 'c2abd91b4cmshc052e480b51961fp1f38cdjsn3a9a338cde0e',
//     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
//   }
// };


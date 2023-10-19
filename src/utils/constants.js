const API_KEY = import.meta.env.VITE_API_KEY
console.log(API_KEY, 'keyeyey')

export const VIDEO_LIST_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&maxResults=15&regionCode=IN&key=${API_KEY}`

export const SUGGESTED_VIDEO_LIST_API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=${API_KEY}&q=`

export const VIDEO_INFO_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&regionCode=IN&key=${API_KEY}&id=`

export const CHANNEL_INFO_API_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&key=${API_KEY}&id=`

export const SEARCH_SUGGESTIONS_API_URL =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&gl=IN&q='

export const SEARCH_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=${API_KEY}&q=`

export const COMMENTS_LIST_API = `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&textFormat=plainText&part=snippet&maxResults=100&orderby=published&videoId=`

export const URL_REGEX =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi

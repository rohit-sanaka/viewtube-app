import useFetch from '../utils/useFetch'
import { SUGGESTED_VIDEO_LIST_API_URL } from '../utils/constants'
import SuggestedVideoCard from './SuugestedVideoCard'
import { Link } from 'react-router-dom'

const VideoSuggestions = ({ videoId }) => {
  let { data: suggestedVideos, error, isLoading } = useFetch(SUGGESTED_VIDEO_LIST_API_URL + videoId)
  if (isLoading) {
    return (
      <div className='w-11/12 pl-5 pt-7 child:mb-5 child:block child:w-full'>
        <div>Loading...</div>
      </div>
    )
  }
  if (error) {
    return (
      <div className='w-11/12 pl-5 pt-7 child:mb-5 child:block child:w-full'>
        <div>{error}</div>
      </div>
    )
  }
  suggestedVideos = suggestedVideos?.slice(1)
  return (
    <div className='w-11/12 pl-5 pt-7 child:mb-5 child:block child:w-full'>
      {suggestedVideos?.map((suggestion) => {
        return (
          <Link key={suggestion?.id?.videoId} to={`/watch?v=${suggestion?.id?.videoId}`}>
            <SuggestedVideoCard key={suggestion?.id?.videoId} info={suggestion} />
          </Link>
        )
      })}
    </div>
  )
}

export default VideoSuggestions

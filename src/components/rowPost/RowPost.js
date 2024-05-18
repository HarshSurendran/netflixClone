import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from "../../constants/constants"
import Youtube from 'react-youtube'
import axios from "../../axios"
import "./RowPost.css"

function RowPost({title,isSmall,url}) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState();

  useEffect(()=>{
      axios.get(url).then((response)=>{
      setMovies(response.data.results);
    })
  },[]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovieClick = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language =en-US`).then((response)=>{
      if(response.data.results.length!=0){
        setUrlId(response.data.results[0])
      }
    })
  }
  
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='posters'>
            {
              movies.map((movie)=>
                <img onClick={()=> handleMovieClick(movie.id)} key={movie.id} className={isSmall?'smallPoster':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt=''></img>
              )
            }               
        </div> 
        {urlId && <Youtube opts={opts} videoId={urlId.key} />}     
    </div>
  )
}

export default RowPost

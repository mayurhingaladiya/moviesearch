import React from 'react'

interface MovieCardProps {
    title: string;
    overview: string;
    posterPath: string;
}

const MovieCard = ({title, overview, posterPath}: MovieCardProps) => {
    const imageURL = posterPath ? `http://image.tmdb.org/t/p/w500${posterPath}`:'/no-image-available.png'
  return (
    <div className='bg-white rounded-xl shadow p-4'>
        <img src={imageURL} className='w-full h-64 rounded-xl md-4' alt="" />
        <h2 className='text-2xl font-bold mb-2'>{title}</h2>
        <p className='text-sm'>{overview.substring(0,150)}</p>
      
    </div>
  )
}

export default MovieCard

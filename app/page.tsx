import Image from 'next/image'
import MovieSearch from './components/MovieSearch'

export default function Home() {
  return (
    <main className="flex min-h-fit flex-col items-center justify-between p-24 bg-gray-300">
      Movie Database
      <MovieSearch/>
    </main>
  )
}

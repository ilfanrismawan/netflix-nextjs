import Image from "next/image"
import { Movie } from "../typings"
import PlayIcon from "@heroicons/react/24/outline/PlayIcon"

interface Props {
    //  for Firebase Configurations
    // movie: Movie | DocumentData
    movie: Movie
}
function Thumbnail({ movie }: Props) {
    return (
        <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
            <PlayIcon className="hidden hover:visible" />
            <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} className="rounded-sm object-cover md:rounded" fill alt={movie.title} />
        </div>
    )
}

export default Thumbnail
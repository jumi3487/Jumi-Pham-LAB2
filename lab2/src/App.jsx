import { useState } from 'react'
import './index.css';
import Artists from "./components/Artists";

const ARTISTS = [
  {
    artist: "The Beatles",
    image: "./public/thebeattles.jpg",
    country: "United Kingdom",
    year: "1960-1970"
  },
  {
    artist: "Michael Jackson",
    image: "./public/michaeljackson.jpg",
    country: "United States",
    year: "1964-2009"
  },
  {
    artist: "Elvis Presley",
    image: "./public/elvispresley.jpg",
    country: "United States",
    year: "1953-1977"
  },
  {
    artist: "Elton John",
    image: "./public/eltonjohn.jpg",
    country: "United Kingdom",
    year: "1962-present"
  },
  {
    artist: "Madonna",
    image: "./public/madonna.avif",
    country: "United States",
    year: "1979-present"
  },
  {
    artist: "Queen",
    image: "./public/queen.png",
    country: "United Kingdom",
    year: "1971-present"
  },
  {
    artist: "Led Zeppelin",
    image: "./public/ledzeppelin.jpg",
    country: "United Kingdom",
    year: "1968-1980"
  },
  {
    artist: "Pink Floyd",
    image: "./public/pinkfloyd.jpg",
    country: "United Kingdom",
    year: "1965-2014"
  },
  {
    artist: "The Rolling Stones",
    image: "./public/rollingstones.jpg",
    country: "United Kingdom",
    year: "1962-present"
  },
  {
    artist: "Beyonce",
    image: "./public/beyonce.jpg",
    country: "United States",
    year: "1979-present"
  },
]

function App() {
  return (
    <>
    <div className="body">
        <div>
          <header>
            <h1>Best-selling music artists</h1>
          </header>
        </div>

        <div>
          <main>
            <div className="">
            {ARTISTS.map((artist, index) => (
              <Artists key={index} artists={artist} />
            ))}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App;
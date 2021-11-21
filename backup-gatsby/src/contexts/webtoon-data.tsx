import { createContext } from "react"

let webtoon: Webtoon.context

export const WebtoonData: React.Context<Webtoon.context> =
  createContext(webtoon)

export const Test = createContext(3)
import { NewsCard } from "../News/NewsCard"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import "./OtherNews.css"

import News2 from "../../images/news2.png"
import News3 from "../../images/news3.png"

export const OtherNews = () => {
   return (
      <div className="other-news-container">
         <ArrowHeading>Другие новости</ArrowHeading>
         <div className="other-news-list">
            {news.map((item) => (
               <NewsCard key={item.id} item={item} />
            ))}
         </div>
      </div>
   )
}

const news = [
   {
      id: 2,
      image: News2,
      title: "Покупка нового экскаватора",
      date: "9 вевраль 2023",
   },
   {
      id: 3,
      image: News3,
      title: "Мы переехали!",
      date: "7 июля 2022",
   },
]

import { Link, useSearchParams } from "react-router-dom"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import ReactPaginate from "react-paginate"
import { NewsCard } from "./NewsCard"
import RightArrowSvg from "../R_Arrow"
import LeftArrowSVG from "../L_Arrow"
import "./News.css"

import News1 from "../../images/news1.png"
import News2 from "../../images/news2.png"
import News3 from "../../images/news3.png"

export const News = () => {
   const [searchParams, setSearchParams] = useSearchParams()
   const page = parseInt(searchParams.get("page")) || 1;

   const onPageChange = (e) => {
      const pageNumber = e.selected
      if (pageNumber === 0) {
         setSearchParams({}, { replace: true });
      } else {
         setSearchParams({ page: pageNumber + 1 }, { replace: true });
      }
   }

   return (
      <main className="container news-content">
         <div className="breadcrumbs">
            <LeftArrowSVG />
            <div className="breadcrumbs-text">
               <Link to="/">Главная</Link>/<Link to="/news">Новости</Link>
            </div>
         </div>

         <SectionHeading title="Новости" description="Новости нашей компании" />

         <div className="news-big-container">
            <NewsCard item={news[0]} isHero />
            <div className="news-small-container">
               {news.slice(1, news.length).map((item) => (
                  <NewsCard key={item.title} item={item} />
               ))}
            </div>
         </div>

         <div className="news-list">
            {Array.from({ length: 10 }, () => Object.assign({}, news[1])).map((item, index) => (
               <NewsCard key={item.id + item.title + index} item={item} />
            ))}
         </div>

         <ReactPaginate
            breakLabel="..."
            nextLabel={<RightArrowSvg />}
            previousLabel={<LeftArrowSVG />}
            containerClassName="news-pagination"
            nextClassName="news-pagination-next-button"
            previousClassName="news-pagination-prev-button"
            pageClassName="news-pagination-page"
            onPageChange={onPageChange}
            pageRangeDisplayed={3}
            pageCount={12}
            initialPage={page}
            disableInitialCallback
            renderOnZeroPageCount={null}
         />

      </main >
   )
}

const news = [
   {
      id: 1,
      image: News1,
      title: "Подписание нового контракта с [Компания]",
      description: "15 числа Техметсервис выиграл тендер на реновацию... ",
      date: "14 мая 2023"
   },
   {
      id: 2,
      image: News2,
      title: "Покупка нового экскаватора",
      date: "9 вевраль 2023"
   },
   {
      id: 3,
      image: News3,
      title: "Мы переехали!",
      date: "7 июля 2022"
   },
]

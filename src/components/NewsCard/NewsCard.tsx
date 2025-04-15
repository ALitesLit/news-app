import { useEffect, useState } from "react";
import { flag } from "country-emoji";

import KW from "../KW/KW";
import { IData_SnippetNews } from "../../types/etitys";
import convert from "../../service/formatNumber";
import { getMoth } from "../../service/formatDate";

import book from "../../assets/svg/book.svg";
import web from "../../assets/svg/web.svg";

import "./NewsCard.scss";


const NewsCard = ({ card }: { card: IData_SnippetNews }) => {
    const [ more, setMore ] = useState<boolean>(false);
    const [ date, setDate ] = useState<Date>();


    useEffect(
        () => {
            setDate(new Date());
        }, [ card?.DP ]
    );


    return (
        <div className="news__card">
            <div className="news__card-header">
                <div className="news__card-info">
                    <p><span className="value">{ date?.getDate() }</span> { date && getMoth(date) } { date?.getFullYear() }</p>

                    <p><span className="value">{convert(card?.REACH)}</span> Reach</p>
                
                    <div className="traffics">
                        {
                            card.TRAFFIC.map(
                                (i, index) => (
                                    <p key={index}>{ i.value } <span className="value">{ i.count }</span></p>
                                )
                            )
                        }
                    </div>
                </div>

                <div className="news__card-right">
                    <span className="sent">{ card?.SENT }</span>
                    <span className="round">i</span>
                    <span className="round"></span>
                </div>
            </div>

            <div className="card__title">
                <a href={ card?.URL } target="_blank" className="card__title-name"><h1 className="card__title-name">{ card?.TI }</h1></a>
                
                <div className="card__title-info">
                    <a className="icon" href={ card?.DOM }><img src={web} /> { card?.DOM }</a>

                    <p className="icon">{ flag(card?.CNTR) } { card?.CNTR }</p>
                    <p className="icon"><img src={book} /> { card?.LANG.toUpperCase() }</p>
                </div>
            </div>

            <div className="card__content">
                <p className="card__content-text">
                    {
                        more ? (
                            card?.AB
                        ) : (
                            card?.HIGHLIGHTS.length && (
                                card?.HIGHLIGHTS.map(i => <span dangerouslySetInnerHTML={{__html: i}}></span>)
                            )
                        )
                    }
                </p>

                {
                    !more && <span className="show_more hover" onClick={() => setMore(true)}>Show more</span>
                }
            </div>

            <div className="news__card-kw">
                {
                    card?.KW.length && (
                        card?.KW.map(
                            (i, index) => <KW kw={i} key={index} />
                        )
                    )
                }
            </div>

            <button className="original hover">Original Source</button>
        </div>
    )
}


export default NewsCard;
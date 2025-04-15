import { IData_SnippetNews } from "../../types/etitys";
import convert from "../../service/formatNumber";

import "./NewsCard.scss";


const NewsCard = ({ card }: { card: IData_SnippetNews }) => {
    return (
        <div className="news__card">
            <div className="news__card-header">
                <div className="news__card-info">
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
                    <span className="positive">Positive</span>
                    <span className="round"></span>
                    <span className="round"></span>
                </div>
            </div>

            <div className="news__card-title">
                <a href={ card?.URL } target="_blank"><h1 className="news__card-name">{ card?.TI }</h1></a>
                
                <div>
                    <span className="web_icon icon">sdf</span>
                </div>
            </div>
        </div>
    )
}


export default NewsCard;
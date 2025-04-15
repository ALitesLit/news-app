import NewsCard from "../../components/NewsCard/NewsCard";
import { IData_SnippetNews } from "../../types/etitys";

import data from "../../mock/data.json";

import "./Main.scss";


const Main = () => {


    return (
        <>
            <main className="main">
                <section className="news__list">
                    {
                        data.map(
                            ( i, key ) => (
                                <NewsCard card={ i } key={key} />
                            )
                        )
                    }
                </section>
            </main>
        </>
    )
}


export default Main;
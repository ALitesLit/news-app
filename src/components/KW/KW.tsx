import { IData_TagItem } from "@/types/etitys";
import "./KW.scss";


const KW = ({ kw }: { kw: IData_TagItem }) => {
    return (
        <div className="kw">
            <p>{ kw?.value } <span>{ kw?.count }</span></p>
        </div>
    )
}


export default KW;
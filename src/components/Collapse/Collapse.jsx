import data from "../../../about.json";
import "./Collapse.sass";

function Collapse() {
    return  (
        <div className="collapse">
            {data.map((item, index) => (
                <div key={index} className="collapse__item">
                    <h2 className="collapse__title">{item.title}</h2>
                    <p className="collapse__description">{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Collapse;
import Badge from "react-bootstrap/Badge"
import practiceData from "../data/selectedPractise";

export default function RightPane({ borough, pcn, practise }) {

    const renderImage = (practiceName) => {
        const item = practiceData.practice.filter(e => e.name === practiceName);
        console.log(item);

        if (item.length > 0) return item[0].url

        return "";
    }

    return (
        <div style={{ "margin-top": "55px" }}>
            <h5>
                <Badge pill bg="light" text="muted">{borough}</Badge>
                {
                    pcn && " -> "
                }
                <Badge pill bg="light" text="muted">{pcn}</Badge>
                {
                    practise && " -> "
                }
                <Badge pill bg="primary">{practise}</Badge>
            </h5>



            <div style={{ "overflow": "auto", "width": "50%", "height": "300px" }}>
                <img width="1000px" src={renderImage(practise)} />
            </div>

        </div>
    )
}
import Badge from "react-bootstrap/Badge"
import practiceData from "../data/selectedPractise";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Tab from "react-bootstrap/Tab"


export default function RightPane({ borough, pcn, practise }) {

    const renderImage = (practiceName) => {
        const item = practiceData.practice.filter(e => e.name === practiceName);
        console.log(item);

        if (item.length > 0) return item[0].url

        return "";
    }

    return (
        <div style={{ "margin-top": "55px" }}>
            <Row>
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

            </Row>
            {
                practise && renderImage(practise) &&
                <Row style={{ "margin-top": "40px" }}>
                    <Col lg="6">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Upcoming shift</Card.Title>
                                <Card.Title>Booked Shift</Card.Title>
                                <Card.Title>Cancellation request</Card.Title>
                                <Card.Title>Swap request</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <div style={{ "overflow": "auto", "width": "100%", "height": "300px" }}>
                            <img width="1000px" src={renderImage(practise)} />
                        </div>
                    </Col>
                </Row>
            }



        </div>
    )
}
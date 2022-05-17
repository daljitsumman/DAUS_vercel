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
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
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
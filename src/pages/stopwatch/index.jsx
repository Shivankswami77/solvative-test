import { Button, Col, Row } from "antd";

const Stopwatch = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>1s</h1>
      <Row justify="center" gutter={[16, 16]}>
        <Col>
          <Button type="primary">Start</Button>
        </Col>
        <Col>
          <Button type="primary" danger>
            Stop
          </Button>
        </Col>
        <Col>
          <Button>Reset</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Stopwatch;

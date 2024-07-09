import { useEffect } from "react";
import { Button, Row, Col } from "antd";
import useStore from "../../store/store";

const Stopwatch = () => {
  const {
    time,
    isRunning,
    elapsedSeconds,
    startTimer,
    stopTimer,
    resetTimer,
    incrementTime,
  } = useStore();

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        incrementTime();
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, incrementTime]);

  return (
    <div className="App">
      <h1>Solative Test</h1>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>{time}s</h1>
        {elapsedSeconds > 0 && <h3>Elapsed Time: {elapsedSeconds}s</h3>}
        <Row justify="center" gutter={[16, 16]}>
          <Col>
            <Button type="primary" onClick={startTimer}>
              {isRunning ? "Pause" : "Start"}
            </Button>
          </Col>
          <Col>
            <Button type="primary" danger onClick={stopTimer}>
              Stop
            </Button>
          </Col>
          <Col>
            <Button onClick={resetTimer}>Reset</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Stopwatch;

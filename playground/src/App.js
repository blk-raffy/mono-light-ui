import './App.css';

import { Container, Col, Row, Monolight, MediaSwitch, Button, Input } from './component-lib'

function App() {
  return (
    <Monolight.Provider value={{
      column: 12,
      architectMode: {
        show: false,
        color: '#5c95ff'
      },
      margins: {
        vertical: 0,
        horizontal: 400,
      },
      breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1500
      }
  }}>
      <Container fluid>
        <Container>
          <Row animate={false}>
            <Col span={[1]}>
                test col
            </Col>
            <Col span={[1]} offset={[10]}>
              test col
            </Col>
          </Row>
          <MediaSwitch childrens={[
              <div>This will be shown on Mobile</div>,
              <div>This will be shown on Ipad</div>,
              <div>This will be shown on Desktop</div>
            ]}
            breakpoints={[
              500, 800, 9999
            ]}/>
          <Button style={{ backgroundColor: "red" }}>Babbano</Button>
          <Input placeholder={"input"}/>
        </Container>
      </Container>
    </Monolight.Provider>
  );
}

export default App;

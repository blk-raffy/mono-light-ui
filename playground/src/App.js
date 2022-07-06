import './App.css';

import { Container, Col, Row, Monolight, MediaSwitch } from './component-lib'

function App() {
  return (
    <Monolight.Provider value={{
      column: 12,
      architectMode: {
        show: true,
        color: '#5c95ff'
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
        </Container>
      </Container>
    </Monolight.Provider>
  );
}

export default App;

import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from  'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'
function ContainerBreakPoint() {
  return (
    <>
    <Container>
    <Row >
      <Col className="text-bg-primary border" md={6}>Grid</Col>
      <Col className="text-bg-primary border" md={4}>Grid</Col>
      <Col className="text-bg-primary border">Grid</Col>
    </Row>
    </Container>
    </>
    
  )
}

export default ContainerBreakPoint
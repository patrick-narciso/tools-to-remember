import React from 'react';
import { Card, Heading } from '@Uikit';
import { Container, Row, Col } from 'react-awesome-styled-grid';

export default {
  title: 'Card',
};

export const flat = () => (
  <Container>
    <Row>
      <Col>
        <Heading size={1}>Main Flat Card</Heading>
      </Col>
    </Row>
    <Row>
      <Col xs={4} md={4} sm={4} lg={4}>
        <Card />
      </Col>
    </Row>
  </Container>
);

export const firstElevation = () => (
  <Container>
    <Row>
      <Col>
        <Heading size={1}>Elevation Card 1</Heading>
      </Col>
    </Row>
    <Row>
      <Col xs={4} md={4} sm={4} lg={4}>
        <Card elevation={1} />
      </Col>
    </Row>
  </Container>
);

export const secondElevation = () => (
  <Container>
    <Row>
      <Col>
        <Heading size={1}>Elevation Card 2</Heading>
      </Col>
    </Row>
    <Row>
      <Col xs={4} md={4} sm={4} lg={4}>
        <Card elevation={2} />
      </Col>
    </Row>
  </Container>
);

export const thirdElevation = () => (
  <Container>
    <Row>
      <Col>
        <Heading size={1}>Elevation Card 3</Heading>
      </Col>
    </Row>
    <Row>
      <Col xs={4} md={4} sm={4} lg={4}>
        <Card elevation={3} />
      </Col>
    </Row>
  </Container>
);

export const fourthElevation = () => (
  <Container>
    <Row>
      <Col>
        <Heading size={1}>Elevation Card 4</Heading>
      </Col>
    </Row>
    <Row>
      <Col xs={4} md={4} sm={4} lg={4}>
        <Card elevation={4} />
      </Col>
    </Row>
  </Container>
);

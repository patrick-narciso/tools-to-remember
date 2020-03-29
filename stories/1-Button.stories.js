import React from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import { Button, Heading } from '@Uikit';

export default {
  title: 'Button',
};

export const primary = () => (
  <Container>
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <Heading size={1}>Primary Buttons</Heading>
      </Col>
    </Row>
    <Row>
      <Col xs={2} sm={2} md={2} lg={2}>
        <Button variant="primary" color="neutral">
          Neutral button
        </Button>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2}>
        <Button variant="primary" color="success">
          Success button
        </Button>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2}>
        <Button variant="primary" color="danger">
          Danger button
        </Button>
      </Col>
    </Row>
  </Container>
);

export const secondary = () => (
  <Container>
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <Heading size={1}>Secondary Buttons</Heading>
      </Col>
    </Row>
    <Row>
      <Col xs={2} sm={2} md={2} lg={2}>
        <Button variant="secondary" color="neutral">
          Neutral button
        </Button>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2}>
        <Button variant="secondary" color="success">
          Success button
        </Button>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2}>
        <Button variant="secondary" color="danger">
          Danger button
        </Button>
      </Col>
    </Row>
  </Container>
);

export const terciary = () => (
  <Container>
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <Heading size={1}>Terciary Buttons</Heading>
      </Col>
    </Row>
    <Row>
      <Col xs={2} sm={2} md={2} lg={2}>
        <Button variant="terciary" color="neutral">
          Neutral button
        </Button>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2}>
        <Button variant="terciary" color="success">
          Success button
        </Button>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2}>
        <Button variant="terciary" color="danger">
          Danger button
        </Button>
      </Col>
    </Row>
  </Container>
);

export const quartiary = () => (
  <Container>
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <Heading size={1}>Quartiary Buttons</Heading>
      </Col>
    </Row>
    <Row>
      <Col xs={2} sm={2} md={2} lg={2}>
        <Button variant="quartiary" color="neutral">
          Neutral button
        </Button>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2}>
        <Button variant="quartiary" color="success">
          Success button
        </Button>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2}>
        <Button variant="quartiary" color="danger">
          Danger button
        </Button>
      </Col>
    </Row>
  </Container>
);

/* eslint-disable max-len */
import React from 'react';
import { Text, Heading } from '@Uikit';
import { Container, Row, Col } from 'react-awesome-styled-grid';

export default {
  title: 'Text',
};

export const base = () => (
  <Container>
    <Row>
      <Col>
        <Heading size={1}>Base Text</Heading>
      </Col>
    </Row>
    <Row>
      <Col>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Text>
      </Col>
    </Row>
  </Container>
);

export const small = () => (
  <Container>
    <Row>
      <Col>
        <Heading size={1}>Small Text</Heading>
      </Col>
    </Row>
    <Row>
      <Col>
        <Text size="small">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Text>
      </Col>
    </Row>
  </Container>
);

export const smallest = () => (
  <Container>
    <Row>
      <Col>
        <Heading size={1}>Smallest Text</Heading>
      </Col>
    </Row>
    <Row>
      <Col>
        <Text size="smallest">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Text>
      </Col>
    </Row>
  </Container>
);

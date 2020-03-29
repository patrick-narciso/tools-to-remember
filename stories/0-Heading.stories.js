import React from 'react';
import { Heading } from '@Uikit';

export default {
  title: 'Heading',
};

export const extraLarge = () => (
  <div style={{ width: '513px' }}>
    <Heading size={1}>The quick brown fox jumps over the lazy dog.</Heading>
  </div>
);

export const Large = () => (
  <div style={{ width: '513px' }}>
    <Heading size={2}>The quick brown fox jumps over the lazy dog.</Heading>
  </div>
);

export const Medium = () => (
  <div style={{ width: '513px' }}>
    <Heading size={3}>The quick brown fox jumps over the lazy dog.</Heading>
  </div>
);

export const Small = () => (
  <div style={{ width: '513px' }}>
    <Heading size={4}>The quick brown fox jumps over the lazy dog.</Heading>
  </div>
);

export const extraSmall = () => (
  <div style={{ width: '513px' }}>
    <Heading size={5}>The quick brown fox jumps over the lazy dog.</Heading>
  </div>
);

extraLarge.story = {
  name: 'Header 1',
};

Large.story = {
  name: 'Header 2',
};

Medium.story = {
  name: 'Header 3',
};

Small.story = {
  name: 'Header 4',
};

extraSmall.story = {
  name: 'Header 5',
};

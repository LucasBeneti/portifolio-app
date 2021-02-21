import React from 'react';
import styled from 'styled-components';

import { Card } from '../Card';
import { Text } from '../../foundation/Text';

const MainContainerWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem 3rem 0 3rem;
  display: flex;
  flex-direction: column;
  /* grid-template-rows: 3fr 1fr; */

  /* flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  max-width: 80%;
  align-self: center;
  /* justify-self: center; */

  background-color: ${({ theme }) => theme.background.primary};
`;

// fazer um elemento de Row pra colocar, talvez ver se rola passar prop ou algo assim
MainContainerWrapper.RowDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

MainContainerWrapper.Highlight = styled.div`
  display: flex;
  padding: 2rem 0 2rem 0;
  justify-content: center;
  align-content: center;
  width: 100%;
`;

MainContainerWrapper.Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = () => (
  <MainContainerWrapper>
    <MainContainerWrapper.Title>
      <Text variant="subtitle">Projetos</Text>
    </MainContainerWrapper.Title>
    <MainContainerWrapper.Highlight>
      <Card title="Titulo base" subtitle="subtitulo apenas para teste" imgSource="http://placehold.it/500x300" />
    </MainContainerWrapper.Highlight>
    <MainContainerWrapper.RowDisplay>
      <Card title="Titulo base" subtitle="subtitulo apenas para teste" imgSource="http://placehold.it/250x150" />
      <Card title="Titulo base" subtitle="subtitulo apenas para teste" imgSource="http://placehold.it/250x150" />
      <Card title="Titulo base" subtitle="subtitulo apenas para teste" imgSource="http://placehold.it/250x150" />
    </MainContainerWrapper.RowDisplay>
  </MainContainerWrapper>
);

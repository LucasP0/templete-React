import * as React from 'react';
import * as Styled from './styled';
export interface ICloneMeProps {
  text: string;
}

export const CloneMe = ({ text = 'é isso' }: ICloneMeProps) => {
  return (
    <Styled.Wrapper>
      <div>
        {text}
        <h1>é isso</h1>
      </div>
    </Styled.Wrapper>
  );
};

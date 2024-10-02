import React from 'react';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { ButtonVariation } from '@digi/arbetsformedlingen';

interface ContentProps {
  onButtonClick: (e: unknown) => void;
}

const Content: React.FC<ContentProps> = ({ onButtonClick }) => {
  return (
    <main>
      <p>Innehållet/Content på vår sida</p>
      <DigiButton

        onAfOnClick={onButtonClick}
        afVariation={ButtonVariation.PRIMARY}>
        primär knapp
      </DigiButton>
    </main>
  );
};

export default Content;
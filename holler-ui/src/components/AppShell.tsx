import React, { useState } from 'react';
import { hollerEnvconfig } from 'src/common/config/Dev.config';
import { HollerSubmitDto } from 'src/common/contracts/Dto';
import { AppState } from '../common/contracts/States';
import { WelcomeMenu } from './WelcomeMenu';

export const AppShell = (props) => {
  const initialState: AppState = { ...hollerEnvconfig.state };

  let [state, updateState] = useState<AppState>(initialState);

  let handleSubmit = (submitData: HollerSubmitDto) => {
    throw new Error('Function not implemented.');
  };

  return (
    <div className="app-shell">
      <WelcomeMenu
        background={state.background}
        sentence={state.sentence}
        onHollerSubmit={handleSubmit}
      />
    </div>
  );
};

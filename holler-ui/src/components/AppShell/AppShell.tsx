import React, { useState } from 'react';
import { hollerEnvconfig } from '../../common/config/Dev.config';
import { HollerSubmitDto } from '../../common/contracts/Dto';
import { AppState } from '../../common/contracts/States';
import { WelcomeMenu } from '../WelcomeMenu/WelcomeMenu';
import { RenderHoller } from '../RenderHoller/RenderHoller';

export const AppShell = (props) => {
  const initialState: AppState = { ...hollerEnvconfig.state };

  let [state, updateState] = useState<AppState>(initialState);

  let handleSubmit = (submitData: HollerSubmitDto): void => {
    updateState({
      background: submitData.background,
      sentence: submitData.sentence,
      pageState: 'holler',
    });
  };

  //#region Template
  let WelcomMenuElem = state.pageState === 'form' && (
    <WelcomeMenu
      background={state.background}
      sentence={state.sentence}
      onHollerSubmit={handleSubmit}
    />
  );

  let RenderHollerElem = state.pageState === 'holler' && (
    <RenderHoller sentence={state.sentence} background={state.background} />
  );

  return (
    <div className="app-shell">
      {WelcomMenuElem}
      {RenderHollerElem}
    </div>
  );
  //#endregion
};

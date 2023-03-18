import React from 'react';
import { createRoot } from 'react-dom/client';
import { getName, getTauriVersion, getVersion } from '@tauri-apps/api/app';
import { invoke } from '@tauri-apps/api/tauri';

// Components
import { AppShell } from './components/AppShell/AppShell';
// Styles
import './styles/main.scss';

// Test API by logging a custom message at statup
invoke('test_fetch').then((response: string) =>
  console.log('Tauri Handler - ', response)
);

// React APP
class HollerApp extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    // demo tauri apis
    getName().then((name) => console.log('appName - ', name));
    getTauriVersion().then((ver) => console.log('Tauri Version - ', ver));
    getVersion().then((appVer) => console.log('App Version - ', appVer));
  }
  render() {
    return (
      <>
        <AppShell />
      </>
    );
  }
}

const container = document.getElementById('app_content');
const root = createRoot(container!);
root.render(<HollerApp />);
/***/

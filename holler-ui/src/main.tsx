import React from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

// access the pre-bundled global API functions
const TAURI_API = window['__TAURI__'];

// Test API by logging a custom message at statup
TAURI_API.invoke('test_fetch')
    .then((response) => document.getElementById('app_content')!.innerHTML = response);

/**
 * React APP
 */
let App = () => {
    return(
        <h1>Welcome to this app</h1>
    );
}
/***/
const container = document.getElementById('app_content');
const root = createRoot(container!);
root.render(<App />);
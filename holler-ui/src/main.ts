// access the pre-bundled global API functions
const invoke = window['__TAURI__'].invoke;

invoke('greet', { name: 'Rossy!!' })
    .then((response) => console.log(response));

invoke('test_fetch')
    .then((response) => document.getElementById('app_content')!.innerHTML = response);

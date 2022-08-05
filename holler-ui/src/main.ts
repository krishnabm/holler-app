export function run(params:any) {
    let arr = [1,2,3,4,5];
    arr.forEach(elem => {
        console.log(elem);
    });
};

// access the pre-bundled global API functions
const invoke = window['__TAURI__'].invoke;

invoke('greet', { name: 'Rossy!!' })
    .then((response) => console.log(response));
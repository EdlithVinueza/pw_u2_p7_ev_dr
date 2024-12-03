const e = React.createElement;

function HolaMundo() {
    return e('h1', null, '¡Hola Mundo!');
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(HolaMundo), domContainer);

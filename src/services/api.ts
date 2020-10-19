import axios from 'axios';

const api = axios.create({
    //Se estiver usando emulador do mac: localhost ja está ok
    //Se estiver usando emulador do android: usar comando no emulador: adb reverse tcp:3333 tcp:3333 e usar localhost
    // baseURL: 'http://localhost:3333',
    //Se estiver usando o celular pelo expo client, nao pode ser localhost, tem de usar o IP da maquina
    // Obs.: O IP da maquina funciona em todos os casos, porem pode mudar a cada restart
    baseURL: 'http://192.168.0.2:3333',
    
});

export default api;
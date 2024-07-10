export { };

// ==> Exemplo 01 - Satisfies Operator
type Connection = { };

declare function  createConnection (
    host: string, 
    port: string,
    user: string,
    password: string,
    reconnect: boolean,
    poolsize: number): Connection;

    type Configuration = {
        host: string, 
        port: string | number,
        user: string,
        password: string,
        tryReconnect: boolean | (() => boolean),
        poolsize?: number,

    };

/*const config: Configuration = {
    host: 'localhost', 
    port: 3306,
    user: 'hilariogrossi',
    password: '123',
    tryReconnect: () => true,

};*/

// Refatorando o código
const config = {
    host: 'localhost', 
    port: 3306,
    user: 'hilariogrossi',
    password: '123',
    tryReconnect: () => true,
    poolsize: 10,

} satisfies Configuration;

function connect () {
    let { host, port, user, password, tryReconnect, poolsize } = config;

    createConnection(host, `${port}`, user, password, tryReconnect(), poolsize)

};

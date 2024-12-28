function database(){

    function start(){
        console.log('[database] starting');
        console.log('[database] connecting... ');
        console.log('[database] migrando....');
        console.log('[database] starting finalizado...');
        
        // simulando erro
        // throw new Error('erro conecao...')
    }
    function stop(){
        console.log('[database] stopping...');
        console.log('[database] closing...');
        console.log('[database] stopping finalizado...');
    }
    return {
        start,
        stop
        }
}

export default database
function webservice(){

    function start(){
        console.log('[webservice] starting');
        console.log('[webservice] esperando pela porta');
        console.log('[webservice] starting finalizado...');
    }
    function stop(){
        console.log('[webservice] stopping...');
        console.log('[webservice] desconectando cliente...');
        console.log('[webservice] stopping finalizado...');
    }
    return {
        start,
        stop
        }
}

export default webservice
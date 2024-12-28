import criandoDatabaseConection from './database.js'
import criandoWebService from './webservice.js'

function createCore(){
    const database = criandoDatabaseConection()
    const webservice = criandoWebService()
    
    function start(){
        console.log('[core] Starting...')
        database.start()
        webservice.start()
        console.log('[core] starting finalizado');
    }

    function stop(){
        console.log('[core] stopping...')
        database.stop()
        webservice.stop()
        console.log('[core] stopping finalizado');
    }

    return {start, stop}

}

// module.export = core
export default createCore
import test from 'jest'
import createCode from './core.js'

describe('core quando importado ', (t)=>{
    test('deve ter o metodo #start e #stop', ()=>{
        const core = createCode();
    })
})
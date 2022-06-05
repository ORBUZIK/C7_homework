import {reverse} from "./dop.js"


describe('Revers word function', ()=>{

    it('reverse hello', ()=>{
        const result = reverse('hello')
        expect(result).toBe('olleh')
    })

})

import {changeMovie,changeChar} from '../src/js/actions/Actions'

describe('>>>A C T I O N --- Test Actions',()=>{
    it('+++ actionCreator changeMovie', () => {
        const m = changeMovie('test')
        expect(m).toEqual({type:"CHANGE_LAST_MOVIE",
        payload: {
            movie: 'test'
        }})
    });
    it('+++ actionCreator changeChar', () => {
        const m = changeChar([],{})
        expect(m).toEqual({type:"CHANGE_CHAR",
        payload: {
            data: [],
            films: {}
        }})
    });
    
});
//*******************************************************************************************************
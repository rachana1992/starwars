import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'

import rootReducers from '../src/js/reducers/Reducers'

describe('>>>R E D U C E R --- Test rootReducers',()=>{
    it('+++ reducer for LOAD_DATA_START', () => {
        let state = {loading: false}
        state = rootReducers(state,{type:"LOAD_DATA_START"})
        expect(state).toEqual({loading:true})
    });

});
//*******************************************************************************************************
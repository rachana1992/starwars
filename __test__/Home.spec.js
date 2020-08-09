import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import ConnectedHome,{Home} from '../src/js/components/Home'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'

import {createStore} from 'redux'

//*******************************************************************************************************
describe('>>>H O M E --- Shallow Render REACT COMPONENTS',()=>{
    let wrapper = null;

    beforeEach(()=>{
         wrapper = shallow(<Home />)
        
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper).not.toBeUndefined()
    });

});

//*******************************************************************************************************
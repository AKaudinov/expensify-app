import React from 'react';
import Loading from "../../components/Loading";
import {shallow} from 'enzyme';

test('should render the loading component', () => {
    //enzyme testing
    const wrapper = shallow(<Loading/>);
    expect(wrapper).toMatchSnapshot(); //make enzyme work with the snapshots via enzyme-to-json library
});







//snapshot testing - track changes over time

// react-test-renderer - render components inside JS code and assert the component
import ReactShallowRenderer from 'react-test-renderer/shallow';

//shallow rendering < no interaction, and also with no child components
//full DOM rendereing < allows interaction and renders all child components

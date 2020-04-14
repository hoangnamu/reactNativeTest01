import React from "react";
import Button from "./Button.component";
import TestRenderer from "react-test-renderer";

import {configure, mount, render, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

test("Button Snapshot", () => {
    const props = {
        text: "Submit"
    };

    // TODO : Test snapshot of button with props provided
    let btn = TestRenderer.create(<Button/>)
    expect(btn).toMatchSnapshot()
    btn = mount(<Button text={props.text}/>)
    expect(btn).toMatchSnapshot()
});

test("Test button handler action", () => {
    const props = {
        text: "Submit",
        onClick: jest.fn()
    };
    // TODO: Test simulate event when click into button
    const mockCallBack = props.onClick

    const btn = shallow(<Button onClick={mockCallBack}/>)
    btn.find('button').simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
});

test("State should have message", () => {
    const props = {
        text: "Submit",
        onClick: jest.fn()
    };

    // TODO: Shalow render component and get state
    // Assert state to know that message of state
    // are equal message of expect
    const messageExpect = "Test Life Cycle Of Component";

    let btn = shallow(<Button/>)
    expect(btn.state().message).toEqual(messageExpect)
});

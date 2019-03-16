import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

 let mockMovie = {
  title: 'Return of the Jedi',
  release_date: '1983-05-25',
  opening_crawl: 'restore freedom to the galaxy...'
 }

 beforeEach(() => {
    wrapper = shallow(<App />);
    wrapper.state({
      movie: {},
    })
  })

describe( 'test app js', () => {
  let wrapper 

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe( 'test component did mount', () => {

    it('should fetch a movie', () => {
      expect(wrapper.state).toEqual({})
    });


  })

})



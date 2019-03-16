import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

 let mockMovie = {
  title: 'Return of the Jedi',
  release_date: '1983-05-25',
  opening_crawl: 'restore freedom to the galaxy...'
 }

describe( 'test app js', () => {
  let wrapper 

   beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe( 'get movies', () => {
    let mockFilms;

    it('should fetch movies', () => {
      mockFilms = {results:[{},{}]}
      window.fetch = jest.fn().mockImplementation(() =>  
        Promise.resolve({
          json: () => Promise.resolve({
            films: mockFilms
          })
        })
      )
      wrapper.instance().getMovies()
      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films/')
    });

    it('should throw an error if fetch fails', () => {
        window.fetch = jest.fn().mockImplementation(() =>  
        Promise.reject (
          new Error('failed')
        )
      )
        wrapper.instance().getMovies()
        .then(() => {
          expect(wrapper.state('errorStatus')).toEqual('Error in fetch')
        })
    })


  })

})



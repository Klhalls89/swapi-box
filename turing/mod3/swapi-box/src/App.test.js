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

    it('should fetch movies', async () => {
      wrapper.instance.assignMovie = jest.fn()
      window.fetch = jest.fn().mockImplementation(() =>  
        Promise.resolve({
          json: () => Promise.resolve({
            results:[{},{}]
          })
        })
      )
      await wrapper.instance().getMovies()
      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films/')
      expect(wrapper.instance().assignMovie).toHaveBeenCalled()
    });


    it('should throw an error if fetch fails', async () => {
        window.fetch = jest.fn().mockImplementation(() =>  
        Promise.reject (
          new Error('failed')
        )
      )
        await wrapper.instance().getMovies()
          expect(wrapper.state('errorStatus')).toEqual('Error in fetch')
    })


  })

})



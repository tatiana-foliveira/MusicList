import MusicDetails from '../app/MusicDetails/MusicDetails';
import React from 'react';
import { mount } from 'enzyme';

test('TodoComponent renders the text inside it', () => {
  
  const wrapper = mount(
    <MusicDetails />
  );
  const p = wrapper.find('.addFavoriteButton');
  expect(p.text()).toBe('Add to Favorites');
});
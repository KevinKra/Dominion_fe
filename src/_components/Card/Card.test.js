import React from 'react';
import { Card } from './Card';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { mockTreasureCard } from '../../mockData';
import { mockVictoryCard } from '../../mockData';
import { mockActionCard } from '../../mockData';

describe('<Card />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card
        name={mockActionCard.name}
        desc={mockActionCard.desc}
        category={mockActionCard.category[0]}
        image={mockActionCard.image}
        cost={mockActionCard.cost}
        id={mockActionCard.id}
        key={mockActionCard.id}
      />
    );
  });
  it('should match the mockActionCard snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should match the mockTreasureCard snapshot', () => {
    wrapper = shallow(
      <Card
        name={mockTreasureCard.name}
        desc={mockTreasureCard.desc}
        category={mockTreasureCard.category[0]}
        image={mockTreasureCard.image}
        cost={mockTreasureCard.cost}
        id={mockTreasureCard.id}
        key={mockTreasureCard.id}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should match the mockVictoryCard snapshot', () => {
    wrapper = shallow(
      <Card
        name={mockVictoryCard.name}
        desc={mockVictoryCard.desc}
        category={mockVictoryCard.category[0]}
        image={mockVictoryCard.image}
        cost={mockVictoryCard.cost}
        id={mockVictoryCard.id}
        key={mockVictoryCard.id}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should match the loading snapshot', () => {
    const loadingWrapper = shallow(<Card />);
    expect(shallowToJson(loadingWrapper)).toMatchSnapshot();
  });
});

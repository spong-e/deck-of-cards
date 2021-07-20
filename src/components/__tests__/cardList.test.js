import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardList from "../CardList";


const cards = [{
    "suit": "test 4",
    "value": 1,
    "suitOrder": 4,
    "cardOrder": 4
  },
  {
    "suit": "test 3",
    "value": 2,
    "suitOrder": 4,
    "cardOrder": 7
  },
  {
    "suit": "test 2",
    "value": 3,
    "suitOrder": 4,
    "cardOrder": 10
  },
  {
    "suit": "test 1",
    "value": 4,
    "suitOrder": 4,
    "cardOrder": 3
  }];

describe("CardList", () => {

    
it('Given no props, errors are logged', () => {
    const mockConsole = console;
    jest.spyOn(mockConsole, 'error');
  
    render(<CardList></CardList>);
  
    expect(mockConsole.error).toBeCalledTimes(1);
  });

  it("Given valid props, expected CardList is rendered", () => {
    const { container } = render(<CardList cards={cards} />);

    expect(container.querySelector('ul')).not.toBeNull();
    expect(container.querySelector('li')).not.toBeNull();
    expect(container.querySelectorAll('li').length).toEqual(cards.length);
  });

  it("Given an empty list, expected that no CardList is rendered", () => {
    const { container } = render(<CardList />);

    expect(container.querySelector('ul')).toBeNull();

  });
});

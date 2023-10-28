import React, {useRef, useState} from 'react';
import Card from './Card';

const Cards = () => {
  const [cards, setCards] = useState (
    [
      {id: 1, status: '', img: `${process.env.PUBLIC_URL}/dogs/01.jpeg`},
      {id: 1, status: '', img: `${process.env.PUBLIC_URL}/dogs/01.jpeg`},
      {id: 2, status: '', img: `${process.env.PUBLIC_URL}/dogs/02.jpeg`},
      {id: 2, status: '', img: `${process.env.PUBLIC_URL}/dogs/02.jpeg`},
      {id: 3, status: '', img: `${process.env.PUBLIC_URL}/dogs/03.jpeg`},
      {id: 3, status: '', img: `${process.env.PUBLIC_URL}/dogs/03.jpeg`},
      {id: 4, status: '', img: `${process.env.PUBLIC_URL}/dogs/04.jpeg`},
      {id: 4, status: '', img: `${process.env.PUBLIC_URL}/dogs/04.jpeg`},
      {id: 5, status: '', img: `${process.env.PUBLIC_URL}/dogs/05.jpeg`},
      {id: 5, status: '', img: `${process.env.PUBLIC_URL}/dogs/05.jpeg`},
      {id: 6, status: '', img: `${process.env.PUBLIC_URL}/dogs/06.jpeg`},
      {id: 6, status: '', img: `${process.env.PUBLIC_URL}/dogs/06.jpeg`},
      {id: 7, status: '', img: `${process.env.PUBLIC_URL}/dogs/07.jpeg`},
      {id: 7, status: '', img: `${process.env.PUBLIC_URL}/dogs/07.jpeg`},
      {id: 8, status: '', img: `${process.env.PUBLIC_URL}/dogs/08.jpeg`},
      {id: 8, status: '', img: `${process.env.PUBLIC_URL}/dogs/08.jpeg`},
      {id: 9, status: '', img: `${process.env.PUBLIC_URL}/dogs/09.jpeg`},
      {id: 9, status: '', img: `${process.env.PUBLIC_URL}/dogs/09.jpeg`},
      {id: 10, status: '', img: `${process.env.PUBLIC_URL}/dogs/10.jpeg`},
      {id: 10, status: '', img: `${process.env.PUBLIC_URL}/dogs/10.jpeg`},
      {id: 11, status: '', img: `${process.env.PUBLIC_URL}/dogs/11.jpeg`},
      {id: 11, status: '', img: `${process.env.PUBLIC_URL}/dogs/11.jpeg`},
      {id: 12, status: '', img: `${process.env.PUBLIC_URL}/dogs/12.jpeg`},
      {id: 12, status: '', img: `${process.env.PUBLIC_URL}/dogs/12.jpeg`},
    ].sort (() => Math.random () - 0.5)
  );

  const [previousCardState, setPreviousCardState] = useState (-1);
  const previousIndex = useRef (-1);

  const matchCheck = currCard => {
    if (cards[currCard].id === cards[previousCardState].id) {
      cards[currCard].status = 'active matched';
      cards[previousCardState].status = 'active matched';
      setPreviousCardState (-1);
    } else {
      cards[currCard].status = 'active';
      setCards ([...cards]);
      setTimeout (() => {
        setPreviousCardState (-1);
        cards[currCard].status = 'unmatch';
        cards[previousCardState].status = 'unmatch';
        setCards ([...cards]);
      }, 1000);
    }
  };

  const clickhandler = index => {
    console.log ('clicked card', index);
    // alert (index);

    if (index !== previousIndex.current) {
      console.log ('GAME ON');
      if (cards[index].status === 'active matched') {
        alert ('already matched!');
      } else {
        if (previousCardState === -1) {
          previousIndex.current = index;
          cards[index].status = 'active';
          setCards ([...cards]);
          setPreviousCardState (index);
        } else {
          matchCheck (index);
          previousIndex.current = -1;
        }
      }
    } else {
      alert ('CARD CURRENTLY SELECTED!');
    }
  };
  return (
    <div className="container">
      {cards.map ((card, index) => {
        return (
          <Card
            card={card}
            index={index}
            key={index}
            clickhandler={clickhandler}
          />
        );
      })}
    </div>
  );
};

export default Cards;

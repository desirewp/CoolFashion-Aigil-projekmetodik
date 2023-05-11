import React from 'react';
import "./LastFiveItems.css"

export type ListItem = {
  id: number;
  name: string;
  picture: string;
};

type Props = {
  list: ListItem[];
};

const LastFiveItems: React.FC<Props> = ({ list }) => {
  const lastFiveItems = list.slice(-5); // Get the last 5 items from the list

  return (
    <div className='container1'>
      {lastFiveItems.map(item => (
        <div className='container2' key={item.id}>
          <img className='bild click' src={item.picture} alt={item.name}/>
          <p className='text' > {item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default LastFiveItems;
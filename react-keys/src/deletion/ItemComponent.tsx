import { useState } from "react";
import { Item } from "../types";

function makeItemFactory(): (title: string, description: string) => Item {
  let currentId = 13;
  function makeItem(title: string, description: string): Item {
    const result: Item = { id: currentId, title, description };
    currentId++;
    return result;
  }
  return makeItem;
}

const makeItem = makeItemFactory();
export const DEFAULT_ITEMS: Item[] = [
  makeItem('Orange', 'A juicy fruit'),
  makeItem('Banana', 'A curvy fruit'),
  makeItem('Apple', 'An overrated fruit'),
  makeItem('Grape', 'A tiny fruit'),
  makeItem('Peach', 'A Georgian icon')
];

type ItemProps = {
  item: Item;
  deleteItem: (item: Item) => void;
};

export function ItemComponent(props: ItemProps) {
  const [title] = useState<string>(props.item.title);
  const [description] = useState<string>(props.item.description);
  const [id] = useState<number>(props.item.id);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>ID: {id}</p>
      <button onClick={() => props.deleteItem(props.item)}>Delete</button>
    </div>
  );
}

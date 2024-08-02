import { useState } from "react";
import { DEFAULT_ITEMS, ItemComponent } from "./ItemComponent";
import { Item } from "../types";

export enum ItemListType {
  NO_KEYS,
  INDEX_KEYS,
  ID_KEYS
}

type ItemListProps = {
  type: ItemListType;
};

export function ItemList(props: ItemListProps) {
  const [items, setItems] = useState<Item[]>(structuredClone(DEFAULT_ITEMS));

  function deleteItem(toDelete: Item) {
    const toDeleteIndex = items.findIndex(item => item.id === toDelete.id);
    if (toDeleteIndex === -1) return;
    setItems([...items.slice(0, toDeleteIndex), ...items.slice(toDeleteIndex + 1)]);
  }

  function reset() {
    setItems(structuredClone(DEFAULT_ITEMS));
  }
  
  return (
    <div>
      <div style={{display:'flex', gap:'16px'}}>
        {items.map((item, index) => 
          (() => {
            switch(props.type) {
              case ItemListType.NO_KEYS:
                return <ItemComponent item={item} deleteItem={deleteItem} />
              case ItemListType.INDEX_KEYS:
                return <ItemComponent key={index} item={item} deleteItem={deleteItem} />
              case ItemListType.ID_KEYS:
                return <ItemComponent key={item.id} item={item} deleteItem={deleteItem} />
            }
          })()
        )}
      </div>
      <p>Actual Item List: [{items.map(item => item.title).join(', ')}]</p>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
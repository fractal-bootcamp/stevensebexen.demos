import {ItemList, ItemListType} from './ItemList';
import './deletion.css';

function KeyDeletion() {

  return (
    <>
      <h2>No key</h2>
      <ItemList type={ItemListType.NO_KEYS} />
      <p>In this example, no matter which button you click, it appears that the last one is being deleted, even though the actual in-memory item list is correct.</p>
      <hr />
      <h2>Index key</h2>
      <ItemList type={ItemListType.INDEX_KEYS} />
      <p>Notice this has the same behavior as the first example. That's because React defaults to using index as a key when you don't supply one.</p>
      <hr />
      <h2>ID key</h2>
      <ItemList type={ItemListType.ID_KEYS} />
      <p>Using a unique identifier allows React to correctly identify a mapped element and associate it with the correct useState invocation.</p>
    </>
  )
}

export default KeyDeletion;

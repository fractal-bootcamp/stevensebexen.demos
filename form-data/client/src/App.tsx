import { ChangeEvent, useState } from 'react'
import './App.css'
import { BASE_URL } from '../../common/constants';

function App() {
  const [value0, setValue0] = useState<string>('');
  const [value1, setValue1] = useState<string[]>(Array(5).fill(''));
  const [response0, setResponse0] = useState<string>('');
  const [response1, setResponse1] = useState<string>('');

  function onChange0(e: ChangeEvent<HTMLInputElement>) {
    setValue0(e.target.value);
  }

  function onChange1(index: number, e: ChangeEvent<HTMLInputElement>) {
    setValue1(value1.with(index, e.target.value));
  }

  // File
  async function onClick0() {
    const file = new File([value0], 'file.txt', {type: 'text/plain'});
    const response = await fetch(BASE_URL, {body: file, method: 'POST', headers: {'Content-Type': 'text/plain'}});
    const text = await response.text();
    console.log(text);
    setResponse0(text);
  }

  // FormData
  async function onClick1() {
    const formData = new FormData();
    value1.forEach((value, i) => formData.append(`Field-${i}`, value));
    const response = await fetch(BASE_URL, {body: formData, method: 'POST', headers: {'Content-Type': 'text/plain'}});
    const text = await response.text();
    console.log(text);
    setResponse1(text);
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <h2>Fetch with File</h2>
      <input onChange={onChange0} value={value0} placeholder='Type something' />
      <button onClick={onClick0}>Send</button>
      {response0 &&
        <>
          <p>Response from the server:</p>
          <p>{response0}</p>
        </>
      }
      <h2>Fetch with FormData</h2>
      {
        Array(5).fill(0).map((_, i) => 
          <input onChange={e => onChange1(i, e)} value={value1[i]} placeholder={`Field-${i}`} />
        )
      }
      <button onClick={onClick1}>Send</button>
      {response1 &&
        <>
          <p>Response from the server:</p>
          <p>{response1}</p>
          <p>(Note that newline characters are not rendered in the browser. See server/browser console for full value)</p>
        </>
      }
    </div>
  )
}

export default App

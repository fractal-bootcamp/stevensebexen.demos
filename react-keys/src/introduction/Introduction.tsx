import './introduction.css'

export default function Introduction() {
  return (
    <>
      <h1>Why does React need keys?</h1>
      <p>Many of us have seen the error spit out by React in the console when you don't include a key property when creating an array of components, most commonly from Array.map.</p>
      <p>But why does it spit out this error? In many cases, it doesn't appear that this even causes a bug, let alone affect performance.</p>
      <p>On the next page, I'd like to demonstrate a bug that actually can happen if you supply no key, or if you supply a non-unique key.</p>
    </>
  )
}
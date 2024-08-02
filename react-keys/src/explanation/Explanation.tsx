import './explanation.css'

export default function Explanation() {
  return (
    <>
      <h1>So what's going on?</h1>
      <p>React components are simply function calls. Each time your component is rendered, your function is invoked with (essentially) no context.</p>
      <p>In other words, when a component is re-rendered, it has no idea that it's the "same" component that was rendered last time.</p>
      <p>That said, it would be quite wasteful to completely re-render every component on the screen each time there is an update.</p>
      <p>One of the biggest advantages to using React is that it keeps track of these updates for you.</p>
      <p>Under the hood, React creates ways to "remember" which components are which, and this works brilliantly for static components. That is, components which are hard-coded into your source files.</p>
      <p>However, it cannot predict what's going to happen with a function such as map(). The data being mapped over is not tracked by React. You can add, insert, sort, or do anything you'd like to an array without React knowing.</p>
      <p>The only way React is able to figure out which element of the array corresponds to which component is to use a key. A key allows React to say "hey, that div I rendered last frame with key '2'? Here it is again. I can reuse it."</p>
      <p>The caveat is that YOU need to guarantee that the keys are unique. If you simply use the index of the array as a key, then React will always associate the element at index 2 with the component it rendered at index 2 last time.</p>
      <p>So think about what happens if you have a list [Orange, Banana, Apple, Grape, Peach], as we did in the previous example.</p>
      <p>Using index as a key, you have [Orange: 0, Banana: 1, Apple: 2, Grape: 3, Peach: 4]. So React creates components for each of these - let's call these A, B, C, D, and E respectively.</p>
      <p>Now that React has created these components, it wants to reuse them. And it's going to use these keys to figure out how to do so.</p>
      <p>From React's point of view, we have [0: A, 1: B, 2: C, 3: D, 4: E]. It doesn't care about the actual data anymore - it only cares about the mapping from key to component.</p>
      <p>When you delete Apple, you now have [Orange, Banana, Grape, Peach]. So far so good. But now you go to map over it.</p>
      <p>React does NOT see ['Orange', 'Banana', 'Grape', 'Peach'] when it creates these components. What it sees is exactly what you pass in as a key.</p>
      <p>So instead, what you're telling React when you map over this array is [0, 1, 2, 3]. So React says, "Cool! I have those components already." And it gives you [A, B, C, D].</p>
      <p></p>
    </>
  )
}
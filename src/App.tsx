import * as React from 'react'
import DraggableList from './components/DraggableList'
// import Star from './components/Star'

export function App() {
  const [items, setItems] = React.useState('lorem ipsum dolor sit'.split(' '))

  return (
    <>
      <h2>{items.join(' ')}</h2>
      <DraggableList items={items} onChange={setItems} />
      {/* <Star /> */}
    </>
  )
}

export default App

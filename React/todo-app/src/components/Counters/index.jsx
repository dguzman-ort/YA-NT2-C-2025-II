const Counters = ({totalTodos, uncheckedTodos}) => {
  return (
    <div className="flow-right controls">
      <span>Item count: <span id="item-count">{totalTodos}</span></span>
      <span>Unchecked count: <span id="unchecked-count">{uncheckedTodos}</span></span>
    </div>
  )
}

export default Counters
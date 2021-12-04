import SimpleReact from "./SimpleReact"

/** @jsx SimpleReact.createElement */
function Counter() {
    const [state, setState] = SimpleReact.useState(1)
    return (
      <h1 onClick={() => setState(c => c + 1)}>
        Count: {state}
      </h1>
    )
  }

const element = <Counter />
const container = document.getElementById("root")
SimpleReact.render(element, container)

# React Context Basics


## React Context Pattern

class Parent extends Component {
  state = { name: 'Mike' }

  handleChange = (e) => this.setState({ name: e.target.value })

  render() {
    // Here's the main difference: We expect `children` to be
    // a function, and we pass name in as the argument
    return children(state.name);
  }
}

const InputChild = props => <input value={props.name} />

const HeaderChild = props => <h1>{props.name}</h1>

const App = () => {
  return (
    <Parent>
      {name => {
        // We could easily swap in `HeaderChild` here (or
        // anything else!), passing `Parent`'s internal
        // state.name to it instead:
        <InputChild name={name} />
      }
    </Parent>
  )
}

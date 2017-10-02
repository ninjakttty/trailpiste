import { Input } from 'semantic-ui-react';
import { gql, graphql } from 'react-apollo';
import { Button } from 'semantic-ui-react';

class Create extends React.Component {
  state = {
    name: '',
  };

  handleClick = async () => {
    const { name } = this.state;
    const { addComp } = this.props;
    addComp({ variables: { name } });
  };

  render() {
    return (
      <div>
        Add Item
        <Input
          focus
          placeholder="Add Item"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <Button onClick={this.handleClick}>Save</Button>
      </div>
    );
  }
}

const addMutation = gql`
  mutation addComp($name: String!) {
    createComponent(name: $name) {
      name
    }
  }
`;

const CreateWithMutation = graphql(addMutation, { name: 'addComp' })(Create);

export default CreateWithMutation;

import { gql, graphql } from 'react-apollo';
let ListPage = props => {
  //   console.log(props);
  const { allComponents } = props.data;
  console.log(allComponents);
  const items = allComponents ? allComponents.map(item => <div key={item.id}>{item.name}</div>) : [];
  return (
    <div>
      List!
      {items}
    </div>
  );
};

const FeedQuery = gql`
  query listComps {
    allComponents {
      name
      id
    }
  }
`;

const ListPageWithData = graphql(FeedQuery, {
  options: {
    fetchPolicy: 'network-only',
  },
})(ListPage);

export default ListPageWithData;

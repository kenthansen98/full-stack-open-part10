import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { loading, error, data, refetch: fetchRepositories } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
  const repositories = data?.repositories;
  console.log(repositories);

  return { repositories, error, loading, refetch: fetchRepositories };
};

export default useRepositories;
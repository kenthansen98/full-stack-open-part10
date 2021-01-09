import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (choice) => {
  
  const { loading, error, data, refetch: fetchRepositories } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy: choice == 'Latest repositories' ? 'CREATED_AT' : 'RATING_AVERAGE',
      orderDirection: choice == 'Lowest Rated Repositories' ? 'ASC' : 'DESC',
    }
  });
  const repositories = data?.repositories;
  console.log(repositories);

  return { repositories, error, loading, refetch: fetchRepositories };
};

export default useRepositories;
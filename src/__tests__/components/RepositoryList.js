import React from 'react';
import { RepositoryListContainer } from '../../components/RepositoryList';
import { render } from '@testing-library/react-native';

const convertNum = (num) => {
  return num > 1000 ? `${(num / 1000).toFixed(1)}k` : num;
};

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);
      const firstRepo = repositories.edges[0].node;
      const secondRepo = repositories.edges[1].node;

      const fullNames = getAllByTestId('fullName');
      expect(fullNames[0]).toHaveTextContent(firstRepo.fullName);
      expect(fullNames[1]).toHaveTextContent(secondRepo.fullName);

      const descriptions = getAllByTestId('description');
      expect(descriptions[0]).toHaveTextContent(firstRepo.description);
      expect(descriptions[1]).toHaveTextContent(secondRepo.description);

      const languages = getAllByTestId('language');
      expect(languages[0]).toHaveTextContent(firstRepo.language);
      expect(languages[1]).toHaveTextContent(secondRepo.language);

      const forks = getAllByTestId('forks');
      expect(forks[0]).toHaveTextContent(convertNum(firstRepo.forksCount));
      expect(forks[1]).toHaveTextContent(convertNum(secondRepo.forksCount));

      const starsCounts = getAllByTestId('stars');
      expect(starsCounts[0]).toHaveTextContent(convertNum(firstRepo.stargazersCount));
      expect(starsCounts[1]).toHaveTextContent(convertNum(secondRepo.stargazersCount));

      const ratings = getAllByTestId('rating');
      expect(ratings[0]).toHaveTextContent(firstRepo.ratingAverage);
      expect(ratings[1]).toHaveTextContent(secondRepo.ratingAverage);

      const reviews = getAllByTestId('reviews');
      expect(reviews[0]).toHaveTextContent(convertNum(firstRepo.reviewCount));
      expect(reviews[1]).toHaveTextContent(convertNum(secondRepo.reviewCount));
    });
  });
});
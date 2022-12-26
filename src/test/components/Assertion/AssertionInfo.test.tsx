import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';
import { mockAssertionInfo } from '../../mocks/AssertionInfo';
import { AssertionInfo } from '../../../components/Assertion/AssertionInfo';

describe('AssertionInfo component test', () => {
  it('render AssertionInfo component with apollo query', async () => {
    const { findByText } = render(
      <MockedProvider
        mocks={mockAssertionInfo.mockApolloQuery}
        addTypename={false}
      >
        <AssertionInfo />
      </MockedProvider>
    );
    expect(await findByText('Loading...')).toBeInTheDocument();
    await waitFor(() => findByText('INFO ASSERTION'));
  });

  it('Apollo query fails in AssertionInfo', async () => {
    const { findByText } = render(
      <MockedProvider
        mocks={mockAssertionInfo.errorApolloQuery}
        addTypename={false}
      >
        <AssertionInfo />
      </MockedProvider>
    );

    expect(await findByText('Loading...')).toBeInTheDocument();
    expect(await findByText('ERROR QUERY')).toBeInTheDocument();
  });
});

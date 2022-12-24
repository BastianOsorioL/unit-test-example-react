import { useQuery } from '@apollo/client';
import { GET_ASSERTION } from '../../graphql/assertion/findAssertion';
import { AssertionData } from './AssertionData';

export const AssertionInfo = () => {
  const { data, error, loading } = useQuery(GET_ASSERTION, {
    variables: { id: 'clau64wf002610157si73b29x' },
  });

  return (
    <div>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {error ? (
            <>ERROR QUERY</>
          ) : (
            <>
              <AssertionData data={data.findAssertion} />
            </>
          )}
        </>
      )}
    </div>
  );
};

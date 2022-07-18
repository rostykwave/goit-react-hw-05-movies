import { Loader } from 'components/Loader/Loader';
import { Box } from 'styleConfig/Box';

export const StateMachine = ({ status, error }) => {
  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <Box color="red" textAlign="center">
          {error.message}
        </Box>
      )}
    </>
  );
};

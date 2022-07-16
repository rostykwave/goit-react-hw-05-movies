import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';
import { Box } from 'styleConfig/Box';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const useStateMachine = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState({ message: '' });
  return { status, setStatus, error, setError };
};

const StateMachine = ({ status, error }) => {
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

export { Status, StateMachine, useStateMachine };

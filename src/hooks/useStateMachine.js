import { Status } from 'constants/stateMachineStatus';
import { useState } from 'react';

export const useStateMachine = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState({ message: '' });
  return { status, setStatus, error, setError };
};

import React from 'react';
import WriteQuestion from './WriteQuestion';

const WriteQuestionPage = () => {
  const handleClose = () => {
    window.close();
  };

  return (
    <div style={{ padding: '20px' }}>
      <WriteQuestion onClose={handleClose} />
    </div>
  );
};

export default WriteQuestionPage;
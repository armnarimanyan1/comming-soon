import React from 'react';
import { PaymentWrapper, StyledRow } from './Payment.styled';

const Payment = () => {
  return (
    <PaymentWrapper>
      <StyledRow>
        <div className="title">
          <span>@nhimbe</span>
        </div>
        <div className="text">
          <span>21 minutes ago</span>
        </div>
      </StyledRow>
      <StyledRow>
        <div>
          <span>₿</span>
          0.01
        </div>
        <div>
          <span>anon</span>
        </div>
      </StyledRow>
    </PaymentWrapper>
  );
};

export default Payment;

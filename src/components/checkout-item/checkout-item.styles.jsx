import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const CheckoutImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CheckoutName = styled.span`
  width: 23%;
`;
export const CheckoutQuantity = styled.span`
  width: 23%;
  display: flex;
`;

export const CheckoutPrice = styled.span`
  width: 23%;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const CheckoutArrow = styled.div`
  cursor: pointer;
`;

export const CheckoutValue = styled.div`
  margin: 0 10px;
`;

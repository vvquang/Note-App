import React, { Children, forwardRef, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledErrorInfo, StyledErrorInfoText } from './wrapperError.styled';

const FormItem = ({
  forwardedRef, children, error = [], ...restProps
}) => {
  const getError = (errors) => {
    if (errors) {
      return errors.map((info) => (
        <StyledErrorInfoText key={info}>{info}</StyledErrorInfoText>
      ));
    }
    return null;
  };

  // pass props to chidren component
  const ComponentChildren = Children.map(children, (child) => cloneElement(child, {
    ...restProps,
    ref: forwardedRef,
  }));

  return (
    <StyledContainer>
      {ComponentChildren}
      <StyledErrorInfo>{getError(error)}</StyledErrorInfo>
    </StyledContainer>
  );
};

FormItem.propTypes = {
  forwardedRef: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  error: PropTypes.array,
};


const WrapperItem = forwardRef((props, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <FormItem {...props} forwardedRef={ref} />
));

export default WrapperItem;

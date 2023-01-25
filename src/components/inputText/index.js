import React from 'react';
import styled from 'styled-components/native';

const InputText = ({
  label,
  placeholder,
  value,
  onChangeText,
  errorMessage,
  isPassword = false,
}) => {
  if (isPassword) {
    return (
      <StyledView>
        <StyledLabel>{label}</StyledLabel>
        <StyledTextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          defaultValue={value}
          secureTextEntry={true}
        />
      </StyledView>
    );
  }
  return (
    <StyledView>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextInput
        placeholder={placeholder}
        defaultValue={value}
        onChangeText={onChangeText}
      />
    </StyledView>
  );
};

const StyledView = styled.View`
  width: 320px;
  height: 32px;
  align-self: center;
  margin-bottom: 32px;
`;

const StyledLabel = styled.Text`
  padding-left: 2px;
  padding-bottom: 2px;
  font-weight: 700;
`;

const StyledErrorMessage = styled.Text`
  margin-bottom: 0;
  text-align: left;
  font-size: 12px;
  line-height: 15px;
`;

const StyledTextInput = styled.TextInput`
  background-color: #fff;
  height: 31px;
  padding: 3px 7px;
  border: 1px solid #a6a6a6a6;
`;

export default InputText;

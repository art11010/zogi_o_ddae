import React from 'react';

// style
import tw from 'tailwind-styled-components';
export const InputCss = tw.input`
  w-full
  input
  border-gray-400
  focus:outline-none
`;

// defaultProps
Input.defaultProps = {
  type: 'text',
  _onChange: () => {},
  addclass: '',
};
function Input(props) {
  const { id, label, type, placeholder, value, _onChange } = props;
  let { addclass } = props;

  if (addclass) {
    addclass = ' ' + addclass;
  }
  return (
    <>
      <div className={'mt-3' + addclass}>
        <label htmlFor={id}>{label}</label>
        <InputCss
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={_onChange}
        />
      </div>
    </>
  );
}

export default Input;

import React from 'react';
export default function Box(props) {
  const { on, toggles } = props;
  const styles = { backgroundColor: on ? 'white' : 'black' };

  return (
    <div
      className='box'
      on={on}
      style={styles}
      onClick={() => toggles(props.id)}></div>
  );
}

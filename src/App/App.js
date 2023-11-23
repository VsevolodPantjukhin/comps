import Dropdown from '../components/Dropdown/Dropdown';
import { useState } from 'react';

const App = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    {
      label: 'Red',
      value: 'red',
    },
    {
      label: 'Green',
      value: 'green',
    },
    {
      label: 'Blue',
      value: 'blue',
    },
  ];
  return (
    <Dropdown options={options} value={selection} onChange={handleSelect} />
  );
};

export default App;

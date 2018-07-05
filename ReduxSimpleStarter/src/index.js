import React from 'react';
import ReactDOM from 'react-dom';
import { apiKey } from './keys';

import SearchBar from './components/search_bar';

// Create component that will produce HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Display component on DOM
ReactDOM.render(<App />, document.querySelector('.container'));

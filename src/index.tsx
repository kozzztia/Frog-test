import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './styles/consts.scss'
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MainLayout from './components/Layout/MainLayout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainLayout>
        <App/>
      </MainLayout>
    </Provider>
  </React.StrictMode>
);

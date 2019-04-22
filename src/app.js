    import ReactDOM from 'react-dom';//browser
    import React from 'react';
     import MyComponent from './MyComponent';
     import MainComponent from './MainComponent';
     import 'bootstrap/dist/css/bootstrap.css';

     ReactDOM.render(<MyComponent />,
         document.querySelector('nav'));

         ReactDOM.render(<MainComponent />,
            document.querySelector('#mainSection'));
        
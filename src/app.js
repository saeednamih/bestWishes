    import ReactDOM from 'react-dom';//browser
    import React from 'react';
     import NavBarCoponent from './NavBarCoponent';
     import MainComponent from './MainComponent';
     import UpcomingComponent from './UpcomingComponent'
     import 'bootstrap/dist/css/bootstrap.css';

     ReactDOM.render(<NavBarCoponent />,
         document.querySelector('#navBar'));

         ReactDOM.render(<UpcomingComponent />,
            document.querySelector('#leftSide'));

            ReactDOM.render(<UpcomingComponent />,
                document.querySelector('#rightSide'));

                ReactDOM.render(<UpcomingComponent />,
                    document.querySelector('#content'));

        
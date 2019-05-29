    import ReactDOM from 'react-dom';//browser
    import React from 'react';
     import NavBarCoponent from './NavBarCoponent';
     import MainComponent from './MainComponent';
     import UpcomingComponent from './UpcomingComponent'
     import ContentComponent from './ContentComponent'
     import MyEventComponent from './MyEventComponent'
     import 'bootstrap/dist/css/bootstrap.css';
    import SearchComponent from './SearchComponent'
     ReactDOM.render(<NavBarCoponent />,
         document.querySelector('#navBar'));

         ReactDOM.render(<UpcomingComponent />,
            document.querySelector('#leftSide'));

            ReactDOM.render(<UpcomingComponent />,
                document.querySelector('#rightSide'));

                // ReactDOM.render(<ContentComponent />,
                //     document.querySelector('#content'));
                
                // ReactDOM.render(<MyEventComponent />,
                //     document.querySelector('#content'));

                     ReactDOM.render(<SearchComponent />,
                    document.querySelector('#content'));



        
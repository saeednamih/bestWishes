    import ReactDOM from 'react-dom';//browser
    import React from 'react';
     import NavBarCoponent from './NavBarCoponent';
     import MainComponent from './MainComponent';
     import UpcomingComponent from './UpcomingComponent'
     import ContentComponent from './ContentComponent'
     import MyEventComponent from './MyEventComponent'
     import 'bootstrap/dist/css/bootstrap.css';
    import SearchComponent from './SearchComponent'
    import CreateEventComponent from './CreateEventComponent'
    import CreateWishComponent from './CreateWishComponent'
    import ShowingCreateWish from './ShowingCreateWishComponent'
    import RegisterPageComponent from './RegisterPageComponent'
    import LoginPageComponent from './LoginPageComponent'

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

                // ReactDOM.render(<SearchComponent />,
                //     document.querySelector('#content'));
                    
                    // ReactDOM.render(<CreateEventComponent />,
                    //     document.querySelector('#content'));

                        ReactDOM.render(<RegisterPageComponent />,
                            document.querySelector('#content'));
                            ReactDOM.render(<LoginPageComponent />,
                                document.querySelector('#content'));
                        

        
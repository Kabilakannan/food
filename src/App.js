import logo from './logo.svg';
import './App.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Typography from './components/typography';

import Flex from './components/flex';
import ContainerBreakPoint from './components/ContainerBreakPoint';
import HeadNavBar from './components/HeadNavBar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import PickOfTheWeek from './components/pickOfTheWeek';
import Comments from './components/Comments';
import Cart from './components/Cart';
function App() {
  return (
    <div>
  
      {/* <Typography/>
      <ImageSample/> */}
        {/* <Flex/> */}
        {/* <ContainerBreakPoint/> */}
  
       <HeadNavBar/>
       <Banner/>
       <Menu/>
       <PickOfTheWeek/>
       <Comments/>
       <Cart/>
       <div className="text-primary text-center small my-3">Copyright 2023-2024</div>
  </div>
  );
}

export default App;

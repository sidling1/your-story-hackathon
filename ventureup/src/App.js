import NavBar from './Components/NavBar';
import AppRoutes from './Routes/AppRoutes';
import CreateAccount from './BlackBox';
import DiscussionForums from './black_box/discussionForums';
// import Landing from './black_box/landingPage';
// import MyPage from './Pages/blackboxProfile';

function App() {

  

  return (
    <div>
      {/* <CreateAccount/> */}
      {/* <MyPage/> */}
      {/* <AppRoutes/> */}
      {/* <Landing/> */}
      <DiscussionForums/>
    </div>
  );
}

export default App;

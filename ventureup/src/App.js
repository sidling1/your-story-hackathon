import NavBar from './Components/NavBar';
import AppRoutes from './Routes/AppRoutes';
import NewAppRoutes from './Routes/newAppRoutes';
import CreateAccount from './black_box/CreateAccount';
// import DiscussionForums from './black_box/discussionForums';
// import Landing from './black_box/landingPage';
// import MyPage from './Pages/blackboxProfile';

function App() {

  return (
    <div>
      {/* <CreateAccount/> */}
      <NewAppRoutes/>
      {/* <MyPage/> */}
      {/* <AppRoutes/> */}
      {/* <Landing/> */}
      {/* <DiscussionForums/> */}
    </div>
  );
}

export default App;

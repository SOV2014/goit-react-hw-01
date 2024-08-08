import "./App.css";
import Profile from "../Profile/Profile";
import userData from "../Data/userData.json";
// import friends from "../data/friends.json";
// import FriendList from "./FriendList/FriendList";
// import transactions from "../data/transactions.json";
// import TransactionHistory from "./TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      {/* 
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
    </>
  );
}

export default App;

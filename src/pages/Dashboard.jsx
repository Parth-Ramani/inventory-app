import React from "react";

const Dashboard = () => {
  const logoutbtn = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div>Dashboard</div>
      <button onClick={logoutbtn}> Logout</button>
    </>
  );
};

export default Dashboard;

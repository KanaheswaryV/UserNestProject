import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#f3e8ff" }}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1>Welcome to UserNest</h1>
        <h2>
          Your smart and simple solution to manage tasks, stay organized, and get things done.
        </h2>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <h2>Why Choose UserNest?</h2>
        <ul>
          <li>Easy to Use</li>
          <li>Fast Performance</li>
          <li>Secure</li>
          <li>Customizable</li>
        </ul>
      </section>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  hero: {
    padding: "80px 20px",
    textAlign: "center"
  },
  features: {
    padding: "40px 20px"
  }
};

export default Home;

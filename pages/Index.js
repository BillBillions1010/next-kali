import Modal from '../components/Modal';
// pages/Index.js

const Home = () => {
  return (
    <div>
      <header>
        <h1 className="title">getTitle()</h1>
        <p className="tagline">getTagLine()</p>
        <div id="user-display" className="header-element right"></div>
        <div className="header-element left"></div>
      </header>

      <form method="POST">
        <label htmlFor="name">
          <input type="text" className="user-form name" name="name" id="name" placeholder="User..." />
        </label>
        <label htmlFor="password">
          <input type="password" className="user-form pass" id="password" placeholder="password..." />
        </label>
        <button id="submit" className="btn submit" onClick={Submit}>Submit</button>
      </form>

      <Modal />
    </div>
  );
};

function Submit() {
  const Name = document.getElementById('name');
  Name.innerHTML = Name.value;
}

export default Home;
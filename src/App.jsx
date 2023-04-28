import './App.css';
import { JobsList } from './components';

function App() {
  return (
    <>
      <header>
        <picture>
          <source
            srcSet="./images/bg-header-desktop.svg"
            media="(min-width: 720px)"
          />

          <img
            className="header-background"
            src="./images/bg-header-mobile.svg"
            alt=""
          />
        </picture>
      </header>

      <main>
        <JobsList />
      </main>
    </>
  );
}

export default App;

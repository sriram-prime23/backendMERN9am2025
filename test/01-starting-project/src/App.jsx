
// import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './assets/data';

import Header from './components/Header';
import CoreConcept from './components/CoreConcepts';


function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id='core-concepts'>
        <h2>Core Concepts </h2>
        <ul>
          <CoreConcept
          title={CORE_CONCEPTS[0].title}
          image={CORE_CONCEPTS[0].image}
          description={CORE_CONCEPTS[0].description}
          />

          <CoreConcept
          {...CORE_CONCEPTS[1]}
          />
          <CoreConcept
          {...CORE_CONCEPTS[2]}
          />
        </ul>
      </section>
    </div>
  );
}

export default App;


import './App.css';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">

      <div className="container">

        <h1>Buttons</h1>
        <div className="row">
          <section className="element">
            <h3> Default </h3>
            <Button >Click Me</Button>
            <code> {"<Button />"} </code>
          </section>

          <section className="element">
            <h3> Outline </h3>
            <Button variant="outline" >Click Me</Button>
            <code> {'<Button variant="outline" /> '} </code>
          </section>

          <section className="element">
            <h3> Text </h3>
            <Button variant="text" >Click Me</Button>
            <code> {'<Button variant="text" /> '} </code>
          </section>
        </div>

        <div className="row">
          <section className="element">
            <h3> Shadow disabled </h3>
            <Button disableShadow>Click Me</Button>
            <code> {"<Button disableShadow />"} </code>
          </section>

          <section className="element">
            <h3> Disabled </h3>
            <Button disabled>Click Me</Button>
            <code> {"<Button disabled />"} </code>
          </section>

          <section className="element">
            <h3> Variant Text Disabled </h3>
            <Button variant="text" disabled >Click Me</Button>
            <code> {'<Button variant="text" disabled />'} </code>
          </section>
        </div>

        <div className="row">
          <section className="element">
            <h3> Start Icon </h3>
            <Button startIcon="search" color="primary">Click Me</Button>
            <code> {'<Button startIcon="search" />'} </code>
          </section>

          <section className="element">
            <h3> End Icon </h3>
            <Button endIcon="search" color="primary">Click Me</Button>
            <code> {'<Button endIcon="search" />'} </code>
          </section>
        </div>

        <div className="row">
          <section className="element">
            <h3> Small </h3>
            <Button color="primary" size="sm">Click Me</Button>
            <code> {'<Button size="sm" />'} </code>
          </section>

          <section className="element">
            <h3> Medium </h3>
            <Button color="primary" size="md">Click Me</Button>
            <code> {'<Button size="md" />'} </code>
          </section>

          <section className="element">
            <h3> Large </h3>
            <Button color="primary" size="lg">Click Me</Button>
            <code> {'<Button size="lg" />'} </code>
          </section>
        </div>

        <div className="row">
          <section className="element">
            <h3> Color Default </h3>
            <Button color="default">Click Me</Button>
            <code> {'<Button color="default" />'} </code>
          </section>

          <section className="element">
            <h3> Color Primary </h3>
            <Button color="primary">Click Me</Button>
            <code> {'<Button color="primary" />'} </code>
          </section>

          <section className="element">
            <h3> Color Secondary </h3>
            <Button color="secondary">Click Me</Button>
            <code> {'<Button color="secondary" />'} </code>
          </section>

          <section className="element">
            <h3> Color Danger </h3>
            <Button color="danger">Click Me</Button>
            <code> {'<Button color="danger" />'} </code>
          </section>
        </div>
      </div>

    </div>
    
  );
}

export default App;

import React from "react";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <section className='TableDeck'>
        <section className='VictoryCards'>
          <article className='card'>card</article>
          <article className='card'>card</article>
          <article className='card'>card</article>
        </section>
        <section className='PrimaryCards'>
          <article className='card'>card</article>
          <article className='card'>card</article>
          <article className='card'>card</article>
          <article className='card'>card</article>
          <article className='card'>card</article>
          <article className='card'>card</article>
          <article className='card'>card</article>
          <article className='card'>card</article>
        </section>
        <section className='TreasureCards'>
          <article className='card'>card</article>
          <article className='card'>card</article>
          <article className='card'>card</article>
        </section>
      </section>
      <section className='PlayerSection'>
        <section className='ActivatedCards'>ActivatedCards</section>
        <section className='PlayerDeck'>
          <article className='card'>card</article>
        </section>
        <section className='PlayerHand'>
          <article className='card'>card</article>
          <article className='card'>card</article>
        </section>
      </section>
    </div>
  );
}

export default App;

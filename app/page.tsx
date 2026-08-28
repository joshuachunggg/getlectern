const appUrl = 'https://app.getlectern.app';

export default function Home() {
  return <main>
    <nav><a className="brand" href="#top">lectern</a><a className="login" href={appUrl}>Log in</a></nav>
    <section className="hero" id="top">
      <p className="eyebrow">Lecture notes, without the scramble</p>
      <h1>Stay present.<br />Study smarter.</h1>
      <p className="lede">Lectern turns your lecture recordings and course materials into clear, structured study notes.</p>
      <a className="button" href={appUrl}>Open Lectern <span>→</span></a>
    </section>
    <section className="steps" aria-label="How Lectern works">
      <article><span>01</span><h2>Capture</h2><p>Record a lecture or upload audio when class is over.</p></article>
      <article><span>02</span><h2>Add context</h2><p>Bring in slides, a syllabus, or the notes you already have.</p></article>
      <article><span>03</span><h2>Study</h2><p>Come back to organized notes built from the whole session.</p></article>
    </section>
    <footer><span>lectern</span><a href={appUrl}>Open the app</a></footer>
  </main>;
}

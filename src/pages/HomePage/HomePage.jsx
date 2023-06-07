import css from './HomePage.module.css';
export default function HomePage() {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phone book</h1>
        <p className={css.text}>Hello! This is your personal book</p>
      </div>
    </>
  );
}

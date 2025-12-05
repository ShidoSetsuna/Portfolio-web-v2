import "./error.scss";

function ErrorPage() {
  return (
    <main className="error">
      <h1 className="error__header">Oops! Something went wrong.</h1>
      <p className="error__description">We're sorry, but the page you were looking for doesn't exist.</p>
    </main>
  );
}

export default ErrorPage;

const { VITE_BASE_URL } = import.meta.env;
const App = () => {
  return (
    <div className="App">
      <p>api url: {VITE_BASE_URL}</p>
    </div>
  );
};

export default App;

import Button from "./Button";

function App() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-900 gap-6">
      <h1 className="text-white font-extrabold text-2xl">
        Convert Binary to Decimal
      </h1>
      <div className="flex flex-col border border-white/5 bg-white/5 rounded-xl shadow-xl p-4 gap-4">
        <div className="flex flex-col text-right border border-white/5 bg-white/5 rounded-xl p-4 gap-2">
          <span className="text-gray-400 text-xl">001010 =</span>
          <input className="text-right text-4xl bg-transparent text-white" />
        </div>
        <div className="flex gap-4">
          <Button title={"C"} />
          <Button title={"0"} />
          <Button title={"1"} />
          <Button title={"="} />
        </div>
      </div>
    </div>
  );
}

export default App;

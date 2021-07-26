import { Content } from "./components/Content"

export default function App() {


  return (
    <div>
      <header>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            Prospects List from Lucas Brogni
          </h1>
        </div>
      </header>

      <Content />

    </div>
  );
}

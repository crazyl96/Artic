import { HorizontalMenu } from "./components/HorizontalMenu";
import { VerticalMenu } from "./components/VerticalMenu";

//home
function App() {
  return (
    <>
      <div className="flex h-screen w-full">
        <VerticalMenu />
        <HorizontalMenu />
      </div>
      <div className="">

      </div>
    </>
    
  );
}

export default App

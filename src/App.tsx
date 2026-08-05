import Header from "./components/Header";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

function App() {
  return (
    <>
      <Header/>



      <div className="min-h-screen bg-background p-8 flex flex-col gap-4">
        <h1 className="heading">Job Tracker</h1>

        <div className="flex gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>

        <div className="flex flex-col gap-3 max-w-sm">
          <Input placeholder="Company name..." />
          <Input placeholder="Job title..." />
        </div>
      </div>
    </>
  );
}

export default App;

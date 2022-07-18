import "../components/App";
import ProperName from "./ProperName";

/* 
Homework 7/15/2022

Spin up a new react app with CRA (create-react-app) [x]
Parent component that passes a first name and a last name (separately) to a Greeting Component
Greeting should render the user's full first and last name, formatted appropriately, with a little greeting message.
IE: "Hello, Ryan Curtis."

Parent should manage state of first name and last name.
Parent should pass those values via props.

Things I care about for this:
Code splitting
Extraction
Project Structure
Finished Product.
*/

function App() {
  return (
    <div className="App">
      <ProperName fName="dakotah" lName="holmes"></ProperName>
      <ProperName fName="mike" lName="caldwell"></ProperName>
    </div>
  );
}

export default App;

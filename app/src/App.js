import './App.css';
import CustomInput from './CustomInput';

const option = [
  {
    'val' : "hello",
    'label ': 'Hello'
  }
]

function App() {
  return (
    <div className="App">
      <CustomInput label="label" type='radio' opt={option} disable={""} title="hello" required={true} />
    </div>
  );
}

export default App;


// ReactJS Component Design Test
// Task Description:
// Your task is to design a flexible ReactJS component that can be easily integrated into various parent components. The goal is to create an input field with a label, where the parent component can dynamically decide the input type (e.g., select input, radio input, checkbox, text input, number input, currency input, password input, etc.). The component should handle three scenarios: create, edit, and disable.

// Requirements:
// 1. Flexibility:
//    - The component should be designed in a way that it can be used in any parent component.
//    - The parent component should be able to send various props to customize the behavior and appearance of the input field.
//    - Design an intuitive input field (parent component) to allow users to input and send all necessary props for the child component. This includes the scenario type, input type, input title, input placeholder, and other relevant information.
// 2. Input Types:
//    - The component should support various input types such as text, number, select, radio, checkbox, password, and currency.
//    - The parent component should be able to decide the input type dynamically.
// 3. Scenarios:
//    - The component should handle three scenarios: create, edit, and disable.
//    - If the scenario is "create," the component should accept new input from the user.
//    - If the scenario is "edit," the component should display and allow editing of the previous user input.
//    - If the scenario is "disable," the input field should be disabled with the previous value displayed.
// 4. Props:
//    - The component should accept props from the parent component, including:
//      - `inputStyle`: Style for the input field.
//      - `inputTitle`: Title for the input field.
//      - `required`: Boolean indicating whether the input is required.
//      - `disable`: Boolean indicating whether the input field should be disabled.
//      - `customChangeFunction`: A custom function to handle input changes if provided by the parent.
//      - `holder`: Placeholder text for the input field.
//      - `labelStyle`: Style for the label.
//      - `errorMessage`: Error message to display if validation fails.
//      - `error`: Boolean indicating whether there is an error.
//      - `maxLength` / `minLength`: Maximum and minimum length for the input.
//      - If the input type is "select," the parent should provide `options` for the dropdown.
//      - If the input type is "currency," the component should display the price in the format `$2,167,089.00`.
// 5. Validation:
//    - If the parent component sets `required` to true, the input field should validate accordingly.
//    - If a regex pattern is provided, the input should be validated against that pattern.

// Deliverables:
// 1. A well-documented ReactJS component with clear comments explaining the code.
// 2. A sample parent component demonstrating the usage of your input component in different scenarios and with various props.
// 3. The design for the parent input field, allowing users to input and send all necessary props for the child component.

 

// Evaluation Criteria:
// 1. Flexibility and Reusability:
//    - How well the component can be integrated into different parent components.
// 2. Functionality:
//    - Whether the component handles the three scenarios correctly and respects the provided props.
// 3. Code Quality:
//    - The cleanliness, readability, and organization of your code.
// 4. Documentation:
//    - Clear and concise comments explaining the purpose and functionality of your code.

 

// Submission:
// Please submit a zip file containing your ReactJS component file(s), the sample parent component, and the design for the parent input field. Also, provide any necessary instructions for running the sample parent component and utilizing the input field for creating the child component.

 

// Good luck! If you have any questions, feel free to ask.
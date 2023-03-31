import React from 'react'

const CommonAskQues = () => {
  return (
    <div className='py-5 container mx-auto w-[90%]'>
      <h1 className="text-center text-3xl font-semibold py-5 my-5">
        Commonly Asked Questions
      </h1>

      <div className="space-y-6">
        <div className="bg-teal-50 text-emerald-600 p-3 rounded-md">
          <h1 className="text-2xl font-bold">1. Props VS state</h1>
          <div>
            <p className="text-xl font-semibold">Props:</p>

            <ul className="p-4">
              <li>
                Props allow you to pass data from one component to other
                components as an argument.
              </li>
              <li>Props can be accessed by the child component.</li>
              <li>Props make components reusable.</li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-semibold">State:</p>

            <ul className="p-4">
              <li>State changes can be asynchronous.</li>
              <li>State is mutable.</li>
              <li>State cannot make components reusable.</li>
              <li>
                States can be used for rendering dynamic changes with the
                component.
              </li>
            </ul>
          </div>
        </div>

        <div className="p-3 rounded-md bg-orange-50 text-orange-600">
          <h1 className="text-2xl font-bold">2. How does useState work?</h1>
          <p>
            The useState hook uses a concept known as closures to manage state
            between function calls. When we call the useState hook, React
            creates a state object with the initial state value that we pass as
            an argument. This state object is stored internally by React and is
            associated with the component where the useState hook is used. React
            then returns an array with two elements: the current state value and
            a function that can be used to update the state value. The state
            value is initially set to the initial state value that we passed to
            the useState hook.
          </p>
        </div>

        <div className="p-3 rounded-md bg-cyan-50 text-cyan-600">
          <h1 className="text-2xl font-bold">
            3. Purpose of useEffect other than fetching data.
          </h1>

          <h3>Purposes of useEffect other than fetching data:</h3>

          <ul>
            <li>
              Managing side effects such as setting up and tearing down timers,
              subscriptions, and event listeners.
            </li>
            <li>Updating global state outside of React.</li>
            <li>Updating the URL or navigating to a different page.</li>
            <li>Updating the document title based on state or props</li>
          </ul>
        </div>

        <div className="p-3 rounded-md bg-fuchsia-50 text-fuchsia-600">
          <h1 className="text-2xl font-bold">4. How Does React work?</h1>
          <p>
            React is a JavaScript library that is used for building user
            interfaces. React uses a component-based architecture, which means
            that UI elements are broken down into reusable components. When a
            user interacts with a React-based application, the browser sends an
            event to the application. React then updates the UI by modifying the
            state of the components. This process is called rendering. React
            uses a virtual DOM to efficiently update the UI.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommonAskQues
import React from 'react';

const Blogs = () => {

    return (


        <section class="dark:bg-gray-800 dark:text-gray-100">
            <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <h1 rel="noopener noreferrer" href="#" class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src="https://i.ibb.co/JyP9jj5/download.jpg" alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"/>
                        <div class="p-6 space-y-2 lg:col-span-5">
                            <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">How will you improve the performance of a React Application?</h3>
                            <span class="text-xs dark:text-gray-400">February 19, 2021</span>
                            <p>A React application may be made more efficient in a variety of ways. As an example, wherever possible, keep state of components local. Memorying React components to avoid unwanted re-renders is also a good strategy. In addition, dynamic imports in React allow for code-splitting (). React's virtualization of windows or lists. In React, photos may be loaded in a 'lazy' manner. Making Use of Structural Consistency. As many chunk files as you'd want.</p>
                        </div>
                </h1>
                <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <h1 rel="noopener noreferrer" href="#" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                        <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500" alt="" src="https://i.ibb.co/PTVNdD2/download-1.jpg"/>
                            <div class="p-6 space-y-2">
                                <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">What are the different ways to manage a state in a React application?</h3>
                                <span class="text-xs dark:text-gray-400">January 21, 2021</span>
                                <p>The four major forms of state you need to keep track of in your React projects are: Local state, Global state, Server state, and URL state. A component's local state refers to the data it keeps. Managing local state in React is often accomplished via the usage of the useState hook. Additionally, for both local and global states, useReducer is an option that may be implemented in any way. Under the hood, it is quite similar to useState, except that it takes a reducer instead of a starting state. You'd need local state for things like showing or hiding a modal component and keeping track of input data for forms that have been disabled. Data that is shared across different components is referred to as global state. When data has to be accessed and updated across many parts of our program, we need to use global state. Authenticated user state is a frequent example of a global state. In order to get or update data from an external server, you must handle a variety of states, including loading and error state.</p>
                            </div>
                    </h1>
                    <h1 rel="noopener noreferrer" href="#" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                        <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500" alt="" src="https://i.ibb.co/zNp6JLG/download.png"/>
                            <div class="p-6 space-y-2">
                                <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">How does prototypical inheritance work?</h3>
                                <span class="text-xs dark:text-gray-400">January 22, 2021</span>
                                <p>There is an unnoticed Prototype property in every object in addition to its methods and attributes. JavaScript's Prototypal Inheritance capability may be used to provide extra methods and properties to objects. Inheritance is a process through which an object may take on the traits and behaviors of another object. The [[Prototype]] of an object may typically be obtained and modified using the Object.getPrototypeOf and Object.setPrototypeOf methods. The __proto__ method is now often used in modern languages to set it.</p>
                            </div>
                    </h1>
                    <h1 rel="noopener noreferrer" href="#" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                        <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500"  alt="" src="https://i.ibb.co/xqgzd6H/images.png"/>
                            <div class="p-6 space-y-2">
                                <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">What is a unit test? Why should write unit tests?</h3>
                                <span class="text-xs dark:text-gray-400">January 23, 2021</span>
                                <p>Using JavaScript Unit Testing, a web page or web application module may be tested using JavaScript code. After that, it's included into the HTML as an inline event handler and tested in the browser to ensure that all of the needed features are available. These unit tests are then grouped together in a test suite for easy access. Unit testing in JavaScript is made easier by a variety of frameworks. The Unit.js library, for example, is a Javascript assertion library that runs on Node.js and the browser. For React and React Native web apps, Jest is a JavaScript-based open-source testing framework. With the Jest framework, this complexity may be greatly minimized. If you're using Mocha, Jasmine, Karma or protractor (a testing framework for Angular projects), you'll be able to use it with any of these frameworks. Node.js and browser-based test framework Mocha. Serial test execution in this framework simplifies asynchronous testing.</p>
                            </div>
                    </h1>
                    <h1 rel="noopener noreferrer" href="#" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
                        <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500" alt="" src="https://source.unsplash.com/random/480x360?4"/>
                            <div class="p-6 space-y-2">
                                <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
                                <span class="text-xs dark:text-gray-400">January 24, 2021</span>
                                <p>Using setState allows you to move a state from one component to another without having to change the original. SetState is required for integrating an item into the current state (). Components that are stateful or stateless cannot be known by their parents and children, and they should not be concerned about whether or not they are defined as functions or classes. Any React component may have a state attached to it. A user action or a system event may cause the state of a component to change. If the component's state changes, React re-renders it. Before changing the state's value, it is important to create an initial state setup. To make changes to the object's current state, we use the setState() method. You may be sure that the component's current state has been maintained by requesting a re-render. If a synchronous call is performed to change an object's state, it may not be updated on the console at the right time.</p>
                            </div>
                    </h1>
                   
                </div>
              
            </div>
        </section>









    );
};

export default Blogs;
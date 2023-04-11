import React from "react";
import PageHeader from "../PageHeader/PageHeader";

const Blog = () => {
  return (
    <div className="">
      <PageHeader>Blog</PageHeader>
      <section className="mt-[450px] w-10/12 mx-auto" id="quesAnsContainer">
        <div className="mx-3 my-8 py-6 px-5 shadow-sm rounded-lg border">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-purple-200 font-bold rounded-full flex justify-center items-center text-purple-800 mr-3">
              1
            </div>
            <p className="text-gray-800 text-lg font-bold">
              When should you use <code>'context API'</code>?
            </p>
          </div>
          <hr className="my-3" />
          <div className="flex items-center">
            <p className="mx-11 text-start leading-loose">
              <code className="bg-purple-50 p-1 rounded font-bold">
                'Context API'
              </code>
              should be mainly used to avoid prop drilling. Where prop drilling
              means a data is being sent to a lot of child component from the
              parent component, and the child components are in a nested
              fashion. To avoid passing props to every single nested component
              we can use{" "}
              <code className="bg-purple-50 p-1 rounded font-bold">
                'context API'
              </code>{" "}
              to solve the problem, by creating a context and using the context
              in necessary component.
            </p>
          </div>
        </div>

        <div className="mx-3 my-8 py-6 px-5 shadow-sm rounded-lg border">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-purple-200 font-bold rounded-full flex justify-center items-center text-purple-800 mr-3">
              2
            </div>
            <p className="text-gray-800 text-lg font-bold">
              What is <code>'custom hook'</code>?
            </p>
          </div>
          <hr className="my-3" />
          <div className="flex items-center">
            <p className="mx-11 text-start leading-loose">
              <code className="bg-purple-50 p-1 rounded font-bold">
                'Custom hook'
              </code>
              as the name suggests a custom built hook for any personal use to
              serve special need. This is a great way to make the code less
              clutured where the same task or hook is being used numerous times.
              For example, when we try to load data from a API, we use{" "}
              <code className="bg-purple-50 p-1 rounded font-bold">
                'useState()'
              </code>{" "}
              and{" "}
              <code className="bg-purple-50 p-1 rounded font-bold">
                'useEffect()'
              </code>{" "}
              and inside the{" "}
              <code className="bg-purple-50 p-1 rounded font-bold">
                'useEffect()'
              </code>{" "}
              we use fetch to grab the data and set it to the state. In
              addition, we can make a lot of API calls throughout an
              application. So, to minimize the use of same code we can make our
              own hook to meet our need. We could just pass the url to the{" "}
              <code className="bg-purple-50 p-1 rounded font-bold">
                'custom hook'
              </code>{" "}
              and get the data.
            </p>
          </div>
        </div>

        <div className="mx-3 my-8 py-6 px-5 shadow-sm rounded border">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-purple-200 font-bold rounded-full flex justify-center items-center text-purple-800 mr-3">
              3
            </div>
            <p className="text-gray-800 text-lg font-bold">
              What is <code>'useRef()'</code>?
            </p>
          </div>
          <hr className="my-3" />
          <div className="flex items-center">
            <p className="mx-11 text-start leading-loose">
              <code className="bg-purple-50 p-1 rounded font-bold">
                'useEffect()'
              </code>{" "}
              is a side effect of react which is used to reach outside of the
              react components in order to do something, like fetching an API
              data. It is also a hook of react which accepts a function and a
              dependency. This hook runs on every render unless you pass a
              dependency value and it will render whenever the dependency value
              changes. So, it can be used on timers, validating inputs, trigger
              animation, trigger any change in the DOM.
            </p>
          </div>
        </div>

        <div className="mx-3 my-8 py-6 px-5 shadow-sm rounded border">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-purple-200 font-bold rounded-full flex justify-center items-center text-purple-800 mr-3">
              4
            </div>
            <p className="text-gray-800 text-lg font-bold">
              What is <code>'useMemo'</code>?
            </p>
          </div>
          <hr className="my-3" />
          <div className="flex items-center">
            <p className="mx-11 text-start leading-loose">
              <code className="bg-purple-50 p-1 rounded font-bold">
                'React'
              </code>{" "}
              uses components like functions. React takes all the elements and
              creates a JavaScript representation of the entire DOM know as
              vitual DOM and assigns unique key to each element to keep track,
              whenever there's any change React uses "diffing" algorithm to
              pinpoint which element has undergo change by matching the vitual
              DOM with the actual DOM using the keys and updates that element
              only and re-renders it without re-rendering the whole DOM.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

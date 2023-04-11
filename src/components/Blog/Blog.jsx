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
            <p className="mx-11 text-start leading-loose tracking-wide ">
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
            <p className="mx-11 text-start leading-loose tracking-wide ">
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
            <p className="mx-11 text-start leading-loose tracking-wide ">
              <code className="bg-purple-50 p-1 rounded font-bold">
                'useRef()'
              </code>{" "}
              is a hook of react and it lets you create a reference of things
              that are mutual or subject to change but the change or update
              would not cause and re-render.
            </p>
          </div>
        </div>

        <div className="mx-3 my-8 py-6 px-5 shadow-sm rounded border">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-purple-200 font-bold rounded-full flex justify-center items-center text-purple-800 mr-3">
              4
            </div>
            <p className="text-gray-800 text-lg font-bold">
              What is <code>'useMemo()'</code>?
            </p>
          </div>
          <hr className="my-3" />
          <div className="flex items-center">
            <p className="mx-11 text-start leading-loose tracking-wide ">
              <code className="bg-purple-50 p-1 rounded font-bold">
                'useMemo()'
              </code>{" "}
              is used to memoize value between re-renders. This allows us to
              cache a value which are being used inside a component but does not
              require the value to be re-called or re-generate on every
              re-render. It only re-renders when the value is updated.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

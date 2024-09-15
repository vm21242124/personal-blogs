import React from "react";

const BlogList = () => {
  const blogs = [
    {
      title: "Introducing Tailwind Nextjs Starter Blog",
      date: "January 12, 2021",
      tags: ["next-js", "tailwind", "guide"],
      description:
        "Looking for a performant, out-of-the-box template with all the best in web technology to support your blogging needs? Check out the Tailwind Nextjs Starter Blog template.",
      link: "/blog/introducing-tailwind-nextjs-starter-blog",
    },
  ];

  return (
    <main className="mb-auto">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Section Header */}
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A blog created with Next.js and Tailwind.css
          </p>
        </div>

        {/* Blog List */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {blogs.map((blog, index) => (
            <li key={index} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  {/* Blog Publish Date */}
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime="2021-01-12">{blog.date}</time>
                    </dd>
                  </dl>
                  {/* Blog Content */}
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <a
                            className="text-gray-900 dark:text-gray-100"
                            href={blog.link}
                          >
                            {blog.title}
                          </a>
                        </h2>
                        {/* Blog Tags */}
                        <div className="flex flex-wrap">
                          {blog.tags.map((tag, i) => (
                            <a
                              key={i}
                              className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href={`/tags/${tag}`}
                            >
                              {tag}
                            </a>
                          ))}
                        </div>
                      </div>
                      {/* Blog Description */}
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {blog.description}
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <a
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        href={blog.link}
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      {/* Link to All Posts */}
      <div className="flex justify-end text-base font-medium leading-6">
        <a
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          href="/blog"
        >
          All Posts →
        </a>
      </div>

      {/* Newsletter Signup */}
      <div className="flex items-center justify-center pt-4">
        <div>
          <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
            Subscribe to the newsletter
          </div>
          <form className="flex flex-col sm:flex-row">
            <div>
              <label htmlFor="email-input">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  id="email-input"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black"
                />
              </label>
            </div>
            <div className="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 hover:bg-primary-700 dark:hover:bg-primary-400 focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default BlogList;

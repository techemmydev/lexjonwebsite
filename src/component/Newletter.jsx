import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function Newsletter() {
  return (
    <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-22 bg-white font-plus-jakarta-sans ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
              Stay in the Loop
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Get weekly updates on tech trends, product launches, and insights
              from our team. No spam—just real value.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border border-gray-300 px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-green-900 focus:outline-none sm:text-sm"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-green-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-gray-100 p-2 ring-1 ring-gray-300">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="size-6 text-green-900"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-gray-900">
                Weekly articles
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                Industry news, tutorials, and product insights delivered every
                week.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-gray-100 p-2 ring-1 ring-gray-300">
                <HandRaisedIcon
                  aria-hidden="true"
                  className="size-6 text-green-900"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-gray-900">
                No spam policy
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                We respect your inbox—unsubscribe anytime, no questions asked.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

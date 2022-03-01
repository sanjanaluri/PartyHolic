import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const Addform = () => {
  const [formData, setFormData] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="party_title"
                  class="block text-sm font-medium text-gray-700"
                >
                  Party Title
                </label>
                <input
                  type="text"
                  name="party_title"
                  id="party_title"
                  autocomplete="given-name"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="host_name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Host Name
                </label>
                <input
                  type="text"
                  name="host_name"
                  id="host_name"
                  autocomplete="family-name"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="email_address"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="text"
                  name="email_address"
                  id="email_address"
                  autocomplete="email"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700"
                >
                  Country / Region
                </label>
                <select
                  id="country"
                  name="country"
                  autocomplete="country"
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div class="col-span-6">
                <label
                  for="street_address"
                  class="block text-sm font-medium text-gray-700"
                >
                  Street address
                </label>
                <input
                  type="text"
                  name="street_address"
                  id="street_address"
                  autocomplete="street-address"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  for="city"
                  class="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="state"
                  class="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="postal_code"
                  class="block text-sm font-medium text-gray-700"
                >
                  ZIP / Postal
                </label>
                <input
                  type="text"
                  name="postal_code"
                  id="postal_code"
                  autocomplete="postal-code"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addform;

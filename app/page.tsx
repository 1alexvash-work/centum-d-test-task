"use client";

const Home = () => {
  return (
    <div className="container mx-auto p-4 shadow-md w-[800px]">
      <header className="p-4 shadow-md flex flex-col">
        <label>
          <input type="checkbox" className="size-4 mr-1" />
          Commercial discount
        </label>
        <label>
          <input type="checkbox" className="size-4 mr-1" />
          Agents discount
        </label>
        <label>
          <input type="checkbox" className="size-4 mr-1" />
          Summer discount
        </label>
        <label>
          <input type="checkbox" className="size-4 mr-1" />
          Strong car surcharge
        </label>
        <div className="font-bold">Total price: 42</div>
      </header>
      <main className="mt-4 p-4 shadow-md flex justify-between">
        <div className="p-4 shadow-md">
          <h1 className="text-xl font-bold">User data</h1>

          <div>
            Name:
            <input type="text" className="border" />
          </div>
          <div>
            Birthdate: <input type="text" className="border" />
          </div>
          <div>
            City: <input type="text" className="border" />
          </div>
          <div>
            Vehicle Power: <input type="text" className="border" />
          </div>
          <div>
            Voucher: <input type="text" className="border" /> EUR
          </div>
          <div>
            Price match: <input type="text" className="border" /> EUR
          </div>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={() => alert("Save handler")}
          >
            Save
          </button>
        </div>

        <div className="p-4 shadow-md">
          <h1 className="text-xl font-bold">Coverages</h1>

          <div className="flex flex-col">
            <label>
              <input type="checkbox" className="size-4 mr-1" />
              Bonus protection
            </label>

            <label>
              <input type="checkbox" className="size-4 mr-1" />
              AO +
            </label>

            <label>
              <input type="checkbox" className="size-4 mr-1" />
              Glass coverage
            </label>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

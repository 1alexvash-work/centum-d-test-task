const Home = () => {
  return (
    <div>
      <header>
        <label>
          <input type="checkbox" />
          Commercial discount
        </label>
        <label>
          <input type="checkbox" />
          Agents discount
        </label>
        <label>
          <input type="checkbox" />
          Summer discount
        </label>
        <label>
          <input type="checkbox" />
          Strong car surcharge
        </label>
        Total price: 42
      </header>
      <main>
        <div>
          <h1 className="text-xl font-bold">User data</h1>

          <div>
            Name: <input type="text" />
          </div>
          <div>
            Birthdate: <input type="text" />
          </div>
          <div>
            City: <input type="text" />
          </div>
          <div>
            Vehicle Power: <input type="text" />
          </div>
          <div>
            Voucher: <input type="text" /> EUR
          </div>
          <div>
            Price match: <input type="text" /> EUR
          </div>
          <button>Save</button>
        </div>

        <div>
          <h1 className="text-xl font-bold">Coverages</h1>

          <label>
            <input type="checkbox" />
            Bonus protection
          </label>

          <label>
            <input type="checkbox" />
            AO +
          </label>

          <label>
            <input type="checkbox" />
            Glass coverage
          </label>
        </div>
      </main>
    </div>
  );
};

export default Home;

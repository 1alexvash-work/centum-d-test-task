"use client";

/*
TODOS:

[] Enhance server function to accept some params
[] Implement formulas to do the calculations
[] Read requirements again
[] Send the assingment
*/

import { useState } from "react";
import { FormState, saveServer } from "./functions";

const Home = () => {
  const [price, setPrice] = useState<null | number>(null);

  const [formState, setFormState] = useState<FormState>({
    discounts: {
      commercial: false,
      agents: false,
      summer: false,
      strongCar: false,
    },
    userData: {
      name: "",
      birthdate: "",
      city: "",
      vehiclePower: "",
      voucher: "",
      priceMatch: "",
    },
    coverages: {
      bonusProtection: false,
      aoPlus: false,
      glassCoverage: false,
    },
  });
  console.log("formState:", formState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      userData: {
        ...prevState.userData,
        [name]: value,
      },
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const [category, field] = name.split(".");

    setFormState((prevState) => ({
      ...prevState,
      [category as keyof FormState]: {
        ...prevState[category as keyof FormState],
        [field]: checked,
      },
    }));
  };

  const saveClient = () => {
    const result = saveServer();
    setPrice(result);
  };

  return (
    <div className="container mx-auto p-4 shadow-md w-[800px]">
      <header className="p-4 shadow-md flex flex-col">
        <label>
          <input
            type="checkbox"
            className="size-4 mr-1"
            name="discounts.commercial"
            checked={formState.discounts.commercial}
            onChange={handleCheckboxChange}
          />
          Commercial discount
        </label>
        <label>
          <input
            type="checkbox"
            className="size-4 mr-1"
            name="discounts.agents"
            checked={formState.discounts.agents}
            onChange={handleCheckboxChange}
          />
          Agents discount
        </label>
        <label>
          <input
            type="checkbox"
            className="size-4 mr-1"
            name="discounts.summer"
            checked={formState.discounts.summer}
            onChange={handleCheckboxChange}
          />
          Summer discount
        </label>
        <label>
          <input
            type="checkbox"
            className="size-4 mr-1"
            name="discounts.strongCar"
            checked={formState.discounts.strongCar}
            onChange={handleCheckboxChange}
          />
          Strong car surcharge
        </label>
        <div className="font-bold">
          {price ? `Total price: ${price}` : "Total price is not calculated"}
        </div>
      </header>
      <main className="mt-4 p-4 shadow-md flex justify-between">
        <div className="p-4 shadow-md">
          <h1 className="text-xl font-bold">User data</h1>

          <div>
            Name:
            <input
              type="text"
              className="border"
              name="name"
              value={formState.userData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            Birthdate:
            <input
              type="text"
              className="border"
              name="birthdate"
              value={formState.userData.birthdate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            City:
            <input
              type="text"
              className="border"
              name="city"
              value={formState.userData.city}
              onChange={handleInputChange}
            />
          </div>
          <div>
            Vehicle Power:
            <input
              type="text"
              className="border"
              name="vehiclePower"
              value={formState.userData.vehiclePower}
              onChange={handleInputChange}
            />
          </div>
          <div>
            Voucher:
            <input
              type="text"
              className="border"
              name="voucher"
              value={formState.userData.voucher}
              onChange={handleInputChange}
            />{" "}
            EUR
          </div>
          <div>
            Price match:
            <input
              type="text"
              className="border"
              name="priceMatch"
              value={formState.userData.priceMatch}
              onChange={handleInputChange}
            />{" "}
            EUR
          </div>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={saveClient}
          >
            Save
          </button>
        </div>

        <div className="p-4 shadow-md">
          <h1 className="text-xl font-bold">Coverages</h1>

          <div className="flex flex-col">
            <label>
              <input
                type="checkbox"
                className="size-4 mr-1"
                name="coverages.bonusProtection"
                checked={formState.coverages.bonusProtection}
                onChange={handleCheckboxChange}
              />
              Bonus protection
            </label>

            <label>
              <input
                type="checkbox"
                className="size-4 mr-1"
                name="coverages.aoPlus"
                checked={formState.coverages.aoPlus}
                onChange={handleCheckboxChange}
              />
              AO +
            </label>

            <label>
              <input
                type="checkbox"
                className="size-4 mr-1"
                name="coverages.glassCoverage"
                checked={formState.coverages.glassCoverage}
                onChange={handleCheckboxChange}
              />
              Glass coverage
            </label>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

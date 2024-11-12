export type FormState = {
  discounts: {
    commercial: boolean;
    agents: boolean;
    summer: boolean;
    strongCar: boolean;
  };
  userData: {
    name: string;
    birthdate: string;
    city: string;
    vehiclePower: string;
    voucher: string;
    priceMatch: string;
  };
  coverages: {
    bonusProtection: boolean;
    aoPlus: boolean;
    glassCoverage: boolean;
  };
};

export const saveServer = () => {
  return Math.round(Math.random() * 100);
};

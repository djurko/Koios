export class Settlement {
    settlementId: number;
    name: string;
    zipCode: string;
    countryId: number;
    country: {
      countryId: number;
      name: string;
    };
  }
  
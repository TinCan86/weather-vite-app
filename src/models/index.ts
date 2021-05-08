export interface t {
  main: { temp: number };
}

// Not finished type
export interface data {
  data: {
    city: {
      name: string;
    };
    list: [
      {
        main: { temp: number };
        weather: [{ main: string; description: string; icon: string }];
      }
    ];
  };
}

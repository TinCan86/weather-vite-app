export interface t {
  main: { temp: number };
}

export interface d {
  list: [{ main: { temp: number } }];
}

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

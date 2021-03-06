const mockData = [
  { id: 0, name: "Abu Dhabi" },
  { id: 1, name: "Berlin" },
  { id: 2, name: "Bogota" },
  { id: 3, name: "Buenos Aires" },
  { id: 4, name: "Cairo" },
  { id: 5, name: "Chicago" },
  { id: 6, name: "Lima" },
  { id: 7, name: "London" },
  { id: 8, name: "Miami" },
  { id: 9, name: "Moscow" },
  { id: 10, name: "Mumbai" },
  { id: 11, name: "Paris" },
  { id: 12, name: "San Francisco" }
];
export const LocationSource = {
  fetch: {
    remote(state) {
      return new Promise(function(resolve, reject) {
        // simulate an asynchronous action where data is fetched on
        // a remote server somewhere.
        setTimeout(function() {
          // resolve with some mock data
          resolve(mockData);
        }, 250);
      });
    },
    local() {
      // Never check locally, always fetch remotely.
      return null;
    }
  }
};

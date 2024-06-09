function fetchFundData(url) {
  let status = 'pending';
  let result;
  let suspender = fetch(url)
      .then(response => response.json())
      .then(data => {
          status = 'success';
          result = data;
      }, error => {
          status = 'error';
          result = error;
      });

  return {
      read() {
          if (status === 'pending') {
              throw suspender;
          } else if (status === 'error') {
              throw result;
          } else if (status === 'success') {
              return result;
          }
      }
  };
}

export default fetchFundData;
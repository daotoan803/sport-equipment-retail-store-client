const auth = (() => {
  let accessKey = localStorage.getItem('token') || null;

  const isLoggedIn = () => accessKey !== null;

  const getTokenAndStore = (responseBody) => {
    const token = responseBody.token;
    localStorage.setItem('token', token);
  };

  const logIn = async (email, password) => {
    const response = await fetch('/api/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 200) {
      const data = await response.json();
      getTokenAndStore(data);
      return true;
    }
    if (response.status === 400) return false;
    alert('something happen, please try again');
  };

  const signup = async ({ name, email, dob, gender, password }) => {
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, dob, gender, password }),
    });
    const data = await response.json();
    
    if (response.status === 200) {
      getTokenAndStore(data)
    }
    return { status: response.status, data };
  };

  return { isLoggedIn, logIn, signup };
})();

export default auth;

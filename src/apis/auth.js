const auth = (() => {
  let token = localStorage.getItem('token') || null;
  let role = localStorage.getItem('role') || null;

  const availableRole = {
    admin: 'admin',
    sale: 'sale',
    storage: 'storage',
  };

  const isLoggedIn = () => token !== null;

  const getTokenAndStore = (responseBody) => {
    const token = responseBody.token;
    localStorage.setItem('token', token);
  };

  const getRole = () => role;

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
      if (data.role) {
        localStorage.setItem('role', data.role);
        return { status: response.status, role: data.role };
      }
      return { status: response.status };
    }
    if (response.status === 400) return { status: 400 };
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
      getTokenAndStore(data);
    }
    return { status: response.status, data };
  };

  const logout = () => {
    token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };

  const getAuthorization = () => {
    console.log(token);
    return `Bearer ${token}`;
  };

  return {
    isLoggedIn,
    logIn,
    signup,
    logout,
    getRole,
    getAuthorization,
    availableRole,
  };
})();

export default auth;

const auth = (() => {
  let accessKey = localStorage.getItem('token') || null;

  const isLoggedIn = () => accessKey !== null;
  const logIn = async (email, password) => {
    const response = await fetch('/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 200) {
      const data = await response.json();
      accessKey = data.token;
      localStorage.setItem('token', accessKey);
      return true;
    }
    if (response.status === 400) return false;
    alert('something happen, please try again');
  };

  return { isLoggedIn, logIn };
})();

export default auth;

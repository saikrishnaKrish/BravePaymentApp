const users: { username: string; password: string }[] = [];

export const signup = (username: string, password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      reject('User already exists');
    } else {
      users.push({ username, password });
      resolve('Signup successful');
    }
  });
};

export const login = (username: string, password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      resolve('Login successful');
    } else {
      reject('Invalid username or password');
    }
  });
};
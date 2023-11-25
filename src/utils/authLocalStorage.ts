interface Auth {
  get: () => { accessToken: string | null };
  set: (data: { accessToken: string }) => void;
  remove: () => void;
}

export const authLocalStorage: Auth = {
  get: () => {
    const accessToken = localStorage.getItem("access");

    return { accessToken };
  },
  set: (data) => {
    localStorage.setItem("access", data.accessToken);
  },
  remove: () => {
    localStorage.removeItem("access");
  },
};

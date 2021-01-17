type Action<T> = (args: T) => void;

function debounce<T>(action: Action<T>, timeout: number): Action<T> {
  let id: NodeJS.Timeout | null = null;

  return args => {
    if (id) clearInterval(id);

    id = setTimeout(() => void action(args), timeout);
  };
}


export default debounce;

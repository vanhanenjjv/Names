import Resource from "./resource";


type Status = 'pending' | 'error' | 'success';

function wrapPromise<T>(promise: Promise<T>): Resource<T> {
  let status: Status = 'pending';
  let result: T;

  const suspender = promise.then(
    value => {
      status = 'success';
      result = value;
    },
    reason => {
      status = 'error';
      result = reason;
    }
  );

  return {
    read() {
      if (status === 'pending') throw suspender;
      if (status === 'error')   throw result;

      return result;
    }
  };
}


export default wrapPromise;

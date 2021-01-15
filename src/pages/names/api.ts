import { wrapPromise } from "../../suspense";


interface Name {
  name: string;
  amount: number;
}

interface ResponseBodyWithNames {
  names: Name[];
}

async function fetchNames(): Promise<Name[]> {
  const response = await fetch('https://raw.githubusercontent.com/solita/dev-academy-2021/main/names.json');

  if (!response.ok) throw new Error('Failed to fetch names.');

  const body = await response.json();

  if (!hasNames(body)) throw new Error('Invalid response body.');

  return body.names;

  function hasNames(body: unknown): body is ResponseBodyWithNames {
    if (typeof body !== 'object') return false;    
    if (body === null)            return false;

    if (!('names' in body))                return false;

    const names = (body as { names: unknown }).names;

    if (!Array.isArray(names))     return false;
  
    if (names.length === 0) return true;

    if (typeof names[0] !== 'object') return false;
    if (names[0] === null)            return false;

    if (!('name' in names[0]))   return false;
    if (!('amount' in names[0])) return false;

    const { name, amount } = (names[0] as { name: unknown, amount: unknown });
    
    if (typeof name !== 'string')   return false;
    if (typeof amount !== 'number') return false;

    return true;
  }
}

const names = wrapPromise(fetchNames());


export default names;
export type { Name };

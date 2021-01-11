import { wrapPromise } from "../suspense";
import Name from './name';

const endpoint = 'https://raw.githubusercontent.com/solita/dev-academy-2021/main/names.json';


async function fetchNames(): Promise<Name[]> {
  const response = await fetch(endpoint);

  if (!response.ok) throw new Error('Failed to fetch names.');

  const body = await response.json();

  if (!('names' in body)) throw new Error(`Field 'names' not found in the response body.`);

  return body.names;
}

const names = wrapPromise(fetchNames());


export default names;

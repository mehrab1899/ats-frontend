// src/lib/relayEnvironment.ts
import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestParameters,
  Variables,
} from 'relay-runtime';
import Cookies from 'js-cookie'

function isFile(value: any): value is File {
  return typeof File !== 'undefined' && value instanceof File;
}

function buildFormData(params: RequestParameters, variables: Variables): FormData {
  const formData = new FormData();

  const fileMap: Record<string, string[]> = {};
  const uploads: Record<string, File> = {};
  let currentIndex = 0;

  function traverse(value: any, path: string[] = []) {
    if (isFile(value)) {
      const mapKey = `${currentIndex++}`;
      fileMap[mapKey] = [`variables.${path.join('.')}`];
      uploads[mapKey] = value;
    } else if (Array.isArray(value)) {
      value.forEach((v, i) => traverse(v, [...path, i.toString()]));
    } else if (value && typeof value === 'object') {
      Object.keys(value).forEach((key) => traverse(value[key], [...path, key]));
    }
  }

  traverse(variables);

  // ✅ Correct multipart field order
  const operations = {
    query: params.text,
    variables,
  };

  formData.append('operations', JSON.stringify(operations));
  formData.append('map', JSON.stringify(fileMap));

  for (const key in uploads) {
    formData.append(key, uploads[key]);
  }

  return formData;
}

async function fetchQuery(params: RequestParameters, variables: Variables) {
  const containsFile = (obj: any): boolean =>
    isFile(obj) ||
    (typeof obj === 'object' && obj !== null && Object.values(obj).some(isFile));

  const isMultipart = containsFile(variables);
  const body = isMultipart
    ? buildFormData(params, variables)
    : JSON.stringify({ query: params.text, variables });

  const headers: HeadersInit = isMultipart
    ? {}
    : {
      'Content-Type': 'application/json',
    };

  const token = Cookies.get('token'); // Get the token from cookies
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers,
    body,
  });

  return await response.json();
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

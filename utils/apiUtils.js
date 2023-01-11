export async function callApi({ url, method, body, headers, params }) {
  const urlCalled = !params ? url : `${url}?${new URLSearchParams(params)}`;
  const result = await fetch((url = urlCalled), {
    method: method,
    body: !body ? null : JSON.stringify(body),
    headers: !headers ? { "Content-Type": "application/json" } : headers,
  });
  console.log({ result });
  return result;
}

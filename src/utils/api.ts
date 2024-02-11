export const GET = async <T>(url: string) => {
  const res = await fetch(url, {
    method: "GET",
  });

  return res.json() as T;
};

export const POST = async <T>(url: string, body: any) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
  });

  return res.json() as T;
};

export const PUT = async <T>(url: string, body: any) => {
  const res = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(body),
  });

  return res.json() as T;
};

export const DELETE = async <T>(url: string) => {
  const res = await fetch(url, {
    method: "DELETE",
  });

  return res.json() as T;
};

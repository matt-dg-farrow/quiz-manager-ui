import { Quiz } from "./types";

const API_BASE = "http://localhost:8080/";

const headers = {
  "Content-Type": "application/json; charset=utf-8",
};

export const Post = (url: any, query: any) =>
  fetch(`${API_BASE}${url}`, {
    headers,
    method: "POST",
    credentials: "same-origin",
    body: JSON.stringify(query),
  })
    .then((resp) => resp.json())
    .catch(() => ({
      ok: false,
      data: { statusMessage: "Parsing POST Error" },
    }));

export const Get = (url: any, query?: any) =>
  fetch(`${API_BASE}${url}`, {
    headers,
    method: "GET",
    credentials: "same-origin",
    body: JSON.stringify(query),
  })
    .then((resp) => resp.json())
    .catch(() => ({ ok: false, data: { statusMessage: "Parsing GET Error" } }));

export const Delete = (url: any, query: any) =>
  fetch(`${API_BASE}${url}`, {
    headers,
    method: "DELETE",
    credentials: "same-origin",
    body: JSON.stringify(query),
  })
    .then((resp) => resp.json())
    .catch(() => ({
      ok: false,
      data: { statusMessage: "Parsing DELTE Error" },
    }));

export const Put = (url: any, query: any) =>
  fetch(`${API_BASE}${url}`, {
    headers,
    method: "PUT",
    credentials: "same-origin",
    body: JSON.stringify(query),
  })
    .then((resp) => resp.json())
    .catch(() => ({
      ok: false,
      data: { statusMessage: "Parsing PUT Error" },
    }));

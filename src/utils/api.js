import { URL } from "../../URL";

export default class Api {
  static getUserPromise({ email, password }) {
    const query = new URLSearchParams({ email, password }).toString();
    return fetch(`${URL}/users?${query}`)
      .then((r) => r.json())
      .then((users) => users[0]);
  }

  static createUser({ email, password, createdAt }) {
    fetch(`${URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        createdAt,
      }),
    });
  }

  static getUserNotesPromise(userId) {
    return fetch(`${URL}/notes?authorId=${userId}`).then((r) => r.json());
  }

  static getNotePromise(id) {
    return fetch(`${URL}/notes/${id}`).then((r) => r.json());
  }

  static createNote({ authorId, title, text, createdAt }) {
    fetch(`${URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authorId,
        title,
        text,
        createdAt,
      }),
    });
  }

  static deleteNote(id) {
    fetch(`${URL}/notes/${id}`, { method: "DELETE" });
  }

  static editNote({ id, authorId, title, text, createdAt }) {
    fetch(`${URL}/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authorId,
        title,
        text,
        createdAt,
      }),
    });
  }
}

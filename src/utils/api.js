export default class Api {
    static getUserPromise({email, password}) {
        const query = new URLSearchParams({email,password}).toString();
        return fetch(`http://localhost:3000/users?${query}`)
            .then(r => r.json())
            .then(users => users[0])
    }

    static createUser({email, password, createdAt}) {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                createdAt
            })
        })
    }

    static getUserNotesPromise(userId) {
        return fetch(`http://localhost:3000/notes?authorId=${userId}`)
            .then(r => r.json())
    }

    static getNotePromise(id) {
        return fetch(`http://localhost:3000/notes/${id}`)
            .then(r => r.json())
    }

    static createNote({authorId, title, text, createdAt}) {
        fetch('http://localhost:3000/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                authorId,
                title,
                text,
                createdAt
            })
        })
    }

    static deleteNote(id) {
        fetch(`http://localhost:3000/notes/${id}`, {method: 'DELETE'})
    }

    static editNote({id, authorId, title, text, createdAt}) {
        fetch(`http://localhost:3000/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                authorId,
                title,
                text,
                createdAt
            })
        })
    }
}
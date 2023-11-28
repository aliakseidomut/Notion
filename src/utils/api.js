export default class Api {
    static getUserPromise({email, password}) {
        const query = new URLSearchParams({email,password}).toString();
        return fetch(`http://localhost:3000/users?${query}`)
            .then(r => r.json())
            .then(users => users[0])
    }

    static createUser({email, password, date}) {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                date
            })
        })
    }
}
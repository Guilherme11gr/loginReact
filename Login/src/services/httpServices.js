export class HttpServices {
    static async get (url, token) {
        const HEADER = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        };
        const response = await fetch(url, HEADER);
        const res = await response.json();
        const r = {
            data: res,
            status: response.status,
        }
        return r;
    }
}
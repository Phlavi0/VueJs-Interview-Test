export interface user {
    id: string;
    name: string;
    email: string;
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}

export interface post {
    "userId": string,
    "id": string,
    "title": string,
    "body": string
}

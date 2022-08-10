import { v4 } from 'uuid';

const mongoDbUrl = (process.env.NODE_ENV === 'development' ? 
    'http://localhost:3001' 
    : window.location.origin) + "/mongodb";


export async function makeDBRequest(method, url, body) {
    let requestOptions = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (Boolean(body)) {
        body = JSON.stringify(body);
        requestOptions.body = body;
    }

    let request = await fetch(mongoDbUrl + url, requestOptions);
    
    let result = await request.json();
    return result;
}

// export class MongoDB {
//     async uploadData()
// }
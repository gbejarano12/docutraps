// API Documentation URL: https://docs.mediavalet.com/#ff14892b-ab18-450d-b293-b787859b6b40
// url: `https://login.mediavalet.com/Account/Login?
// ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3F
// client_id%3D7f495f1f-21dc-4f9b-9071-4b56e5375e9f%26
// response_type%3Dcode%26
// scope%3Dopenid%2520api%26
// redirect_uri%3Dhttps%253A%252F%252Foauth.pstmn.io%252Fv1%252Fbrowser-callback%26
// state%3Dnonce`
//redirect https://docutraps.azurewebsites.net/mediavalet/auth/callback

/*
https://docutraps.azurewebsites.net/mediavalet/auth/callback?
code=__O7TY14awF7qVZ31VnaJ411BQQAZem8DQcSvIY2uh4
&scope=openid%20api
&state=nonce
&session_state=CR_iT8Xl3e6tTdAg_3ZTETHJ0pxo4a6XdekYn6qwJxY.O1YWqPhHfEvZ-N_XilSCGw
*/

const mediaValetApiUrl = 'https://api.mediavalet.com';

async function makeRequest(method, url, body, extraHeaders={}) {

    let accessToken = '';
    if (process.env.NODE_ENV === 'development') {
        accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjA0MUIwMUQ1OTg1ODI4MzcwNTI2Qjk5Rjc2MjgyNkIyNUM3QkE2ODciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJCQnNCMVpoWUtEY0ZKcm1mZGlnbXNseDdwb2MifQ.eyJuYmYiOjE2NjAyNzQxMjAsImV4cCI6MTY2MDI3NDQyMCwiaXNzIjoiaHR0cHM6Ly9pYW0ubWVkaWF2YWxldC5jb20iLCJhdWQiOlsiaHR0cHM6Ly9pYW0ubWVkaWF2YWxldC5jb20vcmVzb3VyY2VzIiwiaHR0cHM6Ly9hcGktdXN2YS5tZWRpYXZhbGV0Lm5ldCJdLCJjbGllbnRfaWQiOiI3ZjQ5NWYxZi0yMWRjLTRmOWItOTA3MS00YjU2ZTUzNzVlOWYiLCJzdWIiOiJiZWphcmFub19ndXN0YXZvQHlhaG9vLmNvbSIsImF1dGhfdGltZSI6MTY2MDI3NDExOCwiaWRwIjoibG9jYWwiLCJhcGlfdXJpIjoiaHR0cHM6Ly9hcGktdXN2YS5tZWRpYXZhbGV0Lm5ldCIsIlBlcm1pc3Npb25zIjoiW3tcIlNlY3VyYWJsZU9iamVjdFR5cGVcIjo5LFwiT2JqZWN0SWRcIjpcIjAzY2JhMjdlLTI1ZTctNGJjNi1iYjU0LWJjMjY5MWQ1MmQxYlwiLFwiUGVybWlzc2lvbnNcIjozMDI0OTkzMjA5Njk3NjMwOTIzLFwiUGVybWlzc2lvbnMyXCI6MX0se1wiU2VjdXJhYmxlT2JqZWN0VHlwZVwiOjAsXCJPYmplY3RJZFwiOlwiMzZhMmMyMzgtNTY0NC00YzU0LTlkZDUtYmE0NmFlM2E4NGJmXCIsXCJQZXJtaXNzaW9uc1wiOjEyMjQ4MzY1MjQ2NTUyNDA2NzMxLFwiUGVybWlzc2lvbnMyXCI6MX0se1wiU2VjdXJhYmxlT2JqZWN0VHlwZVwiOjEsXCJPYmplY3RJZFwiOlwiZTAzN2JjYzQtOTM3Ni00ZGMwLTgwYWYtMjRmYTUxODEzYjI5XCIsXCJQZXJtaXNzaW9uc1wiOjMwMjQ5OTMyMDk2OTc2MzA5MjMsXCJQZXJtaXNzaW9uczJcIjoxfV0iLCJSb2xlSWQiOiJcImQ1NzY0ZWQyLTVmOTUtNDY1Zi1hZmVlLWRkNzI2ZGVkZGNmM1wiIiwiVXNlck9yZ1VuaXRJZCI6IlwiMDNjYmEyN2UtMjVlNy00YmM2LWJiNTQtYmMyNjkxZDUyZDFiXCIiLCJVc2VyTmFtZSI6ImJlamFyYW5vX2d1c3Rhdm9AeWFob28uY29tIiwiRW1haWwiOiJiZWphcmFub19ndXN0YXZvQHlhaG9vLmNvbSIsIlVzZXJJZCI6IlwiMDViYTA4NjUtYzk5ZC00NWU5LTkxNzAtYmNlNTBhY2NhMTI5XCIiLCJTSWQiOiJcImQ1NzY0ZWQyLTVmOTUtNDY1Zi1hZmVlLWRkNzI2ZGVkZGNmM1wiIiwic2NvcGUiOlsib3BlbmlkIiwiYXBpIl0sImFtciI6WyJwd2QiXX0.UcH_uDdXNzSffsnenUnXn2oN5bZ_MuwOsbxRPksZm4vMHwNVp8RvgzfV9tLylLF_lJb9P0oh2-PMGnSmz2izm4zk-6FRfQB8p2_NQlbyF6sfuSEHWi5Wp_9ulpogShDFz6QKKSeJa4KwKZt_aymK2db9LJ7RRtacnqkjDEKK-FzZIYtEmMFSjvzA8iX7tY3WGkuSxUtVNw8FP53O5bEooOb3rZf8sldBLSywwrITSnPnba0txXX1zvJ-vKOgWPeXPz12kEbbuxb-qrtkevauh7FuXlWXgp82cfdcpeQJHIHeNufxv3mBX1WiDWU8FUzWtPvO_JQGKFa3gixlC4UswM6BDxzH5qscVKf_5gSbPtEkhb3eU8tvqoybUqCfQ8YpvrW7HGIoDCk0XNcRPlXManG_5G3IwISLNK0gG9tV5PPusDBb0zDd3zvbF7NO0zSp-d9wakNI4UqhfAHR9ruqF0Z0P42FTgp2jS8z1ul_O_fGXa4Y66Lv4liSwjCgLEJ0gl240DtjDRz7kng8o_8oV-50aUTJzO4oiKS-VX1_1US8SstgtPStVc22F6cPhSytqP0oJHESlg_itSXWIvM9x0yn_g-Vbj2R6BJQlxyPOG6cHTEFNEV1YHgGV-skmjbWwm_tg_tT4B5WC7DgxiMxwGdTFQtJzy4A2W5W-Mf8vBU";
        window.localStorage.setItem('mediaValetAccessToken', accessToken);
    } else {
        accessToken = window.localStorage.getItem('mediaValetAccessToken');
        if (!Boolean(accessToken) && accessToken === 'undefined' ) {
            window.location.assign('https://login.mediavalet.com/connect/authorize?client_id=7f495f1f-21dc-4f9b-9071-4b56e5375e9f&response_type=code&scope=openid%20api&redirect_uri=https://docutraps.azurewebsites.net/mediavalet/auth/callback&state=nonce');
        
        } 
    }
    
    let subscriptionKey = '03e0a3d8270a432d9ede6e2cfca073dd'; // put in env

    let headers = {};
    let baseHeaders = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'Ocp-Apim-Subscription-Key': subscriptionKey
    };

    Object.assign(headers, baseHeaders, extraHeaders);

    let requestOptions = {
        method: method,
        headers: headers
    };

    if (Boolean(body)) {
        body = JSON.stringify(body);
        requestOptions.body = body;
    }

    let request = await fetch(mediaValetApiUrl + url, requestOptions);
    
    console.log('Make Request', request.status)
    if (request.status === 401 && process.env.NODE_ENV !== 'development') {
        window.localStorage.setItem('lastUrl', window.location.href);
        if (Boolean(window.localStorage.getItem('mediaValetAccessToken')) && window.localStorage.getItem('mediaValetAccessToken') !== 'undefined' ) {
            await refreshToken();
        } else {
            window.location.assign('https://login.mediavalet.com/connect/authorize?client_id=7f495f1f-21dc-4f9b-9071-4b56e5375e9f&response_type=code&scope=openid%20api&redirect_uri=https://docutraps.azurewebsites.net/mediavalet/auth/callback&state=nonce');
        }

    } 
    // else {
    //     await refreshToken();
    // }
    let result = await request.json();
    return result?.payload ?? result?.errors;
}

async function refreshToken() {
    let url = `https://login.mediavalet.com/connect/token`;
    let headers = {
        Host: 'login.mediavalet.com',
        'Content-Type': 'application/x-www-form-urlencoded',
        'cache-control': 'no-cache'
    };

    let params = {
        grant_type:'refresh_token',
        refresh_token: window.localStorage.getItem('mediaValetAccessToken'),
        client_id: '7f495f1f-21dc-4f9b-9071-4b56e5375e9f',
        client_secret: '86hVfmmct24ydSqAmBhdArCMw3fSz92kPL814ZWoeYw='
      };
  
    var formBody = [];
    for (var property in params) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = params[property];
    formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    console.log(['Refresh token', params, formBody]);
    let tokenResponse = await fetch(url, 
        {
          method: 'POST',
          headers: headers,
          body: formBody
        }
    );

    const response = await tokenResponse.json();
    console.log(['Mediavalet token', response, params, formBody, tokenResponse.status]);
    if (tokenResponse.status === 400) {
        window.localStorage.removeItem('mediaValetAccessToken');
        window.location.assign('https://login.mediavalet.com/connect/authorize?client_id=7f495f1f-21dc-4f9b-9071-4b56e5375e9f&response_type=code&scope=openid%20api&redirect_uri=https://docutraps.azurewebsites.net/mediavalet/auth/callback&state=nonce');
        
    } else {
        window.localStorage.setItem('mediaValetAccessToken', response.access_token);
        let lastUrl = window.localStorage.getItem('lastUrl');
        if (Boolean(lastUrl)) {
            window.localStorage.removeItem('lastUrl');
            window.location.assign(lastUrl);
        }
    }
}

export class MediaValetApi {
    constructor() {
        this.myFolderId = null;
        this.baseFolder = null;
    }

    async getAllCategories() {
        let url = '/categories';
        let result = await makeRequest('GET', url);
        console.log(['Categories', result]);

        return result;
    }

    async setBaseCategory(categoryName) {
        let categories = await this.getAllCategories();
        let baseCategory = categories.find( ({ name }) => name === categoryName);
        console.log(["Base Category", baseCategory]);
        if (baseCategory) {
            baseCategory = new MediaValetCategory(baseCategory);
            this.baseFolder = baseCategory;
        }

        return baseCategory;
    }

    async getSubCategories() {
        let url = `/categories/${this.baseFolder.id}/subcategories`;
        let result = await makeRequest('GET', url);
        console.log(['Sub Cats', result]);
        return result;
    }
    
    async getAttributes() {
        let url = `/attributes`;
        let result = await makeRequest('GET', url);
        console.log('ALL ATTRIBUTES', result);
        return result;
    }

    async createCategory(parentId, name, description) {
        let url = `/folders`;
        let body = {
            parentId: parentId,
            treeName: name
        };
        let result = await makeRequest('POST', url, body);
        result = new MediaValetCategory(result);
        console.log('CREATE CATEGORY', result);
        return result;
    }

    async requestUploadUrl(filename) {
        let url = `/uploads`;
        let body = { filename: filename };
        let result = await makeRequest('POST', url, body);
        console.log('REQUEST UPLOAD URL', result);
        return result;
    }

    async uploadFile(uploadUrl, file) {
        let url = uploadUrl;
        let body = file;
        let headers = {'x-ms-blob-type': 'BlockBlob'};
        let result = await makeRequest('PUT', url, body, headers);
        console.log("UPLOAD FILE", result);
        return result;
    }

    async putAttributes(assetId, attributes) {
        let url = `/uploads/${assetId}`;
        let body = attributes;
        // {
        //     "filename": "<assetFilename>",
        //     "title": "<assetTitle>",
        //     "description": "<assetDescription>",
        //     "fileSizeInBytes": "<fileSizeInBytes>"
        // }
        let result = await makeRequest('PUT', url, body);
        console.log("PUT ATTRIBUTES", result);
        return result;
    }

    async assignUploadCategory(assetId, categories) {
        let url = `/uploads/${assetId}/categories`;
        let body = categories;
        let result = await makeRequest('POST', url, body);
        console.log("ASSIGN Categories", result);
        return result;
    }

    async finalizeUpload(assetId) {
        let url = `/uploads/${assetId}`;
        let body = [{"op":"replace","path":"/status","value":1}];
        let result = await makeRequest('PATCH', url, body);
        console.log("FINALIZE UPLOAD", result);
        return result;
    }
}

export class MediaValetCategory {
    constructor(category) {
        this.assetCount = category?.assetCount ?? null; // ex: 3
        this.categoryFeatures = category?.categoryFeatures ?? null; //ex: null
        this.container = category?.container ?? null; //ex: null
        this.description = category?.description ?? null; //ex: ""
        this.id = category?.id ?? null; //ex: "ce762380-c7b5-4766-93c3-04e6df034116"
        this.includedInBrandedPortalSync = category?.includedInBrandedPortalSync ?? null; //ex: false
        this.name = category?.name ?? null; //ex: "CAMERA1_4_12_2022"
        this.parentId = category?.parentId ?? null; //ex: "023dc43b-17c2-4b97-9ea7-a8d886f62c92"
        this.subcats = category?.subcats ?? null; //ex: {total: 0}
        this.subfolderCount = category?.subfolderCount ?? null; //ex: 0
        this.syncedBrandedPortals = category?.syncedBrandedPortals ?? null; //ex: null
        this.tree = category?.tree ?? null; //ex: {path: '\\Library\\gustavo-submission\\CAMERA1_4_12_2022', name: 'CAMERA1_4_12_2022'}
        this._links = category?._links ?? null; //ex: {self: 'category', functions: Array(3)}
    }

    async getCategory(categoryId) {
        let url = `/categories/${categoryId}`;
        let result = await makeRequest('GET', url);
        result = new MediaValetCategory(result);
        console.log('Load Category', result);
        return result;
    }

    async getSubCategories() {
        let url = `/categories/${this.id}/subcategories`;
        let result = await makeRequest('GET', url);
        
        for (let i = 0; i < result?.length; i++) {
            result[i] = new MediaValetCategory(result[i]);
        }
        console.log(['Sub Cats', result]);
        return result;
    }

    async getAssets() {
        let url = `/categories/${this.id}/assets`;
        let result = await makeRequest('GET', url);
        let assets = result.assets;

        for (let i = 0; i < assets?.length; i++) {
            assets[i] = new MediaValetAsset(assets[i]);
        }

        console.log('Assets in category: '+ this.name, assets);
        return assets;
    }
}

class MediaValetAsset {
    constructor(asset) {
        this.altText = asset?.altText ?? null; // ex: ""
        this.assetCheckInComment = asset?.assetCheckInComment ?? null; // ex: "CheckInComment"
        this.attributes = asset?.attributes ?? null; // ex: {c0c67677-b8eb-4522-844b-a4aeb9be7807: '123', 6ce37da1-e78f-426a-9505-671fe9161272: '456', 63970d4e-6b53-4d31-a9a2-2ad651a560d7: 'image/jpeg', 3fbc5038-a878-4e10-992c-fccc46d430b8: 'JPG', 00c93bf7-7084-463d-921a-9d64aecff8c8: '', …}
        this.categories = asset?.categories ?? null; // ex: ['ce762380-c7b5-4766-93c3-04e6df034116']
        this.containerName = asset?.containerName ?? null; // ex: "medialibrary-03cba27e-25e7-4bc6-bb54-bc2691d52d1b"
        this.createdAt = asset?.createdAt ?? null; // ex: "2022-08-09T23:25:03.088Z"
        this.description = asset?.description ?? null; // ex: ""
        this.file = asset?.file ?? null; // ex: {id: '869a6787-0f16-40f9-82dc-db35106f4267', title: 'IMG_0224', fileName: 'IMG_0224.JPG', md5: '557ba91e12bb4fb857ff89b36b6720e0', fileType: 'JPG', …}
        this.id = asset?.id ?? null; // ex: "869a6787-0f16-40f9-82dc-db35106f4267"
        this.interpolations = asset?.interpolations ?? null; // ex: {}
        this.keywords = asset?.keywords ?? null; // ex: []
        this.media = asset?.media ?? null; // ex: {type: 'Image', small: 'https://mvsfservicefabricusva.blob.core.windows.ne…2-03-08T14%3A47%3A24Z&se=2032-08-09T12%3A24%3A15Z', thumb: 'https://mvsfservicefabricusva.blob.core.windows.ne…3-04-18T01%3A40%3A13Z&se=2032-08-09T12%3A24%3A15Z', large: 'https://mvsfservicefabricusva.blob.core.windows.ne…1-06-05T14%3A47%3A13Z&se=2032-08-09T12%3A24%3A15Z', original: 'https://mvsfservicefabricusva.blob.core.windows.ne…lication%2Foctet-stream&rscd=file%3B%20attachment', …}
        this.rating = asset?.rating ?? null; // ex: {average: 0, user: 0}
        this.record = asset?.record ?? null; // ex: {createdAt: '2022-08-09T23:25:03.088Z', createdBy: {…}, modifiedAt: '2022-08-09T23:25:10.001Z', modifiedBy: {…}, softDeletedBy: {…}, …}
        this.status = asset?.status ?? null; // ex: 0
        this.title = asset?.title ?? null; // ex: "IMG_0224"
        this.translationKeys = asset?.translationKeys ?? null; // ex: {}
        this.userViewCounts = asset?.userViewCounts ?? null; // ex: {05ba0865-c99d-45e9-9170-bce50acca129: 2}
        this._links = asset?._links ?? null; // ex: {self: 'asset', functions: Array(27)}
    }

    async checkOut() {
        let url = `/assets/${this.id}/checkOut`;
        let result = await makeRequest('POST', url);
        console.log('CHECK OUT '+ this.title, result);
        return result;
    }

    async getCategories() {
        let url = `/assets/${this.id}/categories`;
        let result = await makeRequest("GET", url);
        console.log('CATEGORIES IN '+ this.title, result);
        return result;
    }

    async getAttributes() {
        let url = `/assets/${this.id}/attributes?includeSoftDeleted=true`;
        let result = await makeRequest('GET', url);
        console.log('ATTRIBUTES IN '+ this.title, result);
        return result;
    }

    async getMetadata() {
        //let url = `/assets/${this.id}/`
    }

    async updateAttribute(attributeId, value) {
        let url = `/assets/${this.id}`;
        let body = [
            {
                "op": "replace",
                "path": `/attributes/${attributeId}`,
                "value": value
            }
        ]
        let result = await makeRequest('PATCH', url, body);
        console.log("PATCH ON "+this.title, result)
        return new MediaValetAsset(result);
    }

    async updateMetadata(updates) {
        // updates = { path: <string>, value: <value> }
    }

}

class MediaValetAttribute {

}


export async function testMediavaletCalls() {
    let url = 'https://api.mediavalet.com/assets/search';
    // url += 'client_id=7f495f1f-21dc-4f9b-9071-4b56e5375e9f';
    // url += '&response_type=code';
    // url += '&scope=openid%20api';
    // url += '&redirect_uri=https://oauth.pstmn.io/v1/browser-callback';
    // url += '&state=state-296bc9a0';

    let response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjA0MUIwMUQ1OTg1ODI4MzcwNTI2Qjk5Rjc2MjgyNkIyNUM3QkE2ODciLCJ0eXAiOiJKV1QiLCJ4NXQiOiJCQnNCMVpoWUtEY0ZKcm1mZGlnbXNseDdwb2MifQ.eyJuYmYiOjE2NjAwODgxMDcsImV4cCI6MTY2MDA4ODQwNywiaXNzIjoiaHR0cHM6Ly9pYW0ubWVkaWF2YWxldC5jb20iLCJhdWQiOlsiaHR0cHM6Ly9pYW0ubWVkaWF2YWxldC5jb20vcmVzb3VyY2VzIiwiaHR0cHM6Ly9hcGktdXN2YS5tZWRpYXZhbGV0Lm5ldCJdLCJjbGllbnRfaWQiOiI3ZjQ5NWYxZi0yMWRjLTRmOWItOTA3MS00YjU2ZTUzNzVlOWYiLCJzdWIiOiJiZWphcmFub19ndXN0YXZvQHlhaG9vLmNvbSIsImF1dGhfdGltZSI6MTY2MDA3Njg0OSwiaWRwIjoibG9jYWwiLCJhcGlfdXJpIjoiaHR0cHM6Ly9hcGktdXN2YS5tZWRpYXZhbGV0Lm5ldCIsIlBlcm1pc3Npb25zIjoiW3tcIlNlY3VyYWJsZU9iamVjdFR5cGVcIjo5LFwiT2JqZWN0SWRcIjpcIjAzY2JhMjdlLTI1ZTctNGJjNi1iYjU0LWJjMjY5MWQ1MmQxYlwiLFwiUGVybWlzc2lvbnNcIjozMDI0OTkzMjA5Njk3NjMwOTIzLFwiUGVybWlzc2lvbnMyXCI6MX0se1wiU2VjdXJhYmxlT2JqZWN0VHlwZVwiOjAsXCJPYmplY3RJZFwiOlwiMzZhMmMyMzgtNTY0NC00YzU0LTlkZDUtYmE0NmFlM2E4NGJmXCIsXCJQZXJtaXNzaW9uc1wiOjEyMjQ4MzY1MjQ2NTUyNDA2NzMxLFwiUGVybWlzc2lvbnMyXCI6MX0se1wiU2VjdXJhYmxlT2JqZWN0VHlwZVwiOjEsXCJPYmplY3RJZFwiOlwiZTAzN2JjYzQtOTM3Ni00ZGMwLTgwYWYtMjRmYTUxODEzYjI5XCIsXCJQZXJtaXNzaW9uc1wiOjMwMjQ5OTMyMDk2OTc2MzA5MjMsXCJQZXJtaXNzaW9uczJcIjoxfV0iLCJSb2xlSWQiOiJcImQ1NzY0ZWQyLTVmOTUtNDY1Zi1hZmVlLWRkNzI2ZGVkZGNmM1wiIiwiVXNlck9yZ1VuaXRJZCI6IlwiMDNjYmEyN2UtMjVlNy00YmM2LWJiNTQtYmMyNjkxZDUyZDFiXCIiLCJVc2VyTmFtZSI6ImJlamFyYW5vX2d1c3Rhdm9AeWFob28uY29tIiwiRW1haWwiOiJiZWphcmFub19ndXN0YXZvQHlhaG9vLmNvbSIsIlVzZXJJZCI6IlwiMDViYTA4NjUtYzk5ZC00NWU5LTkxNzAtYmNlNTBhY2NhMTI5XCIiLCJTSWQiOiJcImQ1NzY0ZWQyLTVmOTUtNDY1Zi1hZmVlLWRkNzI2ZGVkZGNmM1wiIiwic2NvcGUiOlsib3BlbmlkIiwiYXBpIl0sImFtciI6WyJwd2QiXX0.E_qUnSKEmia4fr165hEK19jk9NA3GmYGEbin4weG2a10B02YshpyoddFeopM9q3cd37ULk6NIagIbybJ3M5ekxYwELl_IPvyGaaUNkuec_VRtq0UPET0nisWNguAWD2med97usydv_cDuo0SeQrf6x6gEXWADMcSkVESO8yzV_QlfP9JRCxC_3C21BIiZGT0SA7UObpe9rfTf9teXAzukpwtTRTz5VBz_CkxU3tVbiB6Qdd5tEeeJ2XrN1-DBdeRvTiJTU86lZV2nKbYHdtzCV96bDVm-tUIdObXI_jtNUM7IyMRs6X5PdkXub6yZ9Oj02cIl8ohBYbkcrbwGFfzPIkWEV8jd2BLuYge5rsnshFDdDoUP_nXhfhyC6bBVT_K_oIBO8cJqB5Yrrc7-z-uShtW6AMECcdo_0aPrNatP3J0_jBZk4_W1--0XtYzUXcv3tFmpulOJ7a7S3CjedqjnqmleK1FgeHSowjcvhRNgjZxSjFGz2T84Eb3-cmVUCYmTZ0vWnlCfv7r-j4rqKBuAEFPphhp7Gy5M3YLPHJl4ZKs5-zcSkIuS9FS4iDbKvgEJOkO1WAllCEDolgVVrM7YmEkYYVcyKHP7t8SbFVCcK5gh-8Rm1TlFjCpix8FOvbQFEYpbO-S49qHANwlpk2hfLmKxGgO1HgghRVF0rwoViM',
            'Ocp-Apim-Subscription-Key': '03e0a3d8270a432d9ede6e2cfca073dd',
        },
        body: JSON.stringify({
            "search": "gustavo-submission>CAMERA1_4_12_2022",
            "count": 25,
            "offset": 0,
            "sort": "record.createdAt D",
            "searchFields": "categories",
            "includeSoftDeleted": true
        })
        
    })
    // .then((res) => res.body)
    // .then((rb) => {
    //     console.log(["Mediavalet Inside Call", rb]);
    //     const reader = rb.getReader();

    //     return new ReadableStream({
    //         start(controller) {
    //             function push() {
    //                 reader.read().then(({done, value }) => {
    //                     if (done) {
    //                         console.log('done', done);
    //                         controller.close();
    //                         return;
    //                     } 
    //                     controller.enqueue(value);
    //                     console.log(done, value);
    //                     push();
    //                 });
    //             }
    //             push();
    //         }
    //     });
    // })
    // .then((stream) => 
    //     new Response(stream, { headers: {'Content-Type': 'text/html' }}).text()
    // )
    // .then((result) => {
    //     console.log(result);
    // })
    
    // .catch(async (err) => {
    //     if (err.name === 'AbortError') {
    //         console.log('Promise Aborted');
    //     } else {
           
    //         return ({ status: 400, err: err });
    //     }
        
    // });
    const result = await response.json();
    console.log(["Mediavalet Call", response, result]);
}

//Example API Search result from mediavalet
let exampleSearchAPIResult = {
    "apiVersion": "2022.6.17.1",
    "warnings": [],
    "errors": [],
    "payload": {
        "assetCount": 87,
        "assets": [
            {
                "id": "cc67d0f9-5094-4560-8102-122764e6b725",
                "title": "IMG_0051",
                "media": {
                    "type": "Image",
                    "small": "https://mvsfservicefabricusva.blob.core.windows.net/medialibrary-03cba27e25e74bc6bb54bc2691d52d1b-r/cc67d0f9509445608102122764e6b725/cc67d0f9509445608102122764e6b725/Small/IMG_0051.jpg?sv=2017-04-17&sr=b&si=202207201809&sig=Eqan2608oqy0xZyioU%2BEPnNg1gJGGKtdigNHSnTvjs4%3D&st=1798-05-11T04%3A04%3A10Z&se=2032-08-06T09%3A29%3A15Z",
                    "thumb": "https://mvsfservicefabricusva.blob.core.windows.net/medialibrary-03cba27e25e74bc6bb54bc2691d52d1b-r/cc67d0f9509445608102122764e6b725/cc67d0f9509445608102122764e6b725/Thumb/IMG_0051.jpg?sv=2017-04-17&sr=b&si=202207201809&sig=HE%2FYJdbux52JxYrMljqKQlaSiYr3035VWNlqLOeVW9I%3D&st=0280-07-01T10%3A33%3A44Z&se=2032-08-06T09%3A29%3A15Z",
                    "large": "https://mvsfservicefabricusva.blob.core.windows.net/medialibrary-03cba27e25e74bc6bb54bc2691d52d1b-r/cc67d0f9509445608102122764e6b725/cc67d0f9509445608102122764e6b725/Large/IMG_0051.jpg?sv=2017-04-17&sr=b&si=202207201809&sig=l7wAZPdRRh8pWMIVY3tnu9R%2BhvJqhNo4Rl54D5ZYKOo%3D&st=0918-09-08T09%3A43%3A22Z&se=2032-08-06T09%3A29%3A15Z",
                    "original": "https://mvsfservicefabricusva.blob.core.windows.net/medialibrary-03cba27e25e74bc6bb54bc2691d52d1b/cc67d0f9509445608102122764e6b725/cc67d0f9509445608102122764e6b725/Original/IMG_0051.JPG?sv=2017-04-17&sr=b&si=202207201809&sig=szQmkw4UiMwmci4X39mwiPUKhCm2KsUFTCPnUe%2FKRHs%3D&st=1347-04-07T16%3A05%3A12Z&se=2032-08-06T09%3A29%3A15Z&rsct=application%2Foctet-stream&rscd=file%3B%20attachment",
                    "medium": "https://mvsfservicefabricusva.blob.core.windows.net/medialibrary-03cba27e25e74bc6bb54bc2691d52d1b-r/cc67d0f9509445608102122764e6b725/cc67d0f9509445608102122764e6b725/Medium/IMG_0051.jpg?sv=2017-04-17&sr=b&si=202207201809&sig=1g6ulvuYYNKgEIcKQ97rYu%2BAvcRop68c7%2FaD1DcZaAs%3D&st=0353-05-13T18%3A53%3A19Z&se=2032-08-06T09%3A29%3A15Z",
                    "download": "https://mvsfservicefabricusva.blob.core.windows.net/medialibrary-03cba27e25e74bc6bb54bc2691d52d1b/cc67d0f9509445608102122764e6b725/cc67d0f9509445608102122764e6b725/Original/IMG_0051.JPG?sv=2017-04-17&sr=b&si=202207201809&sig=szQmkw4UiMwmci4X39mwiPUKhCm2KsUFTCPnUe%2FKRHs%3D&st=1347-04-07T16%3A05%3A12Z&se=2032-08-06T09%3A29%3A15Z&rsct=application%2Foctet-stream&rscd=file%3B%20attachment",
                    "downloadRequest": "downloads/validate",
                    "originalDimensions": "https://az687986.vo.msecnd.net/img/processingRenditions772x517.png",
                    "sasExpiry": 315569260000,
                    "sasRenewal": 0
                },
                "file": {
                    "id": "cc67d0f9-5094-4560-8102-122764e6b725",
                    "title": "IMG_0051",
                    "fileName": "IMG_0051.JPG",
                    "md5": "e099b46eaf61ef0b8ca2717a8b2694a5",
                    "fileType": "JPG",
                    "sizeInBytes": 4629420,
                    "description": "",
                    "keywords": "",
                    "uploadedAt": "2022-08-06T18:05:04.043Z",
                    "modifiedAt": "2022-08-06T18:05:11.074Z",
                    "approvedAt": "2022-08-06T18:05:04.184Z",
                    "imageHeight": 3024,
                    "imageWidth": 5376,
                    "mimeType": "image/jpeg",
                    "resolution": "72dpi",
                    "colorMode": "sRGB",
                    "orientation": "Landscape"
                },
                "description": "",
                "altText": "",
                "containerName": "medialibrary-03cba27e-25e7-4bc6-bb54-bc2691d52d1b",
                "status": 0,
                "rating": {
                    "average": 0,
                    "user": 0
                },
                "attributes": {
                    "63970d4e-6b53-4d31-a9a2-2ad651a560d7": "image/jpeg",
                    "3fbc5038-a878-4e10-992c-fccc46d430b8": "JPG",
                    "00c93bf7-7084-463d-921a-9d64aecff8c8": "",
                    "b6b88766-9245-4f71-bef5-9f690ee5f02d": "3024",
                    "b9b83ba5-7a70-4900-a89a-3d80b3639f50": "IMG_0051.JPG",
                    "f50da800-1fa5-4cb9-b337-6fa3a960431d": "4629420",
                    "063ec16c-fec5-40a8-93f8-72cda2f2170b": "5376",
                    "04ab384d-9668-4e27-8221-74a46618ad2f": "3024",
                    "4b1fb705-4fb9-481b-a4f7-5b7081a8b7fe": "sRGB",
                    "a0b99512-bd28-4da6-9b0c-9c07b7bb7d16": "72dpi",
                    "6b5847d4-038a-4900-a0b2-e54b452fd3ac": "Landscape"
                },
                "record": {
                    "createdAt": "2022-08-06T18:05:04.043Z",
                    "createdBy": {
                        "id": "abc81e5f-73bd-4ad0-b0b8-20f4499c7312",
                        "username": "jeverling@gmail.com"
                    },
                    "modifiedAt": "2022-08-06T18:05:11.074Z",
                    "modifiedBy": {
                        "id": "abc81e5f-73bd-4ad0-b0b8-20f4499c7312",
                        "username": ""
                    },
                    "softDeletedBy": {},
                    "version": {
                        "version": 0,
                        "current": "cc67d0f9-5094-4560-8102-122764e6b725",
                        "head": "cc67d0f9-5094-4560-8102-122764e6b725",
                        "parentid": "cc67d0f9-5094-4560-8102-122764e6b725",
                        "isversionable": true,
                        "islatestversion": true,
                        "ismajorversion": false
                    }
                },
                "categories": [
                    "63a6dc6c-33bf-4cd8-9101-f9e15fa0107b"
                ],
                "keywords": [],
                "assetCheckInComment": "CheckInComment",
                "userViewCounts": {},
                "createdAt": "2022-08-06T18:05:04.043Z",
                "_links": {
                    "self": "asset",
                    "functions": [
                        "assets",
                        "assetCategories",
                        "assetCheckIn",
                        "assetCheckOut",
                        "assetKeywords",
                        "assetHistory",
                        "assetComments",
                        "assetUploads",
                        "assetVersion",
                        "assetVersions",
                        "relatedAssets",
                        "relatedAssetsGalleryUrl",
                        "downloadAssets",
                        "downloaded",
                        "shareAssets",
                        "iptc",
                        "exif",
                        "xmp",
                        "colors",
                        "text",
                        "reactivateAsset",
                        "viewed",
                        "assetApplyRating",
                        "renditions",
                        "assetAutotag",
                        "assetAutotags",
                        "assetAutotagKeywords"
                    ]
                },
                "translationKeys": {},
                "interpolations": {}
            }
        ]
    }
}

async function uploadAsset() {
    /*
        4 step process:
        1. POST to the upload resource. Creates a holding recors and creates a URL to upload to
            upload url: https://api.mediavalet.com/uploads
            body: 
                {
                    filename: 'MyImage.jpg'
                }
            Also try file object

            Response: 
                {
                    id: <uniqueId>,
                    uploadUrl: <string>, Used to upload file to (maybe image file obj here)
                    uploadFilename: <uniqueId>.bin
                }

            Headers: Ocp-Apim-Subscription-Key

        2. PUT Upload Using the SAS URL
            - Notes: max file size = 200GB. Files >64MB break into segments
            upload url: {{uploadUrl}}, //from reponse above
            Headers: x-ms-blob-type BlockBlob
            Body: <file>

        3. PUT the upload to the Assets resource. (optional)
            upload url: /uploads/:assetId
            Headers: Ocp-Apim-Subscription-Key
            body:
                {
                    filename: <String>, 
                    title: <String>,
                    description: <String>, // Coordinates here??
                    fileSizeInBytes: <String>
                }
            

        4. POST Assign asset to resource.
            - note: category = folder
            uploadUrl: /uploads/:assetId/categories
            Headers: Ocp-Apim-Subscription-Key
            body: 
                [
                    '<categoryId-1>',
                    '<categoryId-2>'
                ]


        5. PATCH the upload. Runs data verification on the asset. Confirmation mainly.
            Notes:
                - Error 404 if size in Blob storage does not match file size submitted
                - Error 400 if file name has invalid characters. (What are those characters?)
                - Error 400 if no category assigned
                - Error 400 if required attributes dont match
                
            uploadUrl: /uploads/:assetId
            body: [{"op":"replace","path":"/status","value":1}]
    */
}

async function uploadNewAssetVersion() {
    /*
        1. GET - Set Asset to checkout
            url: /get
            postman.setEnvironmentVariable("asset-id", "82d57c66-6da6-4f31-a7c3-eca0ea09a86a");
            // Not sure about ^^^^

        2. POST - Checkout asset
            url: /assets/:assetId/checkOut
            body: ['<comments regarding checkout']

        3. POST - Validate Asset Checkin
            url: /assetCheckIn/:id/validate
            body: {{filename}}

        4. GET - Request Upload url
            url: /assetCheckIn/:assetId
            Response: 
                {
                    id: <uniqueId>,
                    uploadUrl: <string>, Used to upload file to (maybe image file obj here)
                    uploadFilename: <uniqueId>.bin
                }
        
        5. PUT - Upload File
            url: {{uploadUrl from above response}}
            body: <file>

        6. PUT - Finalize upload/set asset metadata
            url: /assetCheckIn/:assetId?priority=high
            body:
                {
                    "comment": "string",
                    "status": 0,
                    "fileSizeInBytes": 0,
                    "fileName": "string",
                    "uploadFilename": "string"
                }
        
        
        SOOO MANY STEPS
    */
}

async function searchAssets() {
    /*
        - By Custom Attributes
            POST 
            url: /assets/search
            body: 
                {
                    search: '', 
                    count: 25,
                    offset: 0,
                    sort: 'record.createdAt D',
                    searchFields: 'attributes',
                    includeSoftDeleted: true
                }
        - By Filename
            POST
            url: /assets/search
            body:
            {
                search: '',
                count: 25,
                offset: 0,
                sort: 'record.createdAt D',
                searchFields: 'title,fileName',
                includeSoftDeleted: true
            }
        - By File Type
            {
                search: '',
                count: 25,
                offset: 0,
                sort: 'record.createdAt D',
                searchFields: '(AssetType EQ Image)',
                includeSoftDeleted: true
            }
        - Filter By Cognitive Metadata
            {
                search: '',
                count: 25,
                offset: 0,
                sort: 'record.createdAt D',
                searchFields: 'cognitiveTextInImage,cognitiveContentInDocument,cognitiveTags,videoIntelligence',
                includeSoftDeleted: true
            }
    */
}

async function addMetadata() {
    /*
        PATCH - Add/update image description attribtue
            url: /assets/:assetId
            body:
                [
                    {
                        op: 'replace', 
                        path: '/description',
                        value: 'Updated description attribute'
                    }
                ]

        POST - Add keyword to image
            url: /assets/:assetId/keywords
            body: ['new-keyword']
    */
}

async function createRestrictedCategory() {
    /*
        1. POST - Create category
            url: /categories
            body: 
                {
                    treeName: '<RestrictedCategoryName>',
                    parentId: '<parentCategoryId>'
                }
        
        2. POST - Create User Group
            url: /groups
            body: 
                {
                    roleName: '<RestrictedAccessGroupName>',
                    permissions: ['List', 'View']
                }

        3. PATCH - Grant group access to the category
            url: /groups/:userGroupId/categories
            body: 
                [
                    {
                        op: 'replace',
                        path: '/categoryIds',
                        value: '<restrictedCategoryId>'
                    }
                ]
    */
}

async function generateCDNLink() {
    /*
        POST - Direct Link
            url: /directlinks/:assetId
            Headers: Ocp-Apim-Subscription-Key //urn:uuid:3dd14d08-cca0-2f4c-d28f-c9bdaa055b1d
                    Content-Type: application/json
            body: 
                {
                    "RenditionSettings": {
                        "Size": {
                            "Type": "Custom",
                            "Width": 100,
                            "Height": 100
                        },
                        "Format": "MP4"
                    },
                    "LinkSettings": {
                        "IsDevModeEnabled": false,
                        "LinkName": "If IsUniqueLink is set to true, this needs to be an unique name",
                        "IsEmbedCode": true,
                        "IsUniqueLink": true
                    }
                }
        
        - For image asset:
            - Size type property can be: XLarge, Widescreen, Fullscreen, Large, Medium, Small,
                Thumbnail, Original, Custom (width and height)
            - Format Property: GIF, JPG, PDF, PNG, TIFF
                body: 
                    {
                        "RenditionSettings": {
                            "Size": {
                                "Type": "Custom",
                                "Width": 100,
                                "Height": 100
                            },
                            "Format": "PNG"
                        },
                        "LinkSettings": {
                            "IsDevModeEnabled": false,
                            "LinkName": "If IsUniqueLink is set to true, this needs to be an unique name",
                            "IsEmbedCode": true,
                            "IsUniqueLink": true
                        }
                    }

        - For video asset:
            - Size type property can be: Widescreen360p, Widescreen480p, Widescreen720p, 
                Widescreen1080p, Original, Custom (width and height)
            - Format Property: AVI, FLV, MKV, MOV, MPEG, MP4, WMV
                body: 
                    {
                        "RenditionSettings": {
                            "Size": {
                                "Type": "Large"
                            },
                            "Format": "MPEG"
                        },
                        "LinkSettings": {
                            "IsDevModeEnabled": false,
                            "LinkName": "If IsUniqueLink is set to true, this needs to be an unique name",
                            "IsEmbedCode": true,
                            "IsUniqueLink": true
                        }
                    }
        
        - For audio asset:
            - Size type property can be: N/A
            - Format Property: MP3, MP4, MWA
                body: 
                    {
                        "RenditionSettings": {
                            "Size": {
                            },
                            "Format": "MP3"
                        },
                        "LinkSettings": {
                            "IsDevModeEnabled": false,
                            "LinkName": "If IsUniqueLink is set to true, this needs to be an unique name",
                            "IsEmbedCode": true,
                            "IsUniqueLink": true
                        }
                    }

        - For document asset:
            - Size type property can be: N/A
            - Format Property: PDF
                body: 
                    {
                        "RenditionSettings": {
                            "Size": {
                            },
                            "Format": "PDF"
                        },
                        "LinkSettings": {
                            "IsDevModeEnabled": false,
                            "LinkName": "If IsUniqueLink is set to true, this needs to be an unique name",
                            "IsEmbedCode": true,
                            "IsUniqueLink": true
                        }
                    }

    */
}

async function getDirectLinks() {
    /*
        GET - Retrieve direct links
            url: /directlinks/:assetId?includeSoftDeleted=true

            Reponse: 
                [
                    {
                        "assetId": "00000000-0000-0000-0000-000000000000",
                        "directLinkId": "00000000-0000-0000-0000-000000000000",
                        "cdnLink": "reprehenderit tempor dolore nostrud",
                        "linkName": "in culpa quis officia",
                        "createdAt": "2011-08-03T06:15:43.194Z",
                        "user": {
                        "id": "00000000-0000-0000-0000-000000000000",
                        "username": "minim nisi",
                        "firstName": "Lorem adipisicing dolore deserunt",
                        "lastName": "ipsum Ut amet laboris"
                        },
                        "selectedOptions": "labore ",
                        "state": "Broken",
                        "modifiedDateTime": "2016-11-26T23:19:22.007Z"
                    },
                    {
                        "assetId": "00000000-0000-0000-0000-000000000000",
                        "directLinkId": "00000000-0000-0000-0000-000000000000",
                        "cdnLink": "elit Lo",
                        "linkName": "minim dolore",
                        "createdAt": "1980-02-20T00:09:12.402Z",
                        "user": {
                        "id": "00000000-0000-0000-0000-000000000000",
                        "username": "reprehenderit anim Ut consectetur officia",
                        "firstName": "magna laborum",
                        "lastName": "aliqua occaecat"
                        },
                        "selectedOptions": "",
                        "state": "Deactivated",
                        "modifiedDateTime": "1957-05-12T17:49:03.911Z"
                    }
                ]

    */
}
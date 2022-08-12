const express = require('express');
var router = express.Router();
const docusign = require('docusign-esign');

const dsApi = new docusign.ApiClient();
const accountId = '08f4eeea-62cc-4268-a6a2-a401b33bde83';

router.get('/', async function(req, res, next) {
    // const clientId = '71d3545b-4d5f-4f9a-ad12-72532e4f8fb2';
    // const imperonatedClientId = 'b2a3324b-a7a9-434f-bd4b-713bd8b3fe01';
    // const scopes = "signature";
    // const rsaKey = `-----BEGIN RSA PRIVATE KEY-----
    // MIIEpAIBAAKCAQEAgqpdq34SMTZwV/cFHj4wrO2nm5NCew4UA1WCjbk0KbgxNx7/
    // EeN+gOK3GCKenhEjXoLkurhgh+Q//TsjPFjkdY41b4JoRkwiJo+o32pM8bmXr1rC
    // HFqbai/WqARmkRKhHP2fQ8MVsksw/2x6ax4Jy+f4BOEVCaeUYVcyANQF9I74KhnK
    // p/Thp50R5NqCuNu628LH/J4/0oCvl8q/cN6PEpLTv1h1NgGzfheCVq7av+5vn6WB
    // 5rKS8ec6PsVYV/I7FSqVGbREh/etyEdtot2qfIkqzSOBsDnfGluUoUm1RmemI8qD
    // Yc4ff7lEeGVplgyXERY7WtL6hpW5hvwCufiMZwIDAQABAoIBAApqb+QTPSUCIhYe
    // VqCbXtWcw4RsdTC0+xXBnmdou4aV1wp9+eGLARMKFNlOLSxhe7B1flZ/YGaEudsY
    // TeM/chqy1tdIOG1eH/Id991eA7stywXLQMzyJhBittmW3Dbf8CA3psHyjkteS2Nu
    // WhspflNsRCzeD7IWKIb9OeWvVmLbriuA1tsH8C6x/yrVbbn4brm/XqoTQfkh4C+i
    // zEkrOacqYxGiSVXFQoOpuPCsWkzVe8kgqjcGc17Jd9BAwmjqSnfAf/Rdu98GB6KS
    // PUQzVTVnC9VVb5fV6GLET3dxo1GgICrdqg05/csyuZBlJHzZR+31KCLpRtZh0aD5
    // 5H6t8MUCgYEAwQBauXhxVtvtZkX09i03ve8pHKm6lbD0JzR1Jh9O4oApe57D81gu
    // zkPjHl4LC2w5cPueOkYKkCa5djYu7Nf1WbFhjtVuf5hz8QgUP+c9MVjpHW4qNbMy
    // 53L7P3UNfn42Vs1uLI8jcQWGdI5V8rekX5BhSHnBNlmwFmPpQVNHY8MCgYEArVEU
    // OZhPCpKa8NAoBt7CHYCeDy+92zqz/TXvEFtUILj9w0/sk08MgDg1W3uFUrgulwCG
    // Kh5RAtsDwc81qeN6h6nDXu+ik9rIcrf1DP5hZPiWitED4pPmOw6dtsIOjgbzrrKZ
    // zzAY2PhSvbpxn4Z/sztdAhl1tk7S7xPGbS+XXo0CgYB6BdpWZxLpgrTus44z0tTq
    // TfolOB5SpAVJgD4M80BxrewMT42+HePB32QKABVljHAowb0BROVKzGD3nzw93DAw
    // HBj9MG3jWCT9oEkFOhMTTw5b4Bnpx7mIYcb+EOiOMAf1C377xyf2PjMLIC6w/XB8
    // RxFqvCfvT/cnwNVpythY9wKBgQCUeUPZPzhfN06Sg8/2arhia798BQshFr4Aaka9
    // fW+phLCns/1YCL0NzpkvILcLMQuAgots44HE73jdfDRdsKlUNMNQvftJrIBRfnPo
    // SLeIt0jH7NzmKotuBkxntwCe/SeefhQzoOF4ZesD7AfQgHk/Qtifps3neslK1GcF
    // PGLxNQKBgQCzN/CJNnN/3K554qX4AKmqfYzBITsXUaU0zGlDtop7Qd50i2GPI5aR
    // 3mCwTzBTDhpS/Vd4ThXfnyRUupC0/18M8+Ocmi2iOJ/+PDz/ayS5IAUA3CyLNp9l
    // vkCYR3jNNAnYlYzcH73XmsJ6VKdwFKR1fBhHwP9eJTtGF5SKiPwzTg==
    // -----END RSA PRIVATE KEY-----`;
    // const jwtLifeSec = 10 * 60;
    // dsApi.setOAuthBasePath('demo.docusign.net');
    // const results = await dsApi.requestJWTUserToken(clientId, imperonatedClientId, scopes, rsaKey, jwtLifeSec);
    // console.log('Results', results);

});

router.get('/envelopes', async function(req, res, next) {
    let dsApiClient = new docusign.ApiClient();
    dsApiClient.setBasePath('https://demo.docusign.net/restapi');
    let accessToken = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MTg1ZmYxLTRlNTEtNGNlOS1hZjFjLTY4OTgxMjIwMzMxNyJ9.eyJUb2tlblR5cGUiOjUsIklzc3VlSW5zdGFudCI6MTY2MDI4NTM3OCwiZXhwIjoxNjYwMzE0MTc4LCJVc2VySWQiOiJiMmEzMzI0Yi1hN2E5LTQzNGYtYmQ0Yi03MTNiZDhiM2ZlMDEiLCJzaXRlaWQiOjEsInNjcCI6WyJpbXBlcnNvbmF0aW9uIiwiZXh0ZW5kZWQiLCJzaWduYXR1cmUiLCJjbGljay5tYW5hZ2UiLCJjbGljay5zZW5kIiwib3JnYW5pemF0aW9uX3JlYWQiLCJncm91cF9yZWFkIiwicGVybWlzc2lvbl9yZWFkIiwidXNlcl9yZWFkIiwidXNlcl93cml0ZSIsImFjY291bnRfcmVhZCIsImRvbWFpbl9yZWFkIiwiaWRlbnRpdHlfcHJvdmlkZXJfcmVhZCIsImR0ci5yb29tcy5yZWFkIiwiZHRyLnJvb21zLndyaXRlIiwiZHRyLmRvY3VtZW50cy5yZWFkIiwiZHRyLmRvY3VtZW50cy53cml0ZSIsImR0ci5wcm9maWxlLnJlYWQiLCJkdHIucHJvZmlsZS53cml0ZSIsImR0ci5jb21wYW55LnJlYWQiLCJkdHIuY29tcGFueS53cml0ZSIsInJvb21fZm9ybXMiLCJub3Rhcnlfd3JpdGUiLCJub3RhcnlfcmVhZCIsInNwcmluZ19yZWFkIiwic3ByaW5nX3dyaXRlIl0sImF1ZCI6ImNmOTVkNzljLTVjNzctNDQ0Mi1iZTJmLTVhOTczY2Y4ODg3NSIsImF6cCI6ImNmOTVkNzljLTVjNzctNDQ0Mi1iZTJmLTVhOTczY2Y4ODg3NSIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC1kLmRvY3VzaWduLmNvbS8iLCJzdWIiOiJiMmEzMzI0Yi1hN2E5LTQzNGYtYmQ0Yi03MTNiZDhiM2ZlMDEiLCJhdXRoX3RpbWUiOjE2NjAyODI2MzAsInB3aWQiOiIyYzAxMWM2Mi1jMDQ2LTRiYzItYWRlZC1lZWZhYzlkMjljOTQifQ.dODCS_SLm759dmFINOeZHqhByhAB3NaeKX-gRUuMVtKcQ2RGtRWhMki-mfmIpSYDH37K0uUF-bYt_qK_EHmYCyb7tincBOZhIsz7Cn1i22Hh_x34NvX3HT21Z303N5LLx1Ju6CuFbncJ8xqQfrkTw01CgDWTdPN6Pj1xfllG7NG-KauBpTb4YW_9vrbvf-njUZfFs3WsX51kztP0DvlYRxYil2Imn_rp3unmiO--sz_5_bBovqqtIdcg5Ty5TyBW04Ei23kljCCYGXeO0zqmK3gK74Rwh_kbVob2bezblx24kg6XZil4rRgjfP1NcrRPTiKLVUOz5Wpa7qKbXZqJPw`;
    dsApiClient.addDefaultHeader('Authorization', 'Bearer ' + accessToken);
    let envelopesApi = new docusign.EnvelopesApi(dsApiClient);

    let templatesApi = new docusign.TemplatesApi(dsApiClient);

    let templateOptions = {
        document: {
            documentBase64: Buffer.from(doc1).toString('base64'),
            name: 'Test Document',
            fileExtension: 'html',
            documentId: '1'
        },
        signer: {
            email: 'bejarano_gustavo@yahoo.com',
            name: 'Gustavo Bejarano',
            recipientId: '1',
            routingOrder: '1'
        }
    }
    let templateList = await templatesApi.createTemplate(accountId, templateOptions);
    console.log('Results', templateList);
})

const doc1 = `<!DOCTYPE html>
<html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body >
<div style="text-align: center;border-bottom: 1px solid black;border-top: 1px solid black;padding-top:3px; padding-bottom: 3px;">
<p className="mb-0"><small>18250 Euclid St.&nbsp;&#9830;&nbsp;Fountain Valley, CA 92708&nbsp;&#9830;&nbsp;Phone (949) 474-9170&nbsp;&#9830;&nbsp;Fax (949) 474-9180</small></p>
</div>

<p>Hello</p>


<table style="width: 100%;margin-top: 15px;">
<tr>
  <td width="40%">AGREED AND ACCEPTED</td>
  <td width="45%"></td>
  <td width="15%">DATE</td>
</tr>
<tr style="height: 45px;">
  <td style="border-bottom: 1px solid black;">
    <div>
      <h3><span style="color:white;">**signature_1**/</span></h3>
  </div>
</td>
<td></td>
<td style="border-bottom: 1px solid black;">
  <div>
      <h3><span style="color:white;">**date_1**/</span></h3>
  </div>
</td>
</tr>
<tr>
  <td>{$hiree['FirstName']} {$hiree['LastName']}</td>
  <td></td>
  <td></td>
</tr>
</table>

<div>
  <h3><span style="color:white;">**decline**/</span></h3>
</div>


    </body>
</html>`;




exports.router = router;

const express = require('express');
var router = express.Router();


// router.get('/auth/callback', async function(req, res, next) {
//     const params = {
//         grant_type:'authorization_code',
//         code: req.query.code,
//         client_id: '7f495f1f-21dc-4f9b-9071-4b56e5375e9f',
//         redirect_uri: 'https://docutraps.azurewebsites.net/mediavalet/auth/callback', // <-- This is the url of the page they just redirected to (not including the querystring)
//         client_secret: '86hVfmmct24ydSqAmBhdArCMw3fSz92kPL814ZWoeYw='
//       };
  
//       var formBody = [];
//       for (var property in params) {
//         var encodedKey = encodeURIComponent(property);
//         var encodedValue = params[property];
//         formBody.push(encodedKey + "=" + encodedValue);
//       }
//       formBody = formBody.join("&");
  
//       let tokenResponse = fetch('https://login.mediavalet.com/connect/token', 
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/x-www-form-urlencoded',
//               'Ocp-Apim-Subscription-Key': '03e0a3d8270a432d9ede6e2cfca073dd',
//               Accept: '*/*',
//               Host: 'login.mediavalet.com',
//             },
//             body: formBody, // <-- This function turns the object into query param format eg. a=foo&b=barr
            
//           }
//       )
    //   .then((res) => res.body)
    //   .then((rb) => {
    //       console.log(["Mediavalet Inside Call", rb]);
    //       const reader = rb.getReader();
  
    //       return new ReadableStream({
    //           start(controller) {
    //               function push() {
    //                   reader.read().then(({done, value }) => {
    //                       if (done) {
    //                           console.log('done', done);
    //                           controller.close();
    //                           return;
    //                       } 
    //                       controller.enqueue(value);
    //                       console.log(done, value);
    //                       push();
    //                   });
    //               }
    //               push();
    //           }
    //       });
    //   })
    //   .then((stream) => 
    //       new Response(stream, { headers: {'Content-Type': 'text/html' }}).text()
    //   )
    //   .then((result) => {
    //       console.log(result);
    //   });
  
    //   const response = await tokenResponse;
    //   console.log(['Mediavalet token', response, params, formBody]);
    //   res.writeHead(302, {
    //     location: "https://docutraps.azurewebsites.net/photos?token="+JSON.stringify(response),
    //   });
    //   res.end();
      //const { access_token, expires_in } = response; 
// })
// const getToken = async () => {
//     const params = {
//       grant_type:'authorization_code',
//       code: '87gkm4eIngX9GKpGI4zQDgjG1rEteOfYa3DvPkIQrR8',
//       client_id: '7f495f1f-21dc-4f9b-9071-4b56e5375e9f',
//       redirect_uri: 'https://docutraps.azurewebsites.net/mediavalet/auth/callback', // <-- This is the url of the page they just redirected to (not including the querystring)
//       client_secret: '86hVfmmct24ydSqAmBhdArCMw3fSz92kPL814ZWoeYw='
//     };

//     var formBody = [];
//     for (var property in params) {
//       var encodedKey = encodeURIComponent(property);
//       var encodedValue = params[property];
//       formBody.push(encodedKey + "=" + encodedValue);
//     }
//     formBody = formBody.join("&");

//     let tokenResponse = fetch('https://login.mediavalet.com/connect/token', 
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'Ocp-Apim-Subscription-Key': '03e0a3d8270a432d9ede6e2cfca073dd',
//             Accept: '*/*',
//             Host: 'login.mediavalet.com',
//           },
//           body: formBody, // <-- This function turns the object into query param format eg. a=foo&b=barr
          
//         }
//     ).then((res) => res.body)
//     .then((rb) => {
//         console.log(["Mediavalet Inside Call", rb]);
//         const reader = rb.getReader();

//         return new ReadableStream({
//             start(controller) {
//                 function push() {
//                     reader.read().then(({done, value }) => {
//                         if (done) {
//                             console.log('done', done);
//                             controller.close();
//                             return;
//                         } 
//                         controller.enqueue(value);
//                         console.log(done, value);
//                         push();
//                     });
//                 }
//                 push();
//             }
//         });
//     })
//     .then((stream) => 
//         new Response(stream, { headers: {'Content-Type': 'text/html' }}).text()
//     )
//     .then((result) => {
//         console.log(result);
//     });

//     const response = await tokenResponse;
//     console.log(['Mediavalet token', response, params, formBody]);
//     //const { access_token, expires_in } = response; 
//   }

  exports.router = router;
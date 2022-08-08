// API Documentation URL: https://docs.mediavalet.com/#ff14892b-ab18-450d-b293-b787859b6b40
// url: `https://login.mediavalet.com/Account/Login?
// ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3F
// client_id%3D7f495f1f-21dc-4f9b-9071-4b56e5375e9f%26
// response_type%3Dcode%26
// scope%3Dopenid%2520api%26
// redirect_uri%3Dhttps%253A%252F%252Foauth.pstmn.io%252Fv1%252Fbrowser-callback%26
// state%3Dnonce`


export async function testMediavaletCalls() {
    let url = 'https://login.mediavalet.com/connect/authorize?client_id=7f495f1f-21dc-4f9b-9071-4b56e5375e9f&response_type=code&scope=openid%20api&redirect_uri=https://oauth.pstmn.io/v1/browser-callback&state=nonce';
    // url += 'client_id=7f495f1f-21dc-4f9b-9071-4b56e5375e9f';
    // url += '&response_type=code';
    // url += '&scope=openid%20api';
    // url += '&redirect_uri=https://oauth.pstmn.io/v1/browser-callback';
    // url += '&state=state-296bc9a0';

    let response = await fetch(url, {
        method: "GET",
        
        
    })
    .then((res) => res.body)
    .then((rb) => {
        console.log(["Mediavalet Inside Call", rb]);
        const reader = rb.getReader();

        return new ReadableStream({
            start(controller) {
                function push() {
                    reader.read().then(({done, value }) => {
                        if (done) {
                            console.log('done', done);
                            controller.close();
                            return;
                        } 
                        controller.enqueue(value);
                        console.log(done, value);
                        push();
                    });
                }
                push();
            }
        });
    })
    .then((stream) => 
        new Response(stream, { headers: {'Content-Type': 'text/html' }}).text()
    )
    .then((result) => {
        console.log(result);
    })
    
    // .catch(async (err) => {
    //     if (err.name === 'AbortError') {
    //         console.log('Promise Aborted');
    //     } else {
           
    //         return ({ status: 400, err: err });
    //     }
        
    // });

    console.log(["Mediavalet Call", response]);
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
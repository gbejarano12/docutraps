// API Documentation URL: https://docs.mediavalet.com/#ff14892b-ab18-450d-b293-b787859b6b40

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

class Survey {
    constructor() {
        this.projectName = null;
        this.employee = null; // employee or worker
        this.cameraId = null;
        this.dateSetup = null;
        this.datePickup = null;
        this.coordinates = null;
        this.procedure = null;
        this.attachedTo = null;
        this.cameraHeight = null;
        this.areaName = null;
        this.cameraMake = null; // Is this needed here if we have cameraId to link to camera info
        this.targetingFeature = null;
        this.sitePhoto = null;
        this.trapTest = null;
        this.cameraWorkingSetup = null;
        this.cameraWorkingPickup = null;
        this.comments = null;
    }

    // defaultQuestionValue

}



/*  Form Submitted Example response
    - usefull points include globalId and attributes map which include the values submitted


    result: [
        {
            addResults: [
                {
                    globalId: "{5E3F3E62-B2B9-4850-8FF6-D9A6EA9B20CF}",
                    objectId: 2,
                    success: true,
                    uniqueId: 2
                }
            ],
            id: 0
        }
    ],
    surveyFeatureSet: {
        features: [
            attachments: [],
            attributes: {
                camera_attached_to: "Tree"
                camera_attached_to_other: null
                camera_height_cm: 67
                camera_id: "Camera1"
                camera_make: "Browning"
                camera_make_other: null
                camera_trap_test: "Yes"
                camera_working_when_you_left_or: "Yes"
                comments: null
                date_and_time_of_camera_setup_o: 1659921840000
                globalid: "{5E3F3E62-B2B9-4850-8FF6-D9A6EA9B20CF}"
                name_of_the_area_deployed: "Location 1"
                objectid: 2
                project_name: "Test Survey 2"
                what_feature_is_the_camera_targ: "Wildlife Trail"
                what_feature_is_the_camera_targ_other: null
                your_name: "Gustavo"
                _procedure: "New camera placement"
                _procedure_other: null
            },
            geometry: {
                geometryType: "esriGeometryPoint"
                spatialReference: {wkid: 4326}
                x: -118.311114699998
                y: 33.83576899999943
            },
            objectId: 2
        ],
        form: {
            footer: {isVisible: true, content: "%3Ca%20target%3D'_blank'%20style%3D'color%3A%23000…23'%3EPowered%20by%20ArcGIS%20Survey123%3C%2Fa%3E"}
            header: {isVisible: true, content: '%3Cp%20style%3D%22text-align%3Acenter%3B%22%20title%3D%22Test%20Survey%22%3ETest%20Survey%3C%2Fp%3E'}
            layerName: "survey"
            portalUrl: "https://www.arcgis.com"
            questions: (15) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
            rules: []
            settings: {thankYouScreenContent: '%3Cp%20style%3D%22text-align%3Acenter%3B%22%3E%3Cb…0successfully.%3C%2Fp%3E%3C%2Fstrong%3E%3C%2Fp%3E', openStatusInfo: {…}, recordStartEndTime: {…}, notificationsInfo: {…}, isVersionLocked: true, …}
            subHeader: {isVisible: true, content: '%3Cp%3EDescription%20content%20for%20the%20survey%3C%2Fp%3E'}
            submit: {buttonText: 'Submit'}
            themes: [{…}]
            version: "3.15"
        }
    }

*/
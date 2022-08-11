import { v4 } from 'uuid';
import { makeDBRequest } from './mongoDB';

export class Camera {
    constructor(cam) {
        this._id = (cam?._id) ?? v4();
        this.cameraId = (cam?.cameraId) ?? null; 
        this.make = (cam?.make) ?? null;
        this.makeOther = (cam?.makeOther) ?? null;
        this.functioning = (cam?.functioning) ?? false;
        this.isActive = (cam?.isActive) ?? false;
        this.status = (cam?.status) ?? null;     // active (yes, no) or status ('inactive', 'active', 'lost', 'broken') or both??
        this.imei = (cam?.imei) ?? null;
        this.dateAdded = (cam?.dateAdded) ?? null;
        this.location = (cam?.location) ?? null;   // ??
        this.dateLastSetup = (cam?.dateLastSetup) ?? null;  // ??
        this.dateLastPickedUp = (cam?.dateLastPickedUp) ?? null; // ??
        this.currentSurvey = (cam?.currentSurvey) ?? null;
    }

    async insertDB() {
        let result = await makeDBRequest('POST', '/cameras', this);
        console.log('Upload Camera', result);
        return result;
    }
}

export class CameraArray extends Array {
    
    async loadAllCameras() {
        let result = await makeDBRequest('GET', '/cameras');
        console.log("Load Cameras", result);
        for (let i = 0; i < result.length; i++) {
            result[i] = new Camera(result[i]);
            this.push(result[i]);
        }

        return result;
    }

    loadSimCameras() {
        let fakeCameras = [
            { make: 'Browning', functioning: 1, active: 0, status: 'inactive', imei: v4(), dateAdded: new Date().toLocaleDateString },
            { make: 'Reconyx', functioning: 1, active: 0, status: 'inactive', imei: v4(), dateAdded: new Date().toLocaleDateString },
            { make: 'Bushnell', functioning: 0, active: 0, status: 'inactive', imei: v4(), dateAdded: new Date().toLocaleDateString },
            { make: 'Browning', functioning: 1, active: 1, status: 'active', imei: v4(), dateAdded: new Date().toLocaleDateString },
            { make: 'Spypoint', functioning: 1, active: 0, status: 'inactive', imei: v4(), dateAdded: new Date().toLocaleDateString },
            { make: 'Cuddeback', functioning: 1, active: 0, status: 'inactive', imei: v4(), dateAdded: new Date().toLocaleDateString }
        ]

        for (let i = 0; i < fakeCameras.length; i++) {
            let camera = new Camera(fakeCameras[i]);
            camera.cameraId = 'Camera'+i;
            this.push(camera);
        }
    }
}
import { v4 } from 'uuid';

class Camera {
    constructor(cam) {
        this.id = (cam?.id) ?? v4();
        this.cameraId = (cam?.cameraId) ?? null;
        this.make = (cam?.make) ?? null;
        this.functioning = (cam?.functioning) ?? false;
        this.active = (cam?.active) ?? false;
        this.status = (cam?.status) ?? null;     // active (yes, no) or status ('inactive', 'active', 'lost', 'broken') or both??
        this.imei = (cam?.imei) ?? null;
        this.dateAdded = (cam?.dateAdded) ?? null;
        this.location = (cam?.location) ?? null;   // ??
        this.dateLastSetup = (cam?.dateLastSetup) ?? null;  // ??
        this.dateLastPickedUp = (cam?.dateLastPickedUp) ?? null; // ??
    }
}

export class CameraArray extends Array {
    
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
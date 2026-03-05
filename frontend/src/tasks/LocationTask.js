import * as TaskManager from 'expo-task-manager';
import SocketService from '../services/SocketService';

export const LOCATION_TASK_NAME = 'background-location-task';

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.error('Task error: ', error);
    return;
  }
  if (data) {
    const { locations } = data;
    if (locations && locations.length > 0) {
      const { latitude, longitude } = locations[0].coords;

      // In a real application, tripId would be pulled from a global store or Secure Store.
      SocketService.emitLocationUpdate({
        tripId: 'TRIP_123',
        latitude,
        longitude
      });
      console.log(`[Background Task] Location update sent: lat ${latitude}, lng ${longitude}`);
    }
  }
});

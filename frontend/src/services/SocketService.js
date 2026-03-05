import io from 'socket.io-client';

class SocketService {
  constructor() {
    this.socket = null;
    this.serverUrl = 'http://YOUR_AWS_EC2_IP:5000';
  }

  initializeSocket() {
    if (!this.socket) {
      this.socket = io(this.serverUrl);

      this.socket.on('connect', () => {
        console.log('Socket connected to backend');
      });

      this.socket.on('disconnect', () => {
        console.log('Socket disconnected from backend');
      });
    }
  }

  emitLocationUpdate(data) {
    if (this.socket) {
      this.socket.emit('updateLocation', data);
    } else {
      console.warn('Socket not initialized. Cannot send location.');
    }
  }

  startTrip(destination) {
    if (this.socket) {
      this.socket.emit('startTrip', { dest: destination });
    }
  }

  endTrip() {
    if (this.socket) {
      this.socket.emit('endTrip');
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

export default new SocketService();

import socketio
import random
import time

# Create a Socket.IO client
sio = socketio.Client()

try:
    # Connect to the Node.js server
    sio.connect('http://localhost:3000')
except socketio.exceptions.ConnectionError as e:
    print(f"Connection failed: {e}")
    exit(1)

@sio.event
def connect():
    print("Connected to the server.")

@sio.event
def disconnect():
    print("Disconnected from the server.")

def send_heart_rate():
    while True:
        # Generate a random heart rate value between 70 and 90
        heart_rate = random.randint(70, 90)
        print(f"Sending heart rate: {heart_rate}")
        
        # Emit the heart rate value to the server
        sio.emit('heart_rate', {'value': heart_rate})
        
        # Wait for 1 second before sending the next value
        time.sleep(1)

if __name__ == '__main__':
    try:
        send_heart_rate()
    except KeyboardInterrupt:
        print("Stopping the sensor.")
    finally:
        sio.disconnect()
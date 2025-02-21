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

def send_mpu6050_data():
    while True:
        # Generate random accelerometer and gyroscope values
        accel_x = round(random.uniform(0.0, 0.03), 2)
        accel_y = round(random.uniform(0.0, 0.03), 2)
        accel_z = round(random.uniform(0.07, 0.10), 2)

        gyro_x = round(random.uniform(-0.07, 0.05), 2)
        gyro_y = round(random.uniform(-0.07, 0.05), 2)
        gyro_z = round(random.uniform(-0.07, 0.05), 2)
        
        data = {
            'accelerometer': {'x': accel_x, 'y': accel_y, 'z': accel_z},
            'gyroscope': {'x': gyro_x, 'y': gyro_y, 'z': gyro_z}
        }
        
        print(f"Sending MPU6050 data: {data}")
        
        # Emit the sensor data to the server
        sio.emit('mpu6050_data', data)
        
        # Wait for 1 second before sending the next value
        time.sleep(1)

if __name__ == '__main__':
    try:
        send_mpu6050_data()
    except KeyboardInterrupt:
        print("Stopping the sensor.")
    finally:
        sio.disconnect()

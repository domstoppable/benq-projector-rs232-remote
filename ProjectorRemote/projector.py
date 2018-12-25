import serial

port = '/dev/ttyUSB0'
baud = 9600

projector = None

def connect(devicePort=port, deviceBaud=baud):
	global port, baud, projector
	port = devicePort
	baud = deviceBaud

	projector = serial.Serial(port, baud)


def send(msg):
	msg = b'\r*' + msg.encode() + b'#\r'
	try:
		projector.write(msg)
	except Exception as exc:
		print(exc)
		connect()
		projector.write(msg)

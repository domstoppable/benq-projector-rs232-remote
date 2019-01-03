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

def do(cmd):
	if cmd in commandMap:
		commandMap[cmd]()
	else:
		send(cmd)

def hdmi():
	send('pow=on')
	send('sour=hdmi')

def hdmi2():
	send('pow=on')
	send('sour=hdmi2')

def component():
	send('pow=on')
	send('sour=YPbr')

def vga():
	send('pow=on')
	send('sour=RGB')

def svideo():
	send('pow=on')
	send('sour=svid')

def composite():
	send('pow=on')
	send('sour=vid')

commandMap = {
	'hdmi': hdmi,
	'hdmi2': hdmi2,
	'component': component,
	'vga': vga,
	'svideo': svideo,
	'composite': composite
}
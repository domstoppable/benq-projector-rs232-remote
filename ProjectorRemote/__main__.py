import sys, os
import csv
import json

import flask

from . import projector

BASE_PATH = os.path.dirname(os.path.abspath(__file__))
app = flask.Flask(__name__,
	static_url_path='/static',
	static_folder=os.path.join(BASE_PATH, 'webclient/build/static/'),
)

def getFile(filePath):
	return open(os.path.join(BASE_PATH, 'webclient/build', filePath)).read()

@app.route('/')
def index():
	return getFile('index.html')

@app.route('/favicon.ico')
def favicon():
	return getFile('favicon.ico')

@app.route('/manifest.json')
def manifest():
	return getFile('manifest.json')


@app.route('/do/<cmd>')
def doCommand(cmd):
	projector.send(cmd)
	return 'ok'

@app.route('/commands')
def getCommands():
	commandGroups = {}

	with open(os.path.join(BASE_PATH, 'commands.csv'), 'r') as csvFile:
		reader = csv.DictReader(csvFile)
		for row in reader:
			if row['Function'] not in commandGroups:
				commandGroups[row['Function']] = []

			commandGroups[row['Function']].append(row)

	print(commandGroups)
	return flask.jsonify(commandGroups)

if __name__ == "__main__":
	try:
		os.system('fauxmo -c "%s" &' % (os.path.join(BASE_PATH, 'fauxmo-config.json')))
	except Exception as exc:
		print('Failed to start fauxmo :(')


	app.run(host='0.0.0.0')

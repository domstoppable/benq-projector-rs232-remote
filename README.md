# BenQ Projector (RS232) Remote
Control a BenQ projector through RS232 via web interface and smart home controls (Amazon Alexa, etc.). This has only been tested with a Raspberry Pi (raspbian) connected to a BenQ W710ST, but will probably work with other BenQ devices.

<img src="https://screenshotscdn.firefoxusercontent.com/images/6f25135b-9ac1-4d49-9bf9-1131cea4d6a9.png" width="256"/>

<img src="https://screenshotscdn.firefoxusercontent.com/images/406719f8-1098-435c-971e-c6a45077e705.png" width="256"/>
<img src="https://screenshotscdn.firefoxusercontent.com/images/1504ba94-fc3d-44e4-b178-5d8b105aae40.png" width="256"/>

# Dependencies
* python3.6+
* flask
* pyserial
* [fauxmo](https://github.com/n8henrie/fauxmo)
* node/npm for react modules

# Building from source
```bash
# Transpile react code for the web interface
cd ProjectorRemote/webclient
npm install
npm run build

# Install the Python package
cd ..
python3 setup.py install
```

# Usage
```bash
python -m ProjectorRemote
```
* This will start a Flask web server and a Fauxmo (emulated Belkin device) service.
* From the web: point your web-browser to your Raspberry Pi's IP address and enjoy (ex: `http://192.168.0.5:5000`).
* From Alexa: say, `Alexa, turn [on|off] the projector`. If the sleep timer alert pops up, try, `Alexa, turn on binge mode`.

Note: the `fauxmo` package requires `Python3.6+`, which must be built from source on Raspbian. I've tested with `Python 3.7.1` built from source w/out optimizations, and everything works well.

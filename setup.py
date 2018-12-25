#!/usr/bin/env python

from setuptools import setup

setup(
	name='ProjectorRemote',
	version='0.1',
	description='',
	author='Dominic Canare',
	author_email='dom@greenlightgo.org',
	url='http://greenlightgo.org',
	packages=['ProjectorRemote'],
	install_requires=[ 'PySerial', 'flask', 'fauxmo' ],
	include_package_data=True,
)

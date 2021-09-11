# Python

This directory is just some notes and code examples I wrote while learning Python.

## Install

Install on MacOS:

```sh
brew install python
```

Install the python version manager pyenv: https://github.com/pyenv/pyenv

Configure vscode for Python: https://code.visualstudio.com/docs/python/python-tutorial

## Packages

Packages can be looked up on: https://pypi.org/

Before installing packages its a good idea to set up a "virtual environment" which isolates dependencies per application instead of installing them globally. This is akin to something like Bundler for Ruby or NPM/Yarn for JavaScript.

```sh
python -m venv .venv
source .venv/bin/activate
```

To run a package similar to how `npx` works in JavaScript you can do:

```sh
python -m <package>
```

For example:

```sh
python -m thing
```

To install a package use the `pip` package manager that comes with Python:

```sh
python -m pip install matplotlib
```

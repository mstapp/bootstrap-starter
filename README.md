# bootstrap-starter

This is a simple template for starting a website with bootstrap 3 and a grunt-based build.

## Install & build

Check out the source, install node.js with `npm` package manager, then install
`grunt-cli` and `bower` globally:

```
npm install -g grunt-cli
npm install -g bower
```

Then run both npm & bower installs:

```
npm install
bower install
```

To build, there is a one-time "unpack" step, then a normal build step that needs to run
each time you change a source file.

One-time build step: `grunt unpack` (copies dependencies from node_modules and
bower_install to your source directories.)

Then run `grunt` each time you want to build the sources, or run `grunt watch` to monitor and rebuild
when you save source files.

## Running

You can load the static files in the `dist/` directory in the browser, or serve them with
your webserver of choice.

Alternately, run a simple python static-file server on the command line (run this in
the `dist/` directory):

```
python -m SimpleHTTPServer 8000
```

## Source structure

The HTML source is in `index.html`.

If you want to override or extend bootstrap, **do not edit the bootstrap source files** -- bootstrap
can be extended cleanly by defining overrides in files included by `less/app.less`. This template
includes two example files, `less/variables.less` and `less/media.less`.

## License

MIT

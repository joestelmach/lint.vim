# Lint.Vim #

Facilitates tight integration between [JSHint](http://www.jshint.com/) and [Vim](http://www.vim.org/).

JavaScript files are automatically passed through JSHint when a buffer is saved, placing any warnings in the quickfix window for easy navigation to the source of the warning.  To achieve acceptable performance, Google's [V8 Engine](http://code.google.com/p/v8/) is used for JavaScript execution.
## Installation

The following assumes you're using OS X and [pathogen](https://github.com/tpope/vim-pathogen).  Otherwise, refer to the [full V8 documentation](http://code.google.com/p/v8/wiki/BuildingWithGYP).

### Install V8

    svn checkout http://v8.googlecode.com/svn/trunk/ ./v8
    cd v8
    make dependencies
    make native
    sudo cp out/native/d8 /usr/local/bin
    cd ..
    rm -rf v8


### Install our script

    git clone git@github.com:joestelmach/lint.vim.git ~/.vim/bundle/lint.vim

## Configuration

All [JSHint Options](http://www.jshint.com/options/) can be set in ~/.vim/bundle/jshint.vim/js/options.js.

If you're d8 executable is not in your classpath, the full path can be specified in your .vimrc file:

    let d8_command = '/full/path/to/d8'

If you're not down with Dark Magenta, an error highlight color may be specified:

    let jshint_highlight_color = 'DarkGray'

You can also disable the plugin entirely:

    let disable_lint = 1 

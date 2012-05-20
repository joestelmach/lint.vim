" File:          lint.vim
" Author:        Joe Stelmach (joestelmach@gmail.com)
" Version:       0.3
" Description:   V8-powered JSHint Integration  
" Last Modified: May 5, 2012

" Allow the user to disable the plugin
if exists('disable_lint')
  finish
endif

" Allow continued lines.
let s:save_cpo = &cpo
set cpo&vim

if !exists("d8_command")
  let d8_command = 'd8'
endif

if !exists("lint_highlight_color")
  let lint_highlight_color = 'DarkMagenta'
endif

" set up auto commands
augroup javaScriptLint
  au!
  autocmd BufWritePost,FileWritePost *.js call JavascriptLint()
  autocmd BufWinLeave * call s:MaybeClearCursorLineColor()
augroup END

let s:file_path = expand("<sfile>")
let s:last_slash = strridx(s:file_path, "/")
let s:dir_path = strpart(s:file_path, 0, s:last_slash) . '/../'

" Runs the current file through javascript lint and 
" opens a quickfix window with any warnings
function! JavascriptLint() 
  " run javascript lint on the current file
  let current_file = shellescape(expand('%:p'))
  
  let params = s:dir_path . 'js/jshint.js ' . s:dir_path . 'js/options.js ' . s:dir_path . 'js/run.js -- gcc ' . current_file
  let cmd_output = system(g:d8_command . ' ' . params)

  " if some warnings were found, we process them
  if strlen(cmd_output) > 0

    " ensure proper error format
    let s:errorformat = "%f(%l):\%m^M"

    " write quickfix errors to a temp file 
    let quickfix_tmpfile_name = tempname()
    exe "redir! > " . quickfix_tmpfile_name
      silent echon cmd_output
    redir END

    " read in the errors temp file 
    execute "silent! cfile " . quickfix_tmpfile_name

    " change the cursor line to something hard to miss 
    call s:SetCursorLineColor()

    " open the quicfix window
    botright copen
    let s:qfix_buffer = bufnr("$")

    " delete the temp file
    call delete(quickfix_tmpfile_name)

  " if no javascript warnings are found, we revert the cursorline color
  " and close the quick fix window
  else 
    call s:ClearCursorLineColor()
    if(exists("s:qfix_buffer"))
      cclose
      unlet s:qfix_buffer
    endif
  endif
endfunction

" sets the cursor line highlight color to the error highlight color 
function! s:SetCursorLineColor() 
  " check for disabled cursor line
  if(!exists("g:lint_highlight_color") || strlen(g:lint_highlight_color) == 0) 
    return 
  endif

  call s:ClearCursorLineColor()
  let s:highlight_on = 1 

  " find the current cursor line highlight info 
  redir => l:highlight_info
    silent highlight CursorLine
  redir END

  " find the guibg property within the highlight info (if it exists)
  let l:start_index = match(l:highlight_info, "guibg")
  if(l:start_index > 0)
    let s:previous_cursor_guibg = strpart(l:highlight_info, l:start_index)

  elseif(exists("s:previous_cursor_guibg")) 
    unlet s:previous_cursor_guibg
  endif

  execute "highlight CursorLine guibg=" . g:lint_highlight_color
endfunction

" Conditionally reverts the cursor line color based on the presence
" of the quickfix window
function! s:MaybeClearCursorLineColor()
  if(exists("s:qfix_buffer") && s:qfix_buffer == bufnr("%"))
    call s:ClearCursorLineColor()
  endif
endfunction

" Reverts the cursor line color
function! s:ClearCursorLineColor()
  " only revert if our highlight is currently enabled
  if(exists("s:highlight_on") && s:highlight_on) 
    let s:highlight_on = 0 

    " if a previous cursor guibg color was recorded, we use it
    if(exists("s:previous_cursor_guibg")) 
      execute "highlight CursorLine " . s:previous_cursor_guibg
      unlet s:previous_cursor_guibg

    " otherwise, we clear the curor line highlight entirely
    else
      highlight clear CursorLine 
    endif
  endif
endfunction

" Restore cpo value
let &cpo = s:save_cpo
unlet s:save_cpo
" vim: set et sw=2 sts=2:

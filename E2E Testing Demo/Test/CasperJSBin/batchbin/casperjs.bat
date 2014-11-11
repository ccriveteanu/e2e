@ECHO OFF
set CASPER_PATH=%~dp0..
set CASPER_BIN=%CASPER_PATH%\bin\
set ARGV=%*
call ..\..\PhantomJSBin\phantomjs "bootstrap.js"  --casper-path="%CASPER_PATH%" --cli %ARGV%
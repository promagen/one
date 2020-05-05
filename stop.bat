@ECHO OFF
tasklist /v | find "node.exe"
taskkill /F /IM node.exe

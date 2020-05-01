@ECHO OFF
netstat -a -n -o | findstr ":3001"
FOR /F "tokens=5" %%T IN ('netstat -a -n -o ^| findstr ":3001" ') DO (
echo ProcessId to kill = %%T
wmic process where "ParentProcessId=%%T" delete)

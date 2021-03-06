Run app in command line:

    node src/run.js <time>

Where <time> is an optional argument that must be a valid time in the format hh:mm

Run app:

    npm start

Run tests:

    npm test

Usage:

Once running, GET requests can be made to the following endpoint:

    http://localhost:3000/talkingClock

Calling without any parameters will return current time in human readable format. 
Alternatively, add the query parameter 'time' with a valid time in the format hh:mm.

Example:

    curl 'http://localhost:3000/talkingClock?time=12:30'

This curl will return 'Half past twelve'

Find challenge instructions below:

Objective 1 
Write a command-line program that returns the current time using the "Human Friendly Text" demonstrated in the example below. 
 
Numeric Time Human Friendly Text 
 
·       1:00 One o'clock 
·       2:00 Two o'clock 
·       13:00 One o'clock 
·       13:05 Five past one 
·       13:10 Ten past one 
·       13:25 Twenty five past one 
·       13:30 Half past one 
·       13:35 Twenty five to two 
·       13:55 Five to two 
 
For example, if we execute this program at 16:30, it should output "Half past four" 
 
$ ..some command.. 
Half past four 
 
Objective 2 
Allow the command to take an arbitrary Numeric Time parameter as input and return the "Human Friendly Text" equivalent. 
For example: 
$ ..some command.. 15:00 
Three o'clock 
$ 
 
Objective 3 
Write a REST service to expose the clock and allow an optional parameter to pass the arbitrary Numeric Time like Objective 2, returning the "Human Friendly Text" as JSON. 
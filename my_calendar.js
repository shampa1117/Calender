

var dateObject = new Date();
var month = dateObject.getMonth();
var monthArray = new Array("January", "February",
        "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December");
var h;
function displayCalendar(whichMonth,holiday) {
    calendarWin = window.open("", "CalWindow", "status=no,resizable=yes,width=400,height=220, left=200,top=200");
    calendarWin.focus();
    calendarWin.document.write("<!DOCTYPE html><html> <head><title>NPU Concert</title> </head><body>");
    calendarWin.document.write("<table cellspacing='0' border='1' width='100%'>");
    calendarWin.document.write("<colgroup span='7' width='50' />");
    
    //document.getElementById("month").value=holiday;
    h=document.getElementById("month").value;
    
    if (whichMonth == -1)
        dateObject.setMonth(dateObject.getMonth() - 1);
    else if (whichMonth == 1)
        dateObject.setMonth(dateObject.getMonth() + 1);

    var month = dateObject.getMonth();
    
    calendarWin.document.write("<tr><td colspan='2'> <a href='javascript:' onclick='self.opener.displayCalendar(-1,"+h+");'>Previous</a></td><td colspan='3' align='center'><strong>"
            + monthArray[month] + " " + dateObject.getFullYear()
            + "</strong></td><td colspan='2' align='right'><a href='javascript:' onclick='self.opener.displayCalendar(1,"+h+");'>Next</a></td></tr>"
            );

    calendarWin.document.write("<tr align='center'> <td>Sun</td><td>Mon</td><td>Tue</td> <td>Wed</td><td>Thu</td><td>Fri</td> <td>Sat</td></tr>");
    calendarWin.document.write("<tr align='center'>");
    dateObject.setDate(1);
    var dayOfWeek = dateObject.getDay();
    for (var i = 0; i < dayOfWeek; ++i) {
        calendarWin.document.write("<td>&nbsp;</td>");
    }
    var daysWithDates = 7 - dayOfWeek;
    var dateCounter = 1;
    for (var i = 0; i < daysWithDates; ++i) {
        var curDate = monthArray[month] + " " + dateCounter + ", " + dateObject.getFullYear();
        if(holiday[month].indexOf(dateCounter)<0)
            calendarWin.document.write("<td><a href='' onclick='windows.close()'>" + dateCounter + "</a></td>");
        else
            calendarWin.document.write("<td>" + dateCounter + "</td>");
            
        ++dateCounter;
    }

    var numDays = 0;
    // January, March, May, July, August, October, December
    if (month == 0 || month == 2 || month == 4 || month == 6 || month || month == 9 || month == 11)
        numDays = 31;
    // February
    else if (month == 1)
        numDays = 28;
    // April, June, September, November
    else if (month == 3 || month == 5 || month == 8 || month == 10)
        numDays = 30;

    for (var rowCounter = 0; rowCounter < 5; ++rowCounter) {
        var weekDayCounter = 0;
        calendarWin.document.write("<tr align='center'>");

        while (weekDayCounter < 7) {
            var curDate = monthArray[month] + " " + dateCounter + ", " + dateObject.getFullYear();
            if (dateCounter <= numDays)
            {
                if(holiday[month].indexOf(dateCounter)<0)
                    calendarWin.document.write("<td><a href='' onclick=''>" + dateCounter + "</a></td>");  
                else
                    calendarWin.document.write("<td>" + dateCounter + "</td>");
             
            }
            else
                calendarWin.document.write("<td>&nbsp;</td>");
            ++weekDayCounter;
            ++dateCounter;
        }
        calendarWin.document.write("</tr>");
    }

    calendarWin.document.write("</table></body></html>");
    calendarWin.document.close();
} 
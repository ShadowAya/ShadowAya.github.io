from datetime import datetime, timedelta
import sys, json
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("--day", type=str, required=True)
args = parser.parse_args()


if args.day == "today" :
    day = datetime.today()
elif args.day == "tmr" or args.day == "tomorrow" :
    day = datetime.today() + timedelta(days = 1)
else :
    raise Exception("Invalid day specified")

day = day.weekday()

###########################################################################################################

#  🅴🅳🅸🆃 🅷🅴🆁🅴

MON = [
    {
        "name" : "ENG",
        "classroom" : "05",
        "start" : "9:00",
        "end" : "9:45"
    },{
        "name" : "MAT",
        "classroom" : "15",
        "start" : "10:00",
        "end" : "10:45"
    }
]
TUE = []
WED = []
THU = []
FRI = []
SAT = "Weekend" # to mark as off-day, replace "[]" with a reason
SUN = "Weekend" #

###########################################################################################################

data = [MON, TUE, WED, THU, FRI, SAT, SUN][day]

if len(data) == 0 :
    no_school = "No School"
    data = {}
elif type(data) is str :
    no_school = data
    data = {}

else  :

    no_school = "false"
    newdata = {}
    for i in range(len(data)) :
        newdata[f'{i}'] = data[i]
    data = newdata


print({
    "no_school" : no_school,
    "data" : data
})
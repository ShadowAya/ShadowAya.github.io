from datetime import datetime
from edupage_api import Edupage
import sys, json

edupage = Edupage()

with open(f'{sys.path[0]}/edu-config.json', "r", encoding='UTF-8') as f :
    edu_data = json.load(f)

edupage.login(edu_data["username"], edu_data["password"], edu_data["subdomain"])

loop = 0
lessons = {}
no_school = "false"

lessons_fetch = edupage.get_timetable(datetime.today()).lessons

if len(lessons_fetch) == 1 and lessons_fetch[0].start_of_lesson.strftime("%H%M") == "0000" :
    no_school = lessons_fetch[0].name
else :

    for lesson in lessons_fetch :
        if lesson.name is None :
            continue
        lessons[f'{loop}'] = {
            "name" : lesson.name if len(lesson.name)<17 else f'{lesson.name[:15]}...',
            "classroom" : ", ".join(lesson.classrooms) if len(lesson.classrooms)>0 else "",
            "start" : lesson.start_of_lesson.strftime("%H:%M"),
            "end" : lesson.end_of_lesson.strftime("%H:%M")
        }
        loop += 1

if len(lessons) == 0 and no_school=="false" :
    weekday_num = datetime.now().weekday()
    if weekday_num > 4 :
        no_school = 'Weekend'
    else :
        no_school = 'No classes'

print({
    "no_school" : no_school,
    "data" : lessons
})

#json_obj = json.dumps(lessons, indent=4)
#
#with open(f'{sys.path[0]}/tt-today.json', "w", encoding='UTF-8') as f :
#    f.write(json_obj)
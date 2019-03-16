import re

def solution(file_object):
    fileContent = file_object.readlines()
    intlist = list()
    ranges = [-1000000000, 1000000000]
    for item in fileContent:
        tempStr = item[0:len(item)-1].strip()
        if re.match("^[+|-]?[0-9]*$", tempStr):
            tempInt = int(tempStr)
            if tempInt <= ranges[1] and tempInt >= ranges[0]:
                intlist.append(tempInt)
    return intlist
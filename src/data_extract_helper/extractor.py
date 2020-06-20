import csv
from collections import defaultdict

columns = defaultdict(list)

dict = {
    "day" : "",
    "value": ""
}

dictList = []

with open('dataset.csv') as File:
    reader = csv.DictReader(File)
    for row in reader:
        for (k,v) in row.items():
            columns[k].append(v)

list = columns['date']
for i,z in zip(list[::], list[1::]):
    occurrences = list.count(i)
    if(i != z):
        dict["day"] = i
        dict["value"] = occurrences
        print(dict)
        # dictList.append(dict)

        

# print(dictList)
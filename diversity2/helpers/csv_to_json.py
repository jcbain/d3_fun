# convert a csv file to a json file
#
# usage:
#  python3 file.csv

import csv
import json
import sys

with open(sys.argv[1], 'r') as csvfile:
     reader = csv.DictReader(csvfile)
     rows = list(reader)

print(json.dumps(rows))

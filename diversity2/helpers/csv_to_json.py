import csv
import json
import sys

with open(sys.argv[1], 'r') as csvfile:
     reader = csv.DictReader(csvfile)
     rows = list(reader)

print(json.dumps(rows))

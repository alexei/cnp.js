Romanian Personal Identification Number (Cod Numeric Personal, or CNP):
G YY MM DD CC NNN C
| |  |  |  |  |   |
| |  |  |  |  |   +- Checksum
| |  |  |  |  +----- Serial Number
| |  |  |  +-------- County Code
| |  |  +----------- Day (of birth)
| |  +-------------- Month (of birth)
| +----------------- Year (of birth)
+------------------- Gender

Gender:
1 - male born between 1900 and 1999
2 - female born between 1900 and 1999
3 - male born between 1800 and 1899
4 - female born between 1800 and 1899
5 - male born after 2000
6 - female born after 2000
7 - male
8 - female
9 - Foreign citizen

County Code:
1 to 52 or 99
For Bucharest, the code is 4 folowed by the sector number (1-6)

Checksum:
To calculate the checksum, every digit from CNP is multiplied with the digit
with the same index from the number 279146358279, the results are sumed up
and then divided by 11. If the remainder is 10 then the checksum digit is 1,
otherwise it's the remainder itself.

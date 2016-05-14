from random import choice
from string import ascii_lowercase

with open('codes.txt', 'r+') as f:
    numCodes = 43
    r = numCodes
    for i in range(r):
        code = ''.join(choice(ascii_lowercase) for _ in range(4))
        f.write(code + '\n')
        for line in f:
            if code == line:
                print 'duplicate found: ' + code
                numCodes -= 1
                break;    
print 'number of codes generated: %d/%d' % (numCodes, r)

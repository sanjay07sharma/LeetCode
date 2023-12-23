/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.


Example 1:

Input: path = "NES"
Output: false 
Explanation: Notice that the path doesn't cross any point more than once.

Example 2:

Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.
 

Constraints:

1 <= path.length <= 104
path[i] is either 'N', 'S', 'E', or 'W'.
*/

// Solution 1

/**
 * @param {string} path
 * @return {boolean}
O (0,0)
N (0,1) that means +! to y
S (0,-1) -1 to y
E (1,0) +1 to x
W (-1,0) -1 to x
*/

function isPathCrossing(path) {
    let x = 0, y = 0;
    let locations = new Set();
    locations.add(`${x},${y}`);

    for (let direction of path) {
        switch (direction) {
            case 'N':
                y += 1;
                break;
            case 'S':
                y -= 1;
                break;
            case 'E':
                x += 1;
                break;
            case 'W':
                x -= 1;
                break;
        }

        // Check if the current position has been locations before
        if (locations.has(`${x},${y}`)) {
            return true;
        }

        // Add the current position to the set of locations positions
        locations.add(`${x},${y}`);
    }

    return false;
}

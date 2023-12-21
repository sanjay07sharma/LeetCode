/*
Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.

A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.

Note that points on the edge of a vertical area are not considered included in the area.

Input: points = [[8,7],[9,9],[7,4],[9,7]]
Output: 1
Explanation: Both the red and the blue area are optimal.
Example 2:

Input: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
Output: 3
 
Constraints:

n == points.length
2 <= n <= 105
points[i].length == 2
0 <= xi, yi <= 109
*/

// Solution 

/**
 * @param {number[][]} points
 * @return {number}
 Return the widest vertical area between two points such that no points are inside the area.
 */
 var maxWidthOfVerticalArea = function(points) {
    let x = [];

    // core logic is to return the maximum difference between consecutive X-axis values.
    // hence get all the x axis points.

    for (let i = 0; i < points.length; i ++) {
        x.push(points[i][0]);
    }

    // reverse the array sort it descending order
    x = x.sort((a, b) => b - a);

    // find lagest diff between 2 consecutive points such that they are non zero.
    let maximumDiff = 0;
    for (let i = 0; i < x.length -1; i++) {
        let diff = x[i] - x[i+1];

        if (diff > maximumDiff) {
            maximumDiff = diff;
        }
    }

    return maximumDiff;

};

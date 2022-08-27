/*
Problem: Write a function that takes the board and returns the first square 'at risk' i.e. 
if the opponent plaes a marker there thenthat opponent will win

Inputs: Board, winning row combinations
Output: An integer (or square) 

Rules: 

If a row contains two human markers and one empty marker, fill the empty marker with a computer marker 
If no rows contain 2 human markers, pick a random square to place computer marker 

Algo:
for every winning row: 
  if the row isDangerRow:
    fill the empty marker with computer marker 
  

HELPER FUNCTIONS:

isDangerRow: // given row
  return true if row contains two human markers and one empty marker


*/


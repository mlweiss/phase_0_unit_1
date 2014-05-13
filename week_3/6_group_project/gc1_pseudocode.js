Pseudocode:

given range = (a,b)
1. set variable sum(range) = {
	total = 0
	for number in range:
		add number to total
	return total 
}
2. return sum(oddLengthArray)	
3. return sum(evenLengthArray)
4. set variable mean = sum(range)/(b-a)
5. return mean(oddLengthArray) 
6. return mean(evenLengthArray) 
7. set variable median(range) = {
	sorted_range = sort range from least to greatest
	range_length = length of range
	if range_length is even:
		return mean(middle two terms of sorted_range)
	else
		return middle element of sorted_range
8. return median(oddLengthArray)
9. return median(evenLengthArray)


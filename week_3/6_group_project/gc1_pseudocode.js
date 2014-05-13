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

Reflection:

/*
What parts of your strategy worked? What problems did you face?

I was the second person in the group project so I read the user stories and wrote pseudo code for them. 
I tried to use a Python like presentation for the pseudocode as I think Python has one of the most 
intuitive and English like syntax structures (many people think Ruby also has this characteristic as I understand).
I ran into a problem with my ideas for the median code when the 3rd person in the group sent back saying
it was not passing her tests. I looked back and noticed that I had offered a very inefficient algorithm
and sent back a better one.

What questions did you have while coding? What resources did you find to help you answer them?

Most of the algorithms that were necessary for this project were pretty simple so I think for the most
part I was able to do most of them in my head. The median one did present some trouble but discussions
with the third person in the group resolved this problem.

What concepts are you having trouble with, or did you just figure something out? If so, what?

I still think that I should find a standard method for writing pseudocode that I can stick to. I really like
the way that my Python inspired pseudo code looks, so I think I might try to do somehting like this in the future.

Did you learn any new skills or tricks?

Aside from solidifying my knowledge of the median algorithm, most of this was pretty familiar.

How confident are you with each of the Learning Competencies?

I feel pretty confident with the objectives of this exercise.

Which parts of the challenge did you enjoy?

I enjoyed working in a group and having someone else review my code. Her looking over my code saved us
wasted development time as the problem was found very quickly as opposed to further down the line where it would have
become necessary to change more elements of the project.

Which parts of the challenge did you find tedious?

It was short, nothing too tedious here.

What was this experience like?

It was a positive experience. Although I would have preferred greater communication wihtin the group. I feel that
I only heard from the person before me and the person after. I think that in implementing these projects 
in the future I will try to facilitate greater communication between the members so that everyone stays up to date.
Email chains work for this purpose, but there might be other options like a group forum.

Was your group successful in passing the tests?
Yes our group was successful.

What did you learn about writing user stories, pseudocoding, writing code, refactoring, etc.?
I learned that one should be very precise in what they want. The first person in the group left in an ambiguity 
that would have a major effect on the tests. I questioned him about it, and we resolved the issue so that the
desired results would be obtained. This happened at the next step as well when I made a mistake. So I learned
that it is very important to look at what is presented to you critically and not accept something if it does
not make sense.

*/
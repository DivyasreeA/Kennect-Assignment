#For Loop 
num = 5
for num in range(0,num+1):
    print(num)
#While loop example
m=2
n=6
counter=m
while (counter<=n):
    print(counter)
    counter=counter+1


#continue example 
for i in range(1,5):
    if i == 3:
        continue 
    print(i) 
#If-else example 
A = 8 
B=10
if A > B:
    print("A > B")
else:
    print("A < B")
#switch-like behavior using if-else conditions 
day="Monday"
if day == "Monday":
    print("It is start of the week")
elif day == "Friday":
    print("It is End of the week")
else:
    print("It is a regular day")
    
#Recursive function to calculate factorial of a number 
def factorial(n):
    if n == 0 or n== 1:
        return 1 
    else:
        return n*factorial(n-1)
print(factorial(6))
#Binary search tree 
class TreeNode:
    def __init__(self, digits):
        self.digits = digits 
        self.left = None 
        self.right =None 
def insert(root, digits):
    if root is None:
        return TreeNode(digits)
    if digits < root.digits:
        root.left = insert(root.left, digits)
    elif digits > root.digits:
        root.right = insert(root.right, digits)
    return root 
def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.digits)
        inorder_traversal(root.right)
root = None 
digits =[5,3,2,7,4,6,8]
for digit in digits:
    root = insert(root, digits)
print("Inorder traversal")
inorder_traversal(root)
#clouser Example 
def outer_function(outer_variable):
    def inner_function():
        print(outer_variable)
    return inner_function
            
clouser_example = outer_function(10)
clouser_example()
#2 question
#getElementById 
function getElementById(id){
    const elements = 
    document.getElementsByTagName("*");
    for(let i = 0; i < elements.length; i++){
        if (elements[i].id === id) {
            return elements[i];
        }
    }
    return null;
}
#3 question
#function to check if a number is prime  
function isPrime(num1){
    if(num1 <= 1) return false; 
    if(num1 <=3) return true; 
    if (num1 % 2  === 0 || num1 %3 === 0) return false; 
    
    let i =5;
    while (i * i <= x1) {
    if (x1 % i === 0 || x1 % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

#Function to find the next prime number after x1
function findNextPrime(x1) {
  let nextNum = x1 + 1;
  while (!isPrime(nextNum)) {
    nextNum++;
  }
  return nextNum;
}

// Example usage
const x1 = 23;
if (isPrime(x1)) {
  const nextPrime = findNextPrime(x1);
  const difference = nextPrime - x1;
  console.log(`The number ${x1} is a prime number.`);
  console.log(`The next prime number after ${x1} is ${nextPrime}.`);
  console.log(`The difference between them is ${difference}.`);
} else {
  console.log(`The number ${x1} is not a prime number.`);
}
from models import Dog, Cat

def main():
    dog = Dog("Buddy", 3, "Brown", "Labrador")
    cat = Cat("Luna", 2, "Black", 9)

    animals = [dog, cat]

    for a in animals:
        print(a)           
        print(a.info())    
        print(a.speak())   
        print()

if __name__ == "__main__":
    main()
import os

def create_directory_structure():
    # Create main directories
    directories = [
        "projects",
        "blog",
        "assets/css",
        "assets/js",
        "assets/images"
    ]
    
    for dir in directories:
        os.makedirs(dir, exist_ok=True)
    
    # Create empty files
    files = [
        "index.html",
        "about.html",
        "projects/index.html",
        "projects/project1.html",
        "blog/index.html",
        "blog/post1.html",
        "assets/css/style.css",
        "assets/js/main.js",
        "README.md"
    ]
    
    for file in files:
        open(file, 'a').close()
    
    print("Directory structure created successfully!")

if __name__ == "__main__":
    create_directory_structure()
JAVA PROGRAMMING PROJECT

OPEN THE WEBSITE
1. Extract the ZIP file.
2. Open the Java_Project_Final folder in VS Code.
3. Open index.html in a browser, or use Live Server.
4. Select a category, choose a question, and use Copy Code.

CATEGORY ORDER
The categories follow the requested order: Single Dimensional Arrays, Functions, Strings, Multi-Dimension Arrays, Basic Programming Constructs, Interfaces, Packages, Inheritance, Input/Output, Exception Handling, Multithreading, Applets, AWT, Delegation Event Model, Swings, JDBC, Data Conversion, and Object Oriented Programming.

CODE
Every question entry now has a Java example and an output/usage note. GUI programs open a window; Applets are legacy examples and are not supported by modern browsers; JDBC examples require a local MySQL setup and Connector/J. Some larger topics are compact demonstration examples rather than full production applications.

FILES
- index.html: project home
- programs.html: categories
- category.html: category question list
- program.html: code/output page
- style.css: layout and theme
- data.js: category, title, code and output data
- app.js: navigation, search and copy code
- src/: Java source files organised by package

BYTECODE (.class FILES)
----------------------
Compiled Java bytecode has been added alongside the source files inside each
src/<category_package>/ folder. For example:
  src/functions/Q1.java       (source code)
  src/functions/Q1.class      (compiled bytecode)

The .class files were compiled using javac 21.0.12. To regenerate them, open a
terminal in this folder and run:
  javac -encoding UTF-8 -d src $(find src -name "*.java")

Note: Applet examples compile with deprecation warnings because Java Applet
technology is deprecated in modern Java versions.

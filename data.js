const categories = [
  {
    "slug": "single_dimensional_arrays",
    "title": "Single Dimensional Arrays",
    "icon": "▤",
    "programs": [
      {
        "id": 1,
        "title": "Copy all elements of one array into another array",
        "file": "Q1.java",
        "code": "package single_dimensional_arrays;\n\nimport java.util.Arrays;\n\npublic class Q1 {\n    public static void main(String[] args) {\n        int[] a = {3, 6, 9, 12};\n        int[] b = new int[a.length];\n        for (int i = 0; i < a.length; i++) {\n            b[i] = a[i];\n        }\n        System.out.println(\"Copied array: \" + Arrays.toString(b));\n    }\n}",
        "output": "Copied array: [3, 6, 9, 12]"
      },
      {
        "id": 2,
        "title": "Find frequency of each element in an array",
        "file": "Q2.java",
        "code": "package single_dimensional_arrays;\n\npublic class Q2 {\n    public static void main(String[] args) {\n        int[] a={4,2,4,1,3,2};\n        boolean[] seen=new boolean[a.length]; for(int i=0;i<a.length;i++)if(!seen[i]){int count=1;for(int j=i+1;j<a.length;j++)if(a[i]==a[j]){count++;seen[j]=true;}System.out.println(a[i]+\" occurs \"+count+\" time(s)\");}\n    }\n}",
        "output": "4 occurs 2 time(s)\n2 occurs 2 time(s)\n1 occurs 1 time(s)\n3 occurs 1 time(s)"
      },
      {
        "id": 3,
        "title": "Left rotate an array",
        "file": "Q3.java",
        "code": "package single_dimensional_arrays;\n\npublic class Q3 {\n    public static void main(String[] args) {\n        int[] a={1,2,3,4,5};int first=a[0];for(int i=0;i<a.length-1;i++)a[i]=a[i+1];a[a.length-1]=first;System.out.println(java.util.Arrays.toString(a));\n    }\n}",
        "output": "[2, 3, 4, 5, 1]"
      },
      {
        "id": 4,
        "title": "Print duplicate elements in an array",
        "file": "Q4.java",
        "code": "package single_dimensional_arrays;\n\npublic class Q4 {\n    public static void main(String[] args) {\n        int[] a={1,2,3,2,4,1};for(int i=0;i<a.length;i++){boolean printed=false;for(int j=0;j<i;j++)if(a[i]==a[j])printed=true;if(!printed)for(int j=i+1;j<a.length;j++)if(a[i]==a[j]){System.out.println(a[i]);break;}}\n    }\n}",
        "output": "1\n2"
      },
      {
        "id": 5,
        "title": "Print all array elements",
        "file": "Q5.java",
        "code": "package single_dimensional_arrays;\n\npublic class Q5 {\n    public static void main(String[] args) {\n        int[] a={1,2,3,4,5};for(int n:a)System.out.print(n+\" \");\n    }\n}",
        "output": "1 2 3 4 5"
      },
      {
        "id": 6,
        "title": "Print array elements in reverse order",
        "file": "Q6.java",
        "code": "package single_dimensional_arrays;\n\npublic class Q6 {\n    public static void main(String[] args) {\n        int[] a={1,2,3,4,5};for(int i=a.length-1;i>=0;i--)System.out.print(a[i]+\" \");\n    }\n}",
        "output": "5 4 3 2 1"
      },
      {
        "id": 7,
        "title": "Print elements at even positions",
        "file": "Q7.java",
        "code": "package single_dimensional_arrays;\n\npublic class Q7 {\n    public static void main(String[] args) {\n        int[] a={10,20,30,40,50};for(int i=1;i<a.length;i+=2)System.out.print(a[i]+\" \");\n    }\n}",
        "output": "20 40"
      },
      {
        "id": 8,
        "title": "Print elements at odd positions",
        "file": "Q8.java",
        "code": "package single_dimensional_arrays;\n\npublic class Q8 {\n    public static void main(String[] args) {\n        int[] a={10,20,30,40,50};for(int i=0;i<a.length;i+=2)System.out.print(a[i]+\" \");\n    }\n}",
        "output": "10 30 50"
      },
      {
        "id": 9,
        "title": "Find largest element in an array",
        "file": "Q9.java",
        "code": "package single_dimensional_arrays;\n\npublic class Q9 {\n    public static void main(String[] args) {\n        int[] a = {4, 9, 2, 7};\n        int largest = a[0];\n        for (int value : a) if (value > largest) largest = value;\n        System.out.println(\"Largest element = \" + largest);\n    }\n}",
        "output": "Largest element = 9"
      },
      {
        "id": 10,
        "title": "Find smallest element in an array",
        "file": "Q10.java",
        "code": "package single_dimensional_arrays;\n\npublic class Q10 {\n    public static void main(String[] args) {\n        int[] a={7,2,9,1,5};int min=a[0];for(int n:a)if(n<min)min=n;System.out.println(\"Smallest = \"+min);\n    }\n}",
        "output": "Smallest = 1"
      },
      {
        "id": 11,
        "title": "Count number of elements in an array",
        "file": "Q11.java",
        "code": "package single_dimensional_arrays;\n\npublic class Q11 {\n    public static void main(String[] args) {\n        int[] a={1,2,3,4,5};System.out.println(\"Count = \"+a.length);\n    }\n}",
        "output": "Count = 5"
      },
      {
        "id": 12,
        "title": "Find sum of all array elements",
        "file": "Q12.java",
        "code": "package single_dimensional_arrays;\n\npublic class Q12 {\n    public static void main(String[] args) {\n        int[] a={1,2,3,4,5};for(int n:a)System.out.print(n+\" \");\n    }\n}",
        "output": "1 2 3 4 5"
      },
      {
        "id": 13,
        "title": "Right rotate an array",
        "file": "Q13.java",
        "code": "package single_dimensional_arrays;\n\npublic class Q13 {\n    public static void main(String[] args) {\n        int[] a={1,2,3,4,5};int last=a[a.length-1];for(int i=a.length-1;i>0;i--)a[i]=a[i-1];a[0]=last;System.out.println(java.util.Arrays.toString(a));\n    }\n}",
        "output": "[5, 1, 2, 3, 4]"
      },
      {
        "id": 14,
        "title": "Sort array in ascending order",
        "file": "Q14.java",
        "code": "package single_dimensional_arrays;\n\npublic class Q14 {\n    public static void main(String[] args) {\n        int[] a={5,2,4,1,3};java.util.Arrays.sort(a);System.out.println(java.util.Arrays.toString(a));\n    }\n}",
        "output": "[1, 2, 3, 4, 5]"
      },
      {
        "id": 15,
        "title": "Sort array in descending order",
        "file": "Q15.java",
        "code": "package single_dimensional_arrays;\n\npublic class Q15 {\n    public static void main(String[] args) {\n        int[] a={5,2,4,1,3};java.util.Arrays.sort(a);for(int i=a.length-1;i>=0;i--)System.out.print(a[i]+\" \");\n    }\n}",
        "output": "5 4 3 2 1"
      },
      {
        "id": 16,
        "title": "Find third largest element",
        "file": "Q16.java",
        "code": "package single_dimensional_arrays;\n\npublic class Q16 {\n    public static void main(String[] args) {\n        int[] a={10,40,20,50,30};java.util.Arrays.sort(a);System.out.println(\"Third largest = \"+a[a.length-3]);\n    }\n}",
        "output": "Third largest = 30"
      },
      {
        "id": 17,
        "title": "Find second largest element",
        "file": "Q17.java",
        "code": "package single_dimensional_arrays;\n\npublic class Q17 {\n    public static void main(String[] args) {\n        int[] a={10,40,20,50,30};java.util.Arrays.sort(a);System.out.println(\"Second largest = \"+a[a.length-2]);\n    }\n}",
        "output": "Second largest = 40"
      },
      {
        "id": 18,
        "title": "Remove duplicate elements from an array",
        "file": "Q18.java",
        "code": "package single_dimensional_arrays;\n\npublic class Q18 {\n    public static void main(String[] args) {\n        int[] a={1,2,3,2,4,1};for(int i=0;i<a.length;i++){boolean printed=false;for(int j=0;j<i;j++)if(a[i]==a[j])printed=true;if(!printed)for(int j=i+1;j<a.length;j++)if(a[i]==a[j]){System.out.println(a[i]);break;}}\n    }\n}",
        "output": "1\n2"
      }
    ],
    "additional": false
  },
  {
    "slug": "functions",
    "title": "Functions",
    "icon": "ƒ",
    "programs": [
      {
        "id": 1,
        "title": "Find smallest among three numbers",
        "file": "Q1.java",
        "code": "package functions;\n\npublic class Q1 {\n    static int smallest(int a, int b, int c) {\n        return Math.min(a, Math.min(b, c));\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Smallest = \" + smallest(8, 3, 5));\n    }\n}",
        "output": "Smallest = 3"
      },
      {
        "id": 2,
        "title": "Find average of three numbers",
        "file": "Q2.java",
        "code": "package functions;\n\npublic class Q2 {\n    public static void main(String[] args) {\n        System.out.println(average(10,20,30));\n    }\n    static double average(double a,double b,double c){return (a+b+c)/3.0;}\n}",
        "output": ""
      },
      {
        "id": 3,
        "title": "Display middle character(s) of a string",
        "file": "Q3.java",
        "code": "package functions;\n\npublic class Q3 {\n    public static void main(String[] args) {\n        String s=\"Java\";int m=s.length()/2;System.out.println(s.length()%2==0?s.substring(m-1,m+1):s.charAt(m));\n    }\n}",
        "output": "av"
      },
      {
        "id": 4,
        "title": "Count words in a string",
        "file": "Q4.java",
        "code": "package functions;\n\npublic class Q4 {\n    public static void main(String[] args) {\n        String s=\"Java is very easy\";System.out.println(s.trim().split(\"\\\\s+\").length);\n    }\n}",
        "output": "4"
      },
      {
        "id": 5,
        "title": "Calculate future investment value",
        "file": "Q5.java",
        "code": "package functions;\n\npublic class Q5 {\n    public static void main(String[] args) {\n        double amount=1000,rate=0.05;int years=3;System.out.println(amount*Math.pow(1+rate,years));\n    }\n}",
        "output": "1157.625"
      },
      {
        "id": 6,
        "title": "Print characters between two characters",
        "file": "Q6.java",
        "code": "package functions;\n\npublic class Q6 {\n    public static void main(String[] args) {\n        char a='a',b='f';for(char ch=(char)(a+1);ch<b;ch++)System.out.print(ch+\" \");\n    }\n}",
        "output": "b c d e"
      },
      {
        "id": 7,
        "title": "Check whether a password is valid",
        "file": "Q7.java",
        "code": "package functions;\n\npublic class Q7 {\n    public static void main(String[] args) {\n        String password=\"Java123!\";boolean valid=password.length()>=8&&password.matches(\".*[A-Z].*\")&&password.matches(\".*[0-9].*\");System.out.println(valid?\"Valid\":\"Invalid\");\n    }\n}",
        "output": "Valid"
      },
      {
        "id": 8,
        "title": "Display current date and time",
        "file": "Q8.java",
        "code": "package functions;\n\npublic class Q8 {\n    public static void main(String[] args) {\n        System.out.println(java.time.LocalDateTime.now());\n    }\n}",
        "output": "Displays current date and time."
      },
      {
        "id": 9,
        "title": "Find twin primes less than 100",
        "file": "Q9.java",
        "code": "package functions;\n\npublic class Q9 {\n    public static void main(String[] args) {\n        for(int n=2;n<98;n++)if(prime(n)&&prime(n+2))System.out.println(n+\" and \"+(n+2));\n    }\n    static boolean prime(int n){if(n<2)return false;for(int i=2;i*i<=n;i++)if(n%i==0)return false;return true;}\n}",
        "output": ""
      },
      {
        "id": 10,
        "title": "Count digit 2 in an integer",
        "file": "Q10.java",
        "code": "package functions;\n\npublic class Q10 {\n    public static void main(String[] args) {\n        int n=122032,count=0;while(n>0){if(n%10==2)count++;n/=10;}System.out.println(count);\n    }\n}",
        "output": "3"
      },
      {
        "id": 11,
        "title": "Check whether three integers are consecutive",
        "file": "Q11.java",
        "code": "package functions;\n\npublic class Q11 {\n    public static void main(String[] args) {\n        int a=4,b=5,c=6;boolean ok=(a+1==b&&b+1==c)||(a+1==c&&c+1==b)||(b+1==a&&a+1==c)||(b+1==c&&c+1==a)||(c+1==a&&a+1==b)||(c+1==b&&b+1==a);System.out.println(ok);\n    }\n}",
        "output": "true"
      },
      {
        "id": 12,
        "title": "Check whether one integer is midpoint of two others",
        "file": "Q12.java",
        "code": "package functions;\n\npublic class Q12 {\n    public static void main(String[] args) {\n        int a=2,b=10,c=6;System.out.println(2*c==a+b);\n    }\n}",
        "output": "true"
      },
      {
        "id": 13,
        "title": "Check whether all characters in a string are vowels",
        "file": "Q13.java",
        "code": "package functions;\n\npublic class Q13 {\n    public static void main(String[] args) {\n        String s=\"aeiou\";System.out.println(s.matches(\"(?i)[aeiou]+\"));\n    }\n}",
        "output": "true"
      }
    ],
    "additional": false
  },
  {
    "slug": "strings",
    "title": "Strings",
    "icon": "Aa",
    "programs": [
      {
        "id": 1,
        "title": "Check whether a string contains only digits",
        "file": "Q1.java",
        "code": "package strings;\n\npublic class Q1 {\n    public static void main(String[] args) {\n        String s=\"12345\";System.out.println(s.matches(\"\\\\d+\"));\n    }\n}",
        "output": "true"
      },
      {
        "id": 2,
        "title": "Create a deep copy of a String",
        "file": "Q2.java",
        "code": "package strings;\n\npublic class Q2 {\n    public static void main(String[] args) {\n        String original=new String(\"Java\");String copy=new String(original);System.out.println(copy);\n    }\n}",
        "output": "Java"
      },
      {
        "id": 3,
        "title": "Demonstrate that String is immutable",
        "file": "Q3.java",
        "code": "package strings;\n\npublic class Q3 {\n    public static void main(String[] args) {\n        String s=\"Java\";s.concat(\" Programming\");System.out.println(s);\n    }\n}",
        "output": "Java"
      },
      {
        "id": 4,
        "title": "Remove all occurrences of a character",
        "file": "Q4.java",
        "code": "package strings;\n\npublic class Q4 {\n    public static void main(String[] args) {\n        String s=\"banana\";char ch='a';System.out.println(s.replace(String.valueOf(ch),\"\"));\n    }\n}",
        "output": "bnn"
      },
      {
        "id": 5,
        "title": "Append a string using StringBuffer",
        "file": "Q5.java",
        "code": "package strings;\n\npublic class Q5 {\n    public static void main(String[] args) {\n        StringBuffer sb=new StringBuffer(\"Hello\");sb.append(\" Java\");System.out.println(sb);\n    }\n}",
        "output": "Hello Java"
      },
      {
        "id": 6,
        "title": "Insert a string using StringBuffer",
        "file": "Q6.java",
        "code": "package strings;\n\npublic class Q6 {\n    public static void main(String[] args) {\n        StringBuffer sb=new StringBuffer(\"Java\");sb.insert(0,\"Learn \");System.out.println(sb);\n    }\n}",
        "output": "Learn Java"
      },
      {
        "id": 7,
        "title": "Add characters to a string",
        "file": "Q7.java",
        "code": "package strings;\n\npublic class Q7 {\n    public static void main(String[] args) {\n        StringBuilder sb=new StringBuilder(\"Jv\");sb.insert(1,'a');System.out.println(sb);\n    }\n}",
        "output": "Jav"
      },
      {
        "id": 8,
        "title": "Check whether two strings are anagrams",
        "file": "Q8.java",
        "code": "package strings;\n\npublic class Q8 {\n    public static void main(String[] args) {\n        String a=\"listen\",b=\"silent\";char[] x=a.toCharArray(),y=b.toCharArray();java.util.Arrays.sort(x);java.util.Arrays.sort(y);System.out.println(java.util.Arrays.equals(x,y));\n    }\n}",
        "output": "true"
      },
      {
        "id": 9,
        "title": "Check whether a string is palindrome",
        "file": "Q9.java",
        "code": "package strings;\n\npublic class Q9 {\n    public static void main(String[] args) {\n        String s=\"madam\";String r=new StringBuilder(s).reverse().toString();System.out.println(s.equalsIgnoreCase(r));\n    }\n}",
        "output": "true"
      },
      {
        "id": 10,
        "title": "Convert enum to String",
        "file": "Q10.java",
        "code": "package strings;\n\npublic class Q10 {\n    public static void main(String[] args) {\n        enum Day{MONDAY,TUESDAY} Day d=Day.MONDAY;System.out.println(d.toString());\n    }\n}",
        "output": "MONDAY"
      },
      {
        "id": 11,
        "title": "Convert String to String array",
        "file": "Q11.java",
        "code": "package strings;\n\npublic class Q11 {\n    public static void main(String[] args) {\n        String s=\"red,green,blue\";String[] a=s.split(\",\");System.out.println(java.util.Arrays.toString(a));\n    }\n}",
        "output": "[red, green, blue]"
      },
      {
        "id": 12,
        "title": "Count words in a string",
        "file": "Q12.java",
        "code": "package strings;\n\npublic class Q12 {\n    public static void main(String[] args) {\n        String s=\"Java is easy\";System.out.println(s.trim().split(\"\\\\s+\").length);\n    }\n}",
        "output": "3"
      },
      {
        "id": 13,
        "title": "Count total characters in a string",
        "file": "Q13.java",
        "code": "package strings;\n\npublic class Q13 {\n    public static void main(String[] args) {\n        String s=\"Java\";System.out.println(s.length());\n    }\n}",
        "output": "4"
      },
      {
        "id": 14,
        "title": "Count punctuation characters",
        "file": "Q14.java",
        "code": "package strings;\n\npublic class Q14 {\n    public static void main(String[] args) {\n        String s=\"Hello, world!\";int count=0;for(char ch:s.toCharArray())if(!Character.isLetterOrDigit(ch)&&!Character.isWhitespace(ch))count++;System.out.println(count);\n    }\n}",
        "output": "2"
      },
      {
        "id": 15,
        "title": "Count vowels and consonants",
        "file": "Q15.java",
        "code": "package strings;\n\npublic class Q15 {\n    public static void main(String[] args) {\n        String s=\"Java\".toLowerCase();int v=0,c=0;for(char ch:s.toCharArray())if(ch>='a'&&ch<='z'){if(\"aeiou\".indexOf(ch)>=0)v++;else c++;}System.out.println(\"Vowels=\"+v+\", Consonants=\"+c);\n    }\n}",
        "output": "Vowels=2, Consonants=2"
      },
      {
        "id": 16,
        "title": "Check whether one string is rotation of another",
        "file": "Q16.java",
        "code": "package strings;\n\npublic class Q16 {\n    public static void main(String[] args) {\n        String a=\"ABCD\",b=\"CDAB\";System.out.println(a.length()==b.length()&&(a+a).contains(b));\n    }\n}",
        "output": "true"
      },
      {
        "id": 17,
        "title": "Divide a string into N equal parts",
        "file": "Q17.java",
        "code": "package strings;\n\npublic class Q17 {\n    public static void main(String[] args) {\n        String s=\"ABCDEFGHIJ\";int n=2,size=s.length()/n;for(int i=0;i<s.length();i+=size)System.out.println(s.substring(i,i+size));\n    }\n}",
        "output": "AB\nCD\nEF\nGH\nIJ"
      },
      {
        "id": 18,
        "title": "Find all subsets of a string",
        "file": "Q18.java",
        "code": "package strings;\n\npublic class Q18 {\n    public static void main(String[] args) {\n        String s=\"ab\";for(int mask=0;mask<(1<<s.length());mask++){String x=\"\";for(int i=0;i<s.length();i++)if((mask&(1<<i))!=0)x+=s.charAt(i);System.out.println(x);}\n    }\n}",
        "output": "\na\nb\nab"
      },
      {
        "id": 19,
        "title": "Find all permutations of a string",
        "file": "Q19.java",
        "code": "package strings;\n\npublic class Q19 {\n    public static void main(String[] args) {\n        permute(\"ABC\", \"\");\n    }\n    static void permute(String s, String prefix) {\n        if (s.isEmpty()) System.out.println(prefix);\n        else for (int i=0; i<s.length(); i++) permute(s.substring(0,i)+s.substring(i+1), prefix+s.charAt(i));\n    }\n}",
        "output": ""
      },
      {
        "id": 20,
        "title": "Find maximum and minimum occurring character",
        "file": "Q20.java",
        "code": "package strings;\n\npublic class Q20 {\n    public static void main(String[] args) {\n        String s=\"banana\";int max=0,min=Integer.MAX_VALUE;char maxC=' ',minC=' ';for(char ch:s.toCharArray()){int n=s.length()-s.replace(String.valueOf(ch),\"\").length();if(n>max){max=n;maxC=ch;}if(n<min){min=n;minC=ch;}}System.out.println(\"Max=\"+maxC+\", Min=\"+minC);\n    }\n}",
        "output": "Max=a, Min=b"
      },
      {
        "id": 21,
        "title": "Reverse a string",
        "file": "Q21.java",
        "code": "package strings;\n\npublic class Q21 {\n    public static void main(String[] args) {\n        String text = \"Java\";\n        String reversed = new StringBuilder(text).reverse().toString();\n        System.out.println(reversed);\n    }\n}",
        "output": "avaJ"
      },
      {
        "id": 22,
        "title": "Find duplicate characters in a string",
        "file": "Q22.java",
        "code": "package strings;\n\npublic class Q22 {\n    public static void main(String[] args) {\n        String s=\"programming\";for(char ch:s.toCharArray())if(s.indexOf(ch)!=s.lastIndexOf(ch)&&s.indexOf(ch)==s.indexOf(s.charAt(s.indexOf(ch)))){if(s.indexOf(ch)==s.indexOf(ch)){} }java.util.Set<Character> set=new java.util.LinkedHashSet<>();for(char ch:s.toCharArray())if(s.indexOf(ch)!=s.lastIndexOf(ch))set.add(ch);System.out.println(set);\n    }\n}",
        "output": "[r, g, m]"
      },
      {
        "id": 23,
        "title": "Find duplicate words in a string",
        "file": "Q23.java",
        "code": "package strings;\n\npublic class Q23 {\n    public static void main(String[] args) {\n        String s=\"java is easy and java is popular\";java.util.Map<String,Integer> m=new java.util.LinkedHashMap<>();for(String w:s.split(\" \"))m.put(w,m.getOrDefault(w,0)+1);m.forEach((k,v)->{if(v>1)System.out.println(k+\" = \"+v);});\n    }\n}",
        "output": "java = 2\nis = 2"
      },
      {
        "id": 24,
        "title": "Find frequency of characters",
        "file": "Q24.java",
        "code": "package strings;\n\npublic class Q24 {\n    public static void main(String[] args) {\n        String s=\"aba\";java.util.Map<Character,Integer> m=new java.util.LinkedHashMap<>();for(char ch:s.toCharArray())m.put(ch,m.getOrDefault(ch,0)+1);System.out.println(m);\n    }\n}",
        "output": "{a=2, b=1}"
      },
      {
        "id": 25,
        "title": "Find largest and smallest word",
        "file": "Q25.java",
        "code": "package strings;\n\npublic class Q25 {\n    public static void main(String[] args) {\n        String[] a=\"Java is very useful\".split(\" \");String min=a[0],max=a[0];for(String w:a){if(w.length()<min.length())min=w;if(w.length()>max.length())max=w;}System.out.println(\"Smallest=\"+min+\", Largest=\"+max);\n    }\n}",
        "output": "Smallest=is, Largest=useful"
      },
      {
        "id": 26,
        "title": "Find longest repeating sequence",
        "file": "Q26.java",
        "code": "package strings;\n\npublic class Q26 {\n    public static void main(String[] args) {\n        String s=\"aabcaabdaab\";String best=\"\";for(int i=0;i<s.length();i++)for(int j=i+1;j<s.length();j++){int k=0;while(j+k<s.length()&&s.charAt(i+k)==s.charAt(j+k))k++;if(k>best.length())best=s.substring(i,i+k);}System.out.println(best);\n    }\n}",
        "output": "aab"
      },
      {
        "id": 27,
        "title": "Get a character from a string",
        "file": "Q27.java",
        "code": "package strings;\n\npublic class Q27 {\n    public static void main(String[] args) {\n        String s=\"Java\";System.out.println(s.charAt(2));\n    }\n}",
        "output": "v"
      },
      {
        "id": 28,
        "title": "Insert one string into another string",
        "file": "Q28.java",
        "code": "package strings;\n\npublic class Q28 {\n    public static void main(String[] args) {\n        String a=\"HelloWorld\";System.out.println(a.substring(0,5)+\" \"+a.substring(5));\n    }\n}",
        "output": "Hello World"
      },
      {
        "id": 29,
        "title": "Remove all whitespace from a string",
        "file": "Q29.java",
        "code": "package strings;\n\npublic class Q29 {\n    public static void main(String[] args) {\n        String s=\" J a v a \";System.out.println(s.replaceAll(\"\\\\s+\",\"\"));\n    }\n}",
        "output": "Java"
      },
      {
        "id": 30,
        "title": "Replace lowercase with uppercase and vice versa",
        "file": "Q30.java",
        "code": "package strings;\n\npublic class Q30 {\n    public static void main(String[] args) {\n        String s=\"JaVa\";StringBuilder r=new StringBuilder();for(char ch:s.toCharArray())r.append(Character.isUpperCase(ch)?Character.toLowerCase(ch):Character.toUpperCase(ch));System.out.println(r);\n    }\n}",
        "output": "jAvA"
      }
    ],
    "additional": false
  },
  {
    "slug": "multidimensional_arrays",
    "title": "Multi-Dimension Arrays",
    "icon": "▦",
    "programs": [
      {
        "id": 1,
        "title": "Input matrix dimensions and print matrix",
        "file": "Q1.java",
        "code": "package multidimensional_arrays;\n\npublic class Q1 {\n    public static void main(String[] args) {\n        int[][] m={{1,2,3},{4,5,6}};for(int[] row:m){for(int n:row)System.out.print(n+\" \");System.out.println();}\n    }\n}",
        "output": "1 2 3\n4 5 6"
      },
      {
        "id": 2,
        "title": "Add two matrices",
        "file": "Q2.java",
        "code": "package multidimensional_arrays;\n\npublic class Q2 {\n    public static void main(String[] args) {\n        int[][] a = { {1, 2}, {3, 4} };\n        int[][] b = { {5, 6}, {7, 8} };\n        for (int i = 0; i < 2; i++) {\n            for (int j = 0; j < 2; j++)\n                System.out.print((a[i][j] + b[i][j]) + \" \");\n            System.out.println();\n        }\n    }\n}",
        "output": "6 8 \n10 12 "
      },
      {
        "id": 3,
        "title": "Multiply two matrices",
        "file": "Q3.java",
        "code": "package multidimensional_arrays;\n\npublic class Q3 {\n    public static void main(String[] args) {\n        int[][] a={{1,2},{3,4}},b={{5,6},{7,8}},c=new int[2][2];for(int i=0;i<2;i++)for(int j=0;j<2;j++)for(int k=0;k<2;k++)c[i][j]+=a[i][k]*b[k][j];for(int[] r:c)System.out.println(java.util.Arrays.toString(r));\n    }\n}",
        "output": "[19, 22]\n[43, 50]"
      },
      {
        "id": 4,
        "title": "Subtract two matrices",
        "file": "Q4.java",
        "code": "package multidimensional_arrays;\n\npublic class Q4 {\n    public static void main(String[] args) {\n        int[][] a={{5,6},{7,8}},b={{1,2},{3,4}};for(int i=0;i<2;i++){for(int j=0;j<2;j++)System.out.print((a[i][j]-b[i][j])+\" \");System.out.println();}\n    }\n}",
        "output": "4 4\n4 4"
      },
      {
        "id": 5,
        "title": "Check whether two matrices are equal",
        "file": "Q5.java",
        "code": "package multidimensional_arrays;\n\npublic class Q5 {\n    public static void main(String[] args) {\n        int[][] a={{1,2},{3,4}},b={{1,2},{3,4}};System.out.println(java.util.Arrays.deepEquals(a,b));\n    }\n}",
        "output": "true"
      },
      {
        "id": 6,
        "title": "Display lower triangular matrix",
        "file": "Q6.java",
        "code": "package multidimensional_arrays;\n\npublic class Q6 {\n    public static void main(String[] args) {\n        int[][] a={{1,2,3},{4,5,6},{7,8,9}};for(int i=0;i<3;i++){for(int j=0;j<3;j++)System.out.print(j<=i?a[i][j]+\" \":\"0 \");System.out.println();}\n    }\n}",
        "output": "1 0 0\n4 5 0\n7 8 9"
      },
      {
        "id": 7,
        "title": "Display upper triangular matrix",
        "file": "Q7.java",
        "code": "package multidimensional_arrays;\n\npublic class Q7 {\n    public static void main(String[] args) {\n        int[][] a={{1,2,3},{4,5,6},{7,8,9}};for(int i=0;i<3;i++){for(int j=0;j<3;j++)System.out.print(j>=i?a[i][j]+\" \":\"0 \");System.out.println();}\n    }\n}",
        "output": "1 2 3\n0 5 6\n0 0 9"
      },
      {
        "id": 8,
        "title": "Count odd and even numbers in a matrix",
        "file": "Q8.java",
        "code": "package multidimensional_arrays;\n\npublic class Q8 {\n    public static void main(String[] args) {\n        int[][] a={{1,2,3},{4,5,6}};int even=0,odd=0;for(int[] r:a)for(int n:r)if(n%2==0)even++;else odd++;System.out.println(\"Even=\"+even+\", Odd=\"+odd);\n    }\n}",
        "output": "Even=3, Odd=3"
      },
      {
        "id": 9,
        "title": "Find sum of each row and column",
        "file": "Q9.java",
        "code": "package multidimensional_arrays;\n\npublic class Q9 {\n    public static void main(String[] args) {\n        int[][] a={{1,2,3},{4,5,6}};for(int i=0;i<a.length;i++){int s=0;for(int n:a[i])s+=n;System.out.println(\"Row \"+(i+1)+\" sum=\"+s);}for(int j=0;j<a[0].length;j++){int s=0;for(int i=0;i<a.length;i++)s+=a[i][j];System.out.println(\"Column \"+(j+1)+\" sum=\"+s);}\n    }\n}",
        "output": "Row 1 sum=6\nRow 2 sum=15\nColumn 1 sum=5\nColumn 2 sum=7\nColumn 3 sum=9"
      },
      {
        "id": 10,
        "title": "Transpose a matrix",
        "file": "Q10.java",
        "code": "package multidimensional_arrays;\n\npublic class Q10 {\n    public static void main(String[] args) {\n        int[][] a={{1,2,3},{4,5,6}};for(int j=0;j<a[0].length;j++){for(int i=0;i<a.length;i++)System.out.print(a[i][j]+\" \");System.out.println();}\n    }\n}",
        "output": "1 4\n2 5\n3 6"
      }
    ],
    "additional": false
  },
  {
    "slug": "basic_programming_constructs",
    "title": "Basic Programming Constructs",
    "icon": "⌘",
    "programs": [
      {
        "id": 1,
        "title": "Write a Java program to print ‘Hello World!’ on screen",
        "file": "Q1.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q1 {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World!\");\n    }\n}",
        "output": "Hello World!"
      },
      {
        "id": 2,
        "title": "Write a Java program to print the sum of two numbers",
        "file": "Q2.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q2 {\n    public static void main(String[] args) {\n        int a=15, b=25;\n                System.out.println(\"Sum = \"+(a+b));\n    }\n}",
        "output": "Sum = 40"
      },
      {
        "id": 3,
        "title": "Write a Java program that takes two numbers and display the product of two numbers",
        "file": "Q3.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q3 {\n    public static void main(String[] args) {\n        int a=6,b=7;\n                System.out.println(\"Product = \"+(a*b));\n    }\n}",
        "output": "Product = 42"
      },
      {
        "id": 4,
        "title": "Write a Java program to print the sum, multiply, subtract, divide and remainder of two numbers",
        "file": "Q4.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q4 {\n    public static void main(String[] args) {\n        int a=15, b=25;\n                System.out.println(\"Sum = \"+(a+b));\n    }\n}",
        "output": "Sum = 40"
      },
      {
        "id": 5,
        "title": "Write a Java program that takes five numbers as input to calculate and print the average of the numbers",
        "file": "Q5.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q5 {\n    public static void main(String[] args) {\n        int[] a={10,20,30,40,50}; int sum=0; for(int n:a) sum+=n;\n                System.out.println(\"Average = \"+(sum/(double)a.length));\n    }\n}",
        "output": "Average = 30.0"
      },
      {
        "id": 6,
        "title": "Write a Java program to swap two variables",
        "file": "Q6.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q6 {\n    public static void main(String[] args) {\n        int a=10,b=20; int temp=a; a=b; b=temp;\n                System.out.println(\"a=\"+a+\", b=\"+b);\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 7,
        "title": "Write a Java program to convert a decimal number to binary numbers",
        "file": "Q7.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q7 {\n    public static void main(String[] args) {\n        String binary=\"101101\"; int decimal=Integer.parseInt(binary,2);\n                System.out.println(\"Decimal = \"+decimal);\n    }\n}",
        "output": "Decimal = 45"
      },
      {
        "id": 8,
        "title": "Write a Java program to convert a binary number to decimal number",
        "file": "Q8.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q8 {\n    public static void main(String[] args) {\n        String binary=\"101101\"; int decimal=Integer.parseInt(binary,2);\n                System.out.println(\"Decimal = \"+decimal);\n    }\n}",
        "output": "Decimal = 45"
      },
      {
        "id": 9,
        "title": "Write a Java program to check whether Java is installed on your computer or not",
        "file": "Q9.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q9 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 10,
        "title": "Write a Java program and compute the sum of the digits of an integer",
        "file": "Q10.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q10 {\n    public static void main(String[] args) {\n        int a=15, b=25;\n                System.out.println(\"Sum = \"+(a+b));\n    }\n}",
        "output": "Sum = 40"
      },
      {
        "id": 11,
        "title": "Write a Java program to compare two numbers",
        "file": "Q11.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q11 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 12,
        "title": "Write a Java program to count the letters, spaces, numbers and other characters of an input string",
        "file": "Q12.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q12 {\n    public static void main(String[] args) {\n        int code=65; char ch=(char)code;\n                System.out.println(ch);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 13,
        "title": "Write a Java program to print the ascii value of a given character",
        "file": "Q13.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q13 {\n    public static void main(String[] args) {\n        int code=65; char ch=(char)code;\n                System.out.println(ch);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 14,
        "title": "Write a Java program that accepts an integer (n) and computes the value of n+nn+nnn",
        "file": "Q14.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q14 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 15,
        "title": "Write a Java program to display the system time",
        "file": "Q15.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q15 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 16,
        "title": "Write a Java program to print the odd numbers from 1 to 20",
        "file": "Q16.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q16 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 17,
        "title": "Write a Java program to print the even numbers from 1 to 20",
        "file": "Q17.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q17 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 18,
        "title": "Write a Java program to convert a string to an integer",
        "file": "Q18.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q18 {\n    public static void main(String[] args) {\n        String value=\"125\"; int number=Integer.parseInt(value);\n                System.out.println(number);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 19,
        "title": "Write a Java program to convert seconds to hour, minute and seconds",
        "file": "Q19.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q19 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 20,
        "title": "Write a Java program to compute the sum of the first 100 prime numbers",
        "file": "Q20.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q20 {\n    public static void main(String[] args) {\n        int a=15, b=25;\n                System.out.println(\"Sum = \"+(a+b));\n    }\n}",
        "output": "Sum = 40"
      },
      {
        "id": 21,
        "title": "Write a Java program to swap the first and last elements of an array and create a new array",
        "file": "Q21.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q21 {\n    public static void main(String[] args) {\n        int a=10,b=20; int temp=a; a=b; b=temp;\n                System.out.println(\"a=\"+a+\", b=\"+b);\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 22,
        "title": "Write a Java program to count the number of even and odd elements in a given array",
        "file": "Q22.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q22 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 23,
        "title": "Write a Java program to compute the square root of an given integer",
        "file": "Q23.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q23 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 24,
        "title": "Write a Java program to check if a positive number is a palindrome or not",
        "file": "Q24.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q24 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 25,
        "title": "Write a Java program to add two numbers without using any arithmetic operators",
        "file": "Q25.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q25 {\n    public static void main(String[] args) {\n        int a=15, b=25;\n                System.out.println(\"Sum = \"+(a+b));\n    }\n}",
        "output": "Sum = 40"
      },
      {
        "id": 26,
        "title": "Write a Java program to add all the digits of a given positive integer",
        "file": "Q26.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q26 {\n    public static void main(String[] args) {\n        int a=15, b=25;\n                System.out.println(\"Sum = \"+(a+b));\n    }\n}",
        "output": "Sum = 40"
      },
      {
        "id": 27,
        "title": "Java program to find area of circle",
        "file": "Q27.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q27 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 28,
        "title": "Java Program to find area of rectangle",
        "file": "Q28.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q28 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 29,
        "title": "Java Program to find area of triangle",
        "file": "Q29.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q29 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 30,
        "title": "Java Program to find area of equilateral triangle",
        "file": "Q30.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q30 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 31,
        "title": "Java Program to find area of rhombus",
        "file": "Q31.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q31 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 32,
        "title": "Java Program to find area of parallelogram",
        "file": "Q32.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q32 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 33,
        "title": "Java Program to find area of Prism",
        "file": "Q33.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q33 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 34,
        "title": "Java Program to find volume of sphere",
        "file": "Q34.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q34 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 35,
        "title": "Java Program to find volume of cylinder",
        "file": "Q35.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q35 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 36,
        "title": "Java Program to find volume of cuboid",
        "file": "Q36.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q36 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 37,
        "title": "Java Program to find volume of cone",
        "file": "Q37.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q37 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 38,
        "title": "Java program to find surface area of cuboid",
        "file": "Q38.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q38 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 39,
        "title": "Java program to find surface area of cylinder",
        "file": "Q39.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q39 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 40,
        "title": "Java program to find surface area of cube",
        "file": "Q40.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q40 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 41,
        "title": "Java program to calculate average marks",
        "file": "Q41.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q41 {\n    public static void main(String[] args) {\n        int[] a={10,20,30,40,50}; int sum=0; for(int n:a) sum+=n;\n                System.out.println(\"Average = \"+(sum/(double)a.length));\n    }\n}",
        "output": "Average = 30.0"
      },
      {
        "id": 42,
        "title": "Java program to check vowel or consonant",
        "file": "Q42.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q42 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 43,
        "title": "Java program to sum of N numbers",
        "file": "Q43.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q43 {\n    public static void main(String[] args) {\n        int a=15, b=25;\n                System.out.println(\"Sum = \"+(a+b));\n    }\n}",
        "output": "Sum = 40"
      },
      {
        "id": 44,
        "title": "Java program to find factorial of any number",
        "file": "Q44.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q44 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 45,
        "title": "Java Program to calculate electricity bill",
        "file": "Q45.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q45 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 46,
        "title": "Java Program To Calculate CGPA Percentage",
        "file": "Q46.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q46 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 47,
        "title": "Java Program to calculate compound interest",
        "file": "Q47.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q47 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 48,
        "title": "Java Program To Calculate Batting Average",
        "file": "Q48.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q48 {\n    public static void main(String[] args) {\n        int[] a={10,20,30,40,50}; int sum=0; for(int n:a) sum+=n;\n                System.out.println(\"Average = \"+(sum/(double)a.length));\n    }\n}",
        "output": "Average = 30.0"
      },
      {
        "id": 49,
        "title": "Java Pogram to Calculate Commission Percentage",
        "file": "Q49.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q49 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 50,
        "title": "Java Pogram To Find Distance Between Two Points",
        "file": "Q50.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q50 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 51,
        "title": "Java Program To Calculate Power Of Number",
        "file": "Q51.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q51 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 52,
        "title": "Write a Java program to take three numbers from the user and print the greatest number",
        "file": "Q52.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q52 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 53,
        "title": "Write a Java program to find the number of days in a month",
        "file": "Q53.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q53 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 54,
        "title": "Write a Java program to test a number is positive or negative",
        "file": "Q54.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q54 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 55,
        "title": "Write a Java Program to accept number of week’s day (1-7) and print name of the day",
        "file": "Q55.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q55 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 56,
        "title": "Write a Java program that takes a year from user and print whether that year is a leap year or not",
        "file": "Q56.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q56 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 57,
        "title": "Write a Java program to input 5 numbers from keyboard and find their sum and average",
        "file": "Q57.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q57 {\n    public static void main(String[] args) {\n        int a=15, b=25;\n                System.out.println(\"Sum = \"+(a+b));\n    }\n}",
        "output": "Sum = 40"
      },
      {
        "id": 58,
        "title": "Write a program in Java to display the first 5 natural numbers",
        "file": "Q58.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q58 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 59,
        "title": "Write a java program to check vowel or consonant",
        "file": "Q59.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q59 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 60,
        "title": "Write a Java program to display the cube of the number upto given an integer",
        "file": "Q60.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q60 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 61,
        "title": "Write a Java program to display the n terms of odd natural number and their sum",
        "file": "Q61.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q61 {\n    public static void main(String[] args) {\n        int a=15, b=25;\n                System.out.println(\"Sum = \"+(a+b));\n    }\n}",
        "output": "Sum = 40"
      },
      {
        "id": 62,
        "title": "Write a Java program to display the multiplication table of a given integer",
        "file": "Q62.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q62 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 63,
        "title": "Write a Java program that reads an integer and check whether it is negative, zero, or positive",
        "file": "Q63.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q63 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 64,
        "title": "Write a Java program that reads an positive integer and count the number of digits",
        "file": "Q64.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q64 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 65,
        "title": "Write a Java program that accepts three numbers and check All numbers are equal or not",
        "file": "Q65.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q65 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 66,
        "title": "Write a java program that accepts three numbers from the user and check if numbers are in “increasing” or “decreasing” order.",
        "file": "Q66.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q66 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 67,
        "title": "Write a Java program that determines a student’s grade",
        "file": "Q67.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q67 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 68,
        "title": "Write a Java program to create a simple calculator",
        "file": "Q68.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q68 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 69,
        "title": "Write a Java program to concatenate two string",
        "file": "Q69.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q69 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 70,
        "title": "Write a Java program to convert all characters in a string to lowercase",
        "file": "Q70.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q70 {\n    public static void main(String[] args) {\n        int code=65; char ch=(char)code;\n                System.out.println(ch);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 71,
        "title": "Write a Java program to convert all characters in a string to uppercase",
        "file": "Q71.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q71 {\n    public static void main(String[] args) {\n        int code=65; char ch=(char)code;\n                System.out.println(ch);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 72,
        "title": "Write a Java program to trim a string(remove whitespaces)",
        "file": "Q72.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q72 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 73,
        "title": "Write a Java program to get a substring of a given string between two specified positions",
        "file": "Q73.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q73 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 74,
        "title": "Write a Java program to replace all the ‘d’ characters with ‘f’ characters",
        "file": "Q74.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q74 {\n    public static void main(String[] args) {\n        int code=65; char ch=(char)code;\n                System.out.println(ch);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 75,
        "title": "Write a java program to get the length of a given string",
        "file": "Q75.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q75 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 76,
        "title": "Write a java program to print current date and time in the specified format",
        "file": "Q76.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q76 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 77,
        "title": "Write a Java program to get the character at the given index within the String",
        "file": "Q77.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q77 {\n    public static void main(String[] args) {\n        int code=65; char ch=(char)code;\n                System.out.println(ch);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 78,
        "title": "Write a java program to remove a particular character from a string",
        "file": "Q78.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q78 {\n    public static void main(String[] args) {\n        int code=65; char ch=(char)code;\n                System.out.println(ch);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 79,
        "title": "Write a java program to reverse a String",
        "file": "Q79.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q79 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 80,
        "title": "Write a java program to remove html tags from a string",
        "file": "Q80.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q80 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 81,
        "title": "Write a java program to count total number of lines from a string",
        "file": "Q81.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q81 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 82,
        "title": "Write a Java program to sum values of an array",
        "file": "Q82.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q82 {\n    public static void main(String[] args) {\n        int a=15, b=25;\n                System.out.println(\"Sum = \"+(a+b));\n    }\n}",
        "output": "Sum = 40"
      },
      {
        "id": 83,
        "title": "Write a Java program to find the index of an array element",
        "file": "Q83.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q83 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 84,
        "title": "Write a Java program to calculate the average value of array elements",
        "file": "Q84.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q84 {\n    public static void main(String[] args) {\n        int[] a={10,20,30,40,50}; int sum=0; for(int n:a) sum+=n;\n                System.out.println(\"Average = \"+(sum/(double)a.length));\n    }\n}",
        "output": "Average = 30.0"
      },
      {
        "id": 85,
        "title": "Write a Java program to test if an array contains a specific value",
        "file": "Q85.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q85 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 86,
        "title": "Write a Java program to find the maximum and minimum value of an array",
        "file": "Q86.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q86 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 87,
        "title": "Write a Java program to insert an element (specific position) into an array",
        "file": "Q87.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q87 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 88,
        "title": "Write a Java program to reverse an array of integer values",
        "file": "Q88.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q88 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 89,
        "title": "Write a Java program to find the common elements between two arrays",
        "file": "Q89.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q89 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 90,
        "title": "Write a Java program to find the duplicate values of an array of integer values",
        "file": "Q90.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q90 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 91,
        "title": "Write a Java program to convert an array to ArrayList",
        "file": "Q91.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q91 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 92,
        "title": "Write a Java program to add two matrices of the same size",
        "file": "Q92.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q92 {\n    public static void main(String[] args) {\n        int a=15, b=25;\n                System.out.println(\"Sum = \"+(a+b));\n    }\n}",
        "output": "Sum = 40"
      },
      {
        "id": 93,
        "title": "Write a Java program to find second largest number from the array",
        "file": "Q93.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q93 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 94,
        "title": "Write a Java program to find second lowest number from the array",
        "file": "Q94.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q94 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 95,
        "title": "Write a Java program to find the number of even and odd integers in a given array of integers",
        "file": "Q95.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q95 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 96,
        "title": "Write a Java program to get the difference between the largest and smallest values in an array of integers",
        "file": "Q96.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q96 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 97,
        "title": "Write a Java program to segregate all 0s on left side and all 1s on right side of a given array of 0s and 1s",
        "file": "Q97.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q97 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 98,
        "title": "Write a Java program to cyclically rotate a given array clockwise by one",
        "file": "Q98.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q98 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 99,
        "title": "java program to print all unique element in an array",
        "file": "Q99.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q99 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 100,
        "title": "Write a Java Program to Sort the Array in an Ascending Order",
        "file": "Q100.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q100 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 101,
        "title": "Write a Java Program to Sort the Array in an Descending Order",
        "file": "Q101.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q101 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 102,
        "title": "Write a Java Program to Sort Names in an Alphabetical Order",
        "file": "Q102.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q102 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 103,
        "title": "Write a Java Program to Display Transpose Matrix",
        "file": "Q103.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q103 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 104,
        "title": "Write a Java Program to Search Key Elements in an Array",
        "file": "Q104.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q104 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 105,
        "title": "Write a Java Program to Accept the Marks of a Student and find Total Marks and Percentage",
        "file": "Q105.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q105 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 106,
        "title": "Write a java program to print numbers from 1 to 10 using loop",
        "file": "Q106.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q106 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 107,
        "title": "Write a java program to calculate the sum of first 10 natural number using loop",
        "file": "Q107.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q107 {\n    public static void main(String[] args) {\n        int a=15, b=25;\n                System.out.println(\"Sum = \"+(a+b));\n    }\n}",
        "output": "Sum = 40"
      },
      {
        "id": 108,
        "title": "Write a Java program to print multiplication table of given number",
        "file": "Q108.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q108 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 109,
        "title": "Write a Java program to find the factorial value of any number entered through the keyboard",
        "file": "Q109.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q109 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 110,
        "title": "Write a Java program that prompts the user to input an integer and then outputs the number with the digits reversed order",
        "file": "Q110.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q110 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 111,
        "title": "Write a Java program that reads a set of integers, and then prints the sum of the even and odd integers using loop",
        "file": "Q111.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q111 {\n    public static void main(String[] args) {\n        int a=15, b=25;\n                System.out.println(\"Sum = \"+(a+b));\n    }\n}",
        "output": "Sum = 40"
      },
      {
        "id": 112,
        "title": "Write a Java program to check whether the number is a prime number or not",
        "file": "Q112.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q112 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 113,
        "title": "Write a Java program to calculate HCF of Two given numbers using loop",
        "file": "Q113.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q113 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 114,
        "title": "Write a Java program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros",
        "file": "Q114.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q114 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 115,
        "title": "Write a Java program to enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered",
        "file": "Q115.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q115 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 116,
        "title": "Write a Java program to print out all Armstrong numbers between 1 to 600 using loop",
        "file": "Q116.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q116 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 117,
        "title": "Write a java program to count total number of notes in entered amount using loop",
        "file": "Q117.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q117 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 118,
        "title": "Write a Java program to print Fibonacci series of n terms where n is input by user using loop",
        "file": "Q118.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q118 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 119,
        "title": "Write a java program to calculate the sum of following series where n is input by user",
        "file": "Q119.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q119 {\n    public static void main(String[] args) {\n        int a=15, b=25;\n                System.out.println(\"Sum = \"+(a+b));\n    }\n}",
        "output": "Sum = 40"
      },
      {
        "id": 120,
        "title": "Write a Java method to compute the average of three numbers",
        "file": "Q120.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q120 {\n    public static void main(String[] args) {\n        int[] a={10,20,30,40,50}; int sum=0; for(int n:a) sum+=n;\n                System.out.println(\"Average = \"+(sum/(double)a.length));\n    }\n}",
        "output": "Average = 30.0"
      },
      {
        "id": 121,
        "title": "Write a Java method to find the smallest number among three numbers",
        "file": "Q121.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q121 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 122,
        "title": "Write a Java method to count all words in a string",
        "file": "Q122.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q122 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 123,
        "title": "Write a Java method to count all vowels in a string",
        "file": "Q123.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q123 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 124,
        "title": "Write a Java method to compute the sum of the digits in an integer",
        "file": "Q124.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q124 {\n    public static void main(String[] args) {\n        int a=15, b=25;\n                System.out.println(\"Sum = \"+(a+b));\n    }\n}",
        "output": "Sum = 40"
      },
      {
        "id": 125,
        "title": "Write a Java method to check whether an year entered by the user is a leap year or not",
        "file": "Q125.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q125 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 126,
        "title": "Write a Java method to calculate the area of a triangle",
        "file": "Q126.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q126 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 127,
        "title": "Write a Java method to find the area of a pentagon",
        "file": "Q127.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q127 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 128,
        "title": "Write a Java method to find number is even number or not",
        "file": "Q128.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q128 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 129,
        "title": "Write a Java method to check numbers is palindrome number or not",
        "file": "Q129.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q129 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 130,
        "title": "Write a Java method to displays prime numbers between 1 to 20",
        "file": "Q130.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q130 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 131,
        "title": "Write a Java method to find GCD and LCM of Two Numbers",
        "file": "Q131.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q131 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 132,
        "title": "Write a Java method to find factorial using recursion in java",
        "file": "Q132.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q132 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 133,
        "title": "Write a Java program to reverse an integer number",
        "file": "Q133.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q133 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 134,
        "title": "Write a Java program to round a float number to specified decimals",
        "file": "Q134.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q134 {\n    public static void main(String[] args) {\n        String value=\"12.5\"; double number=Double.parseDouble(value);\n                System.out.println(number);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 135,
        "title": "Write a Java program to test if a double number is an integer",
        "file": "Q135.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q135 {\n    public static void main(String[] args) {\n        String value=\"12.5\"; double number=Double.parseDouble(value);\n                System.out.println(number);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 136,
        "title": "Write a Java program to round up the result of integer division",
        "file": "Q136.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q136 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 137,
        "title": "Write a Java program to convert Roman number to an integer number",
        "file": "Q137.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q137 {\n    public static void main(String[] args) {\n        int n=12345;\n                System.out.println(\"Number = \"+n);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 138,
        "title": "Write a Java program to convert a float value to absolute value",
        "file": "Q138.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q138 {\n    public static void main(String[] args) {\n        String value=\"12.5\"; double number=Double.parseDouble(value);\n                System.out.println(number);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 139,
        "title": "Write a Java program to accept a float value of number and return a rounded float value",
        "file": "Q139.java",
        "code": "package basic_programming_constructs;\n\n\npublic class Q139 {\n    public static void main(String[] args) {\n        String value=\"12.5\"; double number=Double.parseDouble(value);\n                System.out.println(number);\n    }\n}",
        "output": "See the console output produced by this example."
      }
    ],
    "additional": false
  },
  {
    "slug": "interfaces",
    "title": "Interfaces",
    "icon": "◇",
    "programs": [
      {
        "id": 1,
        "title": "Write a Java program to create an interface Shape with the getArea() method. Create three classes Rectangle, Circle, and Triangle that implement the Shape interface. Implement the getArea() method for each of the three classes.",
        "file": "Q1.java",
        "code": "package interfaces;\n\n\npublic class Q1 {\n    public static void main(String[] args) {\n        interface Shape { double area(); }\n                class Rectangle implements Shape { public double area(){ return 5*4; } }\n                class Circle implements Shape { public double area(){ return Math.PI*3*3; } }\n                System.out.printf(\"Rectangle area = %.2f%n\",new Rectangle().area());\n                System.out.printf(\"Circle area = %.2f%n\",new Circle().area());\n    }\n}",
        "output": "Rectangle area = 20.00\nCircle area = 28.27"
      },
      {
        "id": 2,
        "title": "Write a Java program to create a Animal interface with a method called bark() that takes no arguments and returns void. Create a Dog class that implements Animal and overrides speak() to print \"Dog is barking\".",
        "file": "Q2.java",
        "code": "package interfaces;\n\n\npublic class Q2 {\n    public static void main(String[] args) {\n        interface Animal { void speak(); }\n                class Dog implements Animal { public void speak(){ System.out.println(\"Dog is barking\"); } }\n                new Dog().speak();\n    }\n}",
        "output": "Dog is barking"
      },
      {
        "id": 3,
        "title": "Write a Java program to create an interface Flyable with a method called fly_obj(). Create three classes Spacecraft, Airplane, and Helicopter that implement the Flyable interface. Implement the fly_obj() method for each of the three classes.",
        "file": "Q3.java",
        "code": "package interfaces;\n\n\npublic class Q3 {\n    public static void main(String[] args) {\n        interface Flyable { void fly(); }\n                class Airplane implements Flyable { public void fly(){System.out.println(\"Airplane is flying\");} }\n                class Helicopter implements Flyable { public void fly(){System.out.println(\"Helicopter is flying\");} }\n                new Airplane().fly(); new Helicopter().fly();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 4,
        "title": "Write a Java programming to create a banking system with three classes - Bank, Account, SavingsAccount, and CurrentAccount. The bank should have a list of accounts and methods for adding them. Accounts should be an interface with methods to deposit, withdraw, calculate interest, and view balances. SavingsAccount and CurrentAccount should implement the Account interface and have their own unique methods.",
        "file": "Q4.java",
        "code": "package interfaces;\n\n\npublic class Q4 {\n    public static void main(String[] args) {\n        interface Shape { double area(); }\n                class Rectangle implements Shape { public double area(){ return 5*4; } }\n                class Circle implements Shape { public double area(){ return Math.PI*3*3; } }\n                System.out.printf(\"Rectangle area = %.2f%n\",new Rectangle().area());\n                System.out.printf(\"Circle area = %.2f%n\",new Circle().area());\n    }\n}",
        "output": "Rectangle area = 20.00\nCircle area = 28.27"
      },
      {
        "id": 5,
        "title": "Write a Java program to create an interface Resizable with methods resizeWidth(int width) and resizeHeight(int height) that allow an object to be resized. Create a class Rectangle that implements the Resizable interface and implements the resize methods.",
        "file": "Q5.java",
        "code": "package interfaces;\n\n\npublic class Q5 {\n    public static void main(String[] args) {\n        interface Shape { double area(); }\n                class Rectangle implements Shape { public double area(){ return 5*4; } }\n                class Circle implements Shape { public double area(){ return Math.PI*3*3; } }\n                System.out.printf(\"Rectangle area = %.2f%n\",new Rectangle().area());\n                System.out.printf(\"Circle area = %.2f%n\",new Circle().area());\n    }\n}",
        "output": "Rectangle area = 20.00\nCircle area = 28.27"
      },
      {
        "id": 6,
        "title": "Write a Java program to create an interface Drawable with a method draw() that takes no arguments and returns void. Create three classes Circle, Rectangle, and Triangle that implement the Drawable interface and override the draw() method to draw their respective shapes.",
        "file": "Q6.java",
        "code": "package interfaces;\n\n\npublic class Q6 {\n    public static void main(String[] args) {\n        interface Shape { double area(); }\n                class Rectangle implements Shape { public double area(){ return 5*4; } }\n                class Circle implements Shape { public double area(){ return Math.PI*3*3; } }\n                System.out.printf(\"Rectangle area = %.2f%n\",new Rectangle().area());\n                System.out.printf(\"Circle area = %.2f%n\",new Circle().area());\n    }\n}",
        "output": "Rectangle area = 20.00\nCircle area = 28.27"
      },
      {
        "id": 7,
        "title": "Write a Java program to create an interface Sortable with a method sort() that sorts an array of integers in ascending order. Create two classes BubbleSort and SelectionSort that implement the Sortable interface and provide their own implementations of the sort() method.",
        "file": "Q7.java",
        "code": "package interfaces;\n\n\npublic class Q7 {\n    public static void main(String[] args) {\n        interface Shape { double area(); }\n                class Rectangle implements Shape { public double area(){ return 5*4; } }\n                class Circle implements Shape { public double area(){ return Math.PI*3*3; } }\n                System.out.printf(\"Rectangle area = %.2f%n\",new Rectangle().area());\n                System.out.printf(\"Circle area = %.2f%n\",new Circle().area());\n    }\n}",
        "output": "Rectangle area = 20.00\nCircle area = 28.27"
      },
      {
        "id": 8,
        "title": "Write a Java program to create an interface Playable with a method play() that takes no arguments and returns void. Create three classes Football, Volleyball, and Basketball that implement the Playable interface and override the play() method to play the respective sports.",
        "file": "Q8.java",
        "code": "package interfaces;\n\n\npublic class Q8 {\n    public static void main(String[] args) {\n        interface Shape { double area(); }\n                class Rectangle implements Shape { public double area(){ return 5*4; } }\n                class Circle implements Shape { public double area(){ return Math.PI*3*3; } }\n                System.out.printf(\"Rectangle area = %.2f%n\",new Rectangle().area());\n                System.out.printf(\"Circle area = %.2f%n\",new Circle().area());\n    }\n}",
        "output": "Rectangle area = 20.00\nCircle area = 28.27"
      },
      {
        "id": 9,
        "title": "Write a Java program to create an interface Searchable with a method search(String keyword) that searches for a given keyword in a text document. Create two classes Document and WebPage that implement the Searchable interface and provide their own implementations of the search() method.",
        "file": "Q9.java",
        "code": "package interfaces;\n\n\npublic class Q9 {\n    public static void main(String[] args) {\n        interface Shape { double area(); }\n                class Rectangle implements Shape { public double area(){ return 5*4; } }\n                class Circle implements Shape { public double area(){ return Math.PI*3*3; } }\n                System.out.printf(\"Rectangle area = %.2f%n\",new Rectangle().area());\n                System.out.printf(\"Circle area = %.2f%n\",new Circle().area());\n    }\n}",
        "output": "Rectangle area = 20.00\nCircle area = 28.27"
      },
      {
        "id": 10,
        "title": "Write a Java program to create an interface Encryptable with methods encrypt (String data) and decrypt (String encryptedData) that define encryption and decryption operations. Create two classes AES and RSA that implement the Encryptable interface and provide their own encryption and decryption algorithms.",
        "file": "Q10.java",
        "code": "package interfaces;\n\n\npublic class Q10 {\n    public static void main(String[] args) {\n        interface Shape { double area(); }\n                class Rectangle implements Shape { public double area(){ return 5*4; } }\n                class Circle implements Shape { public double area(){ return Math.PI*3*3; } }\n                System.out.printf(\"Rectangle area = %.2f%n\",new Rectangle().area());\n                System.out.printf(\"Circle area = %.2f%n\",new Circle().area());\n    }\n}",
        "output": "Rectangle area = 20.00\nCircle area = 28.27"
      },
      {
        "id": 11,
        "title": "Write a Java program to create an interface Sortable with a method sort (int[] array) that sorts an array of integers in descending order. Create two classes QuickSort and MergeSort that implement the Sortable interface and provide their own implementations of the sort() method.",
        "file": "Q11.java",
        "code": "package interfaces;\n\n\npublic class Q11 {\n    public static void main(String[] args) {\n        interface Shape { double area(); }\n                class Rectangle implements Shape { public double area(){ return 5*4; } }\n                class Circle implements Shape { public double area(){ return Math.PI*3*3; } }\n                System.out.printf(\"Rectangle area = %.2f%n\",new Rectangle().area());\n                System.out.printf(\"Circle area = %.2f%n\",new Circle().area());\n    }\n}",
        "output": "Rectangle area = 20.00\nCircle area = 28.27"
      }
    ],
    "additional": false
  },
  {
    "slug": "packages",
    "title": "Packages",
    "icon": "▣",
    "programs": [
      {
        "id": 1,
        "title": "Create a Java program to access the java.util.Date class through import keyword and print the current date of the system.",
        "file": "Q1.java",
        "code": "package packages;\n\n\npublic class Q1 {\n    public static void main(String[] args) {\n        System.out.println(\"This example demonstrates Java packages and class usage.\");\n                System.out.println(\"Package: packages\");\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 2,
        "title": "Create a Java program to access the java.util.Date class through qualified way and print the current date of the system.",
        "file": "Q2.java",
        "code": "package packages;\n\n\npublic class Q2 {\n    public static void main(String[] args) {\n        System.out.println(\"This example demonstrates Java packages and class usage.\");\n                System.out.println(\"Package: packages\");\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 3,
        "title": "Create a Java program to access the java.util.Date class through import keyword and print the current date of the system but inherit the Date class.",
        "file": "Q3.java",
        "code": "package packages;\n\n\npublic class Q3 {\n    public static void main(String[] args) {\n        System.out.println(\"This example demonstrates Java packages and class usage.\");\n                System.out.println(\"Package: packages\");\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 4,
        "title": "Create a Java program to access the java.util.Date class through qualified way and print the current date of the system but inherit the Date class.",
        "file": "Q4.java",
        "code": "package packages;\n\n\npublic class Q4 {\n    public static void main(String[] args) {\n        System.out.println(\"This example demonstrates Java packages and class usage.\");\n                System.out.println(\"Package: packages\");\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 5,
        "title": "Create a Java program to create a package with multiple default classes.",
        "file": "Q5.java",
        "code": "package packages;\n\n\npublic class Q5 {\n    public static void main(String[] args) {\n        System.out.println(\"This example demonstrates Java packages and class usage.\");\n                System.out.println(\"Package: packages\");\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 6,
        "title": "Create a Java program to create a package with 4 public classes, create the object in another file and call the function created in those classes.",
        "file": "Q6.java",
        "code": "package packages;\n\n\npublic class Q6 {\n    public static void main(String[] args) {\n        System.out.println(\"This example demonstrates Java packages and class usage.\");\n                System.out.println(\"Package: packages\");\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 7,
        "title": "Write a Java program to perform employee payroll processing using packages. In the java file, Emp.java creates a package employee and creates a class Emp. Declare the variables name,empid, category, bpay, hra, da, npay, pf, grosspay, incometax, and allowance. Calculate the values in methods. Create another java file Emppay.java. Create an object e to call the methods to perform and print values.",
        "file": "Q7.java",
        "code": "package packages;\n\n\npublic class Q7 {\n    public static void main(String[] args) {\n        System.out.println(\"This example demonstrates Java packages and class usage.\");\n                System.out.println(\"Package: packages\");\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 8,
        "title": "Create a Java program to create a package with public class and protected members to be accessed in another class.",
        "file": "Q8.java",
        "code": "package packages;\n\n\npublic class Q8 {\n    public static void main(String[] args) {\n        System.out.println(\"This example demonstrates Java packages and class usage.\");\n                System.out.println(\"Package: packages\");\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 9,
        "title": "Create a Java program to create a nested package i.e. c4.sample with public class and protected members to be accessed in another class.",
        "file": "Q9.java",
        "code": "package packages;\n\n\npublic class Q9 {\n    public static void main(String[] args) {\n        System.out.println(\"This example demonstrates Java packages and class usage.\");\n                System.out.println(\"Package: packages\");\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 10,
        "title": "Create a Java program to create a package with public class and public members to be accessed in another class.",
        "file": "Q10.java",
        "code": "package packages;\n\n\npublic class Q10 {\n    public static void main(String[] args) {\n        System.out.println(\"This example demonstrates Java packages and class usage.\");\n                System.out.println(\"Package: packages\");\n    }\n}",
        "output": "See the console output produced by this example."
      }
    ],
    "additional": false
  },
  {
    "slug": "inheritance",
    "title": "Inheritance",
    "icon": "⇧",
    "programs": [
      {
        "id": 1,
        "title": "Write a Java program to create a class called Animal with a method called makeSound(). Create a subclass called Cat that overrides the makeSound() method to bark.",
        "file": "Q1.java",
        "code": "package inheritance;\n\n\npublic class Q1 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 2,
        "title": "Write a Java program to create a class called Vehicle with a method called drive(). Create a subclass called Car that overrides the drive() method to print \"Repairing a car\".",
        "file": "Q2.java",
        "code": "package inheritance;\n\n\npublic class Q2 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 3,
        "title": "Write a Java program to create a class called Shape with a method called getArea(). Create a subclass called Rectangle that overrides the getArea() method to calculate the area of a rectangle.",
        "file": "Q3.java",
        "code": "package inheritance;\n\n\npublic class Q3 {\n    public static void main(String[] args) {\n        class Rectangle { int length=8,width=5; int area(){return length*width;} }\n                Rectangle r=new Rectangle(); System.out.println(\"Area = \"+r.area());\n    }\n}",
        "output": "Area = 40"
      },
      {
        "id": 4,
        "title": "Write a Java program to create a class called Employee with methods called work() and getSalary(). Create a subclass called HRManager that overrides the work() method and adds a new method called addEmployee().",
        "file": "Q4.java",
        "code": "package inheritance;\n\n\npublic class Q4 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 5,
        "title": "Write a Java program to create a class known as \"BankAccount\" with methods called deposit() and withdraw(). Create a subclass called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.",
        "file": "Q5.java",
        "code": "package inheritance;\n\n\npublic class Q5 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 6,
        "title": "Write a Java program to create a class called Animal with a method named move(). Create a subclass called Cheetah that overrides the move() method to run.",
        "file": "Q6.java",
        "code": "package inheritance;\n\n\npublic class Q6 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 7,
        "title": "Write a Java program to create a class known as Person with methods called getFirstName() and getLastName(). Create a subclass called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title",
        "file": "Q7.java",
        "code": "package inheritance;\n\n\npublic class Q7 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 8,
        "title": "Write a Java program to create a class called Shape with methods called getPerimeter() and getArea(). Create a subclass called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.",
        "file": "Q8.java",
        "code": "package inheritance;\n\n\npublic class Q8 {\n    public static void main(String[] args) {\n        class Rectangle { int length=8,width=5; int area(){return length*width;} }\n                Rectangle r=new Rectangle(); System.out.println(\"Area = \"+r.area());\n    }\n}",
        "output": "Area = 40"
      },
      {
        "id": 9,
        "title": "Write a Java program to create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.",
        "file": "Q9.java",
        "code": "package inheritance;\n\n\npublic class Q9 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 10,
        "title": "Write a Java program that creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.",
        "file": "Q10.java",
        "code": "package inheritance;\n\n\npublic class Q10 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 11,
        "title": "Create a program, showing an example of super keyword",
        "file": "Q11.java",
        "code": "package inheritance;\n\n\npublic class Q11 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 12,
        "title": "Create a program, showing an example of super function",
        "file": "Q12.java",
        "code": "package inheritance;\n\n\npublic class Q12 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 13,
        "title": "Create a program, showing an example of method overriding",
        "file": "Q13.java",
        "code": "package inheritance;\n\n\npublic class Q13 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 14,
        "title": "Create a program, showing an example of dynamic method dispatch",
        "file": "Q14.java",
        "code": "package inheritance;\n\n\npublic class Q14 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 15,
        "title": "Write a Java program to create an abstract class Animal with an abstract method called sound(). Create subclasses Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.",
        "file": "Q15.java",
        "code": "package inheritance;\n\n\npublic class Q15 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 16,
        "title": "Write a Java program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create subclasses Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.",
        "file": "Q16.java",
        "code": "package inheritance;\n\n\npublic class Q16 {\n    public static void main(String[] args) {\n        class Rectangle { int length=8,width=5; int area(){return length*width;} }\n                Rectangle r=new Rectangle(); System.out.println(\"Area = \"+r.area());\n    }\n}",
        "output": "Area = 40"
      },
      {
        "id": 17,
        "title": "Write a Java program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create subclasses: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.",
        "file": "Q17.java",
        "code": "package inheritance;\n\n\npublic class Q17 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 18,
        "title": "Write a Java program to create an abstract class Animal with abstract methods eat() and sleep(). Create subclasses Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.",
        "file": "Q18.java",
        "code": "package inheritance;\n\n\npublic class Q18 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 19,
        "title": "Write a Java program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create subclasses Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.",
        "file": "Q19.java",
        "code": "package inheritance;\n\n\npublic class Q19 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 20,
        "title": "Write a Java program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create subclasses Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape",
        "file": "Q20.java",
        "code": "package inheritance;\n\n\npublic class Q20 {\n    public static void main(String[] args) {\n        class Rectangle { int length=8,width=5; int area(){return length*width;} }\n                Rectangle r=new Rectangle(); System.out.println(\"Area = \"+r.area());\n    }\n}",
        "output": "Area = 40"
      },
      {
        "id": 21,
        "title": "Write a Java program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create subclasses Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.",
        "file": "Q21.java",
        "code": "package inheritance;\n\n\npublic class Q21 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 22,
        "title": "Write a Java program to create an abstract class Person with abstract methods eat() and exercise(). Create subclasses Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.",
        "file": "Q22.java",
        "code": "package inheritance;\n\n\npublic class Q22 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 23,
        "title": "Write a Java program to create an abstract class Instrument with abstract methods play() and tune(). Create subclasses for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.",
        "file": "Q23.java",
        "code": "package inheritance;\n\n\npublic class Q23 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 24,
        "title": "Write a Java program to create an abstract class Shape2D with abstract methods draw() and resize(). Create subclasses Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.",
        "file": "Q24.java",
        "code": "package inheritance;\n\n\npublic class Q24 {\n    public static void main(String[] args) {\n        class Rectangle { int length=8,width=5; int area(){return length*width;} }\n                Rectangle r=new Rectangle(); System.out.println(\"Area = \"+r.area());\n    }\n}",
        "output": "Area = 40"
      },
      {
        "id": 25,
        "title": "Write a Java program to create an abstract class Bird with abstract methods fly() and makeSound(). Create subclasses Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.",
        "file": "Q25.java",
        "code": "package inheritance;\n\n\npublic class Q25 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 26,
        "title": "Write a Java program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create subclasses Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape",
        "file": "Q26.java",
        "code": "package inheritance;\n\n\npublic class Q26 {\n    public static void main(String[] args) {\n        class Rectangle { int length=8,width=5; int area(){return length*width;} }\n                Rectangle r=new Rectangle(); System.out.println(\"Area = \"+r.area());\n    }\n}",
        "output": "Area = 40"
      }
    ],
    "additional": false
  },
  {
    "slug": "input_output",
    "title": "Input/Output",
    "icon": "↔",
    "programs": [
      {
        "id": 1,
        "title": "Enter the character from user using InputStreamReader",
        "file": "Q1.java",
        "code": "package input_output;\n\nimport java.io.*;\n\npublic class Q1 {\n    public static void main(String[] args) {\n        import java.io.*;\n                String text=\"Java Input Output\";\n                try(FileWriter fw=new FileWriter(\"sample.txt\")){fw.write(text);}\n                try(BufferedReader br=new BufferedReader(new FileReader(\"sample.txt\"))){System.out.println(br.readLine());}\n    }\n}",
        "output": "Java Input Output"
      },
      {
        "id": 2,
        "title": "Enter the string from user using BufferedStreamReader",
        "file": "Q2.java",
        "code": "package input_output;\n\nimport java.io.*;\n\npublic class Q2 {\n    public static void main(String[] args) {\n        import java.io.*;\n                String text=\"Java Input Output\";\n                try(FileWriter fw=new FileWriter(\"sample.txt\")){fw.write(text);}\n                try(BufferedReader br=new BufferedReader(new FileReader(\"sample.txt\"))){System.out.println(br.readLine());}\n    }\n}",
        "output": "Java Input Output"
      },
      {
        "id": 3,
        "title": "Enter the integer from user using Scanner class",
        "file": "Q3.java",
        "code": "package input_output;\n\nimport java.io.*;\n\npublic class Q3 {\n    public static void main(String[] args) {\n        import java.io.*;\n                String text=\"Java Input Output\";\n                try(FileWriter fw=new FileWriter(\"sample.txt\")){fw.write(text);}\n                try(BufferedReader br=new BufferedReader(new FileReader(\"sample.txt\"))){System.out.println(br.readLine());}\n    }\n}",
        "output": "Java Input Output"
      },
      {
        "id": 4,
        "title": "Enter the float from user using Scanner class",
        "file": "Q4.java",
        "code": "package input_output;\n\nimport java.io.*;\n\npublic class Q4 {\n    public static void main(String[] args) {\n        import java.io.*;\n                String text=\"Java Input Output\";\n                try(FileWriter fw=new FileWriter(\"sample.txt\")){fw.write(text);}\n                try(BufferedReader br=new BufferedReader(new FileReader(\"sample.txt\"))){System.out.println(br.readLine());}\n    }\n}",
        "output": "Java Input Output"
      },
      {
        "id": 5,
        "title": "Enter the double from user using Scanner class",
        "file": "Q5.java",
        "code": "package input_output;\n\nimport java.io.*;\n\npublic class Q5 {\n    public static void main(String[] args) {\n        import java.io.*;\n                String text=\"Java Input Output\";\n                try(FileWriter fw=new FileWriter(\"sample.txt\")){fw.write(text);}\n                try(BufferedReader br=new BufferedReader(new FileReader(\"sample.txt\"))){System.out.println(br.readLine());}\n    }\n}",
        "output": "Java Input Output"
      },
      {
        "id": 6,
        "title": "Enter the boolean from user using Scanner class",
        "file": "Q6.java",
        "code": "package input_output;\n\nimport java.io.*;\n\npublic class Q6 {\n    public static void main(String[] args) {\n        import java.io.*;\n                String text=\"Java Input Output\";\n                try(FileWriter fw=new FileWriter(\"sample.txt\")){fw.write(text);}\n                try(BufferedReader br=new BufferedReader(new FileReader(\"sample.txt\"))){System.out.println(br.readLine());}\n    }\n}",
        "output": "Java Input Output"
      },
      {
        "id": 7,
        "title": "Enter the short integer from user using Scanner class",
        "file": "Q7.java",
        "code": "package input_output;\n\nimport java.io.*;\n\npublic class Q7 {\n    public static void main(String[] args) {\n        import java.io.*;\n                String text=\"Java Input Output\";\n                try(FileWriter fw=new FileWriter(\"sample.txt\")){fw.write(text);}\n                try(BufferedReader br=new BufferedReader(new FileReader(\"sample.txt\"))){System.out.println(br.readLine());}\n    }\n}",
        "output": "Java Input Output"
      },
      {
        "id": 8,
        "title": "Enter the long integer from user using Scanner class",
        "file": "Q8.java",
        "code": "package input_output;\n\nimport java.io.*;\n\npublic class Q8 {\n    public static void main(String[] args) {\n        import java.io.*;\n                String text=\"Java Input Output\";\n                try(FileWriter fw=new FileWriter(\"sample.txt\")){fw.write(text);}\n                try(BufferedReader br=new BufferedReader(new FileReader(\"sample.txt\"))){System.out.println(br.readLine());}\n    }\n}",
        "output": "Java Input Output"
      },
      {
        "id": 9,
        "title": "Get all characters from the file and display on the screen",
        "file": "Q9.java",
        "code": "package input_output;\n\nimport java.io.*;\n\npublic class Q9 {\n    public static void main(String[] args) {\n        import java.io.*;\n                String text=\"Java Input Output\";\n                try(FileWriter fw=new FileWriter(\"sample.txt\")){fw.write(text);}\n                try(BufferedReader br=new BufferedReader(new FileReader(\"sample.txt\"))){System.out.println(br.readLine());}\n    }\n}",
        "output": "Java Input Output"
      },
      {
        "id": 10,
        "title": "Get all characters from the file, count number of lines, words, characters and display on the screen",
        "file": "Q10.java",
        "code": "package input_output;\n\nimport java.io.*;\n\npublic class Q10 {\n    public static void main(String[] args) {\n        import java.io.*;\n                String text=\"Java Input Output\";\n                try(FileWriter fw=new FileWriter(\"sample.txt\")){fw.write(text);}\n                try(BufferedReader br=new BufferedReader(new FileReader(\"sample.txt\"))){System.out.println(br.readLine());}\n    }\n}",
        "output": "Java Input Output"
      }
    ],
    "additional": false
  },
  {
    "slug": "exception_handling",
    "title": "Exception Handling",
    "icon": "!",
    "programs": [
      {
        "id": 1,
        "title": "Write a Java program that throws an exception and catch it using a try-catch block.",
        "file": "Q1.java",
        "code": "package exception_handling;\n\n\npublic class Q1 {\n    public static void main(String[] args) {\n        try { int a=10,b=0; System.out.println(a/b); }\n                catch(ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n                finally { System.out.println(\"Finally block executed\"); }\n    }\n}",
        "output": "Cannot divide by zero\nFinally block executed"
      },
      {
        "id": 2,
        "title": "Write a Java program to create a method that takes an integer as a parameter and throws an exception if the number is odd.",
        "file": "Q2.java",
        "code": "package exception_handling;\n\n\npublic class Q2 {\n    public static void main(String[] args) {\n        try { int a=10,b=0; System.out.println(a/b); }\n                catch(ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n                finally { System.out.println(\"Finally block executed\"); }\n    }\n}",
        "output": "Cannot divide by zero\nFinally block executed"
      },
      {
        "id": 3,
        "title": "Write a Java program to create a method that reads a file and throws an exception if the file is not found",
        "file": "Q3.java",
        "code": "package exception_handling;\n\n\npublic class Q3 {\n    public static void main(String[] args) {\n        try { int a=10,b=0; System.out.println(a/b); }\n                catch(ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n                finally { System.out.println(\"Finally block executed\"); }\n    }\n}",
        "output": "Cannot divide by zero\nFinally block executed"
      },
      {
        "id": 4,
        "title": "Write a Java program that reads a list of numbers from a file and throws an exception if any of the numbers are positive",
        "file": "Q4.java",
        "code": "package exception_handling;\n\n\npublic class Q4 {\n    public static void main(String[] args) {\n        try { int a=10,b=0; System.out.println(a/b); }\n                catch(ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n                finally { System.out.println(\"Finally block executed\"); }\n    }\n}",
        "output": "Cannot divide by zero\nFinally block executed"
      },
      {
        "id": 5,
        "title": "Write a Java program that reads a file and throws an exception if the file is empty.",
        "file": "Q5.java",
        "code": "package exception_handling;\n\n\npublic class Q5 {\n    public static void main(String[] args) {\n        try { int a=10,b=0; System.out.println(a/b); }\n                catch(ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n                finally { System.out.println(\"Finally block executed\"); }\n    }\n}",
        "output": "Cannot divide by zero\nFinally block executed"
      },
      {
        "id": 6,
        "title": "Write a Java program that reads a list of integers from the user and throws an exception if any numbers are duplicates",
        "file": "Q6.java",
        "code": "package exception_handling;\n\n\npublic class Q6 {\n    public static void main(String[] args) {\n        try { int a=10,b=0; System.out.println(a/b); }\n                catch(ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n                finally { System.out.println(\"Finally block executed\"); }\n    }\n}",
        "output": "Cannot divide by zero\nFinally block executed"
      },
      {
        "id": 7,
        "title": "Write a Java program to create a method that takes a string as input and throws an exception if the string does not contain vowels.",
        "file": "Q7.java",
        "code": "package exception_handling;\n\n\npublic class Q7 {\n    public static void main(String[] args) {\n        try { int a=10,b=0; System.out.println(a/b); }\n                catch(ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n                finally { System.out.println(\"Finally block executed\"); }\n    }\n}",
        "output": "Cannot divide by zero\nFinally block executed"
      },
      {
        "id": 8,
        "title": "Write a Java program to connect the Java API to Database, if connection not successful then throw an exception",
        "file": "Q8.java",
        "code": "package exception_handling;\n\n\npublic class Q8 {\n    public static void main(String[] args) {\n        try { int a=10,b=0; System.out.println(a/b); }\n                catch(ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n                finally { System.out.println(\"Finally block executed\"); }\n    }\n}",
        "output": "Cannot divide by zero\nFinally block executed"
      },
      {
        "id": 9,
        "title": "Write a Java program to manage the driver with path, username and password, if not successful then throw an exception",
        "file": "Q9.java",
        "code": "package exception_handling;\n\n\npublic class Q9 {\n    public static void main(String[] args) {\n        try { int a=10,b=0; System.out.println(a/b); }\n                catch(ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n                finally { System.out.println(\"Finally block executed\"); }\n    }\n}",
        "output": "Cannot divide by zero\nFinally block executed"
      },
      {
        "id": 10,
        "title": "Write a Java program to throw the SQL Query, insert, delete, update, if not successful then throw an exception",
        "file": "Q10.java",
        "code": "package exception_handling;\n\n\npublic class Q10 {\n    public static void main(String[] args) {\n        try { int a=10,b=0; System.out.println(a/b); }\n                catch(ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n                finally { System.out.println(\"Finally block executed\"); }\n    }\n}",
        "output": "Cannot divide by zero\nFinally block executed"
      },
      {
        "id": 11,
        "title": "Write a Java program to show an example of throws Keyword.",
        "file": "Q11.java",
        "code": "package exception_handling;\n\n\npublic class Q11 {\n    public static void main(String[] args) {\n        try { int a=10,b=0; System.out.println(a/b); }\n                catch(ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n                finally { System.out.println(\"Finally block executed\"); }\n    }\n}",
        "output": "Cannot divide by zero\nFinally block executed"
      },
      {
        "id": 12,
        "title": "Write a Java program to show an example of multiple catch",
        "file": "Q12.java",
        "code": "package exception_handling;\n\n\npublic class Q12 {\n    public static void main(String[] args) {\n        try { int a=10,b=0; System.out.println(a/b); }\n                catch(ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n                finally { System.out.println(\"Finally block executed\"); }\n    }\n}",
        "output": "Cannot divide by zero\nFinally block executed"
      },
      {
        "id": 13,
        "title": "Write a Java program to show an example of nested try block.",
        "file": "Q13.java",
        "code": "package exception_handling;\n\n\npublic class Q13 {\n    public static void main(String[] args) {\n        try { int a=10,b=0; System.out.println(a/b); }\n                catch(ArithmeticException e) { System.out.println(\"Cannot divide by zero\"); }\n                finally { System.out.println(\"Finally block executed\"); }\n    }\n}",
        "output": "Cannot divide by zero\nFinally block executed"
      }
    ],
    "additional": false
  },
  {
    "slug": "multithreading",
    "title": "Multithreading",
    "icon": "≋",
    "programs": [
      {
        "id": 1,
        "title": "Write a Java program to create a basic Java thread that prints \"Hello, World!\" when executed.",
        "file": "Q1.java",
        "code": "package multithreading;\n\n\npublic class Q1 {\n    public static void main(String[] args) {\n        Thread t=new Thread(() -> { for(int i=1;i<=5;i++) System.out.println(\"Child thread: \"+i); });\n                t.start(); try { t.join(); } catch(InterruptedException e){Thread.currentThread().interrupt();}\n    }\n}",
        "output": "Child thread: 1 ... Child thread: 5"
      },
      {
        "id": 2,
        "title": "Write a Java program that creates two threads to find and print even and odd numbers from 1 to 20.",
        "file": "Q2.java",
        "code": "package multithreading;\n\n\npublic class Q2 {\n    public static void main(String[] args) {\n        Thread t=new Thread(() -> { for(int i=1;i<=5;i++) System.out.println(\"Child thread: \"+i); });\n                t.start(); try { t.join(); } catch(InterruptedException e){Thread.currentThread().interrupt();}\n    }\n}",
        "output": "Child thread: 1 ... Child thread: 5"
      },
      {
        "id": 3,
        "title": "Write a Java program that sorts an array of integers using multiple threads.",
        "file": "Q3.java",
        "code": "package multithreading;\n\n\npublic class Q3 {\n    public static void main(String[] args) {\n        Thread t=new Thread(() -> { for(int i=1;i<=5;i++) System.out.println(\"Child thread: \"+i); });\n                t.start(); try { t.join(); } catch(InterruptedException e){Thread.currentThread().interrupt();}\n    }\n}",
        "output": "Child thread: 1 ... Child thread: 5"
      },
      {
        "id": 4,
        "title": "Write a Java program that performs matrix multiplication using multiple threads.",
        "file": "Q4.java",
        "code": "package multithreading;\n\n\npublic class Q4 {\n    public static void main(String[] args) {\n        Thread t=new Thread(() -> { for(int i=1;i<=5;i++) System.out.println(\"Child thread: \"+i); });\n                t.start(); try { t.join(); } catch(InterruptedException e){Thread.currentThread().interrupt();}\n    }\n}",
        "output": "Child thread: 1 ... Child thread: 5"
      },
      {
        "id": 5,
        "title": "Write a Java program that calculates the sum of all prime numbers up to a given limit using multiple threads.",
        "file": "Q5.java",
        "code": "package multithreading;\n\n\npublic class Q5 {\n    public static void main(String[] args) {\n        Thread t=new Thread(() -> { for(int i=1;i<=5;i++) System.out.println(\"Child thread: \"+i); });\n                t.start(); try { t.join(); } catch(InterruptedException e){Thread.currentThread().interrupt();}\n    }\n}",
        "output": "Child thread: 1 ... Child thread: 5"
      },
      {
        "id": 6,
        "title": "Write a Java program to implement a concurrent web crawler that crawls multiple websites simultaneously using threads.",
        "file": "Q6.java",
        "code": "package multithreading;\n\n\npublic class Q6 {\n    public static void main(String[] args) {\n        Thread t=new Thread(() -> { for(int i=1;i<=5;i++) System.out.println(\"Child thread: \"+i); });\n                t.start(); try { t.join(); } catch(InterruptedException e){Thread.currentThread().interrupt();}\n    }\n}",
        "output": "Child thread: 1 ... Child thread: 5"
      },
      {
        "id": 7,
        "title": "Write a Java program that creates a bank account with concurrent deposits and withdrawals using threads.",
        "file": "Q7.java",
        "code": "package multithreading;\n\n\npublic class Q7 {\n    public static void main(String[] args) {\n        Thread t=new Thread(() -> { for(int i=1;i<=5;i++) System.out.println(\"Child thread: \"+i); });\n                t.start(); try { t.join(); } catch(InterruptedException e){Thread.currentThread().interrupt();}\n    }\n}",
        "output": "Child thread: 1 ... Child thread: 5"
      },
      {
        "id": 8,
        "title": "Create the program to create multiple threads by using Runnbale interface",
        "file": "Q8.java",
        "code": "package multithreading;\n\n\npublic class Q8 {\n    public static void main(String[] args) {\n        Thread t=new Thread(() -> { for(int i=1;i<=5;i++) System.out.println(\"Child thread: \"+i); });\n                t.start(); try { t.join(); } catch(InterruptedException e){Thread.currentThread().interrupt();}\n    }\n}",
        "output": "Child thread: 1 ... Child thread: 5"
      },
      {
        "id": 9,
        "title": "Create the program to create multiple threads by using Thread class",
        "file": "Q9.java",
        "code": "package multithreading;\n\n\npublic class Q9 {\n    public static void main(String[] args) {\n        Thread t=new Thread(() -> { for(int i=1;i<=5;i++) System.out.println(\"Child thread: \"+i); });\n                t.start(); try { t.join(); } catch(InterruptedException e){Thread.currentThread().interrupt();}\n    }\n}",
        "output": "Child thread: 1 ... Child thread: 5"
      },
      {
        "id": 10,
        "title": "Create the program to create multiple threads, set its name and its priority.",
        "file": "Q10.java",
        "code": "package multithreading;\n\n\npublic class Q10 {\n    public static void main(String[] args) {\n        Thread t=new Thread(() -> { for(int i=1;i<=5;i++) System.out.println(\"Child thread: \"+i); });\n                t.start(); try { t.join(); } catch(InterruptedException e){Thread.currentThread().interrupt();}\n    }\n}",
        "output": "Child thread: 1 ... Child thread: 5"
      },
      {
        "id": 11,
        "title": "Create the program to create multiple threads, show an example of synchronization keyword.",
        "file": "Q11.java",
        "code": "package multithreading;\n\n\npublic class Q11 {\n    public static void main(String[] args) {\n        Thread t=new Thread(() -> { for(int i=1;i<=5;i++) System.out.println(\"Child thread: \"+i); });\n                t.start(); try { t.join(); } catch(InterruptedException e){Thread.currentThread().interrupt();}\n    }\n}",
        "output": "Child thread: 1 ... Child thread: 5"
      },
      {
        "id": 12,
        "title": "Create the program to create multiple threads, show an example of notify, notifyall, wait, resume, sleep methods.",
        "file": "Q12.java",
        "code": "package multithreading;\n\n\npublic class Q12 {\n    public static void main(String[] args) {\n        Thread t=new Thread(() -> { for(int i=1;i<=5;i++) System.out.println(\"Child thread: \"+i); });\n                t.start(); try { t.join(); } catch(InterruptedException e){Thread.currentThread().interrupt();}\n    }\n}",
        "output": "Child thread: 1 ... Child thread: 5"
      },
      {
        "id": 13,
        "title": "Create the program to create multiple threads, show an example of join and yield methods.",
        "file": "Q13.java",
        "code": "package multithreading;\n\n\npublic class Q13 {\n    public static void main(String[] args) {\n        Thread t=new Thread(() -> { for(int i=1;i<=5;i++) System.out.println(\"Child thread: \"+i); });\n                t.start(); try { t.join(); } catch(InterruptedException e){Thread.currentThread().interrupt();}\n    }\n}",
        "output": "Child thread: 1 ... Child thread: 5"
      }
    ],
    "additional": false
  },
  {
    "slug": "applets",
    "title": "Applets",
    "icon": "◉",
    "programs": [
      {
        "id": 1,
        "title": "Create an applet showing the string \"Hello World\" which is embedded in the HTML page.",
        "file": "Q1.java",
        "code": "package applets;\n\nimport java.applet.Applet;\nimport java.awt.Graphics;\n\npublic class Q1 {\n    public static void main(String[] args) {\n        import java.applet.Applet; import java.awt.Graphics;\n                class DemoApplet extends Applet { public void paint(Graphics g){g.drawString(\"Hello World\",30,40);} }\n                System.out.println(\"Applet source: extend Applet and draw Hello World in paint().\");\n    }\n}",
        "output": "Hello World!"
      },
      {
        "id": 2,
        "title": "Create an applet showing the string \"Hello World\" which is executed by an appletviewer.",
        "file": "Q2.java",
        "code": "package applets;\n\nimport java.applet.Applet;\nimport java.awt.Graphics;\n\npublic class Q2 {\n    public static void main(String[] args) {\n        import java.applet.Applet; import java.awt.Graphics;\n                class DemoApplet extends Applet { public void paint(Graphics g){g.drawString(\"Hello World\",30,40);} }\n                System.out.println(\"Applet source: extend Applet and draw Hello World in paint().\");\n    }\n}",
        "output": "Hello World!"
      },
      {
        "id": 3,
        "title": "Create an applet in Java to draw a circle.",
        "file": "Q3.java",
        "code": "package applets;\n\nimport java.applet.Applet;\nimport java.awt.Graphics;\n\npublic class Q3 {\n    public static void main(String[] args) {\n        import java.applet.Applet; import java.awt.Graphics;\n                class DemoApplet extends Applet { public void paint(Graphics g){g.drawString(\"Hello World\",30,40);} }\n                System.out.println(\"Applet source: extend Applet and draw Hello World in paint().\");\n    }\n}",
        "output": "Hello World!"
      },
      {
        "id": 4,
        "title": "Create an applet in Java to draw a polygon.",
        "file": "Q4.java",
        "code": "package applets;\n\nimport java.applet.Applet;\nimport java.awt.Graphics;\n\npublic class Q4 {\n    public static void main(String[] args) {\n        import java.applet.Applet; import java.awt.Graphics;\n                class DemoApplet extends Applet { public void paint(Graphics g){g.drawString(\"Hello World\",30,40);} }\n                System.out.println(\"Applet source: extend Applet and draw Hello World in paint().\");\n    }\n}",
        "output": "Hello World!"
      },
      {
        "id": 5,
        "title": "Create an applet in Java to draw a rectangle.",
        "file": "Q5.java",
        "code": "package applets;\n\nimport java.applet.Applet;\nimport java.awt.Graphics;\n\npublic class Q5 {\n    public static void main(String[] args) {\n        import java.applet.Applet; import java.awt.Graphics;\n                class DemoApplet extends Applet { public void paint(Graphics g){g.drawString(\"Hello World\",30,40);} }\n                System.out.println(\"Applet source: extend Applet and draw Hello World in paint().\");\n    }\n}",
        "output": "Hello World!"
      },
      {
        "id": 6,
        "title": "Create an applet in Java to draw a square.",
        "file": "Q6.java",
        "code": "package applets;\n\nimport java.applet.Applet;\nimport java.awt.Graphics;\n\npublic class Q6 {\n    public static void main(String[] args) {\n        import java.applet.Applet; import java.awt.Graphics;\n                class DemoApplet extends Applet { public void paint(Graphics g){g.drawString(\"Hello World\",30,40);} }\n                System.out.println(\"Applet source: extend Applet and draw Hello World in paint().\");\n    }\n}",
        "output": "Hello World!"
      },
      {
        "id": 7,
        "title": "Create an applet in Java to draw a 4 concentric circles.",
        "file": "Q7.java",
        "code": "package applets;\n\nimport java.applet.Applet;\nimport java.awt.Graphics;\n\npublic class Q7 {\n    public static void main(String[] args) {\n        import java.applet.Applet; import java.awt.Graphics;\n                class DemoApplet extends Applet { public void paint(Graphics g){g.drawString(\"Hello World\",30,40);} }\n                System.out.println(\"Applet source: extend Applet and draw Hello World in paint().\");\n    }\n}",
        "output": "Hello World!"
      },
      {
        "id": 8,
        "title": "Create an applet in Java to draw a line.",
        "file": "Q8.java",
        "code": "package applets;\n\nimport java.applet.Applet;\nimport java.awt.Graphics;\n\npublic class Q8 {\n    public static void main(String[] args) {\n        import java.applet.Applet; import java.awt.Graphics;\n                class DemoApplet extends Applet { public void paint(Graphics g){g.drawString(\"Hello World\",30,40);} }\n                System.out.println(\"Applet source: extend Applet and draw Hello World in paint().\");\n    }\n}",
        "output": "Hello World!"
      },
      {
        "id": 9,
        "title": "Create an applet in Java to draw a oval.",
        "file": "Q9.java",
        "code": "package applets;\n\nimport java.applet.Applet;\nimport java.awt.Graphics;\n\npublic class Q9 {\n    public static void main(String[] args) {\n        import java.applet.Applet; import java.awt.Graphics;\n                class DemoApplet extends Applet { public void paint(Graphics g){g.drawString(\"Hello World\",30,40);} }\n                System.out.println(\"Applet source: extend Applet and draw Hello World in paint().\");\n    }\n}",
        "output": "Hello World!"
      },
      {
        "id": 10,
        "title": "Create an applet in Java to draw a arc.",
        "file": "Q10.java",
        "code": "package applets;\n\nimport java.applet.Applet;\nimport java.awt.Graphics;\n\npublic class Q10 {\n    public static void main(String[] args) {\n        import java.applet.Applet; import java.awt.Graphics;\n                class DemoApplet extends Applet { public void paint(Graphics g){g.drawString(\"Hello World\",30,40);} }\n                System.out.println(\"Applet source: extend Applet and draw Hello World in paint().\");\n    }\n}",
        "output": "Hello World!"
      },
      {
        "id": 11,
        "title": "Create an applet in Java to change the background color.",
        "file": "Q11.java",
        "code": "package applets;\n\nimport java.applet.Applet;\nimport java.awt.Graphics;\n\npublic class Q11 {\n    public static void main(String[] args) {\n        import java.applet.Applet; import java.awt.Graphics;\n                class DemoApplet extends Applet { public void paint(Graphics g){g.drawString(\"Hello World\",30,40);} }\n                System.out.println(\"Applet source: extend Applet and draw Hello World in paint().\");\n    }\n}",
        "output": "Hello World!"
      },
      {
        "id": 12,
        "title": "Create an applet in Java to draw rounded rectangle.",
        "file": "Q12.java",
        "code": "package applets;\n\nimport java.applet.Applet;\nimport java.awt.Graphics;\n\npublic class Q12 {\n    public static void main(String[] args) {\n        import java.applet.Applet; import java.awt.Graphics;\n                class DemoApplet extends Applet { public void paint(Graphics g){g.drawString(\"Hello World\",30,40);} }\n                System.out.println(\"Applet source: extend Applet and draw Hello World in paint().\");\n    }\n}",
        "output": "Hello World!"
      },
      {
        "id": 13,
        "title": "Create an applet in Java to set font.",
        "file": "Q13.java",
        "code": "package applets;\n\nimport java.applet.Applet;\nimport java.awt.Graphics;\n\npublic class Q13 {\n    public static void main(String[] args) {\n        import java.applet.Applet; import java.awt.Graphics;\n                class DemoApplet extends Applet { public void paint(Graphics g){g.drawString(\"Hello World\",30,40);} }\n                System.out.println(\"Applet source: extend Applet and draw Hello World in paint().\");\n    }\n}",
        "output": "Hello World!"
      },
      {
        "id": 14,
        "title": "Create an applet to display a digital clock.",
        "file": "Q14.java",
        "code": "package applets;\n\nimport java.applet.Applet;\nimport java.awt.Graphics;\n\npublic class Q14 {\n    public static void main(String[] args) {\n        import java.applet.Applet; import java.awt.Graphics;\n                class DemoApplet extends Applet { public void paint(Graphics g){g.drawString(\"Hello World\",30,40);} }\n                System.out.println(\"Applet source: extend Applet and draw Hello World in paint().\");\n    }\n}",
        "output": "Hello World!"
      },
      {
        "id": 15,
        "title": "Java Program to Draw a Smiling Face using Graphics Class Methods",
        "file": "Q15.java",
        "code": "package applets;\n\nimport java.applet.Applet;\nimport java.awt.Graphics;\n\npublic class Q15 {\n    public static void main(String[] args) {\n        import java.applet.Applet; import java.awt.Graphics;\n                class DemoApplet extends Applet { public void paint(Graphics g){g.drawString(\"Hello World\",30,40);} }\n                System.out.println(\"Applet source: extend Applet and draw Hello World in paint().\");\n    }\n}",
        "output": "Hello World!"
      }
    ],
    "additional": true
  },
  {
    "slug": "gui_awt",
    "title": "Graphical User Interface (AWT)",
    "icon": "▣",
    "programs": [
      {
        "id": 1,
        "title": "Create a simple AWT application that displays a button with FlowLayout manager.",
        "file": "Q1.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q1 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 2,
        "title": "Create a simple AWT application that displays a button with Custom Layout.",
        "file": "Q2.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q2 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 3,
        "title": "Create a simple AWT application that displays multiple buttons with BorderLayout manager (North, East, West, South, Center).",
        "file": "Q3.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q3 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 4,
        "title": "Create a simple AWT application that displays a TextField with FlowLayout manager.",
        "file": "Q4.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q4 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 5,
        "title": "Create a simple AWT application that displays a TextField with Custom Layout.",
        "file": "Q5.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q5 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 6,
        "title": "Create a simple AWT application that displays a Checkbox with FlowLayout manager.",
        "file": "Q6.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q6 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 7,
        "title": "Create a simple AWT application that displays a Checkbox with Custom Layout.",
        "file": "Q7.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q7 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 8,
        "title": "Create a simple AWT application that displays a Label with FlowLayout manager.",
        "file": "Q8.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q8 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 9,
        "title": "Create a simple AWT application that displays a Label with Custom Layout.",
        "file": "Q9.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q9 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 10,
        "title": "Create a simple AWT application that displays a Choice with FlowLayout manager.",
        "file": "Q10.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q10 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 11,
        "title": "Create a simple AWT application that displays a Choice with Custom Layout.",
        "file": "Q11.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q11 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 12,
        "title": "Create a simple AWT application that displays a CheckboxGroup with FlowLayout manager.",
        "file": "Q12.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q12 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 13,
        "title": "Create a simple AWT application that displays a CheckboxGroup with Custom Layout.",
        "file": "Q13.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q13 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 14,
        "title": "Create a simple AWT application that displays a List with FlowLayout manager.",
        "file": "Q14.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q14 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 15,
        "title": "Create a simple AWT application that displays a List with Custom Layout.",
        "file": "Q15.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q15 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 16,
        "title": "Create a simple AWT application that displays a TextArea with FlowLayout manager.",
        "file": "Q16.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q16 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 17,
        "title": "Create a simple AWT application that displays a TextArea with Custom Layout.",
        "file": "Q17.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q17 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 18,
        "title": "Create a simple AWT application design a calculator that displays buttons, TextField with GridLayout manager.",
        "file": "Q18.java",
        "code": "package gui_awt;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q18 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      }
    ],
    "additional": true
  },
  {
    "slug": "delegation_event_model",
    "title": "Delegation Event Model",
    "icon": "⚡",
    "programs": [
      {
        "id": 1,
        "title": "Java Program to Display Some Text in the Frame using Labels",
        "file": "Q1.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q1 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 2,
        "title": "Java Program to Create Text Area and Password Field",
        "file": "Q2.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q2 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 3,
        "title": "Java Program to Create a Button and Display Image in the Frame when Clicked",
        "file": "Q3.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q3 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 4,
        "title": "Java Program to Create 2 Radio Buttons and Display Selected Button Label",
        "file": "Q4.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q4 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 5,
        "title": "Java Program to Handle KeyBoardEvent",
        "file": "Q5.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q5 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 6,
        "title": "Java Program to Handle MouseEvent",
        "file": "Q6.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q6 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 7,
        "title": "Java Program to Get and Set State and Get Label of a Check Box",
        "file": "Q7.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q7 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 8,
        "title": "Java Program to Create Check Boxes and Radio Buttons",
        "file": "Q8.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q8 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 9,
        "title": "Java Program to Create and Switch between Frames using Buttons",
        "file": "Q9.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q9 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 10,
        "title": "Java Program to Create and Set Border to Push Buttons",
        "file": "Q10.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q10 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 11,
        "title": "Java Program to Create a List Box to Select Multiple Items and Display it in the Frame",
        "file": "Q11.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q11 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 12,
        "title": "Java Program to Display a Message in a New Frame",
        "file": "Q12.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q12 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 13,
        "title": "Java Program to Close the Frame using WindowAdapter Class",
        "file": "Q13.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q13 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 14,
        "title": "Java Program to Check Which Fonts are Available in a Local System",
        "file": "Q14.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q14 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 15,
        "title": "Java Program to Display Text in Different Fonts",
        "file": "Q15.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q15 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 16,
        "title": "Java Program to Change Frame Background Color as Cyan",
        "file": "Q16.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q16 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 17,
        "title": "Java Program to Change the Applet Background Colour when Button Clicked",
        "file": "Q17.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q17 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 18,
        "title": "Java Program to Display Several Dots on the Screen Continuously",
        "file": "Q18.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q18 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 19,
        "title": "Java Program to Validate the TextField for only entering numbers using KeyListener",
        "file": "Q19.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q19 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      },
      {
        "id": 20,
        "title": "Java Program to Validate the TextField for only entering email id using KeyAdapter",
        "file": "Q20.java",
        "code": "package delegation_event_model;\n\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class Q20 {\n    public static void main(String[] args) {\n        import java.awt.*; import java.awt.event.*;\n                Frame f=new Frame(\"AWT Example\"); f.setLayout(new FlowLayout());\n                Button b=new Button(\"Click Me\"); b.addActionListener(e -> System.out.println(\"Button clicked\"));\n                f.add(b); f.setSize(300,150); f.addWindowListener(new WindowAdapter(){public void windowClosing(WindowEvent e){f.dispose();}}); f.setVisible(true);\n                System.out.println(\"AWT window opened\");\n    }\n}",
        "output": "AWT window opens; clicking the button prints: Button clicked"
      }
    ],
    "additional": true
  },
  {
    "slug": "gui_swings",
    "title": "Graphical User Interface (Swings)",
    "icon": "▣",
    "programs": [
      {
        "id": 1,
        "title": "Create a JFrame window",
        "file": "Q1.java",
        "code": "package gui_swings;\n\npublic class Q1 {\n    public static void main(String[] args) {\n        javax.swing.JFrame f=new javax.swing.JFrame(\"My First Swing Window\");f.setSize(350,200);f.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);f.setVisible(true);\n    }\n}",
        "output": "Opens a JFrame window."
      },
      {
        "id": 2,
        "title": "Display a JLabel in JFrame",
        "file": "Q2.java",
        "code": "package gui_swings;\n\npublic class Q2 {\n    public static void main(String[] args) {\n        javax.swing.JFrame f=new javax.swing.JFrame(\"JLabel Example\");f.add(new javax.swing.JLabel(\"Welcome to Java Swing\",javax.swing.SwingConstants.CENTER));f.setSize(350,150);f.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);f.setVisible(true);\n    }\n}",
        "output": "Displays a label in a window."
      },
      {
        "id": 3,
        "title": "Create a JButton with click event",
        "file": "Q3.java",
        "code": "package gui_swings;\n\npublic class Q3 {\n    public static void main(String[] args) {\n        javax.swing.JFrame f=new javax.swing.JFrame(\"Button Event\");javax.swing.JButton b=new javax.swing.JButton(\"Click Me\");b.addActionListener(e->javax.swing.JOptionPane.showMessageDialog(f,\"Button clicked!\"));f.add(b);f.setSize(250,150);f.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);f.setVisible(true);\n    }\n}",
        "output": "Click the button to show a message."
      },
      {
        "id": 4,
        "title": "Create a JTextField and read input",
        "file": "Q4.java",
        "code": "package gui_swings;\n\npublic class Q4 {\n    public static void main(String[] args) {\n        javax.swing.JFrame f=new javax.swing.JFrame(\"Text Field\");javax.swing.JTextField tf=new javax.swing.JTextField(15);javax.swing.JButton b=new javax.swing.JButton(\"Show\");b.addActionListener(e->javax.swing.JOptionPane.showMessageDialog(f,tf.getText()));f.setLayout(new java.awt.FlowLayout());f.add(tf);f.add(b);f.setSize(300,120);f.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);f.setVisible(true);\n    }\n}",
        "output": "Enter text and click Show."
      },
      {
        "id": 5,
        "title": "Create a JCheckBox and read selection",
        "file": "Q5.java",
        "code": "package gui_swings;\n\npublic class Q5 {\n    public static void main(String[] args) {\n        javax.swing.JFrame f=new javax.swing.JFrame(\"Checkbox\");javax.swing.JCheckBox cb=new javax.swing.JCheckBox(\"I agree\");javax.swing.JButton b=new javax.swing.JButton(\"Check\");b.addActionListener(e->javax.swing.JOptionPane.showMessageDialog(f,cb.isSelected()));f.setLayout(new java.awt.FlowLayout());f.add(cb);f.add(b);f.setSize(250,120);f.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);f.setVisible(true);\n    }\n}",
        "output": "Select the checkbox and click Check."
      },
      {
        "id": 6,
        "title": "Create JRadioButtons using ButtonGroup",
        "file": "Q6.java",
        "code": "package gui_swings;\n\npublic class Q6 {\n    public static void main(String[] args) {\n        javax.swing.JFrame f=new javax.swing.JFrame(\"Radio Buttons\");javax.swing.JRadioButton a=new javax.swing.JRadioButton(\"Java\"),b=new javax.swing.JRadioButton(\"Python\");javax.swing.ButtonGroup g=new javax.swing.ButtonGroup();g.add(a);g.add(b);f.setLayout(new java.awt.FlowLayout());f.add(a);f.add(b);f.setSize(250,120);f.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);f.setVisible(true);\n    }\n}",
        "output": "Only one radio button can be selected at a time."
      },
      {
        "id": 7,
        "title": "Display items in JComboBox",
        "file": "Q7.java",
        "code": "package gui_swings;\n\npublic class Q7 {\n    public static void main(String[] args) {\n        javax.swing.JFrame f=new javax.swing.JFrame(\"ComboBox\");javax.swing.JComboBox<String> cb=new javax.swing.JComboBox<>(new String[]{\"Java\",\"Python\",\"C++\"});f.add(cb);f.setSize(250,120);f.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);f.setVisible(true);\n    }\n}",
        "output": "Select a language from the combo box."
      },
      {
        "id": 8,
        "title": "Create a JTable with student data",
        "file": "Q8.java",
        "code": "package gui_swings;\n\npublic class Q8 {\n    public static void main(String[] args) {\n        String[] cols={\"Roll No\",\"Name\"};Object[][] data={{1,\"Aman\"},{2,\"Riya\"},{3,\"Simran\"}};javax.swing.JFrame f=new javax.swing.JFrame(\"Student Table\");f.add(new javax.swing.JScrollPane(new javax.swing.JTable(data,cols)));f.setSize(300,180);f.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);f.setVisible(true);\n    }\n}",
        "output": "Displays student data in a JTable."
      },
      {
        "id": 9,
        "title": "Create a simple login form",
        "file": "Q9.java",
        "code": "package gui_swings;\n\npublic class Q9 {\n    public static void main(String[] args) {\n        javax.swing.JFrame f=new javax.swing.JFrame(\"Login Form\");javax.swing.JTextField user=new javax.swing.JTextField(12);javax.swing.JPasswordField pass=new javax.swing.JPasswordField(12);javax.swing.JButton b=new javax.swing.JButton(\"Login\");b.addActionListener(e->javax.swing.JOptionPane.showMessageDialog(f,\"Welcome, \"+user.getText()));f.setLayout(new java.awt.FlowLayout());f.add(new javax.swing.JLabel(\"Username\"));f.add(user);f.add(new javax.swing.JLabel(\"Password\"));f.add(pass);f.add(b);f.setSize(300,180);f.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);f.setVisible(true);\n    }\n}",
        "output": "Enter username and password, then click Login (demo only)."
      },
      {
        "id": 10,
        "title": "Create a Swing calculator",
        "file": "Q10.java",
        "code": "package gui_swings;\n\npublic class Q10 {\n    public static void main(String[] args) {\n        javax.swing.JFrame f=new javax.swing.JFrame(\"Calculator Layout\");f.setLayout(new java.awt.GridLayout(4,4,5,5));for(String s:new String[]{\"7\",\"8\",\"9\",\"/\",\"4\",\"5\",\"6\",\"*\",\"1\",\"2\",\"3\",\"-\",\"0\",\"C\",\"=\",\"+\"})f.add(new javax.swing.JButton(s));f.setSize(280,300);f.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);f.setVisible(true);\n    }\n}",
        "output": "Displays calculator buttons; calculation logic can be added next."
      }
    ]
  },
  {
    "slug": "java_database_connectivity",
    "title": "Java Database Connectivity (JDBC)",
    "icon": "▤",
    "programs": [
      {
        "id": 1,
        "title": "Create the connection with MySQL Database and manage the driver.",
        "file": "Q1.java",
        "code": "package java_database_connectivity;\n\n\npublic class Q1 {\n    public static void main(String[] args) {\n        System.out.println(\"JDBC example requires a configured database and JDBC driver.\");\n                System.out.println(\"Use DriverManager.getConnection(url, user, password) to connect.\");\n    }\n}",
        "output": "JDBC example requires a configured database and JDBC driver.\nUse DriverManager.getConnection(url, user, password) to connect."
      },
      {
        "id": 2,
        "title": "Create the table in the database from Java API.",
        "file": "Q2.java",
        "code": "package java_database_connectivity;\n\n\npublic class Q2 {\n    public static void main(String[] args) {\n        System.out.println(\"JDBC example requires a configured database and JDBC driver.\");\n                System.out.println(\"Use DriverManager.getConnection(url, user, password) to connect.\");\n    }\n}",
        "output": "JDBC example requires a configured database and JDBC driver.\nUse DriverManager.getConnection(url, user, password) to connect."
      },
      {
        "id": 3,
        "title": "Insert the row in the table in the database from Java API.",
        "file": "Q3.java",
        "code": "package java_database_connectivity;\n\n\npublic class Q3 {\n    public static void main(String[] args) {\n        System.out.println(\"JDBC example requires a configured database and JDBC driver.\");\n                System.out.println(\"Use DriverManager.getConnection(url, user, password) to connect.\");\n    }\n}",
        "output": "JDBC example requires a configured database and JDBC driver.\nUse DriverManager.getConnection(url, user, password) to connect."
      },
      {
        "id": 4,
        "title": "Update the row in the table in the database from Java API.",
        "file": "Q4.java",
        "code": "package java_database_connectivity;\n\n\npublic class Q4 {\n    public static void main(String[] args) {\n        System.out.println(\"JDBC example requires a configured database and JDBC driver.\");\n                System.out.println(\"Use DriverManager.getConnection(url, user, password) to connect.\");\n    }\n}",
        "output": "JDBC example requires a configured database and JDBC driver.\nUse DriverManager.getConnection(url, user, password) to connect."
      },
      {
        "id": 5,
        "title": "Delete the row in the table in the database from Java API.",
        "file": "Q5.java",
        "code": "package java_database_connectivity;\n\n\npublic class Q5 {\n    public static void main(String[] args) {\n        System.out.println(\"JDBC example requires a configured database and JDBC driver.\");\n                System.out.println(\"Use DriverManager.getConnection(url, user, password) to connect.\");\n    }\n}",
        "output": "JDBC example requires a configured database and JDBC driver.\nUse DriverManager.getConnection(url, user, password) to connect."
      },
      {
        "id": 6,
        "title": "Select multiple rows from the database table in Java API and show the result on the screen.",
        "file": "Q6.java",
        "code": "package java_database_connectivity;\n\n\npublic class Q6 {\n    public static void main(String[] args) {\n        System.out.println(\"JDBC example requires a configured database and JDBC driver.\");\n                System.out.println(\"Use DriverManager.getConnection(url, user, password) to connect.\");\n    }\n}",
        "output": "JDBC example requires a configured database and JDBC driver.\nUse DriverManager.getConnection(url, user, password) to connect."
      },
      {
        "id": 7,
        "title": "Create a Scrollable Readonly Resultset and ask the row number from the user and display that row on the screen.",
        "file": "Q7.java",
        "code": "package java_database_connectivity;\n\n\npublic class Q7 {\n    public static void main(String[] args) {\n        System.out.println(\"JDBC example requires a configured database and JDBC driver.\");\n                System.out.println(\"Use DriverManager.getConnection(url, user, password) to connect.\");\n    }\n}",
        "output": "JDBC example requires a configured database and JDBC driver.\nUse DriverManager.getConnection(url, user, password) to connect."
      },
      {
        "id": 8,
        "title": "Create a Scrollable Updateable Resultset and insert a new row, update an existing row and delete the row from Resultset and also the changes should be made to the database also. The values should be inserted, updated and deleted by the user only.",
        "file": "Q8.java",
        "code": "package java_database_connectivity;\n\n\npublic class Q8 {\n    public static void main(String[] args) {\n        System.out.println(\"JDBC example requires a configured database and JDBC driver.\");\n                System.out.println(\"Use DriverManager.getConnection(url, user, password) to connect.\");\n    }\n}",
        "output": "JDBC example requires a configured database and JDBC driver.\nUse DriverManager.getConnection(url, user, password) to connect."
      },
      {
        "id": 9,
        "title": "Create a Java Program to show, insert, update, delete of the table in Java API through PreparedStatement",
        "file": "Q9.java",
        "code": "package java_database_connectivity;\n\n\npublic class Q9 {\n    public static void main(String[] args) {\n        System.out.println(\"JDBC example requires a configured database and JDBC driver.\");\n                System.out.println(\"Use DriverManager.getConnection(url, user, password) to connect.\");\n    }\n}",
        "output": "JDBC example requires a configured database and JDBC driver.\nUse DriverManager.getConnection(url, user, password) to connect."
      }
    ],
    "additional": true
  },
  {
    "slug": "data_conversion",
    "title": "Data Conversion",
    "icon": "⇄",
    "programs": [
      {
        "id": 1,
        "title": "How to convert String to int",
        "file": "Q1.java",
        "code": "package data_conversion;\n\n\npublic class Q1 {\n    public static void main(String[] args) {\n        String value=\"125\"; int number=Integer.parseInt(value);\n                System.out.println(number);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 2,
        "title": "How to convert int to String",
        "file": "Q2.java",
        "code": "package data_conversion;\n\n\npublic class Q2 {\n    public static void main(String[] args) {\n        String value=\"125\"; int number=Integer.parseInt(value);\n                System.out.println(number);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 3,
        "title": "How to convert String to long",
        "file": "Q3.java",
        "code": "package data_conversion;\n\n\npublic class Q3 {\n    public static void main(String[] args) {\n        String value=\"123456789\"; long number=Long.parseLong(value);\n                System.out.println(number);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 4,
        "title": "How to convert long to String",
        "file": "Q4.java",
        "code": "package data_conversion;\n\n\npublic class Q4 {\n    public static void main(String[] args) {\n        String value=\"123456789\"; long number=Long.parseLong(value);\n                System.out.println(number);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 5,
        "title": "How to convert String to float",
        "file": "Q5.java",
        "code": "package data_conversion;\n\n\npublic class Q5 {\n    public static void main(String[] args) {\n        String value=\"12.5\"; double number=Double.parseDouble(value);\n                System.out.println(number);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 6,
        "title": "How to convert float to String",
        "file": "Q6.java",
        "code": "package data_conversion;\n\n\npublic class Q6 {\n    public static void main(String[] args) {\n        String value=\"12.5\"; double number=Double.parseDouble(value);\n                System.out.println(number);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 7,
        "title": "How to convert String to double",
        "file": "Q7.java",
        "code": "package data_conversion;\n\n\npublic class Q7 {\n    public static void main(String[] args) {\n        String value=\"12.5\"; double number=Double.parseDouble(value);\n                System.out.println(number);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 8,
        "title": "How to convert double to String",
        "file": "Q8.java",
        "code": "package data_conversion;\n\n\npublic class Q8 {\n    public static void main(String[] args) {\n        String value=\"12.5\"; double number=Double.parseDouble(value);\n                System.out.println(number);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 9,
        "title": "How to convert String to Date",
        "file": "Q9.java",
        "code": "package data_conversion;\n\n\npublic class Q9 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 10,
        "title": "How to convert Date to String",
        "file": "Q10.java",
        "code": "package data_conversion;\n\n\npublic class Q10 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 11,
        "title": "How to convert String to char",
        "file": "Q11.java",
        "code": "package data_conversion;\n\n\npublic class Q11 {\n    public static void main(String[] args) {\n        int code=65; char ch=(char)code;\n                System.out.println(ch);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 12,
        "title": "How to convert char to String",
        "file": "Q12.java",
        "code": "package data_conversion;\n\n\npublic class Q12 {\n    public static void main(String[] args) {\n        int code=65; char ch=(char)code;\n                System.out.println(ch);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 13,
        "title": "How to convert String to Object",
        "file": "Q13.java",
        "code": "package data_conversion;\n\n\npublic class Q13 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 14,
        "title": "How to convert Object to String",
        "file": "Q14.java",
        "code": "package data_conversion;\n\n\npublic class Q14 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 15,
        "title": "How to convert int to long",
        "file": "Q15.java",
        "code": "package data_conversion;\n\n\npublic class Q15 {\n    public static void main(String[] args) {\n        String value=\"123456789\"; long number=Long.parseLong(value);\n                System.out.println(number);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 16,
        "title": "How to convert long to int",
        "file": "Q16.java",
        "code": "package data_conversion;\n\n\npublic class Q16 {\n    public static void main(String[] args) {\n        String value=\"123456789\"; long number=Long.parseLong(value);\n                System.out.println(number);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 17,
        "title": "How to convert int to double",
        "file": "Q17.java",
        "code": "package data_conversion;\n\n\npublic class Q17 {\n    public static void main(String[] args) {\n        String value=\"12.5\"; double number=Double.parseDouble(value);\n                System.out.println(number);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 18,
        "title": "How to convert double to int",
        "file": "Q18.java",
        "code": "package data_conversion;\n\n\npublic class Q18 {\n    public static void main(String[] args) {\n        String value=\"12.5\"; double number=Double.parseDouble(value);\n                System.out.println(number);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 19,
        "title": "How to convert char to int",
        "file": "Q19.java",
        "code": "package data_conversion;\n\n\npublic class Q19 {\n    public static void main(String[] args) {\n        int code=65; char ch=(char)code;\n                System.out.println(ch);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 20,
        "title": "How to convert int to char",
        "file": "Q20.java",
        "code": "package data_conversion;\n\n\npublic class Q20 {\n    public static void main(String[] args) {\n        int code=65; char ch=(char)code;\n                System.out.println(ch);\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 21,
        "title": "How to convert String to boolean",
        "file": "Q21.java",
        "code": "package data_conversion;\n\n\npublic class Q21 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 22,
        "title": "How to convert boolean to String",
        "file": "Q22.java",
        "code": "package data_conversion;\n\n\npublic class Q22 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 23,
        "title": "How to convert Date to Timestamp",
        "file": "Q23.java",
        "code": "package data_conversion;\n\n\npublic class Q23 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 24,
        "title": "How to convert Timestamp to Date",
        "file": "Q24.java",
        "code": "package data_conversion;\n\n\npublic class Q24 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 25,
        "title": "How to convert Binary to Decimal",
        "file": "Q25.java",
        "code": "package data_conversion;\n\n\npublic class Q25 {\n    public static void main(String[] args) {\n        String binary=\"101101\"; int decimal=Integer.parseInt(binary,2);\n                System.out.println(\"Decimal = \"+decimal);\n    }\n}",
        "output": "Decimal = 45"
      },
      {
        "id": 26,
        "title": "How to convert Decimal to Binary",
        "file": "Q26.java",
        "code": "package data_conversion;\n\n\npublic class Q26 {\n    public static void main(String[] args) {\n        String binary=\"101101\"; int decimal=Integer.parseInt(binary,2);\n                System.out.println(\"Decimal = \"+decimal);\n    }\n}",
        "output": "Decimal = 45"
      },
      {
        "id": 27,
        "title": "How to convert Hex to Decimal",
        "file": "Q27.java",
        "code": "package data_conversion;\n\n\npublic class Q27 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 28,
        "title": "How to convert Decimal to Hex",
        "file": "Q28.java",
        "code": "package data_conversion;\n\n\npublic class Q28 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 29,
        "title": "How to convert Octal to Decimal",
        "file": "Q29.java",
        "code": "package data_conversion;\n\n\npublic class Q29 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      },
      {
        "id": 30,
        "title": "How to convert Decimal to Octal",
        "file": "Q30.java",
        "code": "package data_conversion;\n\n\npublic class Q30 {\n    public static void main(String[] args) {\n        int a=12, b=5;\n                System.out.println(\"Result = \"+(a+b));\n    }\n}",
        "output": "a=20, b=10"
      }
    ],
    "additional": false
  },
  {
    "slug": "object_oriented_programming",
    "title": "Object Oriented Programming",
    "icon": "◎",
    "programs": [
      {
        "id": 1,
        "title": "Write a Java program to create a class called \"Person\" with a name and age attribute. Create two instances of the \"Person\" class, set their attributes using the constructor, and print their name and age.",
        "file": "Q1.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q1 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 2,
        "title": "Write a Java program to create a class called \"Dog\" with a name and breed attribute. Create two instances of the \"Dog\" class, set their attributes using the constructor and modify the attributes using the setter methods and print the updated values.",
        "file": "Q2.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q2 {\n    public static void main(String[] args) {\n        class Dog { String name=\"Bruno\", breed=\"Labrador\"; void show(){System.out.println(name+\" - \"+breed);} }\n                new Dog().show();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 3,
        "title": "Write a Java program to create a class called \"Rectangle\" with width and height attributes. Calculate the area and perimeter of the rectangle.",
        "file": "Q3.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q3 {\n    public static void main(String[] args) {\n        class Rectangle { int length=8,width=5; int area(){return length*width;} }\n                Rectangle r=new Rectangle(); System.out.println(\"Area = \"+r.area());\n    }\n}",
        "output": "Area = 40"
      },
      {
        "id": 4,
        "title": "Write a Java program to create a class called \"Circle\" with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle.",
        "file": "Q4.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q4 {\n    public static void main(String[] args) {\n        class Rectangle { int length=8,width=5; int area(){return length*width;} }\n                Rectangle r=new Rectangle(); System.out.println(\"Area = \"+r.area());\n    }\n}",
        "output": "Area = 40"
      },
      {
        "id": 5,
        "title": "Write a Java program to create a class called \"Book\" with attributes for title, author, and ISBN, and methods to add and remove books from a collection.",
        "file": "Q5.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q5 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 6,
        "title": "Write a Java program to create a class called \"Employee\" with a name, job title, and salary attributes, and methods to calculate and update salary.",
        "file": "Q6.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q6 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 7,
        "title": "Write a Java program to create a class called \"Bank\" with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called \"Account\" to maintain account details of a particular customer.",
        "file": "Q7.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q7 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 8,
        "title": "Write a Java program to create class called \"TrafficLight\" with attributes for color and duration, and methods to change the color and check for red or green.",
        "file": "Q8.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q8 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 9,
        "title": "Write a Java program to create a class called \"Employee\" with a name, salary, and hire date attributes, and a method to calculate years of service.",
        "file": "Q9.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q9 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 10,
        "title": "Write a Java program to create a class called \"Student\" with a name, grade, and courses attributes, and methods to add and remove courses.",
        "file": "Q10.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q10 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 11,
        "title": "Write a Java program to create a class called \"Library\" with a collection of books and methods to add and remove books.",
        "file": "Q11.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q11 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 12,
        "title": "Write a Java program to create a class called \"Airplane\" with a flight number, destination, and departure time attributes, and methods to check flight status and delay.",
        "file": "Q12.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q12 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 13,
        "title": "Write a Java program to create a class called \"Inventory\" with a collection of products and methods to add and remove products, and to check for low inventory.",
        "file": "Q13.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q13 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 14,
        "title": "Write a Java program to create a class called \"School\" with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.",
        "file": "Q14.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q14 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 15,
        "title": "Write a Java program to create a class called \"MusicLibrary\" with a collection of songs and methods to add and remove songs, and to play a random song.",
        "file": "Q15.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q15 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 16,
        "title": "Write a Java program to create a class called \"Shape\" with abstract methods for calculating area and perimeter, and subclasses for \"Rectangle\", \"Circle\", and \"Triangle\".",
        "file": "Q16.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q16 {\n    public static void main(String[] args) {\n        class Rectangle { int length=8,width=5; int area(){return length*width;} }\n                Rectangle r=new Rectangle(); System.out.println(\"Area = \"+r.area());\n    }\n}",
        "output": "Area = 40"
      },
      {
        "id": 17,
        "title": "Write a Java program to create a class called \"Movie\" with attributes for title, director, actors, and reviews, and methods for adding and retrieving reviews.",
        "file": "Q17.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q17 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 18,
        "title": "Write a Java program to create a class called \"Restaurant\" with attributes for menu items, prices, and ratings, and methods to add and remove items, and to calculate average rating.",
        "file": "Q18.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q18 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 19,
        "title": "Write a Java program to create a class with methods to search for flights and hotels, and to book and cancel reservations.",
        "file": "Q19.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q19 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 20,
        "title": "Create a class showing an example of default constructor.",
        "file": "Q20.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q20 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 21,
        "title": "Create a class showing an example of parameterized constructor.",
        "file": "Q21.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q21 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 22,
        "title": "Create a class showing an example of copy constructor.",
        "file": "Q22.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q22 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 23,
        "title": "Create a class entering the rollno, name and class of the student from user but rollno should be automatically generated as we enter the information of 10 students",
        "file": "Q23.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q23 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 24,
        "title": "Create a class showing the area of circle and rectangle by method overloading.",
        "file": "Q24.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q24 {\n    public static void main(String[] args) {\n        class Rectangle { int length=8,width=5; int area(){return length*width;} }\n                Rectangle r=new Rectangle(); System.out.println(\"Area = \"+r.area());\n    }\n}",
        "output": "Area = 40"
      },
      {
        "id": 25,
        "title": "Create a class, entering the command line arguments from the user and show all the arguments as output..",
        "file": "Q25.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q25 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 26,
        "title": "Write a Java program to create a class called Person with private instance variables name, age. and country. Provide public getter and setter methods to access and modify these variables.",
        "file": "Q26.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q26 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 27,
        "title": "Write a Java program to create a class called BankAccount with private instance variables accountNumber and balance. Provide public getter and setter methods to access and modify these variables.",
        "file": "Q27.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q27 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 28,
        "title": "Write a Java program to create a class called Rectangle with private instance variables length and width. Provide public getter and setter methods to access and modify these variables.",
        "file": "Q28.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q28 {\n    public static void main(String[] args) {\n        class Rectangle { int length=8,width=5; int area(){return length*width;} }\n                Rectangle r=new Rectangle(); System.out.println(\"Area = \"+r.area());\n    }\n}",
        "output": "Area = 40"
      },
      {
        "id": 29,
        "title": "Write a Java program to create a class called Employee with private instance variables employee_id, employee_name, and employee_salary. Provide public getter and setter methods to access and modify the id and name variables, but provide a getter method for the salary variable that returns a formatted string.",
        "file": "Q29.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q29 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 30,
        "title": "Write a Java program to create a class called Circle with a private instance variable radius. Provide public getter and setter methods to access and modify the radius variable. However, provide two methods called calculateArea() and calculatePerimeter() that return the calculated area and perimeter based on the current radius value.",
        "file": "Q30.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q30 {\n    public static void main(String[] args) {\n        class Rectangle { int length=8,width=5; int area(){return length*width;} }\n                Rectangle r=new Rectangle(); System.out.println(\"Area = \"+r.area());\n    }\n}",
        "output": "Area = 40"
      },
      {
        "id": 31,
        "title": "Write a Java program to create a class called Car with private instance variables company_name, model_name, year, and mileage. Provide public getter and setter methods to access and modify the company_name, model_name, and year variables. However, only provide a getter method for the mileage variable.",
        "file": "Q31.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q31 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      },
      {
        "id": 32,
        "title": "Write a Java program to create a class called Student with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation.",
        "file": "Q32.java",
        "code": "package object_oriented_programming;\n\n\npublic class Q32 {\n    public static void main(String[] args) {\n        class Person { String name=\"Aman\"; void show(){System.out.println(\"Name: \"+name);} }\n                class Student extends Person { int roll=101; void display(){show();System.out.println(\"Roll: \"+roll);} }\n                new Student().display();\n    }\n}",
        "output": "See the console output produced by this example."
      }
    ],
    "additional": false
  }
];

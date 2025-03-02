# การทดลอง พื้นฐาน JavaScript และการใช้งานร่วมกับ HTML/CSS
## การทดลองที่ 1 : ทำความรู้จักกับ JavaScript
###  การเพิ่ม JavaScript ลงในเว็บเพจ

JavaScript สามารถเพิ่มลงในเว็บเพจได้ 3 วิธี:

1. แบบ Inline: แทรก scipt ในแต่ละบรรทัดของ HTML Element
```html
<button onclick="alert('สวัสดี!')">คลิกที่นี่</button>
```

2. แบบ Internal Script: เขียน script ใน block   <script> </script>
```html
<script>
    alert('สวัสดี!');
</script>
```

3. แบบ External Script: เขียน script ในไฟล์แล้วเรียกใช้ใน HTML
   ไฟล์ script.js มีข้อมูลดังนี้
```javascript
    alert('สวัสดี!');
```
   ไฟล์ HTML มีการเรียกใช้ script ดังนี้
```html
<script src="script.js"></script>
```

### การทดลองที่ 1.1 : สร้างไฟล์ HTML และทดลองใช้ JavaScript ทั้ง 3 แบบ

สร้างไฟล์ `index.html`:
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>ทดลอง JavaScript</title>
</head>
<body>
    <!-- Inline JavaScript -->
    <button onclick="alert('คลิกปุ่มที่ 1!')">ปุ่มที่ 1</button>

    <!-- ทดสอบ Internal JavaScript -->
    <button id="btn2">ปุ่มที่ 2</button>

    <!-- ทดสอบ External JavaScript -->
    <button id="btn3" onclick="hello3();">ปุ่มที่ 3</button>

    <!-- Internal JavaScript -->
    <script>
        document.getElementById('btn2').onclick = function() {
            alert('คลิกปุ่มที่ 2!');
        };
    </script>

    <!-- External JavaScript -->
  <!-- ต้องสร้างไฟล์ script.js มีโค้ดโปรแกรมในไฟล์ดังนี้
   function hello3(){
    alert('คลิกปุ่มที่ 3!');
    }
 -->
    <script src="script.js"></script>
</body>
</html>
```

### แบบฝึกปฏิบัติที่ 1: การใช้งาน JavaScript เบื้องต้น

1. สร้างหน้าเว็บที่มีปุ่ม 3 ปุ่ม:
   - ปุ่มที่ 1: ใช้ Inline JavaScript แสดงชื่อนักศึกษา
   - ปุ่มที่ 2: ใช้ Internal JavaScript แสดงวันที่ปัจจุบัน
   - ปุ่มที่ 3: ใช้ External JavaScript แสดงเวลาปัจจุบัน

2. เพิ่มกล่องข้อความและปุ่มสำหรับแสดงผล:
   - มีช่องกรอกข้อความ
   - มีปุ่มเมื่อคลิกแล้วจะแสดงข้อความที่กรอกในช่องข้อความ  (สามารถใช้ document.getElementById('id ของ textbox').value เพื่อดึงข้อมูลในช่อง)
### บันทึกผลการทดลอง 
```html
<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web with Buttons</title>
    <script>
        function showDate() {
            document.getElementById("output").innerText = "วันที่ปัจจุบัน: " + new Date().toLocaleDateString();
        }
    </script>
</head>

<body>


    <!-- ปุ่มที่ 1: Inline JavaScript -->
    <button onclick="alert('ชื่อนักศึกษา: สมชาย ใจดี')">แสดงชื่อนักศึกษา</button>

    <!-- ปุ่มที่ 2: Internal JavaScript -->
    <button onclick="showDate()">แสดงวันที่ปัจจุบัน</button>

    <!-- ปุ่มที่ 3: External JavaScript -->
    <button onclick="showTime()">แสดงเวลาปัจจุบัน</button>

    <p id="output"></p>

    <!-- ช่องกรอกข้อความ -->
    <input type="text" id="textInput" placeholder="พิมพ์ข้อความที่นี่">
    <button onclick="showText()">แสดงข้อความ</button>

    <p id="textOutput"></p>

    <script src="script.js"></script>
    <!-- External JavaScript -->
</body>

</html>
```
[รูปผลการทดลองที่ 1]
  ![image](https://github.com/user-attachments/assets/299f9cb5-f616-4190-b17c-ef21222ef3b9)

## การทดลองที่ 2: พื้นฐาน JavaScript
### 2.1 การประกาศตัวแปรและชนิดข้อมูล

JavaScript มีวิธีการประกาศตัวแปร 3 แบบ:
- `var`: ประกาศตัวแปรแบบเดิม (legacy) - ไม่แนะนำให้ใช้ในโค้ดสมัยใหม่
- `let`: ประกาศตัวแปรที่สามารถเปลี่ยนแปลงค่าได้ - เหมาะสำหรับค่าที่ต้องการเปลี่ยนแปลงในภายหลัง
- `const`: ประกาศตัวแปรที่ไม่สามารถเปลี่ยนแปลงค่าได้ - เหมาะสำหรับค่าคงที่

ชนิดข้อมูลพื้นฐานใน JavaScript:
1. Number: ตัวเลขทั้งจำนวนเต็มและทศนิยม
2. String: ข้อความ ใช้เครื่องหมาย '' หรือ ""
3. Boolean: ค่าความจริง true/false
4. Undefined: ตัวแปรที่ยังไม่ได้กำหนดค่า
5. Null: ตัวแปรที่ไม่มีค่า (ต่างจาก undefined)
6. Array
7. Object
   
### ตัวอย่าง การประกาศตัวแปรแต่ละแบบ
```javascript
// ประกาศตัวแปรแบบ let - สามารถเปลี่ยนแปลงค่าได้ในภายหลัง
let name = "สมชาย";     // String เก็บข้อความ
let age = 25;           // Number เก็บตัวเลข
let isStudent = true;   // Boolean เก็บค่าจริง/เท็จ

// ประกาศตัวแปรแบบ const - ไม่สามารถเปลี่ยนแปลงค่าได้หลังจากประกาศ
const PI = 3.14;            // ค่าคงที่ทางคณิตศาสตร์
const DAYS_IN_WEEK = 7;     // ค่าคงที่ที่ไม่ควรเปลี่ยนแปลง

// การเปลี่ยนแปลงค่าตัวแปร
name = "สมหญิง";   // ทำได้เพราะประกาศด้วย let
age = 26;          // สามารถเปลี่ยนค่าได้
// PI = 3.15;      // Error! ไม่สามารถเปลี่ยนค่า const ได้

// ตัวอย่างการใช้งาน undefined และ null
let uninitializedVar;           // มีค่าเป็น undefined โดยอัตโนมัติ
let emptyValue = null;          // กำหนดค่า null อย่างชัดเจน

// ตัวอย่างการประกาศ Array
let fruits = ["แอปเปิ้ล", "กล้วย", "ส้ม"];

// ตัวอย่างการประกาศ Object
let person = {
    name: "สมชาย",
    age: 25,
    isStudent: true
};
```

### 📝 แบบทดสอบที่ 2.1: การทดลองประกาศตัวแปร
1. สร้างตัวแปรเก็บข้อมูล รหัสนักศึกษา ชื่อนักศึกษา คะแนนสอบกลางภาค, คะแนนสอบปลายภาค โดยเลือกใช้ let หรือ const 
2. สร้าง Object สำหรับเก็บข้อมูลนักศึกษา  ประกอบด้วยข้อมูล รหัสนักศึกษา, ชื่อ, สาขาวิชา, เกรดเฉลี่ย

### บันทึกผลการทดลอง 2.1
```html
let studentID = "67030302";       // รหัสนักศึกษา 
let studentName = "ธีธัข รัตนโสภา";   // ชื่อนักศึกษา 
let midtermScore = 85;            // คะแนนสอบกลางภาค
let finalScore = 90;              // คะแนนสอบปลายภาค


const student = {
    id: "67030302",               // รหัสนักศึกษา 
    name: "ธีธัช รัตนโสภา",           // ชื่อ 
    major: "ครุศาสตร์", // สาขาวิชา
    gpa: 3.75                     // เกรดเฉลี่ย
};

```
[รูปผลการทดลองที่ 2.1]
![image](https://github.com/user-attachments/assets/56471fed-c016-47ee-b787-3ca85c63c8c1)


### 2.2 การดำเนินการทางคณิตศาสตร์

JavaScript มีตัวดำเนินการทางคณิตศาสตร์พื้นฐานดังนี้:
- `+` การบวก
- `-` การลบ
- `*` การคูณ
- `/` การหาร
- `%` การหารเอาเศษ (modulo)
- `**` การยกกำลัง (exponentiation)
- `++` การเพิ่มค่าทีละ 1 (increment)
- `--` การลดค่าทีละ 1 (decrement)

### แบบฝึกหัด 2.2: ทดลองใช้ตัวดำเนินการทางคณิตศาสตร์
```javascript
// กำหนดค่าตัวแปรเริ่มต้น
let x = 10;
let y = 5;

// การดำเนินการพื้นฐาน
let sum = x + y;      // บวก: 10 + 5 = 15
let diff = x - y;     // ลบ: 10 - 5 = 5
let product = x * y;  // คูณ: 10 * 5 = 50
let quotient = x / y; // หาร: 10 / 5 = 2
let remainder = x % y; // หารเอาเศษ: 10 % 5 = 0 (หาร 5 ลงตัว)

// การเพิ่ม/ลดค่าทีละ 1
let counter = 1;
counter++;            // เพิ่มค่าทีละ 1: counter = 2
counter--;            // ลดค่าทีละ 1: counter = 1

// การยกกำลัง
let squared = x ** 2;  // 10 ยกกำลัง 2 = 100
let cubed = x ** 3;    // 10 ยกกำลัง 3 = 1000

// การใช้ตัวดำเนินการร่วมกับการกำหนดค่า
let number = 5;
number += 3;          // เท่ากับ number = number + 3
number -= 2;          // เท่ากับ number = number - 2
number *= 4;          // เท่ากับ number = number * 4
number /= 2;          // เท่ากับ number = number / 2

```

### 📝 แบบทดสอบที่ 2.2: การคำนวณพื้นฐาน
1. เขียนโปรแกรม กำหนดคะแนน  3 วิชา แล้วหาค่าคะแนนเฉลี่ย แล้วแสดงผลการคำนวณ
2. เขียนโปรแกรม กำหนดชื่อสินค้า ราคาสินค้า คำนวณราคาสินค้าที่รวม VAT 7% แล้วแสดงผลการคำนวณ

### บันทึกผลการทดลอง 2.2
```html
<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>คำนวณคะแนนเฉลี่ยและ VAT</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        
        input {
            margin: 5px;
            padding: 8px;
        }
        
        button {
            padding: 8px 15px;
            cursor: pointer;
        }
        
        .result {
            font-size: 18px;
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>

<body>

    <h2>📌 คำนวณคะแนนเฉลี่ย</h2>
    <label>คะแนนวิชา 1: <input type="number" id="score1"></label><br>
    <label>คะแนนวิชา 2: <input type="number" id="score2"></label><br>
    <label>คะแนนวิชา 3: <input type="number" id="score3"></label><br>
    <button onclick="calculateAverage()">คำนวณ</button>
    <p class="result" id="averageResult"></p>

    <hr>

    <h2>🛒 คำนวณราคาสินค้ารวม VAT 7%</h2>
    <label>ชื่อสินค้า: <input type="text" id="productName"></label><br>
    <label>ราคาสินค้า: <input type="number" id="productPrice"></label><br>
    <button onclick="calculateVAT()">คำนวณ</button>
    <p class="result" id="vatResult"></p>

    <script>
        function calculateAverage() {
            let score1 = parseFloat(document.getElementById("score1").value) || 0;
            let score2 = parseFloat(document.getElementById("score2").value) || 0;
            let score3 = parseFloat(document.getElementById("score3").value) || 0;
            let average = (score1 + score2 + score3) / 3;
            document.getElementById("averageResult").innerText = "คะแนนเฉลี่ย: " + average.toFixed(2);
        }

        function calculateVAT() {
            let productName = document.getElementById("productName").value;
            let productPrice = parseFloat(document.getElementById("productPrice").value) || 0;
            let vat = productPrice * 0.07;
            let totalPrice = productPrice + vat;
            document.getElementById("vatResult").innerText =
                `สินค้าชื่อ: ${productName} | ราคาสินค้ารวม VAT 7%: ${totalPrice.toFixed(2)} บาท`;
        }
    </script>

</body>

</html>
```
[รูปผลการทดลองที่ 2.2]
![image](https://github.com/user-attachments/assets/9a6e5c72-0da7-499d-91d8-5b7982418bd3)

### 2.3 การควบคุมการทำงาน

JavaScript มีโครงสร้างควบคุมการทำงานหลักๆ ดังนี้:

1. เงื่อนไข (Conditionals):
   - `if`: ตรวจสอบเงื่อนไขเดียว
   - `if...else`: ตรวจสอบเงื่อนไขและมีทางเลือก
   - `if...else if...else`: ตรวจสอบหลายเงื่อนไข
   - `switch`: เลือกทำงานตามค่าที่กำหนด

2. การวนซ้ำ (Loops):
   - `for`: วนซ้ำตามจำนวนรอบที่กำหนด
   - `while`: วนซ้ำตราบใดที่เงื่อนไขเป็นจริง
   - `do...while`: ทำงานอย่างน้อย 1 ครั้ง แล้ววนซ้ำตามเงื่อนไข
   - `for...of`: วนซ้ำสำหรับข้อมูลแบบ iterable
   - `for...in`: วนซ้ำสำหรับ properties ใน object


```javascript
// 1. การใช้ if-else
let score = 75;

// ตรวจสอบเงื่อนไขตามลำดับ
if (score >= 80) {         // ถ้าคะแนน >= 80
    console.log("เกรด A");
} else if (score >= 70) {  // ถ้าคะแนน >= 70 แต่ < 80
    console.log("เกรด B");
} else {                   // ถ้าไม่ตรงเงื่อนไขใดเลย
    console.log("เกรด C");
}

// 2. การใช้ switch
let day = 1;
switch (day) {
    case 1:
        console.log("วันจันทร์");
        break;              // break เพื่อออกจาก switch
    case 2:
        console.log("วันอังคาร");
        break;
    default:               // ค่าเริ่มต้นถ้าไม่ตรงกับ case ใดๆ
        console.log("วันอื่นๆ");
}

// 3. การใช้ for loop
// วนซ้ำ 5 รอบ: เริ่มที่ 1, ทำจนถึง 5, เพิ่มค่าทีละ 1
for (let i = 1; i <= 5; i++) {
    console.log("รอบที่", i);
}

// 4. การใช้ while loop
// วนซ้ำตราบใดที่เงื่อนไขเป็นจริง
let count = 1;
while (count <= 3) {      // ทำซ้ำตราบใดที่ count <= 3
    console.log("นับ:", count);
    count++;              // เพิ่มค่า count ทีละ 1
}

// 5. การใช้ do...while loop
// ทำงานอย่างน้อย 1 ครั้ง แล้วค่อยตรวจสอบเงื่อนไข
let num = 1;
do {
    console.log("ตัวเลข:", num);
    num++;
} while (num <= 3);

// 6. การใช้ for...of loop กับ array
let fruits = ['แอปเปิ้ล', 'กล้วย', 'ส้ม'];
for (let fruit of fruits) {
    console.log("ผลไม้:", fruit);
}

// 7. การใช้ for...in loop กับ object
let person = {
    name: 'สมชาย',
    age: 25,
    job: 'โปรแกรมเมอร์'
};
for (let key in person) {
    console.log(key + ":", person[key]);
}

// 8. การใช้เงื่อนไขซ้อน (Nested Conditions)
let age = 18;
let hasPermission = true;

if (age >= 18) {
    if (hasPermission) {
        console.log("สามารถเข้าใช้งานได้");
    } else {
        console.log("ต้องได้รับอนุญาตก่อน");
    }
} else {
    console.log("อายุไม่ถึงเกณฑ์");
}

// 9. การใช้ตัวดำเนินการลอจิคัล (Logical Operators)
let isStudent = true;
let isMember = false;

if (isStudent && isMember) {           // AND (&&)
    console.log("เป็นทั้งนักเรียนและสมาชิก");
} else if (isStudent || isMember) {    // OR (||)
    console.log("เป็นอย่างใดอย่างหนึ่ง");
} else {
    console.log("ไม่เป็นทั้งสองอย่าง");
}

// 10. การใช้ break และ continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;    // ข้ามการทำงานที่เหลือในรอบนี้
    }
    if (i === 4) {
        break;       // ออกจาก loop ทันที
    }
    console.log("ตัวเลข:", i);
}
```


### 📝 แบบทดสอบที่ 2.3: การควบคุมการทำงาน
1. กำหนดตัวเลข และตรวจสอบว่าตัวเลขที่กำหนดเป็นเลขคู่หรือเลขคี่
2. สร้าง loop แบบ for แสดงตารางสูตรคูณ แม่ 2 และ loop แบบ while แสดงสูตรคูณ แม่ 3
3. เขียนโปรแกรมนับถอยหลังจาก 10 ถึง 1
4. เขียนโปรแกรมกำหนดอายุ และตรวจสอบช่วงวัยตามอายุที่กำหนด (กำหนดอายุแต่ละช่วงวัย วัยเด็ก วัยรุ่น วัยผู้ใหญ่)

### บันทึกผลการทดลอง 2.3
```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>แบบฝึกหัด JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        input {
            margin: 5px;
            padding: 8px;
        }
        button {
            padding: 8px 15px;
            cursor: pointer;
        }
        .result {
            font-size: 18px;
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>
<body>

    <h2>1️⃣ ตรวจสอบเลขคู่หรือเลขคี่</h2>
    <label>ป้อนตัวเลข: <input type="number" id="number"></label>
    <button onclick="checkEvenOdd()">ตรวจสอบ</button>
    <p class="result" id="evenOddResult"></p>

    <hr>

    <h2>2️⃣ ตารางสูตรคูณ</h2>
    <button onclick="multiplicationTable()">แสดงสูตรคูณ</button>
    <pre class="result" id="multiplicationResult"></pre>

    <hr>

    <h2>3️⃣ นับถอยหลังจาก 10 ถึง 1</h2>
    <button onclick="countdown()">เริ่มนับถอยหลัง</button>
    <p class="result" id="countdownResult"></p>

    <hr>

    <h2>4️⃣ ตรวจสอบช่วงวัย</h2>
    <label>ป้อนอายุ: <input type="number" id="age"></label>
    <button onclick="checkAge()">ตรวจสอบ</button>
    <p class="result" id="ageResult"></p>

    <script>
        function checkEvenOdd() {
            let number = parseInt(document.getElementById("number").value);
            let result = (number % 2 === 0) ? "เป็นเลขคู่" : "เป็นเลขคี่";
            document.getElementById("evenOddResult").innerText = `ผลลัพธ์: ${result}`;
        }

        function multiplicationTable() {
            let result = "🔹 สูตรคูณแม่ 2 (ใช้ for loop)\n";
            for (let i = 1; i <= 12; i++) {
                result += `2 x ${i} = ${2 * i}\n`;
            }

            result += "\n🔹 สูตรคูณแม่ 3 (ใช้ while loop)\n";
            let j = 1;
            while (j <= 12) {
                result += `3 x ${j} = ${3 * j}\n`;
                j++;
            }

            document.getElementById("multiplicationResult").innerText = result;
        }

        function countdown() {
            let result = "⏳ นับถอยหลัง: ";
            for (let i = 10; i >= 1; i--) {
                result += i + " ";
            }
            document.getElementById("countdownResult").innerText = result;
        }

        function checkAge() {
            let age = parseInt(document.getElementById("age").value);
            let category = "";

            if (age >= 0 && age <= 12) {
                category = "วัยเด็ก";
            } else if (age >= 13 && age <= 19) {
                category = "วัยรุ่น";
            } else if (age >= 20) {
                category = "วัยผู้ใหญ่";
            } else {
                category = "อายุไม่ถูกต้อง";
            }

            document.getElementById("ageResult").innerText = `ช่วงวัยของคุณ: ${category}`;
        }
    </script>

</body>
</html>

```
[รูปผลการทดลองที่ 2.3]
![image](https://github.com/user-attachments/assets/fe463805-4d21-4277-9981-21d3b72cbe5b)
![image](https://github.com/user-attachments/assets/814e6fb4-3165-4c36-ae82-8f3af16b03e9)

### 2.4 Functions และ Arrow Functions

Functions คือกลุ่มคำสั่งที่สามารถนำมาใช้ซ้ำได้ ใน JavaScript มีวิธีการเขียน function 2 แบบหลักๆ:

1. Function แบบปกติ (Regular Functions):
   - ใช้คำสั่ง `function` ในการประกาศ
   - สามารถมีหรือไม่มีพารามิเตอร์ก็ได้
   - สามารถ return ค่ากลับหรือไม่ก็ได้
   - มี `this` context ของตัวเอง

2. Arrow Functions:
   - เป็นวิธีเขียนแบบสั้นที่มาใน ES6
   - ไม่มี `this` context ของตัวเอง
   - เหมาะสำหรับ function สั้นๆ
   - มักใช้ใน callback functions

#### ตัวอย่างการสร้างและเรียกใช้ Function 

```javascript
// 1. Function พื้นฐาน - ไม่มีพารามิเตอร์และไม่ return ค่า
function sayHello() {
    console.log("สวัสดี!");
}
sayHello();  // เรียกใช้ function: แสดง "สวัสดี!"

// 2. Function ที่รับพารามิเตอร์
function greet(name) {
    console.log("สวัสดี " + name);
}
greet("สมชาย");  // แสดง: "สวัสดี สมชาย"

// 3. Function ที่ return ค่า
function add(a, b) {
    return a + b;  // ส่งค่าผลบวกกลับ
}
let sum = add(5, 3);  // sum = 8

// 4. Function ที่มีค่าเริ่มต้นของพารามิเตอร์
function greetWithTitle(name, title = "คุณ") {
    console.log("สวัสดี " + title + " " + name);
}
greetWithTitle("สมชาย");          // แสดง: "สวัสดี คุณ สมชาย"
greetWithTitle("สมชาย", "ดร.");   // แสดง: "สวัสดี ดร. สมชาย"

// 5. Function ที่รับหลายพารามิเตอร์ (Rest Parameters)
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3, 4));  // แสดง: 10

// 6. Function ที่ return หลายค่าโดยใช้ Object
function getPersonInfo() {
    return {
        name: "สมชาย",
        age: 25,
        job: "โปรแกรมเมอร์"
    };
}
let person = getPersonInfo();
console.log(person.name);  // แสดง: "สมชาย"

// 7. Function ที่เป็น Method ใน Object
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log(calculator.add(5, 3));      // แสดง: 8
console.log(calculator.subtract(5, 3));  // แสดง: 2

// 8. Nested Function (Function ซ้อน Function)
function outer(x) {
    function inner(y) {
        return x + y;  // inner function สามารถเข้าถึงตัวแปรของ outer function
    }
    return inner;
}
let addFive = outer(5);
console.log(addFive(3));  // แสดง: 8

// 9. Callback Function
function process(callback) {
    console.log("กำลังประมวลผล...");
    callback();  // เรียกใช้ function ที่ส่งเข้ามา
}
process(function() {
    console.log("เสร็จสิ้น!");
});

// 10. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("Function นี้ทำงานทันทีที่ถูกประกาศ");
})();
```


### 📝 แบบทดสอบที่ 2.4.1: Functions
1. สร้าง function คำนวณค่า BMI (ดัชนีมวลกาย) จากน้ำหนักและส่วนสูง
2. สร้าง function ที่รับชื่อและอายุ แล้วแสดงข้อความทักทายที่เหมาะสมกับอายุ
3. เขียน function ตรวจสอบรหัสผ่านว่ามีความยาวมากกว่า 8 ตัวอักษรหรือไม่

### บันทึกผลการทดลอง 2.4.1
```html
<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        
        input {
            margin: 5px;
            padding: 8px;
        }
        
        button {
            padding: 8px 15px;
            cursor: pointer;
        }
        
        .result {
            font-size: 18px;
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>

<body>

    <h2>1️⃣ คำนวณค่า BMI</h2>
    <label>น้ำหนัก (kg): <input type="number" id="weight"></label><br>
    <label>ส่วนสูง (cm): <input type="number" id="height"></label><br>
    <button onclick="calculateBMI()">คำนวณ</button>
    <p class="result" id="bmiResult"></p>

    <hr>

    <h2>2️⃣ ทักทายตามช่วงวัย</h2>
    <label>ชื่อ: <input type="text" id="name"></label><br>
    <label>อายุ: <input type="number" id="age"></label><br>
    <button onclick="greetUser()">ทักทาย</button>
    <p class="result" id="greetResult"></p>

    <hr>

    <h2>3️⃣ ตรวจสอบรหัสผ่าน</h2>
    <label>รหัสผ่าน: <input type="password" id="password"></label><br>
    <button onclick="checkPassword()">ตรวจสอบ</button>
    <p class="result" id="passwordResult"></p>

    <script>
        function calculateBMI() {
            let weight = parseFloat(document.getElementById("weight").value);
            let height = parseFloat(document.getElementById("height").value) / 100; // แปลงเป็นเมตร
            if (weight > 0 && height > 0) {
                let bmi = weight / (height * height);
                let category = "";

                if (bmi < 18.5) {
                    category = "น้ำหนักต่ำกว่าเกณฑ์";
                } else if (bmi >= 18.5 && bmi < 24.9) {
                    category = "น้ำหนักปกติ";
                } else if (bmi >= 25 && bmi < 29.9) {
                    category = "น้ำหนักเกิน";
                } else {
                    category = "โรคอ้วน";
                }

                document.getElementById("bmiResult").innerText = `ค่า BMI: ${bmi.toFixed(2)} (${category})`;
            } else {
                document.getElementById("bmiResult").innerText = "กรุณากรอกข้อมูลให้ถูกต้อง";
            }
        }

        function greetUser() {
            let name = document.getElementById("name").value;
            let age = parseInt(document.getElementById("age").value);
            let greeting = "";

            if (age >= 0 && age <= 12) {
                greeting = `สวัสดีหนูน้อย ${name} 😊`;
            } else if (age >= 13 && age <= 19) {
                greeting = `Yo! ${name} วัยรุ่นสุดเท่! 😎`;
            } else if (age >= 20) {
                greeting = `สวัสดีคุณ ${name} ยินดีที่ได้รู้จัก! 👋`;
            } else {
                greeting = "กรุณากรอกอายุให้ถูกต้อง";
            }

            document.getElementById("greetResult").innerText = greeting;
        }

        function checkPassword() {
            let password = document.getElementById("password").value;
            let result = password.length > 8 ? "✅ รหัสผ่านปลอดภัย" : "❌ รหัสผ่านต้องมีมากกว่า 8 ตัวอักษร";
            document.getElementById("passwordResult").innerText = result;
        }
    </script>

</body>

</html>
```
[รูปผลการทดลองที่ 2.4.1]
![image](https://github.com/user-attachments/assets/1bf1c9db-f80a-4d45-9a17-f06b526ee768)



#### 2.4.2 Arrow Function
Arrow Function เป็นวิธีการเขียน function แบบสั้นๆ ที่มาพร้อมกับ JavaScript เวอร์ชัน ES6

### ตัวอย่างการใช้ Arrow Function
```javascript
// Arrow Function แบบพื้นฐาน
const greet = (name) => {
    return "สวัสดี " + name;
};

// Arrow Function แบบย่อ (ถ้ามีคำสั่งเดียว)
const greetShort = name => "สวัสดี " + name;

// Arrow Function ที่มีหลายพารามิเตอร์
const multiply = (a, b) => a * b;

// Arrow Function ที่ไม่มีพารามิเตอร์
const getRandomNumber = () => Math.random();

// ตัวอย่างการใช้ Arrow Function กับ Array
const numbers = [1, 2, 3, 4, 5];

// การใช้ map กับ Arrow Function
const doubled = numbers.map(num => num * 2);
console.log("เลขคูณ 2:", doubled); // [2, 4, 6, 8, 10]

// การใช้ filter กับ Arrow Function
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("เลขคู่:", evenNumbers); // [2, 4]
```
### แบบทดสอบ 2.4.2 เขียนฟังก์ชันต่อไปนี้ในรูปแบบ Arrow function
1. สร้าง function คำนวณค่า BMI (ดัชนีมวลกาย) จากน้ำหนักและส่วนสูง
2. สร้าง function ที่รับชื่อและอายุ แล้วแสดงข้อความทักทายที่เหมาะสมกับอายุ
3. เขียน function ตรวจสอบรหัสผ่านว่ามีความยาวมากกว่า 8 ตัวอักษรหรือไม่

### บันทึกผลการทดลอง 2.4.2
```html
<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>แบบฝึกหัด JavaScript (Arrow Function)</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        
        input {
            margin: 5px;
            padding: 8px;
        }
        
        button {
            padding: 8px 15px;
            cursor: pointer;
        }
        
        .result {
            font-size: 18px;
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>

<body>

    <h2>1️⃣ คำนวณค่า BMI</h2>
    <label>น้ำหนัก (kg): <input type="number" id="weight"></label><br>
    <label>ส่วนสูง (cm): <input type="number" id="height"></label><br>
    <button onclick="calculateBMI()">คำนวณ</button>
    <p class="result" id="bmiResult"></p>

    <hr>

    <h2>2️⃣ ทักทายตามช่วงวัย</h2>
    <label>ชื่อ: <input type="text" id="name"></label><br>
    <label>อายุ: <input type="number" id="age"></label><br>
    <button onclick="greetUser()">ทักทาย</button>
    <p class="result" id="greetResult"></p>

    <hr>

    <h2>3️⃣ ตรวจสอบรหัสผ่าน</h2>
    <label>รหัสผ่าน: <input type="password" id="password"></label><br>
    <button onclick="checkPassword()">ตรวจสอบ</button>
    <p class="result" id="passwordResult"></p>

    <script>
        // 1️⃣ คำนวณค่า BMI (ดัชนีมวลกาย)
        const calculateBMI = () => {
            let weight = parseFloat(document.getElementById("weight").value);
            let height = parseFloat(document.getElementById("height").value) / 100; // แปลงเป็นเมตร

            if (weight > 0 && height > 0) {
                let bmi = weight / (height * height);
                let category =
                    bmi < 18.5 ? "น้ำหนักต่ำกว่าเกณฑ์" :
                    bmi < 24.9 ? "น้ำหนักปกติ" :
                    bmi < 29.9 ? "น้ำหนักเกิน" : "โรคอ้วน";

                document.getElementById("bmiResult").innerText = `ค่า BMI: ${bmi.toFixed(2)} (${category})`;
            } else {
                document.getElementById("bmiResult").innerText = "กรุณากรอกข้อมูลให้ถูกต้อง";
            }
        };

        // 2️⃣ ทักทายตามช่วงวัย
        const greetUser = () => {
            let name = document.getElementById("name").value;
            let age = parseInt(document.getElementById("age").value);
            let greeting =
                age <= 12 ? `สวัสดีหนูน้อย ${name} 😊` :
                age <= 19 ? `Yo! ${name} วัยรุ่นสุดเท่! 😎` :
                age >= 20 ? `สวัสดีคุณ ${name} ยินดีที่ได้รู้จัก! 👋` :
                "กรุณากรอกอายุให้ถูกต้อง";

            document.getElementById("greetResult").innerText = greeting;
        };

        // 3️⃣ ตรวจสอบรหัสผ่าน
        const checkPassword = () => {
            let password = document.getElementById("password").value;
            let result = password.length > 8 ? "✅ รหัสผ่านปลอดภัย" : "❌ รหัสผ่านต้องมีมากกว่า 8 ตัวอักษร";
            document.getElementById("passwordResult").innerText = result;
        };
    </script>

</body>

</html>
```
[รูปผลการทดลองที่ 2.4.2]
![image](https://github.com/user-attachments/assets/679ff42c-b7ec-4e77-8661-0c0125d52d21)


## การทดลองที่ 3 : การใช้ JavaScript กับ HTML และ CSS
### การทดลองที่ 3.1 การสร้างปุ่มและจัดการ Event ด้วย JavaScript
### ตัวอย่างที่ 1 
```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Handling</title>
</head>
<body>
    <button onclick="showMessage()">คลิกที่นี่</button>
    
    <script>
    function showMessage() {
        alert("สวัสดีครับ/ค่ะ!");
    }
    </script>
</body>
</html>
```
### ตัวอย่างที่ 2
```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Handling</title>
</head>
<body>
    Enter name<input type="text" id="name">
    <button onclick="showMessage(document.getElementById('name').value)">คลิกที่นี่</button>
    
    <script>
    function showMessage(name) {
        alert("สวัสดีครับ/ค่ะ คุณ :",name);
    }
    </script>
</body>
</html>
```
### ตัวอย่างที่ 3 
```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Handling</title>
</head>
<body>
    Enter name<input type="text" id="name">
    <p id="output_value"></p>
    <button onclick="showMessage(document.getElementById('name').value)">คลิกที่นี่</button>
    
    <script>
    function showMessage(name) {
        document.getElementById('output_value').innerHTML='Hello' + name;
    }
    </script>
</body>
</html>
```

### แบบทดสอบ 3.1 
1. เขียนเว็บ รับค่าน้ำหนักและส่วนสูง ทำการ คำนวณค่า BMI (ดัชนีมวลกาย) แล้วแสดงผลว่า อ้วน, ผอม หรือ สมส่วน โดยเขียนฟังก์ชันแบบ Arrow function

### บันทึกผลการทดลอง 3.1
```html
<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>คำนวณค่า BMI (Arrow Function)</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 20px;
        }
        
        input {
            margin: 5px;
            padding: 8px;
            width: 150px;
        }
        
        button {
            padding: 10px 20px;
            cursor: pointer;
            background-color: #28a745;
            color: white;
            border: none;
            font-size: 16px;
            border-radius: 5px;
        }
        
        .result {
            font-size: 20px;
            font-weight: bold;
            margin-top: 15px;
        }
    </style>
</head>

<body>

    <h1>คำนวณค่า BMI</h1>
    <label>น้ำหนัก (kg): <input type="number" id="weight"></label><br>
    <label>ส่วนสูง (cm): <input type="number" id="height"></label><br>
    <button onclick="calculateBMI()">คำนวณ BMI</button>
    <p class="result" id="bmiResult"></p>

    <script>
        // ฟังก์ชันคำนวณ BMI (Arrow Function)
        const calculateBMI = () => {
            let weight = parseFloat(document.getElementById("weight").value);
            let height = parseFloat(document.getElementById("height").value) / 100; // แปลง cm เป็น m

            if (weight > 0 && height > 0) {
                let bmi = weight / (height ** 2);
                let status =
                    bmi < 18.5 ? " ผอม" :
                    bmi < 25 ? " สมส่วน" :
                    " อ้วน";

                document.getElementById("bmiResult").innerText = `ค่า BMI: ${bmi.toFixed(2)} (${status})`;
            } else {
                document.getElementById("bmiResult").innerText = "❌ กรุณากรอกข้อมูลให้ถูกต้อง";
            }
        };
    </script>

</body>

</html>
```
[รูปผลการทดลองที่ 3.1]
![image](https://github.com/user-attachments/assets/8273f00e-6c38-489f-8b75-e7f80299283f)

## การทดลองที่ 3.2 : การสร้างฟอร์มสำหรับจองห้องพัก
การสร้างฟอร์มลงทะเบียนเพื่อรวบรวมข้อมูลที่จำเป็นสำหรับการจองห้องพัก

### ขั้นตอนที่ 3.2.1: สร้างโครงสร้าง HTML พื้นฐาน

สร้างไฟล์ `index.html` และใส่โค้ดต่อไปนี้:

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ระบบจองห้องพักออนไลน์</title>
</head>
<body>
    <h1>แบบฟอร์มจองห้องพัก</h1>
    
    <form id="bookingForm">
        <div>
            <label for="fullname">ชื่อ-นามสกุล:</label>
            <input type="text" id="fullname" name="fullname" required>
        </div>

        <div>
            <label for="email">อีเมล:</label>
            <input type="email" id="email" name="email" required>
        </div>

        <div>
            <label for="phone">เบอร์โทรศัพท์:</label>
            <input type="tel" id="phone" name="phone" required>
        </div>

        <div>
            <label for="checkin">วันที่เช็คอิน:</label>
            <input type="date" id="checkin" name="checkin" required>
        </div>

        <div>
            <label for="checkout">วันที่เช็คเอาท์:</label>
            <input type="date" id="checkout" name="checkout" required>
        </div>

        <div>
            <label for="roomtype">ประเภทห้องพัก:</label>
            <select id="roomtype" name="roomtype" required>
                <option value="">กรุณาเลือกประเภทห้องพัก</option>
                <option value="standard">ห้องมาตรฐาน</option>
                <option value="deluxe">ห้องดีลักซ์</option>
                <option value="suite">ห้องสวีท</option>
            </select>
        </div>

        <div>
            <label for="guests">จำนวนผู้เข้าพัก:</label>
            <input type="number" id="guests" name="guests" min="1" max="4" required>
        </div>

        <button type="submit">จองห้องพัก</button>
    </form>
</body>
</html>
```

### ขั้นตอนที่ 3.2.2 : การปรับแต่งด้วย CSS

เพิ่มความสวยงามให้กับฟอร์มด้วย CSS โดยเพิ่ม `<style>` ในส่วน `<head>` ของไฟล์ HTML:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ระบบจองห้องพักออนไลน์</title>
    <style>
        body {
            font-family: 'Sarabun', sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }

        h1 {
            color: #2c3e50;
            text-align: center;
            margin-bottom: 30px;
        }

        form {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        div {
            margin-bottom: 15px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            color: #34495e;
            font-weight: bold;
        }

        input, select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }

        input:focus, select:focus {
            outline: none;
            border-color: #3498db;
            box-shadow: 0 0 5px rgba(52,152,219,0.3);
        }

        button {
            background-color: #2980b9;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            font-size: 16px;
        }

        button:hover {
            background-color: #3498db;
        }

        @media (max-width: 480px) {
            body {
                padding: 10px;
            }
        }
    </style>
</head>
```

### คำอธิบาย CSS:

1. ใช้ `max-width` และ `margin: 0 auto` เพื่อจัดกึ่งกลางฟอร์ม
2. จัดการ layout ด้วย `display: block` และ `width: 100%`
3. เพิ่มเอฟเฟกต์ `hover` และ `focus`
4. ใช้ `box-shadow` เพื่อเพิ่มมิติการแสดงผล
5. รองรับการแสดงผลบนมือถือด้วย `@media`

### ผลการทดลอง
ทดสอบปรับแต่ง CSS ในแต่ละส่วน แล้วเขียน สรุปผลการทดลองว่าได้ทดลองเปลี่ยนส่วนใด แล้วผลเป็นอย่างไร พร้อมแนบรูปประกอบการทดลอง
เพิม NOTI BOX โดยใช้ js เปลี่ยนรุูปแบบหน้าตา ui ให้เข้าใจง่ายขึ้น
### บันทึกผลการทดลอง 3.2.2
```html
<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ระบบจองห้องพักออนไลน์</title>

    <!-- โหลดฟอนต์จาก Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600&display=swap" rel="stylesheet">

    <!-- เชื่อมต่อไฟล์ CSS -->
    <link rel="stylesheet" href="styles.css">
</head>

<body>

    <h1>แบบฟอร์มจองห้องพัก</h1>

    <form id="bookingForm">
        <div class="form-group">
            <label for="fullname">ชื่อ-นามสกุล:</label>
            <input type="text" id="fullname" name="fullname" required>
        </div>

        <div class="form-group">
            <label for="email">อีเมล:</label>
            <input type="email" id="email" name="email" required>
        </div>

        <div class="form-group">
            <label for="phone">เบอร์โทรศัพท์:</label>
            <input type="tel" id="phone" name="phone" required>
        </div>

        <div class="form-group">
            <label for="checkin">วันที่เช็คอิน:</label>
            <input type="date" id="checkin" name="checkin" required>
        </div>

        <div class="form-group">
            <label for="checkout">วันที่เช็คเอาท์:</label>
            <input type="date" id="checkout" name="checkout" required>
        </div>

        <div class="form-group">
            <label for="roomtype">ประเภทห้องพัก:</label>
            <select id="roomtype" name="roomtype" required>
                <option value="">กรุณาเลือกประเภทห้องพัก</option>
                <option value="standard">ห้องมาตรฐาน</option>
                <option value="deluxe">ห้องดีลักซ์</option>
                <option value="suite">ห้องสวีท</option>
            </select>
        </div>

        <div class="form-group">
            <label for="guests">จำนวนผู้เข้าพัก:</label>
            <input type="number" id="guests" name="guests" min="1" max="4" required>
        </div>

        <button type="submit">จองห้องพัก</button>
    </form>

    <!-- เชื่อมต่อไฟล์ JavaScript -->
    <script src="script.js"></script>

</body>

</html>
```
[รูปผลการทดลองที่ 3.2.2]
![image](https://github.com/user-attachments/assets/6d9ea86a-a010-4c8f-af24-c7558015135b)



## ขั้นตอนที่ 3.2.3: การเพิ่มฟังก์ชันด้วย JavaScript

เพิ่มโค้ด JavaScript ก่อนปิด `</body>`:

```html
<script>
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // ตรวจสอบวันที่
        const checkin = new Date(document.getElementById('checkin').value);
        const checkout = new Date(document.getElementById('checkout').value);
        const today = new Date();
        
        if (checkin < today) {
            alert('กรุณาเลือกวันเช็คอินที่ยังไม่ผ่านมา');
            return;
        }
        
        if (checkout <= checkin) {
            alert('วันเช็คเอาท์ต้องมาหลังวันเช็คอิน');
            return;
        }
        
        // ตรวจสอบรูปแบบเบอร์โทร
        const phone = document.getElementById('phone').value;
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)');
            return;
        }
        
        // คำนวณจำนวนวันที่พัก
        const days = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
        
        // แสดงสรุปการจอง
        const roomtype = document.getElementById('roomtype');
        const roomtypeText = roomtype.options[roomtype.selectedIndex].text;
        
        const summary = `
            สรุปการจอง:
            - ชื่อผู้จอง: ${document.getElementById('fullname').value}
            - ประเภทห้อง: ${roomtypeText}
            - วันที่เข้าพัก: ${checkin.toLocaleDateString('th-TH')}
            - วันที่ออก: ${checkout.toLocaleDateString('th-TH')}
            - จำนวนวันที่พัก: ${days} วัน
            - จำนวนผู้เข้าพัก: ${document.getElementById('guests').value} ท่าน
        `;
        
        if (confirm(summary + '\n\nยืนยันการจองห้องพัก?')) {
            alert('จองห้องพักเรียบร้อยแล้ว');
            this.reset();
        }
    });

    // เพิ่มการตรวจสอบวันที่แบบ Real-time
    document.getElementById('checkin').addEventListener('change', function() {
        document.getElementById('checkout').min = this.value;
    });

    // จำกัดจำนวนผู้เข้าพักตามประเภทห้อง
    document.getElementById('roomtype').addEventListener('change', function() {
        const guestsInput = document.getElementById('guests');
        if (this.value === 'standard') {
            guestsInput.max = 2;
        } else if (this.value === 'deluxe') {
            guestsInput.max = 3;
        } else if (this.value === 'suite') {
            guestsInput.max = 4;
        }
        
        if (guestsInput.value > guestsInput.max) {
            guestsInput.value = guestsInput.max;
        }
    });
</script>
```

### คำอธิบาย JavaScript:

1. ตรวจสอบความถูกต้องของข้อมูล:
   - วันที่เช็คอินต้องไม่เป็นวันที่ผ่านมาแล้ว
   - วันที่เช็คเอาท์ต้องมาหลังวันเช็คอิน
   - เบอร์โทรศัพท์ต้องมี 10 หลัก

2. เพิ่มฟังก์ชันการโต้ตอบ:
   - แสดงสรุปการจองก่อนยืนยัน
   - รีเซ็ตฟอร์มหลังการจอง
   - ปรับจำนวนผู้เข้าพักตามประเภทห้อง

3. การตรวจสอบแบบ Real-time:
   - ตรวจสอบวันที่เช็คอิน-เช็คเอาท์
   - ปรับจำนวนผู้เข้าพักสูงสุดตามประเภทห้อง
</body>
</html>
```

### ผลการทดลอง
ทดสอบปรับแต่ง JavaScript ในแต่ละส่วน แล้วอธิบายโค้ดในแต่ละส่วน เขียนสรุปผลการทดลองว่าได้ทดลองเปลี่ยนส่วนใด แล้วผลเป็นอย่างไร พร้อมแนบรูปประกอบการทดลอง
เปลี่ยนทุกส่วนตาม##คำอธิบาย
### บันทึกผลการทดลอง 3.2.3
```html
document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById("bookingForm");
    const checkinInput = document.getElementById("checkin");
    const checkoutInput = document.getElementById("checkout");
    const phoneInput = document.getElementById("phone");
    const roomtypeSelect = document.getElementById("roomtype");
    const guestsInput = document.getElementById("guests");

    // 🔹 ฟังก์ชันตรวจสอบวันที่เช็คอินและเช็คเอาท์แบบ Real-time
    function validateDates() {
        let today = new Date().toISOString().split("T")[0]; // วันที่ปัจจุบัน
        let checkinDate = checkinInput.value;
        let checkoutDate = checkoutInput.value;

        if (checkinDate < today) {
            alert("⚠ วันที่เช็คอินต้องไม่เป็นวันที่ผ่านมาแล้ว!");
            checkinInput.value = "";
        }

        if (checkoutDate && checkinDate && checkoutDate <= checkinDate) {
            alert("⚠ วันที่เช็คเอาท์ต้องมากกว่าวันที่เช็คอิน!");
            checkoutInput.value = "";
        }
    }

    // 🔹 ฟังก์ชันตรวจสอบเบอร์โทรศัพท์
    function validatePhone() {
        let phoneNumber = phoneInput.value;
        if (!/^\d{10}$/.test(phoneNumber)) {
            alert("⚠ เบอร์โทรศัพท์ต้องมี 10 หลัก!");
            phoneInput.value = "";
        }
    }

    // 🔹 ฟังก์ชันกำหนดจำนวนผู้เข้าพักสูงสุดตามประเภทห้อง
    function adjustGuestsLimit() {
        let roomType = roomtypeSelect.value;
        let maxGuests = 1;

        if (roomType === "standard") {
            maxGuests = 2;
        } else if (roomType === "deluxe") {
            maxGuests = 3;
        } else if (roomType === "suite") {
            maxGuests = 4;
        }

        guestsInput.max = maxGuests;
        guestsInput.value = Math.min(guestsInput.value, maxGuests);
    }

    // 🔹 ตรวจสอบข้อมูลก่อนส่งฟอร์ม
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = phoneInput.value.trim();
        const checkin = checkinInput.value;
        const checkout = checkoutInput.value;
        const roomtype = roomtypeSelect.value;
        const guests = guestsInput.value;

        if (!fullname || !email || !phone || !checkin || !checkout || !roomtype || !guests) {
            alert("⚠ กรุณากรอกข้อมูลให้ครบทุกช่อง!");
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            alert("⚠ เบอร์โทรศัพท์ต้องมี 10 หลัก!");
            return;
        }

        let today = new Date().toISOString().split("T")[0];
        if (checkin < today) {
            alert("⚠ วันที่เช็คอินต้องไม่เป็นวันที่ผ่านมาแล้ว!");
            return;
        }

        if (checkout <= checkin) {
            alert("⚠ วันที่เช็คเอาท์ต้องมากกว่าวันที่เช็คอิน!");
            return;
        }

        // 🔹 แสดงรายละเอียดการจองก่อนยืนยัน
        let confirmBooking = confirm(
            `✅ โปรดยืนยันการจอง:\n\n` +
            `📌 ชื่อ: ${fullname}\n` +
            `📧 อีเมล: ${email}\n` +
            `📞 โทรศัพท์: ${phone}\n` +
            `🏨 ประเภทห้อง: ${roomtype}\n` +
            `👥 ผู้เข้าพัก: ${guests} คน\n` +
            `📅 เช็คอิน: ${checkin}\n` +
            `📅 เช็คเอาท์: ${checkout}\n\n` +
            `ต้องการยืนยันการจองใช่หรือไม่?`
        );

        if (confirmBooking) {
            alert("🎉 ขอบคุณที่จองห้องพัก! ระบบได้บันทึกการจองของคุณเรียบร้อยแล้ว ✅");
            bookingForm.reset();
        }
    });

    // 🔹 Event Listeners สำหรับการตรวจสอบแบบ Real-time
    checkinInput.addEventListener("change", validateDates);
    checkoutInput.addEventListener("change", validateDates);
    phoneInput.addEventListener("input", validatePhone);
    roomtypeSelect.addEventListener("change", adjustGuestsLimit);
});

```
[รูปผลการทดลองที่ 3.2.3]
![image](https://github.com/user-attachments/assets/4680ba75-1040-4cf6-81c3-e485f9f40f12)
![image](https://github.com/user-attachments/assets/55d22d8e-b76e-43a9-8da8-bd3644866418)

## คำแนะนำเพิ่มเติม
- ทดลองเขียนโค้ดทุกตัวอย่างด้วยตัวเอง
- ลองปรับเปลี่ยนค่าต่างๆ เพื่อดูผลลัพธ์ที่เปลี่ยนไป
- ใช้ Console ใน Developer Tools ของเบราว์เซอร์เพื่อดูผลลัพธ์และแก้ไขข้อผิดพลาด
- ทำความเข้าใจแต่ละบรรทัดของโค้ดก่อนที่จะไปศึกษาหัวข้อถัดไป (ใช้ GenAI เพื่อช่วยในการอธิบายได้)

## แหล่งเรียนรู้เพิ่มเติม
- MDN Web Docs: https://developer.mozilla.org/th/docs/Web/JavaScript
- W3Schools: https://www.w3schools.com/js/
- JavaScript.info: https://javascript.info/

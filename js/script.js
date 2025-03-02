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
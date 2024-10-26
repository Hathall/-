// تحويل من الميلادي إلى الهجري
function convertToHijri() {
    const date = document.getElementById("gregorianDate").value;
    const hijriDate = moment(date, 'YYYY-MM-DD').format('iYYYY/iMM/iDD');

    document.getElementById("hijriResult").innerText = `التاريخ الهجري: ${hijriDate}`;
}

// تحويل من الهجري إلى الميلادي
function convertToGregorian() {
    const hijriYear = document.getElementById("hijriYear").value;
    const hijriMonth = document.getElementById("hijriMonth").value;
    const hijriDay = document.getElementById("hijriDay").value;
    
    const hijriDate = `${hijriYear}-${hijriMonth}-${hijriDay}`;
    const gregorianDate = moment(hijriDate, 'iYYYY-iMM-iDD').format('YYYY-MM-DD');

    document.getElementById("gregorianResult").innerText = `التاريخ الميلادي: ${gregorianDate}`;
}

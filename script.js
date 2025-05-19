function calculateWeight() {
  const length = parseFloat(document.getElementById("length").value);
  const webHeight = parseFloat(document.getElementById("webHeight").value);
  const webThickness = parseFloat(document.getElementById("webThickness").value);
  const flange1Width = parseFloat(document.getElementById("flange1Width").value);
  const flange1Thickness = parseFloat(document.getElementById("flange1Thickness").value);
  const flange2Width = parseFloat(document.getElementById("flange2Width").value);
  const flange2Thickness = parseFloat(document.getElementById("flange2Thickness").value);
  const count = parseInt(document.getElementById("count").value);

  if (
    isNaN(length) || isNaN(webHeight) || isNaN(webThickness) ||
    isNaN(flange1Width) || isNaN(flange1Thickness) ||
    isNaN(flange2Width) || isNaN(flange2Thickness) ||
    isNaN(count) || count < 1
  ) {
    document.getElementById("result").innerText = "من فضلك أدخل جميع القيم بشكل صحيح.";
    return;
  }

  // حساب المساحات بالمليمتر مربع
  const flange1Area = flange1Width * flange1Thickness;
  const flange2Area = flange2Width * flange2Thickness;
  const webArea = webHeight * webThickness;
  const totalArea = flange1Area + flange2Area + webArea;

  // الحجم = مساحة المقطع × الطول
  const volume = totalArea * length; // مم³

  // تحويل من مم³ إلى م³
  const volume_m3 = volume / 1_000_000_000;

  // الكثافة = 7850 كجم/م³
  const singleWeight = volume_m3 * 7850;
  const totalWeight = singleWeight * count;

  document.getElementById("result").innerHTML = `
    وزن الكمرة الواحدة: ${singleWeight.toFixed(2)} كجم<br>
    الوزن الكلي (${count} كمرة): ${totalWeight.toFixed(2)} كجم
  `;
}

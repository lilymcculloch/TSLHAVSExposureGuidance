
const products = [
  {
    name: "Makita DHP482 Cordless Drill: MEDIUM RISK",
    imgSrc: "images/makitaDHP482.jpg",
    risk: "medium",
    vibrationMagnitude: "6 m/s² r.m.s",
    hsePoints: "72 points/hour",
    maxUsage: "5 hrs 33 mins",
  },
  {
    name: "Makita BHR202Z Rotary Drill: HIGH RISK",
    imgSrc: "images/MakitaBHR202Z.jpg",
    risk: "high",
    vibrationMagnitude: "14 m/s² r.m.s",
    hsePoints: "392 points/hour",
    maxUsage: "1 hrs 1 min",
  },
  {
    name: "Makita DTW251 Impact Wrench: HIGH RISK",
    imgSrc: "images/MakitaDTW251.jpg",
    risk: "high",
    vibrationMagnitude: "11 m/s² r.m.s",
    hsePoints: "242 points/hour",
    maxUsage: "1 hrs 39 mins",
  },
  {
    name: "Makita DTD152Z Impact Driver: HIGH RISK",
    imgSrc: "images/MakitaDTD152Z.jpg",
    risk: "high",
    vibrationMagnitude: "10.5 m/s² r.m.s",
    hsePoints: "221 points/hour",
    maxUsage: "1 hrs 49 mins",
  },
  {
    name: "Makita DHP435Z Combi Drill: MEDIUM RISK",
    imgSrc: "images/MakitaDHP435Z.jpg",
    risk: "medium",
    vibrationMagnitude: "10 m/s² r.m.s",
    hsePoints: "200 points/hour",
    maxUsage: "2 hrs",
  },
  {
    name: "Sealey CP313 Cordless Riveter: LOW RISK",
    imgSrc: "images/SealeyCP313.jpg",
    risk: "low",
    vibrationMagnitude: "3.9 m/s² r.m.s",
    hsePoints: "30 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "Metabo NP1 8LTX BL5.0: LOW RISK",
    imgSrc: "images/MetaboNP18LTX.jpg",
    risk: "low",
    vibrationMagnitude: "2.5 m/s² r.m.s",
    hsePoints: "13 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "Makita DHP459SFE Combi Drill: LOW RISK",
    imgSrc: "images/MakitaDHP459SFE.jpg",
    risk: "low",
    vibrationMagnitude: "6.7 m/s² r.m.s",
    hsePoints: "90 points/hour",
    maxUsage: "4 hrs 27 mins",
  },
  {
    name: "Makita DTD153 Impact Dril: HIGH RISK",
    imgSrc: "images/MakitaDHP459SFE.jpg",
    risk: "high",
    vibrationMagnitude: "13 m/s² r.m.s",
    hsePoints: "338 points/hour",
    maxUsage: "1 hrs 11 mins",
  },
  {
    name: "Makita DTD146 Cordless Impact Driver: HIGH RISK",
    imgSrc: "images/MakitaDHP459SFE.jpg",
    risk: "high",
    vibrationMagnitude: "15.5 m/s² r.m.s",
    hsePoints: "481 points/hour",
    maxUsage: "50 mins",
  },
  {
    name: "Makita DDA351Z Angle Drill: LOW RISK",
    imgSrc: "images/MakitaDDA351Z.jpg",
    risk: "low",
    vibrationMagnitude: "2.5 m/s² r.m.s",
    hsePoints: "13 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "Makita DHP453Z Combi Drill & Impact: MEDIUM RISK",
    imgSrc: "images/MakitaDHP453Z.jpg",
    risk: "medium",
    vibrationMagnitude: "7.5/2.5 m/s² r.m.s",
    hsePoints: "113/13 points/hour",
    maxUsage: "Hammer drilling 3hrs 33 mins or Standard Drilling 8 hrs",
  },
  {
    name: "Makita DHP458Z Cordless Compact Drill LXT: MEDIUM RISK",
    imgSrc: "images/MakitaDHP458Z.jpg",
    risk: "medium",
    vibrationMagnitude: "9.5/2.5 m/s² r.m.s",
    hsePoints: "181/13 points/hour",
    maxUsage: "Drilling concrete: 2 hrs 13 mins or Drilling metal: 8 hrs",
  },
  {
    name: "Makita DHP484Z Combi Drill: MEDIUM RISK",
    imgSrc: "images/MakitaDHP484Z.jpg",
    risk: "medium",
    vibrationMagnitude: "8.0/2.5 m/s² r.m.s",
    hsePoints: "128/13 points/hour",
    maxUsage: "Drilling concrete: 3hrs 8mins or Drilling metal: 8hrs",
  },
  {
    name: "Makita DHR202Z Rotary Hammer Drill: HIGH RISK",
    imgSrc: "images/MakitaDHR202Z.jpg",
    risk: "high",
    vibrationMagnitude: "14.5/11 m/s² r.m.s",
    hsePoints: "421/242 points/hour",
    maxUsage: "Hammer drilling: 57 mins or Chiselling: 1 hr 39 mins",
  },
  {
    name: "Makita DHR202RTJ Rotary Hammer Drill: HIGH RISK",
    imgSrc: "images/MakitaDHR202RTJ.jpg",
    risk: "high",
    vibrationMagnitude: "14.5/11 m/s² r.m.s",
    hsePoints: "421/242 points/hour",
    maxUsage: "Hammer drilling: 57 mins or Chiselling: 1 hr 39 mins",
  },
  {
    name: "Makita DHR242Z Rotary Hammer: HIGH RISK",
    imgSrc: "images/MakitaDHR242Z.jpg",
    risk: "high",
    vibrationMagnitude: "13/10.5 m/s² r.m.s",
    hsePoints: "365/221 points/hour",
    maxUsage: "Hammer drilling: 1 hrs 6 mins or Chiselling: 1 hr 49 mins",
  },
  {
    name: "Makita DLX2180T Combo Kit LXT: MEDIUM RISK",
    imgSrc: "images/MakitaDLX2180T.jpg",
    risk: "medium",
    vibrationMagnitude: "6/2.5 m/s² r.m.s",
    hsePoints: "72/13 points/hour",
    maxUsage: "Drilling concrete: 5 hrs 33 mins Or Drilling metal: 8 hrs",
  },
  {
    name: "Makita DTW285 Cordless Impact Wrench: HIGH RISK",
    imgSrc: "images/MakitaDTW285.jpg",
    risk: "high",
    vibrationMagnitude: "11.5 m/s² r.m.s",
    hsePoints: "265 points/hour",
    maxUsage: "1 hr 31 mins",
  },
  {
    name: "Makita HR2630 Rotary Hammer Drill: HIGH RISK",
    imgSrc: "images/MakitaHR2630.jpg",
    risk: "high",
    vibrationMagnitude: "15.5 / 9.5 m/s² r.m.s",
    hsePoints: "481 / 181 points/hour",
    maxUsage: "Drilling concrete: 50 mins or Drilling metal: 2 hrs 13 mins",
  },
  {
    name: "Makita HR2630 Rotary Hammer Drill: HIGH RISK",
    imgSrc: "images/MakitaHR2630.jpg",
    risk: "high",
    vibrationMagnitude: "15.5 / 9.5 m/s² r.m.s",
    hsePoints: "481 / 181 points/hour",
    maxUsage: "Drilling concrete: 50 mins or Drilling metal: 2 hrs 13 mins",
  },
  {
    name: "BOSCH GBH 2-21 Professional Hammer Drill: HIGH RISK",
    imgSrc: "images/BOSCHGBH2-21.jpg",
    risk: "high",
    vibrationMagnitude: "14.7 m/s² r.m.s",
    hsePoints: "432 points/hour",
    maxUsage: "Drilling concrete: 56 mins",
  },
  {
    name: "DEWALT DCD776 Compact Hammer Drill Driver: HIGH RISK",
    imgSrc: "images/DEWALTDCD776.jpg",
    risk: "high",
    vibrationMagnitude: "14.0 / 2.5 m/s² r.m.s",
    hsePoints: "392 / 13 points/hour",
    maxUsage: "Drilling concrete: 1 hr 1 min Screwdriving: 8 hrs",
  },
  {
    name: "DeWalt DCH172 18v Cordless Hammer Drill: HIGH RISK",
    imgSrc: "images/DeWaltDCH172.jpg",
    risk: "high",
    vibrationMagnitude: "10.3 m/s² r.m.s",
    hsePoints: "212 points/hour",
    maxUsage: "Drilling concrete: 1 hr 53 mins",
  },
  {
    name: "DeWalt DCG405 18v XR Cordless Brushless Angle Grinder: MEDIUM RISK",
    imgSrc: "images/DeWaltDCG405.jpg",
    risk: "medium",
    vibrationMagnitude: "5.9 m/s² r.m.s",
    hsePoints: "70 points/hour",
    maxUsage: "Drilling concrete: 5 hr 45 mins",
  },
  {
    name: "EVOMAG28 28 mm Evolution Magnetic Drill: LOW RISK",
    imgSrc: "images/EVOMAG28.jpg",
    risk: "low",
    vibrationMagnitude: "0.283 m/s² r.m.s",
    hsePoints: "1 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "DEWALT DCF787N Brushless Impact Driver: HIGH RISK",
    imgSrc: "images/EVOMAG28.jpg",
    risk: "high",
    vibrationMagnitude: "17 m/s² r.m.s",
    hsePoints: "578 points/hour",
    maxUsage: "42 mins",
  },
  {
    name: "DEWALT DCD778 Brushless Hammer Drill: HIGH RISK",
    imgSrc: "images/DEWALTDCD778.jpg",
    risk: "high",
    vibrationMagnitude: "14 m/s² r.m.s",
    hsePoints: "392 points/hour",
    maxUsage: "1 hr 1 min",
  },
  {
    name: "Makita DJV180Z18V Jigsaw: LOW RISK",
    imgSrc: "images/MakitaDJV180Z18V.jpg",
    risk: "low",
    vibrationMagnitude: "3.5 m/s² r.m.s",
    hsePoints: "25 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "BOSCH GBH 36V Rotary Hammer Drill: HIGH RISK",
    imgSrc: "images/BOSCHGBH36V.jpg",
    risk: "high",
    vibrationMagnitude: "16 m/s² r.m.s",
    hsePoints: "512 points/hour",
    maxUsage: "47 mins",
  },
  {
    name: "DEWALT DCF885 Imapct Drill: HIGH RISK",
    imgSrc: "images/DEWALTDCF885.jpg",
    risk: "high",
    vibrationMagnitude: "15.5 m/s² r.m.s",
    hsePoints: "481 points/hour",
    maxUsage: "50 mins",
  },
  {
    name: "Stihl TS400 Petrol Saw: LOW RISK",
    imgSrc: "images/StihlTS400.jpg",
    risk: "low",
    vibrationMagnitude: "3.9 m/s² r.m.s",
    hsePoints: "30 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "Stihl TS410 Petrol Saw: LOW RISK",
    imgSrc: "images/StihlTS410.jpg",
    risk: "low",
    vibrationMagnitude: "3.9 m/s² r.m.s",
    hsePoints: "30 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "Makita EK6100 Petrol Disc Cutter: LOW RISK",
    imgSrc: "images/MakitaEK6100.jpg",
    risk: "low",
    vibrationMagnitude: "3.7 m/s² r.m.s",
    hsePoints: "27 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "Makita DGA454Z Angle Grinder: MEDIUM RISK",
    imgSrc: "images/MakitaDGA454Z.jpg",
    risk: "medium",
    vibrationMagnitude: "6.5 m/s² r.m.s",
    hsePoints: "85 points/hour",
    maxUsage: "4 hrs 44 mins",
  },
  {
    name: "Makita DCS550z Metal Saw: LOW RISK",
    imgSrc: "images/MakitaDCS550z.jpg",
    risk: "low",
    vibrationMagnitude: "3 m/s² r.m.s",
    hsePoints: "18 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "Makita DCS552Z Metal Saw: LOW RISK",
    imgSrc: "images/MakitaDCS552Z.jpg",
    risk: "low",
    vibrationMagnitude: "2.5 m/s² r.m.s",
    hsePoints: "13 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "Makita DGA452 Angle Grinder: MEDIUM RISK",
    imgSrc: "images/MakitaDGA452.jpg",
    risk: "medium",
    vibrationMagnitude: "8.5 m/s² r.m.s",
    hsePoints: "145 points/hour",
    maxUsage: "2 hrs 46 mins",
  },
  {
    name: "Makita DGA456 Grinder: LOW RISK",
    imgSrc: "images/MakitaDGA456.jpg",
    risk: "low",
    vibrationMagnitude: "6.5 m/s² r.m.s",
    hsePoints: "85 points/hour",
    maxUsage: "4 hrs 44 mins",
  },
  {
    name: "Makita DGA469 Grinder: LOW RISK",
    imgSrc: "images/MakitaDGA469.jpg",
    risk: "low",
    vibrationMagnitude: "5 m/s² r.m.s",
    hsePoints: "50 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "Makita DJR186Z Reciprocating Saw: HIGH RISK",
    imgSrc: "images/MakitaDJR186Z.jpg",
    risk: "high",
    vibrationMagnitude: "13 m/s² r.m.s",
    hsePoints: "338 points/hour",
    maxUsage: "1 hr 11 mins",
  },
  {
    name: "Makita DJR186Z Reciprocating Saw: HIGH RISK",
    imgSrc: "images/MakitaDJR186Z.jpg",
    risk: "high",
    vibrationMagnitude: "13 m/s² r.m.s",
    hsePoints: "338 points/hour",
    maxUsage: "1 hr 11 mins",
  },
  {
    name: "Makita DTM50Z Multi Tool: MEDIUM RISK",
    imgSrc: "images/MakitaDTM50Z.jpg",
    risk: "medium",
    vibrationMagnitude: "9.5 m/s² r.m.s",
    hsePoints: "181 points/hour",
    maxUsage: "2 hr 13 mins",
  },
  {
    name: "Makita DGA467 Grinder: LOW RISK",
    imgSrc: "images/MakitaDGA467.jpg",
    risk: "low",
    vibrationMagnitude: "5.5 m/s² r.m.s",
    hsePoints: "61 points/hour",
    maxUsage: "6 hr 37 mins",
  },
  {
    name: "Husqvarna K760 Petrol Saw: LOW RISK",
    imgSrc: "images/HusqvarnaK760.jpg",
    risk: "low",
    vibrationMagnitude: "2 m/s² r.m.s",
    hsePoints: "13 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "Makita HS7601J Circular Wood Saw: LOW RISK",
    imgSrc: "images/MakitaHS7601J.jpg",
    risk: "low",
    vibrationMagnitude: "2.5 m/s² r.m.s",
    hsePoints: "13 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "ALTRAD BELLE PCLX320 COMACTING PLATE: LOW RISK",
    imgSrc: "images/ALTRADBELLEPCLX320.jpg",
    risk: "low",
    vibrationMagnitude: "2.42 m/s² r.m.s",
    hsePoints: "12 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "BOSCH GSH 27KG Breaker: LOW RISK",
    imgSrc: "images/BOSCHGSH27KG.jpg",
    risk: "low",
    vibrationMagnitude: "0.0 m/s² r.m.s",
    hsePoints: "0.0 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "Dewalt D25899-K SDS Breaker: HIGH RISK",
    imgSrc: "images/DewaltD25899K.jpg",
    risk: "high",
    vibrationMagnitude: "12 m/s² r.m.s",
    hsePoints: "288 points/hour",
    maxUsage: "1 hrs 23 mins",
  },
  {
    name: "Hilti Breaker TE3000: HIGH RISK",
    imgSrc: "images/HiltiBreakerTE3000.jpg",
    risk: "high",
    vibrationMagnitude: "7 m/s² r.m.s",
    hsePoints: "98 points/hour",
    maxUsage: "4 hrs 5 mins",
  },
  {
    name: "Hilti Breaker TE1000: HIGH RISK",
    imgSrc: "images/HiltiBreakerTE1000.jpg",
    risk: "high",
    vibrationMagnitude: "5 m/s² r.m.s",
    hsePoints: "50 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "Makita DUB186 Leaf Blower: LOW RISK",
    imgSrc: "images/MakitaDUB186.jpg",
    risk: "low",
    vibrationMagnitude: "2.5 m/s² r.m.s",
    hsePoints: "13 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "Makita DVR350Z Vibrating Poker: LOW RISK",
    imgSrc: "images/MakitaDVR350Z.jpg",
    risk: "low",
    vibrationMagnitude: "1.5 m/s² r.m.s",
    hsePoints: "5 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "Makita 350D44AZ Concrete Vibrator: LOW RISK",
    imgSrc: "images/Makita350D44AZ.jpg",
    risk: "low",
    vibrationMagnitude: "3 m/s² r.m.s",
    hsePoints: "18 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "MILWAUKEE M12 BPRT Sub-Compact Rivet Gun: LOW RISK",
    imgSrc: "images/MILWAUKEEM12BPRT.jpg",
    risk: "low",
    vibrationMagnitude: "0.1 m/s² r.m.s",
    hsePoints: "1 points/hour",
    maxUsage: "8 hrs",
  },
  {
    name: "Makita LXT Combi & Impact Drill DHP453: MEDIUM RISK",
    imgSrc: "images/MakitaLXTCombi.jpg",
    risk: "medium",
    vibrationMagnitude: "7.5 m/s² r.m.s",
    hsePoints: "113 points/hour",
    maxUsage: "3 hrs 33 mins",
  },
  {
    name: "Makita Grinder GA4530RKD: MEDIUM RISK",
    imgSrc: "images/MakitaGrinder.jpg",
    risk: "medium",
    vibrationMagnitude: "7.5 m/s² r.m.s",
    hsePoints: "113 points/hour",
    maxUsage: "3 hrs 33 mins",
  },
  {
    name: "Makita Hammer Drill Model DHR202: HIGH RISK",
    imgSrc: "images/MakitaDHR202.jpg",
    risk: "high",
    vibrationMagnitude: "14.5 m/s² r.m.s",
    hsePoints: "421 points/hour",
    maxUsage: "57 mins",
  },
  {
    name: "Makita Grinder Model DGA456: MEDIUM RISK",
    imgSrc: "images/MakitagrinderDGA456.jpg",
    risk: "medium",
    vibrationMagnitude: "6.5 m/s² r.m.s",
    hsePoints: "85 points/hour",
    maxUsage: "4 hrs 44 mins",
  },
  
];

// Function to generate product elements
function generateProducts() {
  const productList = document.getElementById('productList');

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    
    // Add risk-based class
    if (product.risk === "low") {
      productDiv.classList.add('low-risk');
    } else if (product.risk === "medium") {
      productDiv.classList.add('medium-risk');
    } else if (product.risk === "high") {
      productDiv.classList.add('high-risk');
    }

    // Product image
    const img = document.createElement('img');
    img.src = product.imgSrc;

    // Product details
    const detailsDiv = document.createElement('div');
    
    // Product name
    const name = document.createElement('h3');
    name.textContent = product.name;
    detailsDiv.appendChild(name);

    // Extra details for specific product
    if (product.vibrationMagnitude) {
      const vibration = document.createElement('p');
      vibration.textContent = `Manufacturer vibration magnitude: ${product.vibrationMagnitude}`;
      detailsDiv.appendChild(vibration);
    }

    if (product.hsePoints) {
      const hsePoints = document.createElement('p');
      hsePoints.textContent = `HSE Exposure Points per hour: ${product.hsePoints}`;
      detailsDiv.appendChild(hsePoints);
    }

    if (product.maxUsage) {
      const maxUsage = document.createElement('p');
      maxUsage.textContent = `Maximum usage time per 8hr shift: ${product.maxUsage}`;
      detailsDiv.appendChild(maxUsage);
    }

    productDiv.appendChild(img);
    productDiv.appendChild(detailsDiv);
    
    productList.appendChild(productDiv);
  });
}

// Function to filter products
function filterProducts() {
  const searchInput = document.getElementById('searchBar').value.toLowerCase();
  const productDivs = document.querySelectorAll('.product');

  productDivs.forEach((productDiv, index) => {
    const productName = products[index].name.toLowerCase();
    if (productName.includes(searchInput)) {
      productDiv.style.display = "flex";
    } else {
      productDiv.style.display = "none";
    }
  });
}

// Initialize products on page load
window.onload = generateProducts;

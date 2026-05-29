// Futures Position Calculator
document.addEventListener("DOMContentLoaded", () => {
  const calcCapital = document.getElementById("calc-capital");
  const calcRiskPct = document.getElementById("calc-risk-pct");
  const calcAsset = document.getElementById("calc-asset");
  const calcSlTicks = document.getElementById("calc-sl-ticks");

  // Output Elements
  const resRiskMoney = document.getElementById("res-risk-money");
  const resPointValue = document.getElementById("res-point-value");
  const resSlValue1Contract = document.getElementById("res-sl-value-1contract");
  const resContracts = document.getElementById("res-contracts");
  const resWarningMsg = document.getElementById("res-warning-msg");

  // Contract specs: Point Value (multiplier)
  const contractSpecs = {
    ES: 50,    // $50 per full point
    MES: 5,    // $5 per full point
    NQ: 20,    // $20 per full point
    MNQ: 2,    // $2 per full point
    CL: 1000,  // $1000 per full point (1.00 point movement = $1000. 0.01 tick = $10)
    MCL: 100   // $100 per full point (1.00 point movement = $100. 0.01 tick = $1)
  };

  const calculatePosition = () => {
    const capital = parseFloat(calcCapital.value) || 0;
    const riskPct = parseFloat(calcRiskPct.value) || 0;
    const asset = calcAsset.value;
    const slPoints = parseFloat(calcSlTicks.value) || 0;

    // Calculate maximum money at risk
    const riskMoney = capital * (riskPct / 100);
    resRiskMoney.textContent = `$${riskMoney.toFixed(2)}`;

    // Get point value for the asset
    const pointValue = contractSpecs[asset] || 0;
    resPointValue.textContent = `$${pointValue.toFixed(2)}`;

    // Calculate SL value for 1 contract
    const slValue1Contract = slPoints * pointValue;
    resSlValue1Contract.textContent = `$${slValue1Contract.toFixed(2)}`;

    // Calculate contracts to buy/sell
    if (slValue1Contract > 0) {
      const optimalContracts = riskMoney / slValue1Contract;
      
      // Highlight exact size (with precision)
      resContracts.textContent = `${optimalContracts.toFixed(2)} Contratos`;

      // Helper message
      const isMicro = asset.startsWith("M");
      const baseAsset = isMicro ? asset.substring(1) : asset;
      const minRequired = 1.0;

      if (optimalContracts < 1) {
        if (!isMicro) {
          const microEq = asset === "ES" ? "MES" : asset === "NQ" ? "MNQ" : "MCL";
          resWarningMsg.innerHTML = `⚠️ El tamaño calculado es menor a 1 contrato Mini. Te recomendamos cambiar al contrato Micro <strong>${microEq}</strong> para poder gestionar este riesgo adecuadamente.`;
        } else {
          resWarningMsg.innerHTML = `⚠️ El tamaño es inferior a 1 contrato Micro. Tu capital es demasiado pequeño para este nivel de stop loss con una gestión de riesgo del ${riskPct}%. Deberías reducir el Stop Loss o aumentar tu capital.`;
        }
      } else {
        const roundedDown = Math.floor(optimalContracts);
        resWarningMsg.innerHTML = `✅ <strong>Estrategia recomendada:</strong> Opera <strong>${roundedDown}</strong> contrato(s) de ${asset}. Redondeamos hacia abajo para mantener el riesgo estrictamente bajo el ${riskPct}%.`;
      }
    } else {
      resContracts.textContent = "0.00 Contratos";
      resWarningMsg.textContent = "⚠️ Ingresa un Stop Loss válido mayor que cero.";
    }
  };

  // Attach event listeners
  [calcCapital, calcRiskPct, calcAsset, calcSlTicks].forEach(element => {
    element.addEventListener("input", calculatePosition);
    element.addEventListener("change", calculatePosition);
  });

  // Run initial calculation
  calculatePosition();
});

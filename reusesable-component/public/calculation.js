function calculatePayment() {
   // Get input values
   const amount = parseFloat(document.getElementById("amount").value);
   const years = parseInt(document.getElementById("year").value);
   const interestRate = 25.5 / 100; // Fixed interest rate of 25.5%
   const isRepayment = document.getElementById("repayment").checked;
 
 
   // Validate inputs
   if (isNaN(amount) || isNaN(years) || amount <= 0 || years <= 0) {
     document.getElementById("result").textContent = "Please enter valid values for amount and term.";
     return;
   }
 
   let resultText;
 
               
 
   if (isRepayment) {
 
       // remove the image
     document.querySelector("img").style.display = "none";
 
     // Repayment mortgage calculation
     const monthlyRate = interestRate / 12;
     const totalPayments = years * 12;
     const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));
 
     resultText = `Your results`;
     document.querySelector(".info").textContent = 'Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayment" again.';
 
     // Display the payment amount
     document.querySelector(".payment-wrapper").style.display = "block";
     document.querySelector(".monthly-message").textContent = "Your monthly repayments";
     document.querySelector(".monthly-amount").textContent = `£${monthlyPayment.toFixed(2)}`;
 
     document.querySelector(".total-message").textContent = "Total you'll repay over the term";
     document.querySelector(".total-amount").textContent = `£${(monthlyPayment * (years * 12))}`;
 
    
 
   } else {
     document.querySelector("img").style.display = "none";
 
     // Interest-only mortgage calculation
     const monthlyInterest = (amount * interestRate) / 12;
 
     resultText = `Your results`;
     document.querySelector(".info").textContent = 'Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayment" again.';
     
     // Display the payment amount
     document.querySelector(".payment-wrapper").style.display = "block";
     document.querySelector(".monthly-message").textContent = "Your monthly repayments";
     document.querySelector(".monthly-amount").textContent = `£${monthlyInterest.toFixed(2)}`;
 
     document.querySelector(".total-message").textContent = "Total you'll repay over the term";
     document.querySelector(".total-amount").textContent = `£${(monthlyPayment * (years * 12))}`;
 
 
     
     // resultText = `Your monthly interest payment is £${monthlyInterest.toFixed(2)}`;
     // const monthlyInterest = (amount * interestRate) / 12;
   }
 
 
   // Display the result
   document.getElementById("result").textContent = resultText;
 }
 
 
 function clearAllFields() {
   document.getElementById("amount").value = '';
   document.getElementById("year").value = '';
   document.getElementById("percent").value = '';
   document.getElementById("repayment").checked = false;
   document.getElementById("interest").checked = false;
   document.getElementById("result").textContent = "Results shown here";
   document.getElementById("paymentWrapper").style.display = "none";
 
 
   // Show the image again when clearing
   document.querySelector(".result-field img").style.display = "block";
 }
 
 document.getElementById("clearAll").addEventListener("click", clearAllFields);
 
 
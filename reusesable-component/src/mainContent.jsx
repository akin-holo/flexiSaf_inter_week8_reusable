// import "./CalculatingScript.js"
import "./mainContent.css"

function MainContent() {
   return (
            <div className="container">
               <section className="input-field">
                  <div className="name-and-clear-wrapper">
                     <h2>Mortgage Calculator</h2>
                     <button type="reset" className="clear-all" id="clearAll">Clear All</button>
                  </div>
  
                        {/* Mortage Amount */}
                  <label htmlFor="amount" className="mort-amount">
                     <span>Mortgage Amount</span>
                     <input className="amount" id="amount" inputMode="numeric" />
                     <span className="placeholder-amount">£</span>
                  </label>
  
                        {/* years and Interest */}
                  <div className="y-and-i-wrapper">
                     <label>
                        <span>Mortgage Term</span>
                        <input type="number" id="year" />
                        <span className="placeholder-years">Years</span>
                     </label>
    
                        {/* Morgate Term */}
                     <label>
                        <span>Interest Rate</span>
                        <input type="number" id="percent" />
                        <span className="placeholder-percent">%</span>
                     </label>
                  </div>
  
                        {/* Morgate Type */}
                  <div className="mortgage-type">
                     <span>Mortgage Type</span>
                     <label htmlFor="repayment">
                        <input type="radio" name="mortgageType" id="repayment" />
                        Repayment
                     </label>
                     <label htmlFor="interest">
                        <input type="radio" name="mortgageType" id="interest" />
                        Interest Only
                     </label>
                  </div>
                  <button
                     type="submit"
                     className="calculate"
                     id="calculate"
                     onclick="calculatePayment()"
                  >
                     <i className="fa-solid fa-calculator" /> Calculate Repayments
                  </button>
               </section>


               {/* results field*/}
               <section className="result-field">
                  <img src="./assets/calculator.png" alt="" />
                  <p className="result" id="result"> Results shown here</p>
                  <small className="info"> Complete the form and click "calculate repayment" to see what your monthly repayment would be.</small>
                  <div className="payment-wrapper" id="paymentWrapper">
                     <div className="monthly-repayment">
                        <p className="monthly-message" />
                        <p className="monthly-amount" aria-live="polite" />
                     </div>
                     <div className="overall-repayment">
                        <p className="total-message" />
                        <p className="total-amount" aria-live="polite" />
                     </div>
                  </div>
               </section>
            </div>

   )
}

export default MainContent

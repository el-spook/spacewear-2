// Import this in order to use react hooks:
import React, { useState } from "react";

// Define a function component:
function Calculator(){
    // declare the different aspects that will use state: 
    const [shopTotal, setShopTotal] = useState("");
    const [months, setMonths] = useState("");
    const [monthlyAmount, setMonthlyAmount] = useState("");
    const [totalAmount, setTotalAmount] = useState("");

    // Make a function that will calculate the monthly payments and total payment using the user inputs:
    const handleSubmit = (e) => {
        e.preventDefault();
        // If there is no content in either field, alert the user to enter numbers:
        if (!shopTotal || !months) {
            alert("Please enter a number for your total spend and how many months you wish to spread your payment over.");
            return;
        }

        // Declare variable for interest rate to be used in the calculation:
        const interest = 0.2;
        // Declare variables for the calculations of the monthly payments and the total payments. Set them to 2dp.
        const monthlyAmount = ((shopTotal * (1 + interest)) / months).toFixed(2);
        const totalAmount = (monthlyAmount * months).toFixed(2);
        // Save the above to the stateful variables:
        setMonthlyAmount(monthlyAmount);
        setTotalAmount(totalAmount);
    }

    /* 
    The component returns a div with an introduction to the calculator (an h1 and p element),
    then a form where the user inputs the amounts and the value is sent to the variables. 
    When the button is clicked, the function will calculate the amounts.
    When the payments have been calculated, they will be shown as the calculation div below the form.
    */
    return (
        <div className = "calcInterest">
            <div id = "interestPara">
                <h1>Interest Calculator</h1>
                <p>Our products are valuable items, and as such, they cost a lot. We don't want them to be out of the range of normal people, however.
                That's why you can pay for your SPACEWEAR in monthly installments. We offer an interest rate of 20%, and you can choose to pay over up to 18 months.</p>
            </div>

            <div id="calculator">
                <h2>Calculate your Monthly Payments:</h2>
                <form onSubmit={handleSubmit} className="calcForm">
                    <label>Enter the total cost of your shopping:
                    <br />
                    <input type = "number" value={shopTotal} min={0} onChange={(e) => setShopTotal(e.target.value) } />
                    <br />
                    </label>
                    <label>Enter the number of months you would like to pay over: 
                    <br />
                    <input type = "number" value={months} min={0} max={18} onChange={(e) => setMonths(e.target.value) } />
                    </label>
                    <br />
                    <button type = "submit">Submit</button> 
                </form>
                {monthlyAmount && (
                    <div id="calculation">
                        <hr />
                        <h3>Calculation:</h3>
                        <h4>Your monthly payments will be £{monthlyAmount}.</h4>
                        <h4>The total cost of your payments will be £{totalAmount}.</h4>
                    </div>
                )}
            </div>

        </div>
    )
}

// Export the component so it can be used by App.js.
export default Calculator;

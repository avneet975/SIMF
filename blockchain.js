function verifyTransaction() {

    const logs = document.getElementById("logs");

    const transactionID = Math.floor(Math.random() * 100000);

    logs.innerHTML += `<p>Transaction Verified | ID: ${transactionID}</p>`;
}

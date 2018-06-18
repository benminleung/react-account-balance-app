function Transaction(description, amount, type) {
    this.description = description;
    this.amount = amount;
    this.type = type;
    this.newDate = new Date();
    this.date = this.newDate.toLocaleDateString();
    this.time = this.newDate.toLocaleTimeString();
    this.id = Math.floor(Math.random()*100000);
    // this.id = (
    //     `${this.newDate.getDate()}` +
    //     (parseInt(this.newDate.getMonth()) + 1 < 10
    //         ? `0${this.newDate.getMonth()+1}`
    //         : `${this.newDate.gMonth()+1}`) +
    //     `${this.newDate.getFullYear()}` +
    // )
    // console.log(this);et
    // console.log(this.id);
}

function newDate (){

}

export default Transaction;
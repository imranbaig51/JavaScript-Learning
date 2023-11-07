class RailwayForm{
    submit(){
        alert(this.name+" "+"Your Form is Submited for train: "+this.trainno+ this.route)
    }
    cancel(){
      alert(this.name+" "+"This form is Cancelled for train: "+this.trainno+ this.route)
    }
    fill(givenname, trainno, routename){
      this.name = givenname
      this.trainno = trainno
      this.route = routename
    }
}
//Create a form for Khawar 
let Khawar = new RailwayForm()
//Fill the form with harry's details
Khawar.fill("Khawar", "Shalimar Express ", "Lahore to Karachi")

//Create a form for Khawar
let Haseeb = new RailwayForm()
//Fill the form with harry's detail
Haseeb.fill("Haseeb", "Subak Raftar ", "Lahore to Rawalpindi")

Khawar.submit()
Haseeb.submit()
Khawar.cancel()
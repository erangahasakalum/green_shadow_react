class VehicleModel{
    vehicleCode : string;
    licensePlateNumber : string;
    vehicleName : string;
    category : string;
    fualType : string;
    status : string;
    staffId : string;

  constructor(
    vehicleCode: string, 
    licensePlateNumber: string, 
    vehicleName: string, 
    category: string, 
    fualType: string, 
    status: string, 
    staffId: string
) {
    this.vehicleCode = vehicleCode
    this.licensePlateNumber = licensePlateNumber
    this.vehicleName = vehicleName
    this.category = category
    this.fualType = fualType
    this.status = status
    this.staffId = staffId
  }    

}

export default VehicleModel;
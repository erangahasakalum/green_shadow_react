class StaffModel{
    staffId:string;
    firstName:string;
    lastName:string;
    designation:string;
    gender:string;
    joinedDate:string;
    dob:string;
    addressLine_01:string;
    addressLine_02:string;
    addressLine_03:string;
    addressLine_04:string;
    addressLine_05:string;
    contactNumber:string;
    email:string;
    role:string;
    fieldList:string[];
    equipmentList:string[];
    vehicleList:string[];

  constructor(
    staffId: string, 
    firstName: string, 
    lastName: string, 
    designation: string, 
    gender: string, 
    joinedDate: string, 
    dob: string, 
    addressLine_01: string, 
    addressLine_02: string, 
    addressLine_03: string, 
    addressLine_04: string, 
    addressLine_05: string, 
    contactNumber: string, 
    email: string, 
    role: string, 
    fieldList: string[], 
    equipmentList: string[], 
    vehicleList: string[]
) {
    this.staffId = staffId
    this.firstName = firstName
    this.lastName = lastName
    this.designation = designation
    this.gender = gender
    this.joinedDate = joinedDate
    this.dob = dob
    this.addressLine_01 = addressLine_01
    this.addressLine_02 = addressLine_02
    this.addressLine_03 = addressLine_03
    this.addressLine_04 = addressLine_04
    this.addressLine_05 = addressLine_05
    this.contactNumber = contactNumber
    this.email = email
    this.role = role
    this.fieldList = fieldList
    this.equipmentList = equipmentList
    this.vehicleList = vehicleList
  }    
}
export default StaffModel;
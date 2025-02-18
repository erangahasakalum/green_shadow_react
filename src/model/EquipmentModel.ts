class EquipmentModel{
    equipmentId : string;
    equipmentName : string;
    type : string;
    status : string;
    avalibleCount : string;
    staffList : string[];
    fieldList : string[];


    constructor(equipmentId:string,equipmentName:string,type:string,status:string,avalibleCount:string,staffList:string[],fieldList:string[]){
        this.equipmentId = equipmentId;
        this.equipmentName = equipmentName;
        this.type = type;
        this.status = status;
        this.avalibleCount = avalibleCount;
        this.staffList = staffList;
        this.fieldList = fieldList;
    }
    
    
}

export default EquipmentModel;
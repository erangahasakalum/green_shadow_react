class LogsModel{
    logId: string;
    logDate: string;
    logDescription: string;
    logType: string;
    observeImage :File | null
    fieldsList : string[]
    cropList:string[]
    staffList:string[]

    constructor(logId:string,logDate:string,logDestription:string,logType:string,observeImage:File|null,fieldList:string[],cropList:string[],staffList:string[]){
        this.logId = logId;
        this.logDate = logDate;
        this.logDescription = logDestription;
        this.logType = logType;
        this.observeImage = observeImage;
        this.fieldsList = fieldList;
        this.cropList = cropList;
        this.staffList = staffList;
    }
}

export default LogsModel;
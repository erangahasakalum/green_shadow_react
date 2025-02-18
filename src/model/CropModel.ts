class CropModel{
    cropId :string;
    cropName:string;
    scientificName:string;
    cropCategory:string;
    cropSeason:string;
    fieldList:string[];
    cropImage:File|null;
    
    constructor(cropId:string,cropName:string,scientificName:string,cropCategory:string,cropSeason:string,fieldList:string[],cropImage:File|null){
        this.cropId = cropId;
        this.cropName = cropName;
        this.scientificName = scientificName;
        this.cropCategory = cropCategory;
        this.cropSeason = cropSeason;
        this.fieldList = fieldList;
        this.cropImage = cropImage;
    }
    
}

export default CropModel;
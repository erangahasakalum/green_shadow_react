export class CropModel{
    cropCode:string;
    scientificName :string;
    cropCategory : string;
    cropSeason : string;
    cropFields : string[];
    cropImage : string;

    constructor(cropCode:string,scientifcName:string,cropCategory:string,cropSeason:string,cropFields:string[],cropImage:string){
        this.cropCode = cropCode;
        this.scientificName = scientifcName;
        this.cropCategory = cropCategory;
        this.cropSeason = cropSeason;
        this.cropFields =cropFields;
        this.cropImage = cropImage;
    }

}